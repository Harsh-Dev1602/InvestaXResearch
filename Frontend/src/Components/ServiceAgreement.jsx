import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Mail, MapPin, CreditCard, Calendar, 
  Briefcase, DollarSign, UploadCloud, CheckCircle2, ShieldAlert 
} from 'lucide-react';

const ServiceAgreement = () => {
  const [formData, setFormData] = useState({});

  const styles = {
    container: {
      background: 'var(--bg-primary)',
      color: 'black',
      padding: '60px 24px 100px',
      minHeight: '100vh'
    },
    formCard: {
      maxWidth: '900px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '32px',
      border: '1px solid #cccc',
      padding: '40px',
      backdropFilter: 'blur(10px)'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px',
      marginBottom: '32px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '12px',
      fontWeight: '700',
      color: 'var(--accent)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    input: {
      border: '1px solid #cccc',
      borderRadius: '12px',
      padding: '14px 16px',
      color: 'black',
      fontSize: '15px',
      outline: 'none',
      transition: 'all 0.3s ease',
      width: '100%'
    },
    uploadBox: {
      border: '2px dashed #cccc',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      background: 'rgba(255, 255, 255, 0.01)'
    },
    submitBtn: {
      width: '100%',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      padding: '20px',
      borderRadius: '16px',
      fontWeight: '800',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px'
    }
  };

  return (
    <div style={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: '12px' }}>
          Service <span style={{ color: 'var(--accent)' }}>Agreement</span>
        </h1>
        <p style={{ color: "black", fontSize: '16px' }}>
          Digital KYC Onboarding • Date: 17-03-2026
        </p>
      </motion.div>

      <div style={styles.formCard}>
        {/* ── PERSONAL DETAILS ────────────────────────── */}
        <h3 style={{ marginBottom: '24px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <User size={20} color="var(--accent)" /> 01. Profile Information
        </h3>
        
        <div style={styles.grid}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name *</label>
            <input style={styles.input} placeholder="As per PAN card" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Father's Name *</label>
            <input style={styles.input} placeholder="Full legal name" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}><Calendar size={14}/> Date of Birth *</label>
            <input type="date" style={styles.input} />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}><Mail size={14}/> Email Address *</label>
            <input type="email" style={styles.input} placeholder="xyz@abc.com" />
          </div>
        </div>

        {/* ── ADDRESS & TAX ────────────────────────────── */}
        <div style={styles.grid}>
          <div style={{ ...styles.inputGroup, gridColumn: 'span 2' }}>
            <label style={styles.label}><MapPin size={14}/> Permanent Address *</label>
            <input style={styles.input} placeholder="House No, Street, City, State, PIN" />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}><CreditCard size={14}/> PAN Number *</label>
            <input style={styles.input} placeholder="ABCDE1234D" />
          </div>
        </div>

        <hr style={{ border: 'none', height: '1px', background: 'rgba(255,255,255,0.05)', margin: '40px 0' }} />

        {/* ── SERVICE SELECTION ────────────────────────── */}
        <h3 style={{ marginBottom: '24px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase size={20} color="var(--accent)" /> 02. Subscription Details
        </h3>
        <div style={styles.grid}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Choose Service *</label>
            <select style={styles.input}>
              <option>Equity Intraday</option>
              <option>Nifty Options</option>
              <option>Commodity Pro</option>
              <option>HNI Platinum</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Duration *</label>
            <select style={styles.input}>
              <option>Quarterly (3 Months)</option>
              <option>Half-Yearly (6 Months)</option>
              <option>Annual (12 Months)</option>
            </select>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}><DollarSign size={14}/> Total Amount (Incl. GST)</label>
            <input style={{...styles.input, color: 'var(--accent)', fontWeight: 'bold'}} readOnly value="₹ 45,000" />
          </div>
        </div>

        {/* ── DOCUMENT UPLOAD ──────────────────────────── */}
        <h3 style={{  margin: '40px 0 24px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <UploadCloud size={20} color="var(--accent)" /> 03. KYC Documentation
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={styles.uploadBox}>
            <label style={{ cursor: 'pointer' }}>
              <CreditCard size={24} color="var(--accent)" style={{ marginBottom: '12px' }} />
              <div style={{ fontSize: '13px', fontWeight: 600 }}>PAN CARD</div>
              <div style={{ fontSize: '11px', color: '#666' }}>Upload Front Side</div>
              <input type="file" style={{ display: 'none' }} />
            </label>
          </div>
          <div style={styles.uploadBox}>
            <label style={{ cursor: 'pointer' }}>
              <ShieldAlert size={24} color="var(--accent)" style={{ marginBottom: '12px' }} />
              <div style={{ fontSize: '13px', fontWeight: 600 }}>UID FRONT</div>
              <div style={{ fontSize: '11px', color: '#666' }}>Aadhar Card Front</div>
              <input type="file" style={{ display: 'none' }} />
            </label>
          </div>
          <div style={styles.uploadBox}>
            <label style={{ cursor: 'pointer' }}>
              <ShieldAlert size={24} color="var(--accent)" style={{ marginBottom: '12px' }} />
              <div style={{ fontSize: '13px', fontWeight: 600 }}>UID BACK</div>
              <div style={{ fontSize: '11px', color: '#666' }}>Aadhar Card Back</div>
              <input type="file" style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        {/* ── CONSENT ──────────────────────────────────── */}
        <div style={{ marginTop: '50px', padding: '24px', background: 'rgba(255, 204, 0, 0.05)', borderRadius: '16px', border: '1px solid #cccc' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <input type="checkbox" style={{ marginTop: '6px', transform: 'scale(1.2)' }} />
            <p style={{ fontSize: '14px', lineHeight: 1.6 }}>
              I hereby declare that the details furnished above are true and correct. I have read and agree to the 
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}> Disclaimer, Disclosures</span> and 
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}> Terms & Conditions</span>.
            </p>
          </div>
          <div style={{ marginTop: '16px', fontSize: '11px',textAlign: 'right' }}>
            Timestamped Consent via IP: <strong>43.243.36.172</strong>
          </div>
        </div>

        <button style={styles.submitBtn}>
          Submit & Generate Agreement <CheckCircle2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServiceAgreement;