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
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {relatedArticles.map((article) => (
          <article 
            key={article.id} 
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
              },
              background: 'var(--card-bg)'
            }}
          >
            <img 
              src={article.image} 
              alt={article.imageAlt}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h4 style={{
                fontSize: '1.25rem',
                margin: '0 0 0.5rem 0',
                color: 'var(--text-color)'
              }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleArticleClick(article.id);
                  }}
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
                    fontSize: '1.25rem',
                    margin: '0 0 0.5rem 0',
                    fontWeight: '600',
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
                fontSize: '0.95rem',
                margin: 0,
                lineHeight: 1.5
              }}>
                {article.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
