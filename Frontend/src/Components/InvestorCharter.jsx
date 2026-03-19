import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, ShieldCheck, Scale, ExternalLink } from 'lucide-react';

/* ─── Accordion ─────────────────────────────────────────── */
function AccordionItem({ index, title, content, isOpen, onToggle }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <button
        onClick={onToggle}
        data-cursor="hover"
        style={{
          width: '100%', textAlign: 'left',
          background: isOpen ? 'var(--gold-muted)' : 'var(--bg-card)',
          border: `1px solid ${isOpen ? 'var(--border-accent)' : 'var(--border)'}`,
          padding: '22px 28px', borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'none', transition: 'all 0.3s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 800,
            color: isOpen ? 'var(--accent)' : 'var(--text-muted)', letterSpacing: '0.08em',
          }}>
            0{index + 1}
          </span>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '17px', fontWeight: 600, color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
            {title}
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={18} color="var(--text-muted)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '22px 28px 28px 64px', color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '15px', fontFamily: 'Instrument Sans, sans-serif' }}>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Step Card ─────────────────────────────────────────── */
function StepCard({ number, title, content, delay }) {
  return (
    <motion.div
      className="card"
      style={{ padding: '44px', position: 'relative', paddingTop: '56px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      data-cursor="hover"
    >
      <div style={{
        position: 'absolute', top: '-16px', left: '40px',
        width: '36px', height: '36px',
        background: 'var(--accent)', color: 'var(--bg-primary)',
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '14px',
        border: '3px solid var(--bg-primary)',
      }}>
        {number}
      </div>
      <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 700, marginBottom: '14px' }}>{title}</h4>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.75, fontFamily: 'Instrument Sans, sans-serif' }}>{content}</p>
    </motion.div>
  );
}

/* ─── Content ───────────────────────────────────────────── */
const charterSections = [
  {
    title: 'Rights of the Investors',
    content: 'Receive fair and equitable treatment at all times. Expect high standards of professional conduct. Receive research reports and recommendations in a timely and transparent manner. Full privacy of data provided to the research analyst. Access to a structured grievance redressal mechanism for any complaints.',
  },
  {
    title: 'Responsibilities of Investors',
    content: 'Always use SEBI-registered research analysts for any advisory services. Ensure current and correct contact details are provided. Understand and strictly follow risk disclosures and warnings. Provide only funds that are clearly yours. Do not be misled by promises of guaranteed high returns. Always demand an invoice/receipt for any payment made.',
  },
  {
    title: "Dos and Don'ts",
    content: "Do verify registration status at sebi.gov.in before engaging any analyst. Do read research reports thoroughly before making investment decisions. Do not take investment decisions based on unverified tips or rumors. Do not share your banking or demat login credentials with any research analyst.",
  },
  {
    title: 'Client Protections Under SEBI RA Regulations',
    content: "Clients are protected under SEBI (Research Analysts) Regulations, 2014. Analysts must disclose conflicts of interest. Fees must be declared upfront. Analysts cannot promise assured returns. Clients have the right to lodge complaints with SEBI at any time.",
  },
];

/* ─── Main Page ─────────────────────────────────────────── */
export default function InvestorCharter() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ background: 'var(--bg-primary)' }}>

      {/* Hero */}
      <section style={{
        padding: '120px 24px 80px', textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span className="section-label">SEBI Compliance Mandate</span>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, marginTop: '24px', marginBottom: '28px' }}>
            Investor Charter
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto 40px' }}>
            In alignment with SEBI regulations, this charter outlines your rights, responsibilities, and the institutional standards we uphold as your research partner.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '12px',
            padding: '14px 24px', background: 'var(--gold-muted)',
            borderRadius: '12px', border: '1px solid var(--border-accent)',
          }}>
            <FileText size={16} color="var(--accent)" />
            <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.04em' }}>
              SEBI/HO/IMD/IMD-II/P/CIR/2021/681
            </span>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '44px' }}>
            <Scale size={26} color="var(--accent)" />
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '32px', fontWeight: 700 }}>Operational Framework</h2>
          </div>
          {charterSections.map((s, i) => (
            <AccordionItem
              key={i} index={i}
              title={s.title} content={s.content}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </section>

      {/* Grievance Steps */}
      <section style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="section-label">Redressal Process</span>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '42px', fontWeight: 700, marginTop: '18px' }}>Grievance Resolution</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <StepCard number="1" delay={0.1} title="Direct Communication"
              content="Approach Investa-X directly with your complaint. We acknowledge within 24 hours and aim for resolution within 7 working days." />
            <StepCard number="2" delay={0.2} title="Internal Escalation"
              content="If the complaint remains unresolved within 30 days, escalate to our Compliance Officer at compliance@investax.in." />
            <StepCard number="3" delay={0.3} title="SEBI SCORES"
              content="If unsatisfied with our resolution, you may lodge a complaint with SEBI through the official SCORES portal at scores.sebi.gov.in." />
          </div>

          {/* Info bar */}
          <div style={{ marginTop: '60px', padding: '40px', background: 'var(--bg-primary)', borderRadius: '24px', border: '1px dashed var(--border)', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>Max Resolution</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: 800 }}>30 Days</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'Outfit, sans-serif' }}>Compliance Audit</div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '28px', fontWeight: 800 }}>Monthly</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer">
                <button className="btn-ghost" data-cursor="hover" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Access SCORES Portal <ExternalLink size={14} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Table */}
      <section style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '30px', fontWeight: 700, marginBottom: '36px', textAlign: 'center' }}>
            Compliance Contacts
          </h3>
          <div style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  {['Role', 'Name', 'Email', 'Phone'].map(h => (
                    <th key={h} style={{ padding: '20px 24px', fontFamily: 'Outfit, sans-serif', fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { role: 'Research Analyst', name: 'Harsh Singh',  email: 'harsh@investax.in',       phone: '+91 98765 00001' },
                  { role: 'Compliance Officer', name: 'Alok Kumar', email: 'compliance@investax.in', phone: '+91 98765 00002' },
                  { role: 'Grievance Head',    name: 'Rajesh Mehta', email: 'grievance@investax.in', phone: '+91 98765 00003' },
                ].map((row, i, arr) => (
                  <tr key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <td style={{ padding: '20px 24px', fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '14px', color: 'var(--accent)' }}>{row.role}</td>
                    <td style={{ padding: '20px 24px', fontSize: '14px', color: 'var(--text-secondary)' }}>{row.name}</td>
                    <td style={{ padding: '20px 24px', fontSize: '14px', color: 'var(--text-secondary)' }}>{row.email}</td>
                    <td style={{ padding: '20px 24px', fontSize: '14px', color: 'var(--text-secondary)' }}>{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}