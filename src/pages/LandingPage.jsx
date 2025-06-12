import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { heroData } from '../data/hero';
import articles from '../data/articles';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    borderBottom: '1px solid var(--border-color)'
  },
  hero: {
    position: 'relative',
    height: '60vh',
    minHeight: '400px',
    maxHeight: '600px',
    marginBottom: '3rem',
    '@media (maxWidth: 768px)': {
      height: '50vh',
      minHeight: '300px'
    }
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.8)'
  },
  heroContent: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '2rem',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    textAlign: 'center',
    '@media (maxWidth: 768px)': {
      padding: '1rem'
    }
  },
  main: {
    maxWidth: 'min(1200px, 90vw)',
    margin: '0 auto',
    padding: '0 1rem 3rem',
    color: 'var(--text-color)'
  },
  articlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    '@media (maxWidth: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    }
  }
};

export default function LandingPage() {
  return (
    <>
      <header style={styles.header}>
        <Logo />
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <div style={styles.hero}>
        <img 
          src={heroData.image} 
          alt={heroData.altText}
          style={styles.heroImage}
        />
        <div style={styles.heroContent}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'white'
          }}>
            {heroData.title}
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            maxWidth: '800px',
            margin: '0 auto',
            color: 'white'
          }}>
            {heroData.subtitle}
          </p>
        </div>
      </div>

      <main style={styles.main}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          Featured Articles
        </h2>

        <div style={styles.articlesGrid}>
          {articles.map(article => (
            <Link key={article.id} to={`/${article.id}`} style={{ textDecoration: 'none' }}>
              <article style={{
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }
              }}>
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
                  <h3 style={{
                    fontSize: '1.25rem',
                    margin: '0 0 0.5rem 0',
                    color: 'var(--text-color)'
                  }}>
                    {article.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem'
                  }}>
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}