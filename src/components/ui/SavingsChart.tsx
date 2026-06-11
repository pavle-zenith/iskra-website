'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { track } from '@/lib/analytics';
import { CHART_METRICS, CHART_LABELS } from '@/lib/sections-data';

type MetricKey = keyof typeof CHART_METRICS;

function fmt(n: number) {
  return Math.round(n).toLocaleString('sr-RS').replace(/,/g, '.');
}

function hexToRgba(hex: string, a: number) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const PILL_META: { key: MetricKey; label: string; dotBg: string; stroke: string; icon: React.ReactNode }[] = [
  {
    key: 'money',
    label: 'Ušteđeni novac',
    dotBg: '#E6F2E6',
    stroke: '#3A7A3A',
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      </>
    ),
  },
  {
    key: 'cig',
    label: 'Cigarete manje',
    dotBg: '#FBE9E7',
    stroke: '#C24A43',
    icon: (
      <>
        <rect x="2.5" y="10" width="13" height="4" rx="1.2" />
        <line x1="3" y1="6" x2="19" y2="17.5" />
      </>
    ),
  },
  {
    key: 'time',
    label: 'Vraćeno vreme',
    dotBg: '#F0EDF8',
    stroke: '#6B52A8',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

const INITIAL = [...CHART_METRICS.money.v];

export default function SavingsChart() {
  const [metric, setMetric] = useState<MetricKey>('money');
  // Start at the real money values so the chart is never blank (SSR / no-JS / pre-scroll).
  const [values, setValues] = useState<number[]>(INITIAL);
  const chartRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const raf = useRef<number | null>(null);
  const current = useRef<number[]>([...INITIAL]);

  const animateTo = useCallback((target: number[]) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const from = current.current.slice();
    const dur = 700;
    let t0: number | null = null;
    const tick = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      const next = from.map((f, i) => f + (target[i] - f) * e);
      setValues(next);
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        current.current = target.slice();
      }
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  function selectMetric(key: MetricKey) {
    setMetric(key);
    track.metricSwitched(key);
    animateTo([...CHART_METRICS[key].v]);
  }

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // keep the real values, skip the count-up
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            // reset to 0 then count up to the money values
            current.current = [0, 0, 0, 0];
            setValues([0, 0, 0, 0]);
            animateTo([...CHART_METRICS.money.v]);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animateTo]);

  const m = CHART_METRICS[metric];

  return (
    <div className="chart-wrap">
      <Reveal className="chart-copy" trackSection="savings">
        <span className="eyebrow">Tvoj napredak</span>
        <h2 className="h-sec" style={{ marginTop: 20 }}>
          Gledaj kako
          <br />
          sve raste
        </h2>
        <p className="lead" style={{ marginTop: 18 }}>
          Iskra pretvara apstinenciju u nešto opipljivo. Što duže izdržiš, to više raste — i ti to
          vidiš svaki dan.
        </p>
        <div className="metric-pills">
          {PILL_META.map((p) => (
            <button
              key={p.key}
              className={`mp${metric === p.key ? ' active' : ''}`}
              data-m={p.key}
              onClick={() => selectMetric(p.key)}
            >
              <span className="d" style={{ background: p.dotBg }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {p.icon}
                </svg>
              </span>
              {p.label}
              <svg className="ar" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          ))}
        </div>
        <p className="note">{m.note}</p>
      </Reveal>

      <div className="chart in" id="chart" ref={chartRef}>
        {CHART_LABELS.map((label, i) => {
          const peak = i === 3;
          return (
            <div className={`col${peak ? ' peak' : ''}`} key={label}>
              <div
                className={`bar${peak ? ' peak' : ''}`}
                style={
                  peak
                    ? { background: m.grad, boxShadow: `0 14px 34px ${hexToRgba(m.col, 0.34)}` }
                    : { boxShadow: `0 10px 24px ${hexToRgba(m.col, 0.18)}` }
                }
              >
                <div className="v">
                  <b className="num">{fmt(values[i])}</b>
                  <small>{m.u}</small>
                </div>
              </div>
              <div className="xl" style={peak ? { color: m.deep } : undefined}>
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
