import React, { useEffect, useState } from 'react';
import { ref, onValue, runTransaction } from 'firebase/database';
import { database } from '../firebase';

export default function HeartCounter({ articleId }) {
  const [hearts, setHearts] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const heartsRef = ref(database, `hearts/${articleId}`);
    const unsubscribe = onValue(heartsRef, (snapshot) => {
      setHearts(snapshot.val() || 0);
    });
    return () => unsubscribe();
  }, [articleId]);

  const handleHeart = (e) => {
    e.preventDefault();
    if (clicked) return;
    setClicked(true);
    const heartsRef = ref(database, `hearts/${articleId}`);
    runTransaction(heartsRef, (current) => (current || 0) + 1);
  };

  const heartColor = clicked 
    ? '#e0245e' 
    : isHovered 
      ? '#f56565' 
      : 'var(--text-secondary)';

  return (
    <div style={{ margin: '2rem 0' }}>
      <button
        onClick={handleHeart}
        onMouseEnter={() => !clicked && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseOver={(e) => {
          if (!clicked) {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px var(--card-shadow)';
          }
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'var(--card-shadow)';
        }}
        onMouseDown={(e) => {
          if (!clicked) {
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }}
        style={{
          background: 'var(--card-bg)',
          border: `1px solid ${clicked ? 'rgba(224, 36, 94, 0.2)' : 'var(--border-color)'}`,
          borderRadius: '999px',
          padding: '0.5rem 1rem',
          cursor: clicked ? 'not-allowed' : 'pointer',
          fontSize: '1rem',
          color: heartColor,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.2s ease',
          boxShadow: 'var(--card-shadow)',
          transform: 'translateY(0)'
        }}
        disabled={clicked}
        aria-label={clicked ? 'Thank you for your support!' : 'Give a heart'}
      >
        <span style={{
          display: 'inline-block',
          transform: clicked ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.2s ease',
          fontSize: '1.2rem',
          lineHeight: 1
        }}>
          {clicked ? '❤️' : '🤍'}
        </span>
        <span style={{
          fontWeight: 600,
          fontSize: '0.95rem',
          color: 'var(--text-color)'
        }}>
          {hearts} {hearts === 1 ? 'like' : 'likes'}
        </span>
      </button>
      {clicked && (
        <p style={{
          margin: '0.5rem 0 0',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          fontStyle: 'italic'
        }}>
          Thank you for your support!
        </p>
      )}
    </div>
  );
}
