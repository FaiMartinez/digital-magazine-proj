import React from 'react';

const SectionDivider = () => {
  return (
    <div style={styles.container}>
      <div style={styles.line} />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    margin: '3rem 0',
  },
  line: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
    opacity: 0.25,
  },
};

export default SectionDivider;
