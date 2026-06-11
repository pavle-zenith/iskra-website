import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { getSupabaseAdmin } from '@/lib/supabase';
import { getPostHogClient } from '@/lib/posthog-server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const { email, location = 'hero', distinct_id } = await req.json();

    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    const distinctId = distinct_id || email;

    // 1. Supabase — only if configured (graceful pre-launch no-op)
    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error } = await supabase
        .from('quiz_submissions')
        .upsert({ email, source: `landing_${location}` }, { onConflict: 'email' });
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
          html: '<p>Na listi si. Javljamo se čim Early Access bude spreman.</p><p>— Iskra</p>',
        });
      } catch (e) {
        console.error('[waitlist] resend:', e);
      }
    }

    // 3. PostHog server capture — only if configured
    const ph = getPostHogClient();
    if (ph) {
      try {
        ph.capture({ distinctId, event: 'waitlist_submitted', properties: { email, location, source: 'landing' } });
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
