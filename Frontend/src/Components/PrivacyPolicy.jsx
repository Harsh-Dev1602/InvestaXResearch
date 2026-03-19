import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Database, Globe, Gavel, Cookie, 
  Mail, Phone, Download, Lock, Shield
} from 'lucide-react';

/* ─── Text Slip Animation (Consistent with About) ─────── */
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

const PrivacyPolicy = () => {
  // Theme-aware styles using your CSS variables
  const styles = {
    container: {
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      paddingBottom: '100px',
      fontFamily: 'Inter, sans-serif',
      transition: 'background 0.5s ease'
    },
    hero: {
      padding: '160px 24px 80px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, var(--accent-faint) 0%, transparent 70%)',
      borderBottom: '1px solid var(--border)'
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '60px',
      padding: '60px 24px',
    },
    mainContent: {
      gridColumn: 'span 2'
    },
    section: {
      marginBottom: '60px',
      scrollMarginTop: '120px'
    },
    h2: {
      color: 'var(--accent)',
      fontSize: '24px',
      fontWeight: '800',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      letterSpacing: '-0.5px',
      borderBottom: '1px solid var(--border)',
      paddingBottom: '12px'
    },
    h3: {
      color: 'var(--text-primary)',
      fontSize: '19px',
      fontWeight: '700',
      margin: '35px 0 15px',
    },
    text: {
      color: 'var(--text-secondary)',
      lineHeight: '1.8',
      fontSize: '15px',
      marginBottom: '20px'
    },
    definitionBox: {
      background: 'var(--bg-secondary)',
      padding: '24px',
      borderRadius: '16px',
      borderLeft: '4px solid var(--accent)',
      marginBottom: '15px',
      border: '1px solid var(--border)'
    },
    sidebarCard: {
      background: 'var(--bg-secondary)',
      padding: '30px',
      borderRadius: '24px',
      border: '1px solid var(--border)',
      position: 'sticky',
      top: '120px',
      height: 'fit-content'
    },
    navLink: {
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'block',
      marginBottom: '12px',
      transition: 'all 0.3s ease'
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <div style={styles.container}>
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={styles.hero}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34, 197, 94, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(34, 197, 94, 0.2)' }}
          >
            <ShieldCheck size={14} color="#4ade80" />
            <span style={{ color: '#4ade80', fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Data Protection Protocol Active
            </span>
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: '20px' }}>
            <TextSlip delay={0.1}>Your Privacy is our</TextSlip>
            <TextSlip delay={0.2} style={{ color: 'var(--accent)' }}>Priority</TextSlip>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '13px' }}
          >
            Last Revised: September 2025 • Compliance Ref: RA-PR-09
          </motion.p>
        </div>
      </section>

      <motion.div 
        style={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={styles.mainContent}>
          
          <motion.section variants={itemVariants} id="introduction" style={styles.section}>
            <p style={{...styles.text, fontSize: '17px', color: 'var(--text-primary)'}}>
              At Investa-X, we hold your trust in the highest regard. This document details how we handle your digital footprint to provide a secure and regulated research environment.
            </p>
          </motion.section>

          {/* ── DEFINITIONS ──────────────── */}
          <motion.section variants={itemVariants} id="definitions" style={styles.section}>
            <h2 style={styles.h2}><Gavel size={22}/> 01. Key Terms</h2>
            <div style={styles.definitionBox}>
              <p style={styles.text}><strong style={{color:'var(--text-primary)'}}>Service:</strong> The Investa-X research platform and mobile application.</p>
              <p style={styles.text}><strong style={{color:'var(--text-primary)'}}>Company:</strong> Pavan Choubey (SEBI Registered Research Analyst).</p>
              <p style={styles.text}><strong style={{color:'var(--text-primary)'}}>Usage Data:</strong> Metadata collected automatically via browser headers and interaction logs.</p>
            </div>
          </motion.section>

          {/* ── DATA COLLECTION ──────────────────────────── */}
          <motion.section variants={itemVariants} id="data-collection" style={styles.section}>
            <h2 style={styles.h2}><Database size={22}/> 02. Information Gathering</h2>
            <h3 style={styles.h3}>Personally Identifiable Information (PII)</h3>
            <p style={styles.text}>
              To comply with SEBI regulations and provide personalized advisory, we collect: Contact details (Email, Phone), KYC-related data, and Billing information for premium subscriptions.
            </p>
            
            <h3 style={styles.h3}>Technical Footprint</h3>
            <p style={styles.text}>
              When you access our terminal, we log device identifiers (UUID), IP addresses, and operating system versions to ensure security and prevent unauthorized account sharing.
            </p>
          </motion.section>

          {/* ── COOKIES ──────────────────────────────────── */}
          <motion.section variants={itemVariants} id="tracking" style={styles.section}>
            <h2 style={styles.h2}><Cookie size={22}/> 03. Cookies & Tracking</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
                <Lock size={20} color="var(--accent)" style={{ marginBottom: '10px' }}/>
                <h4 style={{ marginBottom: '8px' }}>Essential</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Required for secure login and session management.</p>
              </div>
              <div style={{ padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
                <Shield size={20} color="var(--accent)" style={{ marginBottom: '10px' }}/>
                <h4 style={{ marginBottom: '8px' }}>Security</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Used to detect fraudulent access patterns.</p>
              </div>
            </div>
          </motion.section>

          {/* ── DISCLOSURE ─────────────────────────── */}
          <motion.section variants={itemVariants} id="disclosure" style={styles.section}>
            <h2 style={styles.h2}><Globe size={22}/> 04. Data Disclosure</h2>
            <p style={styles.text}>
              We do not sell your data. Disclosure occurs only under these conditions:
            </p>
            <ul style={{...styles.text, paddingLeft: '20px'}}>
              <li>Statutory requirements by SEBI or other regulatory bodies.</li>
              <li>Protection and defense of the Company's legal rights.</li>
              <li>Verification of subscription status through secure payment gateways.</li>
            </ul>
          </motion.section>
        </div>

        {/* ── SIDEBAR ─────────────────────────────────── */}
        <aside>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            style={styles.sidebarCard}
          >
            <h3 style={{ color: 'var(--accent)', marginTop: 0, marginBottom: '20px' }}>Navigation</h3>
            <nav style={{ marginBottom: '30px' }}>
              {['Definitions', 'Data Collection', 'Tracking', 'Disclosure'].map((item, idx) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  style={styles.navLink}
                  onMouseOver={(e) => { e.target.style.color = 'var(--accent)'; e.target.style.paddingLeft = '5px'; }}
                  onMouseOut={(e) => { e.target.style.color = 'var(--text-secondary)'; e.target.style.paddingLeft = '0px'; }}
                >
                  0{idx + 1}. {item}
                </a>
              ))}
            </nav>

            <div style={{ padding: '20px', background: 'var(--bg-primary)', borderRadius: '12px', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '14px', marginBottom: '15px' }}>Data Inquiries</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Mail size={14} color="var(--accent)" />
                  <span style={{ fontSize: '12px' }}>privacy@invstax.com</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <Phone size={14} color="var(--accent)" />
                  <span style={{ fontSize: '12px' }}>+91 62692 02505</span>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: '25px',
                width: '100%',
                background: 'var(--accent)',
                color: '#000',
                border: 'none',
                padding: '14px',
                borderRadius: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <Download size={18} /> Download PDF
            </motion.button>
          </motion.div>
        </aside>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;