import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Scale, AlertCircle, Globe, UserCheck, BookOpen, Clock } from 'lucide-react';

const TermsConditions = () => {
  const styles = {
    container: {
      background: 'var(--bg-primary)',
      color: 'back',
      paddingBottom: '120px',
      overflowX: 'hidden'
    },
    hero: {
      padding: '160px 24px 80px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, rgba(255, 204, 0, 0.03) 0%, transparent 70%)',
    },
    contentWrapper: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 24px',
    },
    section: {
      marginBottom: '60px',
      padding: '40px',
      background: 'rgba(255, 255, 255, 0.02)',
      borderRadius: '24px',
      border: '1px solid #cccc',
    },
    heading: {
      color: 'var(--accent)',
      fontSize: '22px',
      fontWeight: '800',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      letterSpacing: '-0.5px'
    },
    text: {
      color:"back",
      lineHeight: '1.8',
      fontSize: '15px',
    },
    metaBox: {
      background: 'rgba(255, 204, 0, 0.05)',
      padding: '24px 32px',
      borderRadius: '16px',
      border: '1px solid #cccc',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '60px',
    }
  };

  return (
    <div style={styles.container}>
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 255, 255, 0.05)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px' }}>
            <BookOpen size={14} color="var(--accent)" />
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Service Protocol
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1 }}>
            Terms <span style={{ color: 'var(--accent)' }}>& Governance</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '24px auto 0', fontSize: '18px' }}>
            Legal framework governing your relationship with Investa-X Research.
          </p>
        </motion.div>
      </section>

      <div style={styles.contentWrapper}>
        {/* ── META INFO ────────────────────────────────── */}
        <div style={styles.metaBox}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Clock size={18} color="var(--accent)" />
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Last Updated: March 2026</span>
          </div>
          <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '14px' }}>SEBI Reg: INH000022792</span>
        </div>

        {/* ── THE AGREEMENT ────────────────────────────── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={styles.section}>
          <div style={styles.heading}><FileText size={22}/> 01. THE AGREEMENT</div>
          <p style={styles.text}>
            The use of this website and services provided by <strong>Pavan Choubey</strong> (Trade name: <strong>Investa-X Research</strong>) 
            are subject to the following Terms & Conditions. By accessing this platform, you irrevocably agree to be bound by these Terms. 
            If you do not agree, you must cease use of our services immediately.
          </p>
        </motion.section>

        {/* ── INTELLECTUAL PROPERTY ───────────────────── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={styles.section}>
          <div style={styles.heading}><Shield size={22}/> 02. INTELLECTUAL PROPERTY</div>
          <p style={styles.text}>
            All research reports, technical data, and proprietary algorithms ("Owner Materials") are the exclusive property of the Owner. 
            Your subscription grants you a single-user, non-transferable license. 
            <br/><br/>
            <span style={{ color: '#fff', fontWeight: 600 }}>Prohibited Actions:</span> Redistribution of calls on Telegram/WhatsApp groups or any public forum will result in immediate termination of service and legal action under the Copyright Act.
          </p>
        </motion.section>

        {/* ── RISK & REFUND POLICY ────────────────────── */}
        <motion.section 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          style={{...styles.section, border: '1px solid rgba(255, 68, 68, 0.2)', background: 'rgba(255, 68, 68, 0.02)'}}
        >
          <div style={{...styles.heading, color: '#ff4444'}}><AlertCircle size={22}/> 03. REFUND & RISK POLICY</div>
          <div style={styles.text}>
            <p style={{ marginBottom: '20px' }}>
              <strong>STRICT NO-REFUND POLICY:</strong> Due to the digital nature of financial research, all service sales are final. 
              Refunds are not processed under any circumstances once recommendations have been accessed.
            </p>
            <p>
              <strong>ASSUMPTION OF RISK:</strong> Trading involves significant financial risk. Investa-X Research does not guarantee profits. 
              The user assumes full responsibility for any capital loss incurred following our research.
            </p>
          </div>
        </motion.section>

        {/* ── ACCEPTABLE USE ──────────────────────────── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={styles.section}>
          <div style={styles.heading}><Scale size={22}/> 04. ACCEPTABLE USE</div>
          <p style={styles.text}>You agree not to:</p>
          <ul style={{  fontSize: '14px', lineHeight: '2.2', marginTop: '16px', listStyleType: 'square' }}>
            <li>Automate data collection (scraping) from our client portal.</li>
            <li>Share login credentials with third parties.</li>
            <li>Use our research to provide sub-advisory services to others.</li>
            <li>Engage in any activity that disrupts our server infrastructure.</li>
          </ul>
        </motion.section>

        {/* ── JURISDICTION ─────────────────────────────── */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{...styles.section, borderBottom: 'none'}}>
          <div style={styles.heading}><Globe size={22}/> 05. GOVERNING LAW</div>
          <p style={styles.text}>
            These Terms are governed by the laws of the Republic of India. In case of any legal dispute or friction, 
            the exclusive jurisdiction for all legal proceedings shall reside with the courts located in 
            <strong> Jabalpur, Madhya Pradesh, India</strong>.
          </p>
        </motion.section>

      </div>
    </div>
  );
};

export default TermsConditions;