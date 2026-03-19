import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Flame, 
  Coins, 
  Activity, 
  Globe2, 
  Layers, 
  Sprout, 
  Zap 
} from 'lucide-react';

/* ─── Text Slip Animation ─────── */
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

const Commodities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } 
    }
  };

  const services = [
    {
      title: "Precious Metals",
      icon: <Coins size={24} />,
      desc: "Daily & weekly research for Gold and Silver, tracking global hedge demand and inflation cues.",
      color: "#FFD700"
    },
    {
      title: "Energy Sector",
      icon: <Flame size={24} />,
      desc: "Trend reports and trade levels for Crude Oil & Natural Gas based on OPEC+ and inventory data.",
      color: "#FF4D4D"
    },
    {
      title: "Base Metals",
      icon: <Layers size={24} />,
      desc: "Deep-dive research on Copper, Zinc, and Aluminum linked to industrial demand and LME inventories.",
      color: "#A0A0A0"
    },
    {
      title: "Agri Commodities",
      icon: <Sprout size={24} />,
      desc: "Fundamental reports on Soybeans, Wheat, and Sugar tracking monsoon patterns and seasonal cycles.",
      color: "#4ADE80"
    }
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh' }}>
      
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section style={{ 
        padding: '160px 24px 100px', 
        textAlign: 'center',
        background: 'radial-gradient(circle at center, var(--accent-faint) 0%, transparent 70%)',
        borderBottom: '1px solid var(--border)'
      }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'var(--bg-secondary)', 
            padding: '8px 16px', 
            borderRadius: '100px', 
            marginBottom: '24px',
            border: '1px solid var(--border)' 
          }}>
            <Activity size={14} color="var(--accent)" />
            <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase' }}>
              SEBI Registered Research Advisory
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 900, letterSpacing: '-3px', lineHeight: 1 }}>
            <TextSlip delay={0.1}>Commodity Market</TextSlip>
            <TextSlip delay={0.2} style={{ color: 'var(--accent)' }}>Intelligence.</TextSlip>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ maxWidth: '600px', margin: '30px auto 0', color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6 }}
          >
            Navigating MCX and International exchanges with data-backed technical and fundamental analysis.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CORE CONTENT ───────────────────────────── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px' }}>
        
        {/* Market Definition Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '120px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>What is the Commodity Market?</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '16px' }}>
              The Commodity Market is the backbone of global trade, where essential goods like Gold, Crude Oil, and Agricultural products are traded. In India, primary exchanges like <strong>MCX</strong> and <strong>NCDEX</strong> allow investors to hedge risks and speculate on price movements influenced by global supply-demand and currency shifts.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '32px', border: '1px solid var(--border)' }}
          >
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <Globe2 color="var(--accent)" size={32} />
              <div>
                <h4 style={{ marginBottom: '5px' }}>Global Tracking</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Monitoring LME, COMEX, and NYMEX cues in real-time.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Zap color="var(--accent)" size={32} />
              <div>
                <h4 style={{ marginBottom: '5px' }}>High Precision</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Technical chart analysis combined with inventory data.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <h3 style={{ textAlign: 'center', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '50px' }}>
          Our Specialized Research
        </h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}
        >
          {services.map((s, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              style={{ 
                background: 'var(--bg-secondary)', 
                padding: '40px 30px', 
                borderRadius: '24px', 
                border: '1px solid var(--border)',
                transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = s.color}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{ color: s.color, marginBottom: '20px' }}>{s.icon}</div>
              <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '15px' }}>{s.title}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default Commodities;