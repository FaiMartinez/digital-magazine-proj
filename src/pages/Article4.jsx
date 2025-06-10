import React from 'react';
import { Link } from 'react-router-dom';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import ThemeToggle from '../components/ThemeToggle';

export default function Article4() {
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
              Building Your Audience
            </h1>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem'
            }}>
              Grow your readership with these proven strategies. Learn how to attract, engage, and retain a loyal audience for your digital magazine.
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
              Building a dedicated audience is essential for the success of any digital publication. In this article, we'll explore effective strategies to grow and engage your readership.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>1. Create Valuable Content</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              The foundation of audience building is consistently delivering high-quality, valuable content. Focus on solving problems, answering questions, and providing unique insights that resonate with your target audience.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>2. Leverage Social Media</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Promote your content across relevant social media platforms where your target audience spends time. Engage with your followers, participate in discussions, and build relationships with other creators in your niche.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>3. Build an Email List</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Email remains one of the most effective ways to maintain a direct connection with your audience. Offer valuable lead magnets and consistently deliver quality content to keep your subscribers engaged.
            </p>
            
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              margin: '2.5rem 0 1rem',
              color: 'var(--text-color)'
            }}>4. Optimize for SEO</h2>
            
            <p style={{ marginBottom: '1.5rem' }}>
              Improve your content's visibility in search engines by implementing SEO best practices. Research relevant keywords, optimize your headlines and meta descriptions, and build quality backlinks to increase organic traffic.
            </p>
          </div>
          
          <HeartCounter articleId="article-4" />
        </article>
        
        <RelatedArticles currentArticleId="article-4" />
      </div>
      </main>
    </>
  );
}
