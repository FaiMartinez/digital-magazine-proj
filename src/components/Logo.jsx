import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link 
      to="/" 
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        fontFamily: '"Playfair Display", Georgia, serif',
        fontWeight: '700',
        fontSize: '1.75rem',
        color: 'var(--text-color)',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        ':link': { color: 'var(--text-color)' },
        ':visited': { color: 'var(--text-color)' },
        ':hover': { 
          opacity: 0.9,
          transform: 'translateY(-1px)' 
        },
        ':active': { 
          color: 'var(--text-color)',
          opacity: 0.9 
        }
      }}
    >
      <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.25rem',
        height: '2.25rem',
        backgroundColor: 'var(--accent-color)',
        borderRadius: '50%',
        color: 'white',
        fontSize: '1.25rem',
        fontWeight: '600',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        W
      </span>
      <span style={{
        position: 'relative',
        '::after': {
          content: '""',
          position: 'absolute',
          bottom: '-4px',
          left: '0',
          width: '100%',
          height: '2px',
          background: 'var(--accent-color)',
          transform: 'scaleX(0)',
          transition: 'transform 0.3s ease'
        },
        ':hover::after': {
          transform: 'scaleX(1)'
        }
      }}>
        The Contemporary World
      </span>
    </Link>
  );
}