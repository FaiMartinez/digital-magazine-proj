import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import DataVisualization from '../components/DataVisualization';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import articles from '../data/articles';

export default function Article4() {
  const article = articles.find(a => a.id === 'article-4');
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
        <p>Building a dedicated audience is essential for the success of any digital publication. In this article, we'll explore effective strategies to grow and engage your readership.</p>
        
        <h2>1. Create Valuable Content</h2>
        <p>The foundation of audience building is consistently delivering high-quality, valuable content. Focus on solving problems, answering questions, and providing unique insights that resonate with your target audience.</p>
        
        <h2>2. Leverage Social Media</h2>
        <p>Promote your content across relevant social media platforms where your target audience spends time. Engage with your followers, participate in discussions, and build relationships with other creators in your niche.</p>
      </div>

      {/* Emotion Poll Section */}
      <EmotionPoll articleId="article-4" />
      
      <div className="article-content">
        <h2>3. Build an Email List</h2>
        <p>Email remains one of the most effective ways to maintain a direct connection with your audience. Offer valuable lead magnets and consistently deliver quality content to keep your subscribers engaged.</p>
        
        <h2>4. Optimize for SEO</h2>
        <p>Improve your content's visibility in search engines by implementing SEO best practices. Research relevant keywords, optimize your headlines and meta descriptions, and build quality backlinks to increase organic traffic.</p>
      </div>

      {/* Data Visualization Section */}
      <DataVisualization 
        title="Audience Growth Metrics"
        imageSrc="/images/audience-growth.png"
        alt="Chart showing audience growth and engagement metrics"
      />

      <div className="article-content">
        <h2>5. Engage with Your Community</h2>
        <p>Building a community around your publication fosters loyalty and encourages word-of-mouth promotion. Respond to comments, ask for feedback, and create opportunities for your readers to connect with you and each other.</p>
      </div>
      
      <HeartCounter articleId="article-4" />
      
      {/* Student Reflection Section */}
      <StudentReflection 
        name="Jordan Lee" 
        role="Marketing Student"
        content="The strategies outlined in this article have been game-changers for our student publication. We've seen a 40% increase in our readership since implementing these techniques, particularly focusing on community engagement and social media. The data visualization helped us identify which platforms were most effective for our target audience."
      />
      
      {/* Related Articles Section */}
      <RelatedArticles currentArticleId="article-4" />
    </ArticleLayout>
  );
}
