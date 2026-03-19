import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, LineChart, Award, Users2, Layers } from 'lucide-react';
import HandshakeAnimation from './HandshakeAnimation';

/* ─── Text Slip ─────────────────────────────────────────── */
function TextSlip({ children, delay = 0, style = {} }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden', ...style }}>
      <motion.span
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

/* ─── Timeline Item ─────────────────────────────────────── */
function TimelineItem({ year, title, description, side }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      width: '100%',
      marginBottom: '64px',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: '50%', top: '12px',
        transform: 'translateX(-50%)',
        width: '14px', height: '14px', borderRadius: '50%',
        background: 'var(--accent)', border: '3px solid var(--bg-secondary)', zIndex: 2,
      }} />
      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="card"
        style={{ width: '44%', padding: '32px', textAlign: side === 'left' ? 'right' : 'left' }}
        data-cursor="hover"
      >
        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '32px', fontWeight: 900, color: 'var(--accent)', marginBottom: '8px' }}>{year}</div>
        <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{title}</h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{description}</p>
      </motion.div>
    </div>
  );
}

/* ─── Value Card ────────────────────────────────────────── */
function ValueCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{ padding: '44px 32px', textAlign: 'center', borderRight: '1px solid var(--border)' }}
      data-cursor="hover"
    >
      <div style={{ color: 'var(--accent)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <Icon size={32} />
      </div>
      <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '14px' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>{description}</p>
    </motion.div>
  );
}

/* ─── Main About Page ───────────────────────────────────── */
export default function About() {
  return (
    <div style={{ background: 'var(--bg-primary)', overflowX: 'hidden' }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: '130px 24px 100px', textAlign: 'center' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label" style={{ marginBottom: '32px', display: 'block' }}>Our Story</span>
          </motion.div>
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 80px)', lineHeight: 1.0, marginBottom: '36px' }}>
            <TextSlip delay={0.1}>The Vanguard of</TextSlip>
            <TextSlip delay={0.25} style={{ color: 'var(--accent)' }}>Financial Research</TextSlip>
          </h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.8 }}
          >
            Investa-X was founded with a single mission: to provide institutional-grade market intelligence to the modern Indian investor — fully regulated, fully transparent.
          </motion.p>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[
            { icon: Target, color: 'var(--accent)', title: 'Our Mission', text: 'To democratize professional equity research by making it accessible, transparent, and actionable for retail traders and long-term investors across India.' },
            { icon: Eye,    color: 'var(--accent)', title: 'Our Vision',  text: "To become India's premier regulated advisory platform, setting the gold standard for integrity and precision-driven wealth creation." },
          ].map(({ icon: Icon, title, text }, i) => (
            <motion.div key={i} className="card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              style={{ padding: '50px' }} data-cursor="hover">
              <Icon size={40} color="var(--accent)" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '20px' }}>{title}</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────── */}
      <section style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Regulatory Credentials</span>
          <h2 style={{ fontSize: '42px', fontWeight: 700, marginTop: '16px', marginBottom: '64px' }}>Certified Excellence</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { label: 'SEBI Registered Research Analyst', value: 'INH000022792' },
              { label: 'BSE Enlistment Number',            value: '6643' },
              { label: 'Registered Since',                 value: '2019' },
            ].map((b, i) => (
              <motion.div key={i} className="card"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ padding: '40px 56px', flex: '1 1 280px', maxWidth: '360px', border: '1px solid var(--border-accent)' }}
                data-cursor="hover">
                <ShieldCheck size={32} color="var(--accent)" style={{ margin: '0 auto 16px' }} />
                <div className="section-label" style={{ marginBottom: '8px' }}>{b.label}</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: 900 }}>{b.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ──────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          <ValueCard icon={Award}   title="Integrity First" description="Our loyalty is to our clients' wealth. We maintain strict non-conflict policies in all recommendations." />
          <ValueCard icon={Users2}  title="Client Success"  description="We measure our success by the performance of the portfolios we help build, not by our revenue." />
          <ValueCard icon={LineChart} title="Data Rigor"    description="Every advisory is vetted against multiple technical and fundamental checkpoints before being published." />
          <ValueCard icon={Layers}  title="Transparency"    description="Past records, compliance disclosures, and research methodology are always open for independent review." />
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────── */}
      <section style={{ padding: '50px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <span className="section-label">The Journey</span>
            <h2 style={{ fontSize: '48px', fontWeight: 700, marginTop: '20px' }}>Major Milestones</h2>
          </div>
          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, var(--border-accent), var(--border-accent), transparent)',
              transform: 'translateX(-50%)',
            }} />
            <TimelineItem year="2019" title="Foundation"          description="Investa-X started as a private research group focused on algorithmic equity strategies." side="left" />
            <TimelineItem year="2021" title="SEBI Registration"   description="Formally registered as a Research Analyst (INH000022792), bringing regulated precision to our growing base." side="right" />
            <TimelineItem year="2023" title="Intelligence Hub"    description="Launched our proprietary data dashboard integrating real-time sentiment with fundamental analysis." side="left" />
            <TimelineItem year="2024" title="10,000+ Clients"     description="Reached a landmark milestone of trust, serving over ten thousand investors and traders across India." side="right" />
          </div>
        </div>
      </section>
    </div>
  );
}