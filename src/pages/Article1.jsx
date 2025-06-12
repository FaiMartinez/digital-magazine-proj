import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import DataVisualization from '../components/DataVisualization';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';

import { useParams } from 'react-router-dom';
import articles from '../data/articles';

export default function Article1() {
  const { id = 'article-1' } = useParams();
  const article = articles.find(article => article.id === id) || {};
  
  const formattedDate = new Date(article.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <ArticleLayout title={article.title || 'Article'}>
      <div className="article-content">
        <p>
          The digital publishing landscape is undergoing a significant transformation, driven by evolving reader expectations and technological advancements. As we move further into the digital age, publishers are finding innovative ways to engage audiences through interactive content, personalized experiences, and immersive storytelling.
        </p>
        
        <h2>The Rise of Interactive Content</h2>
        <p>
          Interactive elements such as quizzes, polls, and multimedia integrations are becoming standard in digital publications. These features not only engage readers but also provide valuable insights into audience preferences and behaviors.
        </p>
      </div>
      
      {/* Emotion Poll Section */}
      <EmotionPoll articleId="article-1" />
      
      {/* Data Visualization Section */}
      <DataVisualization 
        title="Article Engagement Over Time"
        imageSrc="/images/engagement-chart.png"
        alt="Bar chart showing article engagement growth from 2019 to 2023"
      />
      
      {/* Author, Date, and Read Time */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '2rem',
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
        <h2>Personalization and AI</h2>
        <p>
          Artificial intelligence is enabling publishers to deliver personalized content recommendations, adaptive layouts, and even dynamic pricing models. These advancements are creating more relevant and engaging experiences for readers while helping publishers better understand their audience.
        </p>
        
        <h2>Accessibility and Inclusivity</h2>
        <p>
          Digital publishing is becoming more accessible than ever before, with features like screen reader compatibility, adjustable text sizes, and alternative text for images. These improvements ensure that content is available to all readers, regardless of their abilities or devices.
        </p>
      </div>
      
      <HeartCounter articleId="article-1" />
      
      {/* Student Reflection Section */}
      <StudentReflection 
        name="Alex Johnson" 
        role="Digital Media Student"
        content="Working on this article gave me valuable insights into the evolving nature of digital publishing. The most fascinating aspect was learning how AI is being used to create more personalized reading experiences. It's exciting to think about how these technologies will continue to shape the way we consume content in the future."
      />
      
      {/* Related Articles Section */}
      <RelatedArticles currentArticleId="article-1" />
    </ArticleLayout>
  );
}