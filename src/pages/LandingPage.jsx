import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import SectionDivider from '../components/SectionDivider';
// Animation styles
const getAnimatedStyle = (delay = 0, isVisible) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, 
               transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  willChange: 'opacity, transform',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  WebkitFontSmoothing: 'antialiased'
});

const getBackgroundStyle = (isVisible, isHovered) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? (isHovered ? 'scale(1.05)' : 'scale(1)') : 'scale(1)',
  filter: `brightness(${isHovered ? 0.5 : 0.4})`,
  transition: isVisible 
    ? 'opacity 0.8s ease-out, transform 8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease-out'
    : 'none',
  willChange: 'opacity, transform, filter',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden'
});

// No global styles needed with this approach

import { heroData } from '../data/hero';
import { articles } from '../data/articles';

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
    height: '100vh',
    minHeight: '600px',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (maxWidth: 768px)': {
      height: '100vh',
      minHeight: '500px',
      marginBottom: '2rem',
      padding: '0 1rem',
      boxSizing: 'border-box'
    }
  },
  heroImage: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'brightness(0.4)',
    transition: 'transform 8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease-out',
    transform: 'scale(1.05)',
    willChange: 'transform, filter',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  heroImageHover: {
    transform: 'scale(1.15)',
    filter: 'brightness(0.5)',
    transition: 'transform 4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease-out'
  },
  heroImageMobile: {
    display: 'none',
    '@media (maxWidth: 768px)': {
      display: 'block',
      objectPosition: 'center 30%'
    }
  },
  heroImageContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    '&:hover $heroImage': {
      transform: 'scale(1.1)',
      filter: 'brightness(0.5)'
    }
  },
  heroContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '1200px',
    textAlign: 'center',
    color: 'var(--text-light)',
    zIndex: 2,
    fontFamily: '"Space Grotesk", sans-serif',
    padding: '2rem',
    boxSizing: 'border-box',
    '@media (maxWidth: 768px)': {
      width: '100%',
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
  const [isHovered, setIsHovered] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);
  
  const bgStyle = getBackgroundStyle(isVisible, isHovered);
  const titleStyle = getAnimatedStyle(100, isVisible);
  const subtitleStyle = getAnimatedStyle(200, isVisible);
  const ctaStyle = getAnimatedStyle(300, isVisible);

  return (
    <>
      <header style={styles.header}>
        <Logo />
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <div 
        style={styles.hero}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
          alt="Global digital network connecting people and technology" 
          style={{
            ...styles.heroImage,
            ...(isHovered ? styles.heroImageHover : {}),
            display: 'block',
            '@media (maxWidth: 768px)': {
              display: 'none'
            }
          }}
        />
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
          alt="Technology and global connection"
          style={{
            ...styles.heroImage,
            ...styles.heroImageMobile,
            ...(isHovered ? styles.heroImageHover : {})
          }}
        />
        <div style={styles.heroContent}>
          <div className="hero-content-inner" style={{
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '1rem',
            color: 'var(--primary-light)',
            marginBottom: '1rem',
            fontWeight: '500',
            fontFamily: '"Space Grotesk", sans-serif'
          }}>
            The Future of Digital Governance
          </div>
          <h1 style={{ 
            fontSize: '4.5rem', 
            margin: '0 0 1.5rem',
            color: 'var(--text-light)',
            fontWeight: '700',
            lineHeight: '1.1',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            fontFamily: '"Orbitron", sans-serif',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
            ...subtitleStyle,
            '@media (maxWidth: 768px)': {
              fontSize: '2.2rem',
              letterSpacing: '0.02em',
              padding: '0 0.5rem',
              margin: '0.5rem 0 1rem',
              lineHeight: '1.2'
            },
            '@media (maxWidth: 480px)': {
              fontSize: '1.8rem',
              padding: '0 0.5rem',
              margin: '0.5rem 0 1rem'
            }
          }}>
            Navigating the Digital Frontier
          </h1>
          <p style={{ 
            fontSize: '1.5rem',
            maxWidth: '800px',
            margin: '0 auto 2.5rem',
            color: 'var(--text-light-2)',
            lineHeight: '1.6',
            textShadow: '0 1px 3px rgba(0,0,0,0.5)',
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: '500',
            letterSpacing: '0.3px',
            padding: '0 1rem',
            ...ctaStyle,
            '@media (maxWidth: 768px)': {
              fontSize: '1.1rem',
              margin: '0 auto 2rem',
              lineHeight: '1.5',
              padding: '0 1.5rem'
            }
          }}>
            Exploring how technology is reshaping global governance, digital rights, and the future of international relations in an interconnected world.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-light)',
          fontSize: '1.5rem',
          animation: 'bounce 2s infinite',
          cursor: 'pointer',
          zIndex: 2,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          animation: 'bounce 2s infinite'
        }}>
          ↓
        </div>
      </div>
      < br></br>
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