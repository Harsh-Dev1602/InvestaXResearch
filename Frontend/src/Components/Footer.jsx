import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Mail, Phone, MapPin, ExternalLink, Shield } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-conditions' },
  { name: 'Refund Policy', path: '/refund-policy' },

]

const legalLinks = [
  { name: 'Investor Charter', path: '/investor-charter' },
  { name: 'MITC', path: '/mitc' },
  { name: 'Grievance Redressal', path: '/grievance-redressal' },
  { name: 'Disclaimer & Disclosures', path: '/disclaimer-disclosures' },
  
]


const complianceLinks = [
  { name: 'Commodities', path: '/commodities' },
  { name: 'Service Agreement', path: '/service-agreement' },
]

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear()

  const linkStyle = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }

  const headingStyle = {
    fontSize: '12px',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '20px'
  }

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
      {/* Gradient top line */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--accent), var(--gold), transparent)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '48px',
        }}>

          {/* Col 1 – Brand */}
          <div style={{ gridColumn: 'span 1', minWidth: '240px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, var(--accent), var(--gold))',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <TrendingUp size={20} color="#fff" strokeWidth={2.5} />
              </div>
              <span style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '20px',
                letterSpacing: '0.08em',
                color: 'var(--text-primary)',
              }}>
                INVESTA<span style={{ color: 'var(--gold)' }}>-X</span>
              </span>
            </div>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              marginBottom: '20px',
            }}>
              Research-driven trading intelligence for investors and traders across India.
            </p>
            <div style={{
              padding: '14px 16px',
              background: 'var(--gold-muted)',
              borderRadius: '10px',
              border: '1px solid rgba(212,175,55,0.2)',
            }}>
              <p style={{ fontSize: '10px', color: 'var(--gold)', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '4px' }}>
                SEBI REGISTERED RESEARCH ANALYST
              </p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Reg: <strong style={{ color: 'var(--text-primary)' }}>INH000022792</strong>
              </p>
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div>
            <h4 style={headingStyle}>About Investa-X</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {quickLinks.map(l => (
                <li key={l.path}>
                  <Link to={l.path} style={linkStyle} onClick={scrollTop}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '4px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0' }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Legal */}
          <div>
            <h4 style={headingStyle}>For Clients</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {legalLinks.map(l => (
                <li key={l.path}>
                  <Link onClick={scrollTop} to={l.path} style={linkStyle}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '4px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0' }}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Compliance */}
          <div>
            <h4 style={headingStyle}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
              {complianceLinks.map(l => (
                <li key={l.name}>
                  {l.external ? (
                    <a href={l.path} target="_blank" rel="noopener noreferrer" style={linkStyle}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '4px' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0' }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                      {l.name} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <Link onClick={scrollTop} to={l.path} style={linkStyle}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.paddingLeft = '4px' }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.paddingLeft = '0' }}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                      {l.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              © {year} Investa-X Research Analyst. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                <Mail size={14} color="var(--accent)" /> info@investax.in
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                <Phone size={14} color="var(--accent)" /> +91 62692 02505
              </div>
            </div>
          </div>

          <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.6, textAlign: 'justify' }}>
            <strong>Disclaimer:</strong> Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
          </p>
        </div>
      </div>
    </footer>
  )
}