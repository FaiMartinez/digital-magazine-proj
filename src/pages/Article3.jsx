import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import DataVisualization from '../components/DataVisualization';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import articles from '../data/articles';

export default function Article3() {
  const article = articles.find(a => a.id === 'article-3');
  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <ArticleLayout title={article.title}>
      {/* Hero Image Section */}
      <div style={{ 
        height: '400px', 
        overflow: 'hidden',
        margin: '0 -2rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <img 
          src={article.image} 
          alt={article.imageAlt}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}
        />
      </div>

      {/* Article Meta - Author, Date, and Read Time */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        rowGap: '0.25rem'
      }}>
        <span>By {article.author}</span>
        <span>•</span>
        <span>{formattedDate}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>

      <div className="article-content">
        <p>
          Readability is a crucial aspect of web design that directly impacts user experience. In this article, we'll explore the key principles of typography, spacing, and layout that contribute to better readability.
        </p>
        
        <h2>1. Typography Matters</h2>
        <p>
          Choosing the right typeface and font size can significantly impact how easily readers can consume your content. Opt for clean, legible fonts and maintain a comfortable line length (45-75 characters per line).
        </p>
      </div>

      {/* Emotion Poll Section */}
      <EmotionPoll articleId="article-3" />
      
      <div className="article-content">
        <h2>2. Proper Spacing</h2>
        <p>
          Adequate spacing between lines (line height), paragraphs, and around text blocks improves readability. Use whitespace strategically to create visual breathing room and guide readers through your content.
        </p>
        
        <h2>3. Color and Contrast</h2>
        <p>
          Ensure sufficient contrast between text and background colors. High contrast improves legibility, especially for readers with visual impairments. Use color purposefully to highlight important elements without overwhelming the reader.
        </p>
      </div>

      {/* Data Visualization Section */}
      <DataVisualization 
        title="Readability Impact"
        imageSrc="/images/readability-metrics.png"
        alt="Chart showing readability metrics and user engagement"
      />

      <div className="article-content">
        <h2>4. Responsive Design</h2>
        <p>
          With the variety of devices used to access content today, ensure your text is readable across all screen sizes. Use relative units like em and rem for font sizes and ensure your layout adapts to different viewport sizes.
        </p>
      </div>
      
      <HeartCounter articleId="article-3" />
      
      {/* Student Reflection Section */}
      <StudentReflection 
        name="Taylor Morgan" 
        role="Graphic Design Student"
        content="The section on typography and spacing was particularly enlightening. I've started applying these principles to my design projects and have noticed a significant improvement in how users interact with my content. The data visualization helped me understand the real impact of these design choices on user engagement."
      />
      
      {/* Related Articles Section */}
      <RelatedArticles articleId="article-3" />
    </ArticleLayout>
  );
}
