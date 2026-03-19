import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * HandshakeAnimation
 * Two hands slide in from opposite sides and clasp as the section scrolls into view.
 * Built entirely from SVG paths – no images required.
 */
export default function HandshakeAnimation() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Left hand moves right (from -200 → 0 as scrollYProgress 0→0.5)
  const leftX  = useTransform(scrollYProgress, [0.05, 0.55], ['-200px', '0px']);
  // Right hand moves left (from 200 → 0)
  const rightX = useTransform(scrollYProgress, [0.05, 0.55], ['200px', '0px']);

  // After clasping (0.5→0.8), both hands shake (small up/down oscillation)
  const shakeY = useTransform(scrollYProgress, [0.55, 0.6, 0.65, 0.7, 0.75, 0.8], [0, -12, 10, -10, 8, 0]);

  // Glow opacity increases as hands meet
  const glowOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Glow behind the clasp point */}
      <motion.div style={{
        position: 'absolute',
        width: '200px', height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent), transparent 70%)',
        opacity: glowOpacity,
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Left Hand */}
      <motion.div style={{ x: leftX, y: shakeY, display: 'flex', alignItems: 'center' }}>
        <svg width="180" height="160" viewBox="0 0 180 160" fill="none">
          {/* Palm */}
          <rect x="20" y="60" width="90" height="65" rx="14" fill="var(--accent)" opacity="0.9" />
          {/* Fingers */}
          <rect x="30" y="20" width="18" height="50" rx="9" fill="var(--accent)" opacity="0.85" />
          <rect x="54" y="10" width="18" height="58" rx="9" fill="var(--accent)" opacity="0.85" />
          <rect x="78" y="15" width="18" height="52" rx="9" fill="var(--accent)" opacity="0.85" />
          <rect x="100" y="25" width="16" height="44" rx="8" fill="var(--accent)" opacity="0.85" />
          {/* Thumb */}
          <ellipse cx="18" cy="88" rx="12" ry="18" fill="var(--accent)" opacity="0.85" />
          {/* Wrist / arm */}
          <rect x="0" y="100" width="40" height="55" rx="8" fill="var(--bg-secondary)" />
        </svg>
      </motion.div>

      {/* Right Hand (mirrored) */}
      <motion.div style={{ x: rightX, y: shakeY, display: 'flex', alignItems: 'center', transform: 'scaleX(-1)' }}>
        <svg width="180" height="160" viewBox="0 0 180 160" fill="none">
          <rect x="20" y="60" width="90" height="65" rx="14" fill="var(--text-secondary)" opacity="0.5" />
          <rect x="30" y="20" width="18" height="50" rx="9" fill="var(--text-secondary)" opacity="0.5" />
          <rect x="54" y="10" width="18" height="58" rx="9" fill="var(--text-secondary)" opacity="0.5" />
          <rect x="78" y="15" width="18" height="52" rx="9" fill="var(--text-secondary)" opacity="0.5" />
          <rect x="100" y="25" width="16" height="44" rx="8" fill="var(--text-secondary)" opacity="0.5" />
          <ellipse cx="18" cy="88" rx="12" ry="18" fill="var(--text-secondary)" opacity="0.5" />
          <rect x="0" y="100" width="40" height="55" rx="8" fill="var(--bg-secondary)" />
        </svg>
      </motion.div>

      {/* Label that fades in on clasp */}
      <motion.div style={{
        position: 'absolute', bottom: '20px',
        opacity: glowOpacity,
        fontFamily: 'Outfit, sans-serif', fontSize: '12px',
        fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'var(--accent)',
      }}>
        Trusted Partnership
      </motion.div>
    </div>
  );
}
