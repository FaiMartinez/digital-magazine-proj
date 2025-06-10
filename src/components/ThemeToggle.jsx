import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = {
    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 100,
    background: 'var(--card-bg)',
    border: '1px solid var(--border-color)',
    borderRadius: '50%',
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: isHovered 
      ? '0 4px 12px var(--card-shadow)' 
      : '0 2px 8px var(--card-shadow)',
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'all 0.2s ease',
    outline: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '1.25rem',
    color: 'var(--text-color)'
  };

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    transform: isActive ? 'scale(0.9)' : 'scale(1)',
    transition: 'transform 0.2s ease',
    userSelect: 'none'
  };

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseOut={() => setIsActive(false)}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      style={buttonStyle}
    >
      <div style={iconStyle}>
        {darkMode ? '☀️' : '🌙'}
      </div>
    </button>
  );
};

export default ThemeToggle;
