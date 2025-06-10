import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const articles = [
  { 
    id: 'article-1', 
    title: 'The Future of Digital Publishing',
    excerpt: 'Explore the latest trends in digital publishing'
  },
  { 
    id: 'article-2', 
    title: 'How to Write Like a Pro',
    excerpt: 'Tips and techniques for professional writing'
  },
  { 
    id: 'article-3', 
    title: 'Designing for Readability',
    excerpt: 'Improve your content with better design'
  },
  { 
    id: 'article-4', 
    title: 'Building Your Audience',
    excerpt: 'Grow your readership effectively'
  },
];

export default function RelatedArticles({ currentArticleId }) {
  // Filter out the current article and get up to 3 related articles
  const relatedArticles = articles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 3);
  
  if (relatedArticles.length === 0) return null;

  return (
    <div style={{ 
      marginTop: '4rem', 
      borderTop: '1px solid var(--border-color)', 
      paddingTop: '2rem' 
    }}>
      <h3 style={{
        fontSize: '1.25rem',
        marginBottom: '1.5rem',
        color: 'var(--text-color)'
      }}>
        You might also like
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        {relatedArticles.map((article) => (
          <article 
            key={article.id} 
            style={{
              background: 'var(--card-bg)',
              borderRadius: '8px',
              padding: '1.25rem',
              boxShadow: 'var(--card-shadow)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              transform: 'translateY(0)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px var(--card-shadow)'
              }
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
            <h4 style={{
              fontSize: '1.1rem',
              marginBottom: '0.5rem',
              lineHeight: 1.3
            }}>
              <Link 
                to={`/${article.id}`}
                style={{
                  color: 'var(--text-color)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  ':hover': {
                    color: 'var(--accent-color)'
                  }
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--accent-color)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-color)';
                }}
              >
                {article.title}
              </Link>
            </h4>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              margin: 0,
              lineHeight: 1.5
            }}>
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
