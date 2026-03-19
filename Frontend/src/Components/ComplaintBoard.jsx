import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Send, Search, CheckCircle, Info, ExternalLink } from 'lucide-react';

/* ─── Styled Input ──────────────────────────────────────── */
function Field({ label, type = 'text', value, onChange, required = true }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label style={{
        fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700,
        letterSpacing: '0.06em', textTransform: 'uppercase',
        color: focused ? 'var(--accent)' : 'var(--text-muted)',
        transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        data-cursor="hover"
        style={{
          background: 'var(--bg-primary)',
          border: `1px solid ${focused ? 'var(--border-accent)' : 'var(--border)'}`,
          borderRadius: '10px', padding: '13px 16px',
          color: 'var(--text-primary)',
          fontFamily: 'Instrument Sans, sans-serif', fontSize: '15px',
          outline: 'none',
          transition: 'border-color 0.25s, box-shadow 0.25s',
          boxShadow: focused ? 'var(--shadow-glow)' : 'none',
        }}
      />
    </div>
  );
}

/* ─── Main Page ─────────────────────────────────────────── */
export default function ComplaintBoard() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', description: '' });
  const [trackId, setTrackId] = useState('');
  const [trackFocused, setTrackFocused] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSuccess(true); setForm({ name: '', email: '', phone: '', subject: '', description: '' }); }, 1600);
  };

  return (
    <div style={{ background: 'var(--bg-primary)' }}>

      {/* Hero */}
      <section style={{
        padding: '120px 24px 80px', textAlign: 'center',
        background: 'linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-label">Grievance Portal</span>
          <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, margin: '24px 0 28px' }}>
            Complaint Board
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.8, fontFamily: 'Instrument Sans, sans-serif' }}>
            We are committed to resolving your concerns with complete transparency. Submit a grievance below or track an existing one.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{ padding: '60px 24px 140px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '56px' }}>

          {/* Form */}
          <div className="card" style={{ padding: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
              <AlertCircle size={22} color="var(--accent)" />
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '26px', fontWeight: 700 }}>Lodge a Complaint</h2>
            </div>

            {success ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: '72px', height: '72px', background: 'var(--gold-muted)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', border: '1px solid var(--border-accent)' }}>
                  <CheckCircle size={36} color="var(--accent)" />
                </div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '12px' }}>Received</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontFamily: 'Instrument Sans, sans-serif' }}>
                  Tracking ID: <strong style={{ color: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }}>INV-X-88291</strong>. We'll respond within 24 hours.
                </p>
                <button className="btn-ghost" onClick={() => setSuccess(false)} data-cursor="hover">Submit Another</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <Field label="Name"  value={form.name}  onChange={e => setForm({...form, name: e.target.value})} />
                  <Field label="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} type="tel" required={false} />
                </div>
                <Field label="Email"   value={form.email}   onChange={e => setForm({...form, email: e.target.value})} type="email" />
                <Field label="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontFamily: 'Outfit, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Description</label>
                  <textarea
                    rows="5" required data-cursor="hover"
                    value={form.description}
                    onChange={e => setForm({...form, description: e.target.value})}
                    style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)', borderRadius: '10px', padding: '13px 16px', color: 'var(--text-primary)', fontFamily: 'Instrument Sans, sans-serif', fontSize: '15px', outline: 'none', resize: 'none', transition: 'border-color 0.25s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--border-accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button type="submit" disabled={submitting} className="btn-primary" data-cursor="hover" style={{ marginTop: '8px', justifyContent: 'center' }}>
                  {submitting ? 'Submitting…' : <><Send size={16} /> Submit Grievance</>}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Timeline */}
            <div style={{ padding: '12px 8px' }}>
              <div className="section-label" style={{ marginBottom: '28px' }}>Resolution Timeline</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { step: '01', title: 'Acknowledgement',  time: 'Within 24 Hours' },
                  { step: '02', title: 'Investigation',    time: '3 – 7 Working Days' },
                  { step: '03', title: 'Final Resolution', time: 'Maximum 30 Days' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                    style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 800, color: 'var(--accent)', paddingTop: '2px', flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{item.title}</div>
                      <div style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>{item.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SCORES Card */}
            <div style={{
              padding: '28px', background: 'var(--gold-muted)',
              borderRadius: '20px', border: '1px solid var(--border-accent)',
              display: 'flex', gap: '18px', alignItems: 'flex-start',
            }}>
              <Info size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>SEBI SCORES</h4>
                <p style={{ fontFamily: 'Instrument Sans, sans-serif', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '14px' }}>
                  If unsatisfied with our resolution, you may escalate directly to SEBI through the SCORES platform.
                </p>
                <a href="https://scores.sebi.gov.in" target="_blank" rel="noreferrer"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Visit SCORES <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}