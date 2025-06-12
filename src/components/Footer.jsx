import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      padding: '2rem 1rem',
      textAlign: 'center',
      marginTop: '3rem',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ 
          color: 'var(--text-color)',
          marginBottom: '1.5rem'
        }}>
          The Team
        </h3>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '1.5rem',
          color: 'var(--text-secondary)'
        }}>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Angelo Pimentel</p>
            <p>Writer, Editor, and Web Designer/Developer</p>
          </div>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Leonardo Chavez</p>
            <p>Writer</p>
          </div>
          <div>
            <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Forest Allison Bobila</p>
            <p>Assistant Writer</p>
          </div>
        </div>
        
        <div style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-color)'
        }}>
          <p>
            © {currentYear} The Contemporary World Team. This website is a student project created for educational purposes only.
          </p>
          <p style={{ 
            margin: '1rem 0 0', 
            fontStyle: 'italic',
            fontSize: '0.8rem',
            lineHeight: '1.5'
          }}>
            Fair Use Notice: This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. 
            We are making such material available in our efforts to advance understanding of contemporary global issues. 
            We believe this constitutes a 'fair use' of any such copyrighted material as provided for in section 107 of the US Copyright Law.
          </p>
        </div>
      </div>
    </footer>
  );
}
