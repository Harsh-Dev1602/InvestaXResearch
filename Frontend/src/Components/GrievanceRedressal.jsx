import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Mail, Phone, ExternalLink, 
  AlertOctagon, Landmark, Smartphone, ChevronRight,
  Gavel, FileText, Fingerprint
} from 'lucide-react';

const GrievanceRedressal = () => {
  const styles = {
    container: {
      background: 'var(--bg-primary)',
      color: 'black',
      paddingBottom: '120px',
      overflowX: 'hidden'
    },
    hero: {
      padding: '160px 24px 80px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, rgba(255, 204, 0, 0.04) 0%, transparent 70%)',
    },
    sectionTitle: {
      color: 'var(--accent)',
      fontSize: '11px',
      fontWeight: '800',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    card: {
      background: 'rgba(255, 255, 255, 0.02)',
      padding: '40px',
      borderRadius: '24px',
      border: '1px solid #cccc',
      height: '100%',
      transition: 'all 0.4s ease'
    },
    stepBadge: {
      background: 'rgba(255, 204, 0, 0.1)',
      border: '1px solid #cccc',
      color: 'var(--accent)',
      padding: '6px 14px',
      borderRadius: '100px',
      fontSize: '10px',
      fontWeight: '900',
      marginBottom: '20px',
      display: 'inline-block',
      letterSpacing: '1px'
    },
    link: {
      color: 'var(--accent)',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'opacity 0.2s ease'
    }
  };

  return (
    <div style={styles.container}>
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={styles.sectionTitle}>
          <Gavel size={14} /> Compliance & Integrity
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1 }}
        >
          Investor <span style={{ color: 'var(--accent)' }}>Rights</span> Matrix
        </motion.h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '24px auto 0', fontSize: '18px', lineHeight: 1.6 }}>
          A structured framework to ensure every concern is addressed with professional accountability.
        </p>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* ── REGISTRATION HEADER ─────────────────────── */}
        <section style={{ marginBottom: '60px' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={{ ...styles.card, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', borderLeft: '4px solid var(--accent)' }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Fingerprint color="var(--accent)" size={20} />
                <h4 style={{ margin: 0, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800 }}>SEBI Identity</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ margin: 0, fontSize: '15px' }}><strong>Registered Analyst:</strong> Pavan Choubey</p>
                <p style={{ margin: 0, fontSize: '15px' }}><strong>Trade Identity:</strong> Investa – X Research</p>
                <p style={{ margin: 0, fontSize: '15px' }}><strong>RA Reg No:</strong> <span style={{ color: 'var(--accent)' }}>INH000022792</span></p>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <ShieldCheck color="var(--accent)" size={20} />
                <h4 style={{ margin: 0, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 800 }}>Exchange Enrollment</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ margin: 0, fontSize: '15px' }}><strong>BSE Enlistment ID:</strong> 6643</p>
                <p style={{ margin: 0, fontSize: '15px' }}><strong>Cycle Validity:</strong> 2025 – 2030</p>
                <a href="https://www.sebi.gov.in" style={styles.link} target="_blank" rel="noreferrer">Official Verification <ExternalLink size={14} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── ESCALATION STEPS ─────────────────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* LEVEL 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={styles.card}>
            <span style={styles.stepBadge}>STAGE 01: INTERNAL DESK</span>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Compliance Officer</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              Address your initial query directly to our internal resolution team. We aim for a 48-hour closure window.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}><Mail size={16} color="var(--accent)" /></div>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>info@investaxresearch.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ padding: '8px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}><Phone size={16} color="var(--accent)" /></div>
                <span style={{ fontSize: '14px', fontWeight: 600 }}>+91 6269202505</span>
              </div>
            </div>
          </motion.div>

          {/* LEVEL 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} style={styles.card}>
            <span style={styles.stepBadge}>STAGE 02: REGULATORY</span>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>SEBI SCORES</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              If your grievance remains unresolved after 7 working days, you may escalate to the SEBI SCORES portal.
            </p>
            <a href="https://scores.sebi.gov.in/" style={styles.link} target="_blank" rel="noreferrer">
              File via SCORES Portal <ChevronRight size={16} />
            </a>
            <div style={{ marginTop: '24px', padding: '12px', borderRadius: '12px', fontSize: '11px', color: 'black', fontWeight: 700 }}>
              TOLL FREE: 1800 266 7575
            </div>
          </motion.div>

          {/* LEVEL 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} style={styles.card}>
            <span style={styles.stepBadge}>STAGE 03: MEDIATION</span>
            <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Smart ODR</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              Utilize the Online Dispute Resolution portal for professional mediation and independent arbitration.
            </p>
            <a href="https://smartodr.in/" style={{ ...styles.link, background: 'var(--accent)', color: '#000', padding: '10px 20px', borderRadius: '12px', width: 'fit-content' }} target="_blank" rel="noreferrer">
              Visit Smart ODR <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>

        {/* ── FRAUD ALERT ─────────────────────────── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ marginTop: '60px' }}
        >
          <div style={{ padding: '40px', borderRadius: '24px', background: 'rgba(255, 68, 68, 0.03)', border: '1px solid rgba(255, 68, 68, 0.1)', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div style={{ padding: '12px', background: 'rgba(255, 68, 68, 0.1)', borderRadius: '12px' }}><AlertOctagon color="#ff4444" size={24} /></div>
            <div>
              <h4 style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: 800, color: '#ff4444' }}>Impersonation Warning</h4>
              <p style={{ fontSize: '15px', color: 'black', lineHeight: 1.6, margin: 0 }}>
                Investa – X Research operates exclusively through the official number <strong>+91 6269202505</strong>. 
                Any other number claiming to represent Pavan Choubey is a fraud. <strong>Never</strong> pay fees into personal accounts other than the one listed on our official payment page.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default GrievanceRedressal;