import React from 'react';
import { Link } from 'react-router-dom';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import ThemeToggle from '../components/ThemeToggle';

export default function Article1() {
  return (
    <>
      <ThemeToggle />
      <main style={{ 
        maxWidth: 'min(800px, 90vw)', 
        margin: '2rem auto', 
        padding: '0 clamp(1rem, 5vw, 2rem)',
        color: 'var(--text-color)'
      }}>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginBottom: '1.5rem',
          color: 'var(--accent-color)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          transition: 'color 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.color = 'var(--accent-hover)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.color = 'var(--accent-color)';
        }}
      >
        ← Back to Home
      </Link>
      
      <h1 style={{ 
        fontFamily: '"Georgia", serif', 
        fontWeight: 700,
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        lineHeight: 1.2,
        marginBottom: '1.5rem'
      }}>
        The Future of Digital Publishing
      </h1>
      
      <div style={{ 
        color: 'var(--text-color)',
        fontSize: '1.1rem',
        lineHeight: 1.7,
        marginBottom: '2rem'
      }}>
        <p>Explore the trends shaping the future of online magazines. Digital publishing is evolving rapidly, driven by advancements in technology and changes in reader behavior. In this article, we'll explore the key trends that are transforming the industry and what they mean for publishers and readers alike.</p>
        <p>From the rise of interactive content to the growing importance of mobile-first design, the digital publishing landscape is changing at an unprecedented pace. We'll examine how these changes are affecting content creation, distribution, and consumption.</p>
      </div>
      
      <HeartCounter articleId="article-1" />
      <RelatedArticles currentArticleId="article-1" />
    </main>
    </>
  );
}
