import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, AlertTriangle, Scale, CreditCard, 
  ChevronRight, ExternalLink, ShieldAlert, Fingerprint 
} from 'lucide-react';

const MITC = () => {
  const styles = {
    container: {
      background: 'var(--bg-primary)',
      paddingBottom: '100px',
      overflowX: 'hidden'
    },
    hero: {
      padding: '50px 24px 80px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, rgba(255, 204, 0, 0.05) 0%, transparent 70%)',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255, 204, 0, 0.1)',
      border: '1px solid rgba(255, 204, 0, 0.2)',
      padding: '8px 16px',
      borderRadius: '100px',
      color: 'var(--accent)',
      fontSize: '11px',
      fontWeight: '800',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '24px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
      gap: '24px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.02)',
      padding: '40px',
      borderRadius: '24px',
      border: '1px solid #cccc',
      height: '100%',
      position: 'relative',
      transition: 'all 0.4s ease'
    },
    linkButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: 'var(--accent)',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '700',
      marginTop: '16px'
    }
  };

  const coreTerms = [
    {
      id: "01",
      icon: <Scale size={24} />,
      title: "No Execution Power",
      desc: "As a Research Analyst (RA), we strictly cannot execute trades on your behalf. We do not manage personal accounts or handle client funds for investment purposes."
    },
    {
      id: "02",
      icon: <CreditCard size={24} />,
      title: "Compliant Fee Structure",
      desc: "Fees are capped at ₹1,51,000/- per family/annum. Payments must be made via authorized digital channels. Cash transactions are strictly prohibited and illegal."
    },
    {
      id: "03",
      icon: <ShieldCheck size={24} />,
      title: "No Performance Guarantee",
      desc: "Assured or fixed returns are strictly against SEBI regulations. All market recommendations are based on research and subject to inherent market volatility."
    }
  ];

  return (
    <div style={styles.container}>
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} style={styles.badge}>
          <Fingerprint size={14} /> Official RA Protocol
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-3px', lineHeight: 1 }}
        >
          Most Important <span style={{ color: 'var(--accent)' }}>Terms</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}
        >
          SEBI-mandated guidelines to ensure transparency between the Research Analyst and the Investor.
        </motion.p>
      </section>

      {/* ── CORE TERMS GRID ───────────────────────────── */}
      <div style={styles.grid}>
        {coreTerms.map((term, i) => (
          <motion.div 
            key={term.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={styles.card}
          >
            <div style={{ color: 'var(--accent)', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ padding: '12px', background: 'rgba(255,204,0,0.1)', borderRadius: '12px' }}>{term.icon}</div>
              <span style={{ fontSize: '32px', fontWeight: 900, opacity: 0.1 }}>{term.id}</span>
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>{term.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>{term.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ── SCAM ALERT BOX ────────────────────────────── */}
      <section style={{ padding: '100px 24px' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            background: 'linear-gradient(to right, rgba(255, 68, 68, 0.1), transparent)', 
            padding: '60px', 
            borderRadius: '32px', 
            border: '1px solid rgba(255, 68, 68, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          <div>
            <h3 style={{ color: '#ff4444', fontSize: '32px', fontWeight: 900, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <ShieldAlert size={32} /> Scam Warning
            </h3>
            <p style={{ fontSize: '17px', lineHeight: 1.7 }}>
              Beware of fraudulent groups on Telegram or WhatsApp using the <strong>Investa-X Research</strong> name. 
              We never ask for login credentials, portfolio access, or cash payments.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "Check SEBI registration (INH000022792)",
              "Pay only via CeFCoM mechanism",
              "Never share your Trading OTP/Pass"
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', border: '1px solid rgba(255, 68, 68, 0.2)', gap: '12px', alignItems: 'center', padding: '16px', borderRadius: '12px' }}>
                <ChevronRight size={18} color="#ff4444" />
                <span style={{ fontSize: '15px', fontWeight: 600 }}>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── GRIEVANCE STEPS ───────────────────────────── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '40px', textAlign: 'center' }}>
          Grievance <span style={{ color: 'var(--accent)' }}>Resolution</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {[
            { step: "01", label: "Direct Support", desc: "Escalate your concern to our internal compliance desk first.", linkText: "Email Support", link: "mailto:info@investaxresearch.com" },
            { step: "02", label: "SEBI SCORES", desc: "If unresolved after 7 days, lodge a complaint via the official SCORES portal.", linkText: "Open SCORES", link: "https://scores.sebi.gov.in" },
            { step: "03", label: "Smart ODR", desc: "Access Online Dispute Resolution for independent mediation.", linkText: "Open Smart ODR", link: "https://smartodr.in" }
          ].map((item, i) => (
            <div key={i} style={{ padding: '32px', borderRadius: '20px', border: '1px solid #cccc' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--accent)', marginBottom: '8px' }}>LEVEL {item.step}</div>
              <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.label}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>{item.desc}</p>
              <a href={item.link} style={styles.linkButton} target="_blank" rel="noreferrer">
                {item.linkText} <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '100px 24px 0' }}>
        <p style={{ fontSize: '12px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
          <strong>DISCLAIMER:</strong> Registration granted by SEBI, membership of RAASB and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Market investments are subject to risk.
        </p>
      </footer>
    </div>
  );
};

export default MITC;