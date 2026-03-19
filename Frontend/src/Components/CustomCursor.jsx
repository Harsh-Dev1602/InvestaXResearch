import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
  const { currentTheme } = useTheme();
  const cursorRef   = useRef(null);
  const followerRef = useRef(null);
  const [pos,       setPos]       = useState({ x: -100, y: -100 });
  const [follower,  setFollower]  = useState({ x: -100, y: -100 });
  const [isHover,   setIsHover]   = useState(false);
  const [isHidden,  setIsHidden]  = useState(false);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    let rafId;
    const follow = () => {
      setFollower(prev => ({
        x: prev.x + (posRef.current.x - prev.x) * 0.1,
        y: prev.y + (posRef.current.y - prev.y) * 0.1,
      }));
      rafId = requestAnimationFrame(follow);
    };
    rafId = requestAnimationFrame(follow);

    const onEnter = () => setIsHover(true);
    const onLeave = () => setIsHover(false);
    const onHide  = () => setIsHidden(true);
    const onShow  = () => setIsHidden(false);

    const interactables = 'a, button, [class*="btn"], input, textarea, [data-cursor="hover"]';

    const attachListeners = () => {
      document.querySelectorAll(interactables).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', onHide);
    window.addEventListener('mouseenter', onShow);
    attachListeners();

    const obs = new MutationObserver(attachListeners);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', onHide);
      window.removeEventListener('mouseenter', onShow);
      obs.disconnect();
    };
  }, []);

  const color = currentTheme?.color || '#FACC15';

  return (
    <>
      {/* Dot – instant */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: pos.x,
          top:  pos.y,
          width:  8,
          height: 8,
          borderRadius: '50%',
          background: color,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: isHidden ? 0 : 1,
          transition: 'opacity 0.2s, background 0.5s',
          mixBlendMode: 'difference',
        }}
      />
      {/* Ring – lagging follower */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          left:     follower.x,
          top:      follower.y,
          width:    isHover ? 48 : 32,
          height:   isHover ? 48 : 32,
          borderRadius: '50%',
          border:  `1.5px solid ${color}`,
          pointerEvents: 'none',
          zIndex:   9998,
          transform: 'translate(-50%, -50%)',
          opacity: isHidden ? 0 : isHover ? 0.8 : 0.45,
          transition: 'width 0.35s cubic-bezier(.23,1,.32,1), height 0.35s cubic-bezier(.23,1,.32,1), opacity 0.2s, border-color 0.5s',
          mixBlendMode: 'difference',
        }}
      />
    </>
  );
}
