import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { getSupabaseAdmin } from '@/lib/supabase';
import { getPostHogClient } from '@/lib/posthog-server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const confirmationHtml = `<!DOCTYPE html>
<html lang="sr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FDFCFA;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;background:#E8621A;border-radius:14px;padding:10px 20px;">
        <span style="color:white;font-weight:800;font-size:18px;letter-spacing:-0.02em;">iskra</span>
      </div>
    </div>
    <h1 style="font-size:26px;font-weight:800;color:#1A1A1A;letter-spacing:-0.025em;margin:0 0 8px;text-align:center;">
      Na listi si.
    </h1>
    <p style="font-size:15px;color:#999;text-align:center;margin:0 0 32px;">
      Hvala što si se prijavio na Early Access listu.
    </p>
    <div style="background:#1A1A1A;border-radius:20px;padding:28px 24px;text-align:center;margin-bottom:32px;">
      <h2 style="color:white;font-size:20px;font-weight:800;letter-spacing:-0.02em;margin:0 0 10px;">
        Iskra dolazi uskoro
      </h2>
      <p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.6;margin:0;">
        Javljamo ti se prvom kada beta bude spremna — uz najpovoljniju početnu ponudu pre javnog lansiranja.
      </p>
    </div>
    <p style="font-size:12px;color:#BBBBBB;text-align:center;line-height:1.7;margin:0;">
      Dobio si ovaj email jer si se prijavio na Iskra listu čekanja na iskraclub.com.<br>
      Nećemo te spamovati — samo obaveštenje kad app izađe.
    </p>
  </div>
</body>
</html>`;

export async function POST(req: NextRequest) {
  try {
    const { email, location = 'hero', distinct_id } = await req.json();

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    const distinctId = distinct_id || email;

    // 1. Supabase upsert into the shared quiz_submissions table (email only — landing signup).
    //    Graceful no-op if keys are not configured.
    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase
        .from('quiz_submissions')
        .upsert({ email }, { onConflict: 'email' });
      if (error) console.error('[waitlist] supabase:', error.message);
    } else {
      console.log('[waitlist] (pre-launch no-op) store:', email, location);
    }

    // 2. Resend confirmation — only if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL ?? 'iskra@iskraclub.com',
          to: email,
          subject: 'Na listi si — Iskra stiže uskoro',
          html: confirmationHtml,
        });
      } catch (e) {
        console.error('[waitlist] resend:', e);
      }
    }

    // 3. PostHog server capture — only if configured
    const ph = getPostHogClient();
    if (ph) {
      try {
        ph.identify({ distinctId, properties: { email } });
        ph.capture({
          distinctId,
          event: 'waitlist_submitted',
          properties: { email, location, source: 'landing' },
        });
        await ph.flush();
      } catch (e) {
        console.error('[waitlist] posthog:', e);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[waitlist] error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
