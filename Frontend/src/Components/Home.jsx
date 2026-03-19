import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Img from "../assets/banner-image.png"
import {
  BarChart3, TrendingUp, Zap, PieChart,
  CheckCircle2, ArrowRight, ShieldCheck, Award
} from 'lucide-react';

/* ─── Animated Grid Background ─────────────────────────── */
function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let raf;

    const GRID = 60;
    const nodes = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initNodes = () => {
      nodes.length = 0;
      const cols = Math.ceil(canvas.width  / GRID) + 1;
      const rows = Math.ceil(canvas.height / GRID) + 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.12) {
            nodes.push({
              x:     c * GRID,
              y:     r * GRID,
              alpha: Math.random(),
              speed: 0.005 + Math.random() * 0.015,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Accent RGBA from CSS var
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#FACC15';
      const gridColor = getComputedStyle(document.documentElement).getPropertyValue('--grid-color').trim() || 'rgba(255,255,255,0.04)';

      // Draw grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth   = 1;
      for (let x = 0; x < canvas.width; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Draw animated nodes
      nodes.forEach(n => {
        const a = (Math.sin(t * n.speed + n.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${accent}${Math.round(a * 200).toString(16).padStart(2,'0')}`;
        ctx.fill();

        // Glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, 5 + a * 8, 0, Math.PI * 2);
        ctx.strokeStyle = `${accent}${Math.round(a * 80).toString(16).padStart(2,'0')}`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw a few random connecting lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < GRID * 2.5) {
            const opacity = (1 - dist / (GRID * 2.5)) * 0.25;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `${accent}${Math.round(opacity * 255).toString(16).padStart(2,'0')}`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => { resize(); initNodes(); });
    ro.observe(canvas.parentElement);

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        opacity: 0.9,
        pointerEvents: 'none',
      }}
    />
  );
}

/* ─── Text Slip (mask reveal) ───────────────────────────── */
function TextSlip({ children, delay = 0, as: Tag = 'span', style = {} }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden', ...style }}>
      <motion.span
        display="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
        style={{ display: 'block' }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ─── Counter ───────────────────────────────────────────── */
function Counter({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
}

/* ─── Marquee Row ───────────────────────────────────────── */
function Marquee({ items, dir = 'ltr', speed = '35s' }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div
        className={dir === 'ltr' ? 'marquee-track-ltr' : 'marquee-track-rtl'}
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{
            padding: '20px 48px',
            whiteSpace: 'nowrap',
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: i % 2 === 0 ? 'var(--text-muted)' : 'var(--accent)',
            display: 'flex', alignItems: 'center', gap: '48px',
          }}>
            {item} <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Service Card ──────────────────────────────────────── */
function ServiceCard({ icon: Icon, title, description, number, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="card"
      style={{ padding: '44px 40px', position: 'relative', overflow: 'hidden' }}
      data-cursor="hover"
    >
      <div style={{
        position: 'absolute', top: '20px', right: '24px',
        fontFamily: 'Outfit, sans-serif', fontSize: '80px', fontWeight: 900,
        color: 'var(--text-primary)', opacity: 0.03, lineHeight: 1, userSelect: 'none',
      }}>
        {number}
      </div>
      <div style={{
        width: '48px', height: '48px', borderRadius: '14px',
        background: 'var(--gold-muted)', border: '1px solid var(--border-accent)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--accent)', marginBottom: '24px',
      }}>
        <Icon size={22} />
      </div>
      <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '14px' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '15px', marginBottom: '28px' }}>{description}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontSize: '13px', fontWeight: 700 }}>
        Explore <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}

/* ─── Main Home Component ───────────────────────────────── */
export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 180]);
  const y2 = useTransform(scrollY, [0, 600], [0, -100]);

  return (
    <div style={{ overflowX: 'hidden', background: 'var(--bg-primary)' }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{
        position: 'relative', minHeight: '95vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '60px 24px 100px', overflow: 'hidden',
      }}>
        {/* Animated Grid Canvas */}
        <GridBackground />

        {/* Soft glow orbs */}
        <motion.div style={{
          position: 'absolute', top: '15%', right: '8%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          opacity: 0.06, filter: 'blur(80px)', pointerEvents: 'none', y: y1,
        }} />
        <motion.div style={{
          position: 'absolute', bottom: '10%', left: '3%',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          opacity: 0.04, filter: 'blur(60px)', pointerEvents: 'none', y: y2,
        }} className='flex flex-col md:flex-row justify-evenly items-center' />

        <div style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 1 }} >
          {/* Label */}
          <div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label ticker-track2" style={{ marginBottom: '32px', display: 'block',fontSize:"21px" }}>
              SEBI Reg. No. INH000022792 · BSE Enlistment No. 6643
            </span>
          </div>

          {/* Main Headline – Text Slip */}
          <h1 style={{ fontSize: 'clamp(44px, 9vw, 96px)', lineHeight: 1.0, marginBottom: '40px' }}>
            <TextSlip delay={0.1}>Research-Driven</TextSlip>
            <TextSlip delay={0.25} style={{ color: 'var(--accent)' }}>Trading Intelligence</TextSlip>
            <TextSlip delay={0.4} style={{ fontSize: '0.65em', fontWeight: 300, color: 'var(--text-secondary)', marginTop: '8px' }}>
              For the Modern Indian Investor
            </TextSlip>
          </h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.8 }}
            style={{ fontSize: 'clamp(15px, 1.8vw, 20px)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto 52px' }}
          >
            Empowering traders and investors with institutional-grade equity research, F&O strategies, and data-backed market analysis — fully regulated and SEBI compliant.
          </motion.p>

        </div>
        <img src={Img} className='w-full hidden md:block md:w-xl'/>
      </section>

      {/* ── LIVE TICKER ──────────────────────────────── */}
      <div style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        overflow: 'hidden', padding: '14px 0',
      }}>
        <div className="ticker-track">
          {[1,2].flatMap(() => [
            'NIFTY 50 · 22,453 ▲0.45%', 'SENSEX · 73,903 ▲0.38%',
            'BANK NIFTY · 47,286 ▼0.12%', 'GOLD · ₹65,420 ▲1.20%',
            'USD/INR · 82.84 ▲0.02%', 'MIDCAP 100 · 43,812 ▲0.61%',
          ]).map((t, i) => (
            <span key={i} style={{
              padding: '0 36px', fontSize: '11px', fontWeight: 700,
              letterSpacing: '0.06em', whiteSpace: 'nowrap',
              color: t.includes('▼') ? '#F87171' : 'var(--text-muted)',
              fontFamily: 'Outfit, sans-serif',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────── */}
      <section style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
            {[
              { label: 'Active Clients',    target: 10000, suffix: '+' },
              { label: 'Years of Research', target: 5,     suffix: '+' },
              { label: '% SEBI Verified',   target: 100,   suffix: '%' },
              { label: 'Avg Quarterly Return', target: 24, suffix: '%', prefix: '~' },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                style={{
                  padding: '60px 40px', textAlign: 'center',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
                  <Counter target={s.target} suffix={s.suffix} prefix={s.prefix || ''} />
                </div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '12px' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE #1 ───────────────────────────────── */}
      <Marquee items={['DATA', 'DISCIPLINE', 'DELIVERY', 'SEBI REGISTERED', 'BSE LISTED', 'RESEARCH FIRST']} dir="ltr" speed="40s" />

      {/* ── SERVICES ─────────────────────────────────── */}
      <section style={{ padding: '140px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="section-label">Our Capabilities</span>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', marginTop: '16px', maxWidth: '500px' }}>
                Precision-Engineered Market Solutions
              </h2>
            </div>
            <button className="btn-ghost" data-cursor="hover">View All Services</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            <ServiceCard icon={BarChart3}  number="01" title="Stock Research"    delay={0.1} description="Deep-dive fundamental analysis into mid and large-cap Indian equities, with defined entry/exit levels." />
            <ServiceCard icon={TrendingUp} number="02" title="Equity Advisory"   delay={0.2} description="Tailored portfolio construction designed to outperform benchmarks while managing downside risk." />
            <ServiceCard icon={Zap}        number="03" title="F&O Strategies"    delay={0.3} description="Algorithmic, data-driven derivative plays focused on capital protection and high-probability setups." />
            <ServiceCard icon={PieChart}   number="04" title="Market Analysis"   delay={0.4} description="Pre-market and post-market intelligence covering global macro trends and domestic micro factors." />
          </div>
        </div>
      </section>

      {/* ── MARQUEE #2 ───────────────────────────────── */}
      <Marquee items={['EQUITY', 'FUTURES', 'OPTIONS', 'DERIVATIVES', 'IPO RESEARCH', 'SECTORAL ROTATION']} dir="rtl" speed="30s" />

      {/* ── PHILOSOPHY ───────────────────────────────── */}
      <section style={{ padding: '160px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">The Investa-X Philosophy</span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2 }}
            style={{ fontSize: 'clamp(28px, 5vw, 64px)', marginTop: '32px', lineHeight: 1.15, maxWidth: '900px', margin: '32px auto 0' }}
          >
            "Markets reward patience, <span style={{ color: 'var(--accent)' }}>discipline</span>, and the investors who refuse to guess — choosing instead to{' '}
            <span style={{ color: 'var(--accent)' }}>research</span>."
          </motion.h2>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────── */}
      <section style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="section-label">The Edge</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', margin: '20px 0 32px' }}>Institutional Trust, Retail Accessibility</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '16px', marginBottom: '44px' }}>
              We bridge the gap between complex institutional data and actionable retail insights. Every call is backed by a proprietary research framework that has been refined over 5+ years.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {[
                { title: 'SEBI Regulated', desc: 'Fully transparent, conflict-free advisory under regulatory oversight.' },
                { title: 'Data Integrity',  desc: 'Zero-rumour methodology. Every recommendation is research-verified.' },
                { title: 'Risk First',       desc: 'Capital preservation is prioritised before profit maximisation.' },
                { title: 'Track Record',     desc: 'Documented research history available for independent review.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', gap: '16px' }}>
                  <CheckCircle2 color="var(--accent)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>{item.title}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { icon: ShieldCheck, label: 'SEBI Registered',  val: '2019' },
              { icon: Award,       label: 'BSE Enlisted',      val: 'No. 6643' },
              { icon: TrendingUp,  label: 'Avg Annual Return', val: '~26%' },
              { icon: BarChart3,   label: 'Reports Published', val: '5,000+' },
            ].map(({ icon: Icon, label, val }, i) => (
              <motion.div key={i} className="card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: '32px 24px', textAlign: 'center' }}>
                <Icon size={28} color="var(--accent)" style={{ marginBottom: '12px' }} />
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '22px', fontWeight: 800 }}>{val}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '6px' }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* ── MARQUEE #3 ───────────────────────────────── */}
      <Marquee items={['10,000+ CLIENTS', 'SEBI REGISTERED', '5+ YEARS', 'BSE ENLISTED', 'PROVEN METHODS', 'ZERO CONFLICT']} dir="ltr" speed="25s" />

      {/* ── PERFORMANCE JOURNAL ──────────────────────── */}
      <section style={{ padding: '140px 24px', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '60px' }}>
            <div>
              <span className="section-label">Latest Research</span>
              <h2 style={{ fontSize: '42px', marginTop: '16px' }}>Performance Journal</h2>
            </div>
            <button className="btn-ghost" data-cursor="hover">All Research</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              { sector: 'Equity',      call: 'BUY',  stock: 'RELIANCE INDUSTRIES', entry: '₹2,840', target: '₹3,100', ret: '+9.1%',  date: 'Mar 2025' },
              { sector: 'F&O',         call: 'SELL', stock: 'NIFTY PUT 22000 PE',  entry: '₹212',  target: '₹340',   ret: '+60.3%', date: 'Feb 2025' },
              { sector: 'Midcap',      call: 'BUY',  stock: 'TATA CHEMICALS',       entry: '₹1,020', target: '₹1,210', ret: '+18.6%', date: 'Jan 2025' },
              { sector: 'Large Cap',   call: 'BUY',  stock: 'HDFC BANK',             entry: '₹1,540', target: '₹1,750', ret: '+13.6%', date: 'Dec 2024' },
            ].map((row, i) => (
              <motion.div key={i}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                data-cursor="hover"
                style={{
                  display: 'grid', gridTemplateColumns: '120px 60px 1fr 100px 100px 80px 90px',
                  gap: '16px', alignItems: 'center',
                  padding: '22px 28px',
                  borderBottom: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  transition: 'background 0.2s',
                }}
                whileHover={{ background: 'var(--bg-card-hover)' }}
              >
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{row.sector}</span>
                <span style={{
                  fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '4px', textAlign: 'center',
                  background: row.call === 'BUY' ? 'rgba(16,185,129,0.12)' : 'rgba(248,113,113,0.12)',
                  color: row.call === 'BUY' ? '#10B981' : '#F87171',
                }}>{row.call}</span>
                <span style={{ fontWeight: 700, fontSize: '15px' }}>{row.stock}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Entry {row.entry}</span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>T. {row.target}</span>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#10B981' }}>{row.ret}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'right' }}>{row.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  

    </div>
  );
}