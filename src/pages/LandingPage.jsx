import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const articles = [
  { id: 'article-1', title: 'The Future of Digital Publishing', excerpt: 'Explore the trends shaping the future of online magazines.' },
  { id: 'article-2', title: 'How to Write Like a Pro', excerpt: 'Tips and tricks to improve your writing skills.' },
  { id: 'article-3', title: 'Designing for Readability', excerpt: 'Make your articles more engaging and easier to read.' },
  { id: 'article-4', title: 'Building Your Audience', excerpt: 'Grow your readership with these proven strategies.' },
];

export default function LandingPage() {
  return (
    <main style={{ 
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <ThemeToggle />
      <main style={{ 
        maxWidth: 'min(1200px, 90vw)', 
        margin: '0 auto', 
        padding: '0 1rem', 
        fontFamily: '"Segoe UI", "Georgia", serif',
        background: 'var(--bg-color)',
        color: 'var(--text-color)',
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <section style={{
          textAlign: 'left', 
          padding: 'clamp(3rem, 8vw, 6rem) 0 clamp(2rem, 5vw, 3rem)',
          marginBottom: '2rem'
        }}>
          <h1 style={{ 
            fontWeight: 800, 
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--text-color)',
            lineHeight: 1.2
          }}>
            Digital Magazine
          </h1>
          <p style={{ 
            fontWeight: 400, 
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: 'var(--text-color)', 
            marginBottom: '2rem',
            maxWidth: '600px',
            lineHeight: 1.5
          }}>
            Thoughtful articles about writing, design, and publishing in the digital age.
          </p>
        </section>

        {/* Articles Section */}
        <section style={{ 
          paddingBottom: '4rem'
        }}>
          <h2 style={{ 
            fontWeight: 700, 
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            marginBottom: '2rem',
            color: 'var(--text-color)'
          }}>
            Featured Articles
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {articles.map((a) => (
              <article 
                key={a.id}
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  transform: 'translateY(0)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px var(--card-shadow)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
              >
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                    color: 'var(--text-color)'
                  }}>
                    <Link 
                      to={`/${a.id}`} 
                      style={{ 
                        color: 'var(--text-color)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = 'var(--accent-hover)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = 'var(--text-color)';
                      }}
                    >
                      {a.title}
                    </Link>
                  </h3>
                  <p style={{ 
                    color: 'var(--text-color)',
                    fontSize: '0.95rem',
                    marginBottom: '1rem',
                    lineHeight: 1.6
                  }}>
                    {a.excerpt}
                  </p>
                  <Link 
                    to={`/${a.id}`}
                    style={{
                      color: 'var(--accent-color)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'color 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'var(--accent-hover)';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'var(--accent-color)';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}