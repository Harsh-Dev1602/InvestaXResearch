import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, TrendingUp, ChevronDown } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp,  } from "react-icons/io5";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Investor Charter', path: '/investor-charter' },
  { name: 'Complaint Board', path: '/complaint-board' },
  { name: 'Services', path: '/services' },
  { name: "MITC", path: "/mitc" },
  { name: "Pricing", path: "/pricing" },
  { name: "Payment", path: "/payment" },

]

export default function Header() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const { currentTheme, setTheme, THEMES: themes } = useTheme()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setThemeOpen(false)
  }, [location.pathname])

  return (
    <>
     {/* Top Bar - Clean & Modern */}
      {!scrolled && (
        <div className="btn-primary  text-black w-full" style={{ borderRadius:"0", padding: '15px 18px', fontSize: '30px',color:"black" }}   >
          <div className="w-full mx-auto flex justify-around items-center text-xs font-medium">
            <div className="flex flex-col md:flex-row items-start gap-2">
              <span className="flex items-center gap-1.5 transition cursor-default">
                <IoLocationSharp className=''/> 1, Tilehri, Bilehri, Jabalpur (M.P.) 482020
              </span>
              <a href="mailto:info@placiddigital.in" className="flex items-center gap-1.5 transition">
                <MdEmail className=''/> info@investax.in

              </a>
            </div>
            <div className="flex items-center gap-4">
              <a><FaFacebookF /></a>
              <a><FaInstagram /></a>
              <a><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      )}
      <header
        style={{
          position: `${scrolled ?  "fixed" : "sticky"}`, top:0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(28px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(28px)' : 'none',padding:" 15px 10px",
          borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(.23,1,.32,1)',
        }} 
      >
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 28px',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
        }}>

          {/* Logo */}
          <Link to="/" onClick={scrollTop} style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <div style={{
              width: '34px', height: '34px',
              background: `linear-gradient(135deg, var(--accent), var(--bg-secondary))`,
              borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border-accent)',
            }}>
              <TrendingUp size={18} color="var(--accent)" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: 'Outfit, sans-serif', fontWeight: 800,
              fontSize: '18px', letterSpacing: '0.1em', color: 'var(--text-primary)',
            }}>
              INVESTA<span style={{ color: 'var(--accent)' }}>-X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden-mobile" style={{ display: 'flex', gap: '2px' }}>
            {navLinks.map(link => {
              const active = location.pathname === link.path
              return (
                <Link key={link.path} to={link.path} style={{
                  position: 'relative', padding: '7px 16px',
                  fontSize: '13px', fontWeight: active ? 600 : 500,
                  fontFamily: 'Outfit, sans-serif',
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  borderRadius: '8px',
                  background: active ? 'var(--gold-muted)' : 'transparent',
                  letterSpacing: '0.01em',
                  transition: 'color 0.2s, background 0.2s',
                }} onClick={scrollTop}>
                  {link.name}
                  {active && (
                    <motion.div layoutId="active-bar" style={{
                      position: 'absolute', bottom: 2, left: 16, right: 16, height: '2px',
                      background: 'var(--accent)', borderRadius: '1px',
                    }} transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>

            {/* Theme Switcher */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setThemeOpen(o => !o)}
                data-cursor="hover"
                aria-label="Switch theme"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  height: '36px', padding: '0 12px',
                  border: '1px solid var(--border)', borderRadius: '10px',
                  background: 'var(--bg-card)', cursor: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '12px', fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
              >
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: currentTheme.color, flexShrink: 0 }} />
                <span className="hidden-mobile">{currentTheme.label}</span>
                <ChevronDown size={12} />
              </button>

              <AnimatePresence>
                {themeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    style={{
                      position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                      background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                      borderRadius: '14px', padding: '8px', minWidth: '160px',
                      backdropFilter: 'blur(24px)', zIndex: 200,
                      overflow: 'hidden',
                    }}
                  >
                    {themes.map((t, i) => (
                      <button key={t.id} onClick={() => { setTheme(t.id); setThemeOpen(false); }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          width: '100%', padding: '10px 12px', border: 'none',
                          background: currentTheme.id === t.id ? 'var(--gold-muted)' : 'transparent',
                          borderRadius: '8px', cursor: 'none',
                          color: currentTheme.id === t.id ? 'var(--accent)' : 'var(--text-secondary)',
                          fontFamily: 'Outfit, sans-serif', fontSize: '13px', fontWeight: 600,
                          transition: 'background 0.2s, color 0.2s',
                        }}
                      >
                        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: t.color, flexShrink: 0 }} />
                        {t.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link to="/"  className="hidden-mobile">
              <button className="btn-primary" style={{ padding: '9px 18px', fontSize: '13px' }}>
                Get KYC
              </button>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="show-mobile"
              data-cursor="hover"
              style={{
                width: '36px', height: '36px', borderRadius: '8px',
                border: '1px solid var(--border)', background: 'var(--bg-card)',
                color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'none',
              }}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 98, background: 'rgba(0,0,0,0.6)' }}  />
            <motion.nav
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0,
                width: '280px', zIndex: 99,
                background: 'var(--bg-secondary)',
                borderLeft: '1px solid var(--border)',
                padding: '90px 24px 40px',
                display: 'flex', flexDirection: 'column', gap: '6px',
              }} className=' overflow-y-auto'
            >
              {navLinks.map((link, i) => (
                <motion.div onClick={scrollTop} key={link.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link to={link.path} style={{
                    display: 'block', padding: '14px 16px', fontSize: '16px', fontWeight: 600,
                    fontFamily: 'Outfit, sans-serif',
                    color: location.pathname === link.path ? 'var(--accent)' : 'var(--text-secondary)',
                    borderRadius: '10px',
                    background: location.pathname === link.path ? 'var(--gold-muted)' : 'transparent',
                    borderLeft: `3px solid ${location.pathname === link.path ? 'var(--accent)' : 'transparent'}`,
                    transition: 'all 0.2s',
                  }}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div style={{ marginTop: 'auto' }}>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>  Get KYC </button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <div style={{ height: '70px' }} />

      <style>{`
        @media (max-width: 768px)  { .hidden-mobile { display: none !important; } }
        @media (min-width: 769px)  { .show-mobile   { display: none !important; } }
        * { cursor: none !important; }
      `}</style>
    </>
  )
}
