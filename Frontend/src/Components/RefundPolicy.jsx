import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  AlertTriangle, 
  Scale, 
  Ban, 
  HelpCircle, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

/* ─── Shared TextSlip Component ─────────────────────────── */
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

/* ─── MITC Section Component ────────────────────────────── */
function MITCSection({ icon: Icon, title, points, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="card"
      style={{
        padding: '40px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid #cccc',
        borderRadius: '16px',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
        <div style={{ 
          padding: '12px', 
          background: 'rgba(255, 193, 7, 0.1)', 
          borderRadius: '12px',
          color: 'var(--accent)' 
        }}>
          <Icon size={24} />
        </div>
        <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff' }}>{title}</h3>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {points.map((point, idx) => (
          <li key={idx} style={{ 
            display: 'flex', 
            gap: '12px', 
            marginBottom: '16px', 
            color: 'var(--text-secondary)',
            fontSize: '15px',
            lineHeight: 1.6
          }}>
            <ChevronRight size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function MITC() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: '#fff' }}>
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={{ padding: '140px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="section-label" style={{ 
              color: 'var(--accent)', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              fontSize: '12px',
              fontWeight: 700,
              display: 'block',
              marginBottom: '20px'
            }}>
              Standard Regulatory Disclosure
            </span>
          </motion.div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '30px' }}>
            <TextSlip delay={0.1}>Most Important</TextSlip>
            <TextSlip delay={0.2} style={{ color: 'var(--accent)' }}>Terms & Conditions</TextSlip>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}
          >
            In compliance with SEBI guidelines, we ensure complete transparency regarding our research services, 
            risk factors, and the nature of our engagement.
          </motion.p>
        </div>
      </section>

      {/* ── CORE MITC GRID ────────────────────────────── */}
      <section style={{ padding: '60px 24px 120px' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          
          <MITCSection 
            icon={Scale}
            title="Nature of Service"
            delay={0.1}
            points={[
              "Investa-X provides independent equity research and buy/sell/hold recommendations.",
              "We are SEBI registered Research Analysts (INH000022792) and do not provide Portfolio Management (PMS) or Investment Advisory (IA) services.",
              "Execution of trades is at the sole discretion of the client through their respective brokers."
            ]}
          />

          <MITCSection 
            icon={ShieldAlert}
            title="Risk Disclosure"
            delay={0.2}
            points={[
              "Investments in the securities market are subject to market risks. Read all related documents carefully before investing.",
              "Past performance is not indicative of future results.",
              "Investa-X does not guarantee any assured returns or protection of capital on any recommendation."
            ]}
          />

          <MITCSection 
            icon={Ban}
            title="Restriction of Liability"
            delay={0.3}
            points={[
              "The research provided is for the personal use of the subscriber and may not be redistributed.",
              "Investa-X and its employees shall not be liable for any financial losses incurred based on our research.",
              "Users should conduct their own due diligence or consult a financial advisor before acting."
            ]}
          />

          <MITCSection 
            icon={FileText}
            title="Fees & Refund Policy"
            delay={0.4}
            points={[
              "Subscription fees are non-refundable once the service access is granted.",
              "All fees are subject to applicable taxes (GST) as per government mandates.",
              "Fees are charged only for the research reports and intelligence hub access."
            ]}
          />

        </div>
      </section>

    </div>
  );
}