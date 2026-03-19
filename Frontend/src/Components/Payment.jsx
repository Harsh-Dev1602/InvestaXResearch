import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Landmark, QrCode, ShieldCheck, Copy, Info, CheckCircle2 } from 'lucide-react';

const Payment = () => {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    bankName: "PUNJAB NATIONAL BANK",
    accountHolder: "INVESTA - X RESEARCH",
    accountNumber: "0080302100000134",
    ifsc: "PUNB0008030",
    branch: "TILEHRI, JABALPUR"
  };

  const handleCopy = () => {
    const text = `Bank: ${bankDetails.bankName}\nHolder: ${bankDetails.accountHolder}\nAcc: ${bankDetails.accountNumber}\nIFSC: ${bankDetails.ifsc}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const styles = {
    container: {
      background: 'var(--bg-primary)',
      color: 'black',
      paddingBottom: '120px',
      minHeight: '100vh'
    },
    hero: {
      padding: '160px 24px 80px',
      textAlign: 'center',
      background: 'radial-gradient(circle at top, rgba(255, 204, 0, 0.05) 0%, transparent 70%)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    },
    paymentCard: {
      background: 'white',
      borderRadius: '32px',
      border: '1px solid #cccc',
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all 0.4s ease'
    },
    bankRow: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '18px 0',
      borderBottom: '1px solid #cccc'
    },
    label: {
      color: 'black',
      fontSize: '12px',
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '1px'
    },
    value: {
      color: 'black',
      fontWeight: '600',
      fontSize: '15px'
    }
  };

  return (
    <div style={styles.container}>
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255, 204, 0, 0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(255, 204, 0, 0.2)' }}>
            <ShieldCheck size={14} color="var(--accent)" />
            <span style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Official Payment Portal
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 64px)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-3px', lineHeight: 1 }}>
            Secure <span style={{ color: 'var(--accent)' }}>Settlement</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '18px', lineHeight: 1.6 }}>
            Verify the account details below before proceeding. Investa-X never requests payments to personal accounts.
          </p>
        </motion.div>
      </section>

      <div style={styles.grid}>
        
        {/* ── QR CODE SECTION ──────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={styles.paymentCard}
        >
          <div style={{ background: 'rgba(255, 204, 0, 0.1)', padding: '16px', borderRadius: '16px', marginBottom: '32px' }}>
            <QrCode color="var(--accent)" size={32} />
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '32px' }}>UPI Instant Pay</h3>
          
          <div style={{ 
            background: '#fff', 
            padding: '24px', 
            borderRadius: '24px', 
            width: '260px', 
            height: '260px',
            position: 'relative',
          }}>
            <div style={{ width: '100%', height: '100%', border: '1px solid #cccc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'back', fontSize: '14px', textAlign: 'center', fontWeight: 600 }}>
              Official UPI <br/> QR Code
            </div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#fff', padding: '4px', borderRadius: '4px' }}>
               {/* <img src="/api/placeholder/40/40" alt="UPI Logo" /> */}
            </div>
          </div>
          
          <p style={{ color: 'black', fontSize: '13px', marginTop: '32px', textAlign: 'center', lineHeight: 1.6 }}>
            Compatible with Google Pay, PhonePe, <br/> Paytm, and BHIM UPI.
          </p>
        </motion.div>

        {/* ── BANK DETAILS SECTION ─────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={styles.paymentCard}
        >
          <div style={{ background: 'rgba(255, 204, 0, 0.1)', padding: '16px', borderRadius: '16px', marginBottom: '32px' }}>
            <Landmark color="var(--accent)" size={32} />
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '32px' }}>NEFT / IMPS</h3>

          <div style={{ width: '100%' }}>
            {[
              { label: "Bank", value: bankDetails.bankName },
              { label: "Account Holder", value: bankDetails.accountHolder, highlight: true },
              { label: "Account Number", value: bankDetails.accountNumber },
              { label: "IFSC Code", value: bankDetails.ifsc },
              { label: "Branch", value: bankDetails.branch }
            ].map((row, i) => (
              <div key={i} style={styles.bankRow}>
                <span style={styles.label}>{row.label}</span>
                <span style={{...styles.value, color: row.highlight ? 'var(--accent)' : ''}}>{row.value}</span>
              </div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            style={{
              marginTop: '40px',
              width: '100%',
              background: copied ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              color: copied ? '#4ade80' : 'black',
              border: copied ? '1px solid #4ade80' : '1px solid #cccc',
              padding: '18px',
              borderRadius: '16px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
            {copied ? 'Details Copied!' : 'Copy Bank Details'}
          </motion.button>
        </motion.div>
      </div>

      {/* ── COMPLIANCE FOOTER ────────────────────────── */}
      <section style={{ maxWidth: '900px', margin: '80px auto 0', padding: '0 24px' }}>
        <div style={{  padding: '40px', borderRadius: '32px', border: '2px solid #cccc)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent)', marginBottom: '20px' }}>
            <Info size={20} />
            <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>Payment Protocols</span>
          </div>
          <div style={{ color: 'black', fontSize: '14px', lineHeight: 1.8 }}>
            <p>• <strong>CeFCoM Compliance:</strong> As per SEBI regulations, all fees are collected via authorized digital channels only.</p>
            <p>• <strong>Verification:</strong> Always verify the recipient name "INVESTA-X RESEARCH" before hitting pay.</p>
            <p>• <strong>Cash Policy:</strong> We do not accept cash payments. Any request for cash should be reported to compliance@investax.com.</p>
            <p style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '12px' }}>* Registration No: INH000022792 | Research Analyst: Pavan Choubey</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;