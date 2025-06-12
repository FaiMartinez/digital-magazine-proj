import React from 'react';

export default function StudentReflection({ 
  name = 'Student Name', 
  role = 'Student Role',
  headline = 'Student Reflection',
  content = 'Student reflection content goes here.' 
}) {
  // Get the first letter of the name for the avatar
  const initial = name.charAt(0).toUpperCase();

  // Function to safely render HTML content
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  return (
    <div className="student-reflection">
      <h3 className="reflection-headline">{headline}</h3>
      <div className="student-info">
        <div className="student-avatar" aria-hidden="true">
          {initial}
        </div>
        <div>
          <div className="student-name">{name}</div>
          <div className="student-role">{role}</div>
        </div>
      </div>
      <div 
        className="reflection-content" 
        dangerouslySetInnerHTML={createMarkup(content)} 
      />
      
      <style jsx>{`
        .student-reflection {
          background-color: var(--card-bg);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          border-left: 4px solid var(--accent-color);
        }
        
        .student-info {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .reflection-headline {
          color: var(--text-color);
          font-size: 1.5rem;
          margin: 0 0 1rem 0;
          font-weight: 600;
        }
        
        .student-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--accent-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-right: 12px;
          flex-shrink: 0;
        }
        
        .student-name {
          font-weight: 600;
          color: var(--text-color);
        }
        
        .student-role {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
        
        .reflection-content {
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 0;
        }
        
        .reflection-content p {
          margin-bottom: 1.2rem;
        }
        
        .reflection-content p:first-child {
          margin-top: 0;
        }
        
        .reflection-content p:last-child {
          margin-bottom: 0;
        }
        
        .reflection-content strong {
          color: var(--text-color);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
