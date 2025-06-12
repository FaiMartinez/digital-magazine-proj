import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function ArticleLayout({ title, children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ThemeToggle />
      
      <Link 
        to="/" 
        className={`back-link ${isScrolled ? 'scrolled' : ''}`}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-color)';
        }}
      >
        ← Back to Home
      </Link>
      
      <main className="article-container">
        <h1 className="article-title">{title}</h1>
        {children}
      </main>
      
      <style jsx>{`
        .article-container {
          max-width: min(800px, 90vw);
          margin: 2rem auto;
          padding: 0 clamp(1rem, 5vw, 2rem);
          color: var(--text-color);
          position: relative;
        }
        
        .back-link {
          position: fixed;
          top: 20px;
          left: 20px;
          background-color: var(--accent-color);
          color: white;
          padding: 10px 15px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          z-index: 1000;
          opacity: 0;
          transform: translateX(-100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .back-link.scrolled {
          opacity: 1;
          transform: translateX(0);
        }
        
        .back-link:hover {
          transform: translateX(0) scale(1.05);
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
