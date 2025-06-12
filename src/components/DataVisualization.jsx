import React from 'react';

export default function DataVisualization({ title = 'Article Engagement Over Time', imageSrc = '/images/engagement-chart.png', alt = 'Data visualization' }) {
  return (
    <div className="data-viz">
      <h3>{title}</h3>
      <div className="viz-container">
        <img 
          src={imageSrc} 
          alt={alt}
          className="viz-image"
        />
      </div>
      <p className="viz-caption">
        *Data represents reader engagement metrics over time.
      </p>
      <style jsx>{`
        .data-viz {
          background-color: var(--card-bg);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .data-viz h3 {
          margin-top: 0;
          color: var(--text-color);
        }
        
        .viz-container {
          margin: 1.5rem 0;
        }
        
        .viz-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          border: 1px solid var(--border-color, #e0e0e0);
        }
        
        .viz-caption {
          margin: 0.5rem 0 0;
          font-size: 0.9em;
          color: var(--text-secondary);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
