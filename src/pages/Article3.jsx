import React from 'react';
import { Link } from 'react-router-dom';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import ThemeToggle from '../components/ThemeToggle';

export default function Article3() {
  return (
    <>
      <ThemeToggle />
      <main style={{ 
        maxWidth: 'min(800px, 90vw)', 
        margin: '2rem auto', 
        padding: '0 clamp(1rem, 5vw, 2rem)',
        color: 'var(--text-color)'
      }}>
    <div className="container" style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          margin: '1.5rem 0',
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
      
      <article style={{ marginBottom: '4rem' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            lineHeight: 1.2,
            fontWeight: 800,
            marginBottom: '1rem',
            color: 'var(--text-color)'
          }}>
            Designing for Readability
          </h1>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            Make your articles more engaging and easier to read. Discover the key design principles that enhance readability and keep your readers coming back for more.
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '1.5rem'
          }}>
            <span>By Your Name</span>
            <span style={{ margin: '0 0.5rem' }}>•</span>
            <span>June 10, 2025</span>
          </div>
        </header>

        <div style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--text-color)',
          marginBottom: '2rem'
        }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Readability is a crucial aspect of web design that directly impacts user experience. In this article, we'll explore the key principles of typography, spacing, and layout that contribute to better readability.
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: '2.5rem 0 1rem',
            color: 'var(--text-color)'
          }}>1. Typography Matters</h2>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Choosing the right typeface and font size can significantly impact how easily readers can consume your content. Opt for clean, legible fonts and maintain a comfortable line length (45-75 characters per line).
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: '2.5rem 0 1rem',
            color: 'var(--text-color)'
          }}>2. Proper Spacing</h2>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Adequate spacing between lines (line height), paragraphs, and around text blocks improves readability. Use whitespace strategically to create visual breathing room and guide readers through your content.
          </p>
          
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: '2.5rem 0 1rem',
            color: 'var(--text-color)'
          }}>3. Color and Contrast</h2>
          
          <p style={{ marginBottom: '1.5rem' }}>
            Ensure sufficient contrast between text and background colors. High contrast improves legibility, especially for readers with visual impairments. Use color purposefully to highlight important elements without overwhelming the reader.
          </p>
        </div>
        
        <HeartCounter articleId="article-3" />
      </article>
      
      <RelatedArticles currentArticleId="article-3" />
    </div>
    </main>
    </>
  );
}
