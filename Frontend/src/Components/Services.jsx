import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart3, Coins, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const serviceData = [
    {
        id: 0,
        title: 'Equity Market',
        Icon: LineChart,
        content: 'The Cash Market, also known as the Equity Delivery Market, is where investors buy shares by paying the full amount upfront. We provide deep-dive analysis on value picks and growth stocks to build your long-term portfolio.',
    },
    {
        id: 1,
        title: 'Future & Options (F&O)',
        Icon: BarChart3,
        content: 'Navigate the Derivatives Market with precision. Our research covers price action, Open Interest (OI) analysis, and hedging strategies for both stock and index futures/options contracts.',
    },
    {
        id: 2,
        title: "Commodity Market",
        Icon: Coins,
        content: "Trade Gold, Silver, Crude Oil, and Natural Gas with expert insights. We monitor MCX and NCDEX trends to provide data-backed research on global commodity price movements.",
    },
    {
        id: 3,
        title: 'Algorithmic Trading',
        Icon: Zap,
        content: "Transform your trading with state-of-the-art solutions. Our advanced algorithms help optimize strategies, reduce emotional bias, and improve execution speed for modern markets.",
    },
];

/* ─── Animated Service Card ────────────────────────────── */
function ServiceCard({ Icon, title, content, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ y: -8, borderColor: 'var(--accent)' }}
            className="card"
            style={{
                padding: '44px 32px',
                borderRadius: '24px',
                border: '1px solid #ccccc',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
            }}
            data-cursor="hover"
        >
            <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                color: 'var(--accent)'
            }}>
                <Icon size={30} />
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '18px'}}>
                {title}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px', flexGrow: 1 }}>
                {content}
            </p>

        </motion.div>
    );
}

export default function Services() {
    return (
        <div style={{ backgroundColor: 'var(--bg-primary)', color: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
            
            {/* ── HERO SECTION ─────────────────────────────── */}
            <section style={{ padding: '50px 24px 80px', textAlign: 'center' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,193,7,0.1)', padding: '8px 16px', borderRadius: '100px', marginBottom: '32px', border: '1px solid rgba(255,193,7,0.2)' }}
                    >
                        <ShieldCheck size={14} color="var(--accent)" />
                        <span style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                            SEBI Registered Research
                        </span>
                    </motion.div>
                    
                    <h1 style={{ fontSize: 'clamp(42px, 8vw, 80px)', fontWeight: 900, marginBottom: '28px', letterSpacing: '-3px', lineHeight: 0.95 }}>
                        Intelligent <span style={{ color: 'var(--accent)' }}>Solutions</span> for Wealth.
                    </h1>
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '19px', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 80px' }}>
                        We provide the data, the rigor, and the research. You make the moves. 
                        Explore our specialized market intelligence verticals.
                    </p>
                </div>

                {/* ── SERVICES GRID ───────────────────────────── */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                    gap: '24px',
                    maxWidth: '1300px',
                    margin: '0 auto',
                    padding: '0 20px'
                }}>
                    {serviceData.map((service, index) => (
                        <ServiceCard key={service.id} {...service} index={index} />
                    ))}
                </div>
            </section>

        </div>
    );
}