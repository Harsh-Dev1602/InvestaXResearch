import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldAlert, ChevronDown, Zap, Shield, Crown, ArrowRight, Star } from 'lucide-react';

/* ─── Animation Helper ─────────────────────────── */
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

const Pricing = () => {
  // State for dynamic pricing selection
  const [selections, setSelections] = useState({
    normal: { segment: 'Equity Cash', duration: 'Monthly' },
    advanced: { segment: 'F&O Special', duration: 'Quarterly' }
  });

  const styles = {
    container: {
      background: 'var(--bg-primary)',
      color: '#ffffff',
      paddingBottom: '120px',
      overflowX: 'hidden'
    },
    hero: {
      padding: '60px 24px 100px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, rgba(255, 204, 0, 0.03) 0%, transparent 70%)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '30px',
      maxWidth: '1300px',
      margin: '-60px auto 0',
      padding: '0 24px'
    },
    card: {
      background: 'rgba(255,255,255,0.02)',
      padding: '48px 32px',
      borderRadius: '32px',
      border: '1px solid #cccc',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    },
    dropdown: {
      background: 'rgba(255,255,255,0.03)',
      padding: '14px 18px',
      borderRadius: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '13px',
      color: '#fff',
      marginTop: '12px',
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.08)',
      fontWeight: 600
    }
  };

  return (
    <div style={styles.container}>
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          <Star size={14} color="var(--accent)" fill="var(--accent)" />
          <span style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Institutional Access
          </span>
        </motion.div>

        <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-3px', lineHeight: 0.9 }}>
          <TextSlip delay={0.1}>Choose Your</TextSlip>
          <TextSlip delay={0.25} style={{ color: 'var(--accent)' }}>Trading Edge</TextSlip>
        </h1>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '18px', lineHeight: 1.6 }}>
          Transparent pricing for data-driven research. No hidden costs.
          SEBI-compliant service structure.
        </p>
      </section>

      {/* ── PRICING GRID ─────────────────────────────── */}
      <div style={styles.grid}>

        {/* NORMAL SERVICE */}
        <motion.div whileHover={{ y: -12 }} className="card" style={styles.card}>
          <Shield size={32} color="var(--accent)" style={{ marginBottom: '24px' }} />
          <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px' }}>Normal Service</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px', lineHeight: 1.5 }}>Essential research for equity and commodity segments.</p>

          <div style={{ flexGrow: 1, marginBottom: '32px' }}>
            {["Daily Cash recommendations", "Short-term positional (2-5/wk)", "Exit & Entry alerts", "Weekly Market Outlook"].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '14px', color: 'black', alignItems: 'center' }}>
                <Check size={16} color="var(--accent)" /> {f}
              </div>
            ))}
          </div>

          <button style={{ border: '2px solid var(--accent)', color: 'var(--accent)', background: 'transparent', padding: '18px', borderRadius: '16px', fontWeight: 800, marginTop: '32px', cursor: 'pointer' }}>
            GET STARTED
          </button>
        </motion.div>

        {/* ADVANCED SERVICE */}
        <motion.div whileHover={{ y: -12 }} style={{ ...styles.card, border: '1px solid var(--accent)', background: 'rgba(255,204,0,0.02)' }}>
          <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--accent)', fontSize: '10px', fontWeight: '900', padding: '6px 14px', borderRadius: '40px' }}>MOST ACTIVE</div>
          <Zap size={32} color="var(--accent)" style={{ marginBottom: '24px' }} />
          <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px' }}>Advanced Plus</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px', lineHeight: 1.5 }}>For high-frequency traders & derivative specialists.</p>

          <div style={{ flexGrow: 1, marginBottom: '32px' }}>
            <p style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 800, marginBottom: '16px', letterSpacing: '1px' }}>INCLUDES ALL NORMAL FEATURES +</p>
            {["Advanced F&O strategies", "Intraday Index Analysis", "Priority Telegram Access", "Sectoral Rotation Reports"].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '14px', color:'black', alignItems: 'center', fontWeight: 500 }}>
                <Check size={16} color="var(--accent)" /> {f}
              </div>
            ))}
          </div>

          <button style={{ background: 'var(--accent)', color: '#000', border: 'none', padding: '18px', borderRadius: '16px', fontWeight: 800, cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '8px' }}>
            SUBSCRIBE TO ADVANCED
          </button>
        </motion.div>

        {/* HNI SERVICE */}
        <motion.div whileHover={{ y: -12 }} style={styles.card}>
          <Crown size={32} color="var(--accent)" style={{ marginBottom: '24px' }} />
          <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px' }}>Institutional/HNI</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '32px', lineHeight: 1.5 }}>Bespoke research for high-capital deployment.</p>

          <div style={{ flexGrow: 1 }}>
            {["1-on-1 Consultation", "Portfolio Risk Assessment", "Custom Strike Selection", "Dedicated Research Manager"].map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '14px', color:"black", alignItems: 'center' }}>
                <Check size={16} color="var(--accent)" /> {f}
              </div>
            ))}
          </div>

          <button style={{ border: '2px solid var(--accent)', color: 'var(--accent)', background: 'transparent', padding: '18px', borderRadius: '16px', fontWeight: 800, marginTop: '32px', cursor: 'pointer' }}>
            ENQUIRE FOR HNI
          </button>
        </motion.div>

      </div>

      {/* ── RISK DISCLOSURE ──────────────────────────── */}
      <section style={{ maxWidth: '1100px', margin: '100px auto 0', padding: '0 24px' }}>
        <div style={{ padding: '40px', borderRadius: '24px', border: '1px solid #cccc' }}>
          <div style={{ display: 'flex', gap: '12px', color: 'var(--accent)', marginBottom: '20px' }}>
            <ShieldAlert size={20} />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
              SEBI Compliance & Disclosure
            </span>
          </div>
          <div style={{ color: 'black', fontSize: '13px', lineHeight: 1.8, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
            <p>• Registration: Pavan Choubey, SEBI Reg No: <strong>INH000022792</strong>. Registration does not guarantee returns.</p>
            <p>• Market Risk: Trading involves substantial risk. We do not provide profit sharing or personal account handling.</p>
            <p>• Refunds: Strictly on a <strong>pro-rata basis</strong>. Read our policy before subscribing.</p>
            <p>• Advisory: We are Research Analysts, not Investment Advisors. Recommendations are based on technical analysis.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;