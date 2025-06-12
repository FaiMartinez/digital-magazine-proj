import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import SectionDivider from '../components/SectionDivider';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import Footer from '../components/Footer';

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
        <p>
          The top prospers while the bottom struggles. That is what Willy Brandt says when explaining his Brandt line. Well, not what he exactly said, but verbatim. This geographical split shows which countries during his time were the poor nations, and where are the rich.
        </p>
        
        <p>
          While I sense a little bit of racial supremacy, it is no denial that some of the countries in the bottom line are struggling more than most. In the contemporary times, where people are more connected, how does this help the ones who are behind? 
        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>Limited, but Still Here: The Presence of Low-Income Countries to the Internet</h2>
        <img src="images/articles/article1/techuse.png" alt="African selling cheap smartphones" />
        <p>
It is no denying that the least developed countries or LDCs still lacks infrastracture to support the internet as fast as we have. But their presence is undeniable in social media. They appear in my reels too once in a while.
Slowly but surely, the gap is closing. But the divide still exists, and we must acknowledge it.
       </p>
        <p>
        According to World Economic Forum (2024), 1.4 billion people worldwide live in the Least Developed Countries, but just 36% of them are connected online.
        That is good news, for digital technology influence all UN Sustainable Development Goals. However, it is not enough.
        </p>
        <p>
        But why is it not enough?        
        </p>
      </div>

      < SectionDivider />
      <div className="article-content">
        <h3>
        It boils down to three reasons: internet access, educational achievement and the policy environment.
        </h3>
        <img src="images/articles/article1/Internet Access.png" altText="A graph of internet access"></img>
        <p>
        Access to, and affordability and quality of, electricity and the internet are extremely limited in the LDCs. The LDC electrification rate is 52% (compared to a 90% global average), with more than 500 million people in the LDCs having no access to electricity.
        </p>
        <p>
        Although 83% of the 1.4 billion people who live in the LDCs are covered by mobile broadband signals (3G or above), only 36% are connected online. Coverage of fixed-line broadband remains abysmally low in LDCs, with only 1.6 subscriptions per 100 inhabitants in 2022. The price of a benchmark mobile broadband basket comprising a 2GB monthly allowance amounts to almost 6% of the average monthly income in the LDCs, four times the global average.         </p>
        <p>
        Moreover, the LDCs charge a hefty tariff on Information and Communication Technology products (six times the OECD average), including devices used for internet browsing. It costs 95% of an average monthly income in the LDCs to purchase a smartphone. 
        </p>
        <p>
        The LDCs in general have a lower level of educational attainment and skilled workforce trained on science, technology, engineering and mathematics (STEM). Worse still, their exposure to digital skills enhancement opportunities has been limited. 
        </p>
        <p>
        Many LDCs lack both enabling policies (e.g., to enhance affordability), which help the state, firms and individuals take advantage of the digital opportunities. They also lack mitigating policies (e.g., to protect privacy), which help overcome obstacles emanating from the use of digital technology.
        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
        <h2>So how do we close the gap?</h2>
        <p>With the help of open-source and grassroots projects, it will help the LDCs to learn and grow even with limited infrastracture. </p>
        <p>
        Unlike proprietary software, open-source tools are free to use, modify, and share. They empower communities to build their own solutions, tailored to local languages, needs, and realities. Projects like Ubuntu, Moodle, and OpenStreetMap have already transformed how people learn, plan, and work in places where budgets are tight and tech support is scarce. 
        </p>
        <p>
        Grassroots efforts make this even more powerful. In Nepal, OLE Nepal sends laptops with open educational resources into remote schools, powered by solar panels and supported by local teachers. According to Chairperson of OLE Nepal Prithivi Bahadur Pande, “We want to see all  children in Nepal get quality education within 10 years.”  
        </p>
        <p>
        Closing the digital divide won’t happen overnight, but with targeted investments in infrastructure and strong support for open, community-driven tools, it’s possible to build a more inclusive digital world. It starts with recognizing that connectivity is a right, not a privilege. And that the tools to bridge the gap are already in our hands.
        </p>
      </div>

      <div className="article-content">
        <p>

        </p>
      </div>
      
      {/* Emotion Poll Section */}
      <EmotionPoll articleId="article-1" />

      <HeartCounter articleId="article-1" />
      
      {/* Student Reflection Section */}
      <StudentReflection 
        name="Angelo Pimentel" 
        role="Writer"
        content="It saddens me that there are people who have no Internet access. But that's how the world works. You cannot have it all. But I am happy that there are initiatives being done for easier Internet access. We will never know when a genius will pop up inside one of the least developed countries, only hindered by the lack of Internet access."
      />
            {/* References Section */}
      <div className="article-content" style={{ marginTop: '3rem' }}>
        <h2>References</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            Adhikari, R., & Tesfachew, T. (2024, March 27). How to propel digital transformation in the least developed countries. <i>World Economic Forum</i>. <a href="https://www.weforum.org/stories/2024/03/unleashing-digital-transformation-in-the-least-developed-countries/" target="_blank" rel="noopener noreferrer">https://www.weforum.org/stories/2024/03/unleashing-digital-transformation-in-the-least-developed-countries/</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            The Himalayan Times. (2017, November 9). "Integrate ICT into education system" - The Himalayan Times - Nepal's No.1 English daily newspaper. <i>The Himalayan Times</i>. <a href="https://thehimalayantimes.com/kathmandu/integrate-ict-education-system" target="_blank" rel="noopener noreferrer">https://thehimalayantimes.com/kathmandu/integrate-ict-education-system</a>
          </li>
        </ol>
      </div>
      {/* Related Articles Section */}
      <RelatedArticles currentArticleId="article-1" />
      
      {/* Footer */}
      <Footer />
    </ArticleLayout>
  );
}