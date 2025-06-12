import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function ArticleLayout({ title, children }) {
  return (
    <>
      <ThemeToggle />
      <main className="article-container">
        <Link 
          to="/" 
          className="back-link"
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'var(--accent-hover)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--accent-color)';
          }}
        >
          ← Back to Home
        </Link>
        
        <h1 className="article-title">{title}</h1>
        
        {children}
      </main>
      
      <style jsx>{`
        .article-container {
          max-width: min(800px, 90vw);
          margin: 2rem auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          color: var(--text-color);
        }
        
        .back-link {
          display: inline-block;
          margin-bottom: 1.5rem;
          color: var(--accent-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        
        .article-title {
          font-family: "Georgia", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-color);
        }
        
        .article-content {
          color: var(--text-color);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 65ch;
          margin-left: auto;
          margin-right: auto;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
        }
        
        .article-content img {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          margin: 1.5rem auto;
          max-width: 100%;
          height: auto;
          display: block;
        }
        
        .article-content h2,
        .article-content h3,
        .article-content h4 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
      `}</style>
    </>
  );
}
