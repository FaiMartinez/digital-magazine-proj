import React from 'react';
import { Link } from 'react-router-dom';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import ThemeToggle from '../components/ThemeToggle';

export default function Article2() {
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
              How to Write Like a Pro
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem'
            }}>
              Tips and tricks to improve your writing skills. Whether you are a beginner or an experienced writer, these strategies will help you craft compelling and engaging articles that captivate your audience.
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
              Writing is a craft that can be honed with practice and the right techniques. In this article, we'll explore various strategies that can help you elevate your writing to a professional level.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>1. Understand Your Audience</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Before you start writing, it's crucial to know who you're writing for. Understanding your audience's needs, preferences, and level of knowledge will help you tailor your content effectively.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>2. Structure Your Content</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              A well-structured article is easier to read and understand. Use clear headings, subheadings, and paragraphs to organize your thoughts and guide your readers through your content.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>3. Edit and Revise</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Great writing often comes from thorough editing. Take the time to review and refine your work, focusing on clarity, conciseness, and flow.
            </p>
          </div>
          
          <HeartCounter articleId="article-2" />
        </article>
        
        {/* Related Articles */}
        <RelatedArticles currentArticleId="article-2" />
      </div>
      </main>
    </>
  );
}
