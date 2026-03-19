import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, AlertTriangle, Fingerprint, Activity, 
  Scale, HelpCircle, Info, ExternalLink, Cpu, Banknote 
} from 'lucide-react';

/* ─── Shared Components ─────────────────────────── */
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

const DisclosureCard = ({ icon: Icon, title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="card"
    style={{
      padding: '32px',
      background: 'white',
      border: '1px solid #cccc',
      borderRadius: '16px',
      marginBottom: '24px'
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
      <Icon size={20} color="var(--accent)" />
      <h3 style={{ fontSize: '18px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
    </div>
    <div style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
      {children}
    </div>
  </motion.div>
);

export default function DisclaimerDisclosures() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: '#fff', minHeight: '100vh', paddingBottom: '100px' }}>
      
      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{ padding: '60px 24px 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, marginBottom: '20px' }}>
            <TextSlip delay={0.1}>Legal Disclaimer &</TextSlip>
            <TextSlip delay={0.25} style={{ color: 'var(--accent)' }}>Material Disclosures</TextSlip>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            Official regulatory filings and risk disclosures for Pavan Choubey (Investa-X Research)
          </p>
        </div>
      </section>

      <section style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          {/* ── LEFT COLUMN: REGULATORY INFO ───────────── */}
          <div>
            <div style={{ 
              background: 'white', 
              padding: '40px', 
              borderRadius: '24px', 
              border: '1px solid var(--accent)',
              marginBottom: '40px'
            }}>
              <Fingerprint size={40} color="var(--accent)" style={{ marginBottom: '24px' }} />
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px' }}>Entity Information</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: "Registration Name", value: "Pavan Choubey" },
                  { label: "Trade Name", value: "Investa – X Research" },
                  { label: "SEBI Reg No", value: "INH000022792", highlight: true },
                  { label: "BSE Enlistment", value: "6643" },
                  { label: "Type", value: "Individual" },
                  { label: "Validity", value: "20 August 2030" }
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: '1px solid #cccc', paddingBottom: '12px' }}>
                    <div style={{ fontSize: '12px', color: 'black', textTransform: 'uppercase' }}>{item.label}</div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: item.highlight ? 'var(--accent)' : 'black' }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <DisclosureCard icon={ShieldCheck} title="Disciplinary History">
              No disciplinary actions, penalties, or regulatory measures have been taken against <strong>Pavan Choubey (INH000022792)</strong> or its partners and associates to date.
            </DisclosureCard>
          </div>

          {/* ── RIGHT COLUMN: DISCLOSURES ──────────────── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            <motion.div 
              style={{ padding: '24px', background: 'rgba(255, 71, 71, 0.05)', border: '1px solid #ff4747', borderRadius: '12px', marginBottom: '32px' }}
            >
              <div style={{ display: 'flex', gap: '12px' }}>
                <AlertTriangle color="#ff4747" size={24} />
                <div>
                  <h4 style={{ color: '#ff4747', fontWeight: 700 }}>Market Risk Warning</h4>
                  <p style={{ fontSize: '14px',color:"black", marginTop: '8px' }}>
                    “Investment in securities market are subject to market risks. Read all the related documents carefully before investing.”
                  </p>
                </div>
              </div>
            </motion.div>

            <DisclosureCard icon={Activity} title="Recommendation Risks">
              Our advice may involve open positions. We may not provide stop-loss or target prices in all recommendations. For safety, we recommend exiting positions with a <strong>20% loss</strong> from the entry side.
            </DisclosureCard>

            <DisclosureCard icon={Banknote} title="Fee Collection (CeFCoM)">
              All fees must be made online to the “Investa X Research” bank account or through the <strong>Centralized Fee Collection Mechanism (CeFCoM)</strong>. Payments outside this structure are not recognized under SEBI regulations.
            </DisclosureCard>

            <DisclosureCard icon={Cpu} title="AI Usage Disclosure">
              Recommendations are based on technical/fundamental analysis with involvement of <strong>AI tools</strong>. Note that AI systems carry risks of bias, system vulnerabilities, and potential transparency gaps.
            </DisclosureCard>

            <DisclosureCard icon={Scale} title="Conflict of Interest">
              The Research Analyst and associates have <strong>no financial interest</strong> or material conflict of interest in the subject companies, nor do they own 1% or more of the securities of such companies.
            </DisclosureCard>

          </div>
        </div>
      </section>

      {/* ── RATINGS LEGEND ───────────────────────────── */}
      <section style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Securities Ratings Legend</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { tag: 'BUY', desc: 'Purchase within defined price range only.' },
              { tag: 'SELL', desc: 'Exit as per the range defined in calls.' },
              { tag: 'HOLD', desc: 'Maintain position until further update.' },
              { tag: 'EXIT', desc: 'Close all quantities immediately.' },
              { tag: 'BOOK PROFIT', desc: 'Sell quantities equivalent to profit.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '20px', background: 'var(--gold-muted)', borderRadius: '12px', borderLeft: '4px solid var(--accent)' }}>
                <div style={{ color: 'var(--accent)', fontWeight: 900, marginBottom: '8px' }}>{item.tag}</div>
                <div style={{ fontSize: '13px', color: 'black' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}