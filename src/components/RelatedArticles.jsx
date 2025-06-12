import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import articlesData from '../data/articles';

export default function RelatedArticles({ currentArticleId }) {
  const navigate = useNavigate();
  
  // Handle article click
  const handleArticleClick = (articleId) => {
    // Navigate to the article
    navigate(`/${articleId}`);
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  // Filter out the current article and get up to 3 related articles
  const relatedArticles = articlesData
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
              <button
                onClick={() => handleArticleClick(article.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  color: 'var(--text-color)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  font: 'inherit',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = 'var(--accent-color)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'var(--text-color)';
                }}
              >
                {article.title}
              </button>
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
