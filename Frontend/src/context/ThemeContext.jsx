import React, { createContext, useContext, useEffect, useState } from 'react';

export const THEMES = [
  { id: 'investa',  label: 'Investa',  color: '#22D3EE' },
  { id: 'cloud',    label: 'Cloud',    color: '#7C3AED' },
];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // 1. Initialize state from LocalStorage (or default to 0)
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedIndex = localStorage.getItem('investa-x-theme-index');
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
  });

  const currentTheme = THEMES[themeIndex] || THEMES[0];

  useEffect(() => {
    // 2. Update the HTML attribute for CSS variables
    document.documentElement.setAttribute('data-theme', currentTheme.id);
    
    // 3. Save the index to LocalStorage whenever it changes
    localStorage.setItem('investa-x-theme-index', themeIndex);
  }, [themeIndex, currentTheme.id]);

  const cycleTheme = () => setThemeIndex(i => (i + 1) % THEMES.length);
  
  const setTheme = (id) => {
    const idx = THEMES.findIndex(t => t.id === id);
    if (idx !== -1) setThemeIndex(idx);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themeIndex, cycleTheme, setTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}