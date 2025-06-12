import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import Footer from '../components/Footer';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import articles from '../data/articles';
import SectionDivider from '../components/SectionDivider';

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
        The Internet is a wonderful place. It helps people all around the world connect with just simple taps on the screen. But it doesn't mean you can do anything without consequences. Laws and regulations must be applied in order to keep everyone safe, happy and content with using the Internet. But different countries apply different laws and regulations, so how does this interact with the everyday lives of the ordinary people? Let’s talk about it.
        </p>
        
        < SectionDivider/>

        

        <p>
        In the Internet age, technology is ever growing fast. So, people need to keep up. Government people. With everything new, they need to be able to keep making laws and regulations to ensure the safety of the citizens. But it’s hard to make standards when everyone across the world uses the growing webs of the Internet.
        </p>
        <p>
        Enter cyber diplomacy. Cyber diplomacy, according to The Institute of Public Policy & Diplomacy Research (Nakabugo, 2025), refers to using digital platforms, tools, and cyber policies to engage in diplomatic activities, for example, video conferencing, e-voting, and so much more. It encompasses a wide range of actions, including but not limited to facilitating dialogue between nations, promoting global norms for cyberspace governance, and addressing cross-border cyber threats, including hacking and misinformation.        
        </p>
        <p>
        In other words, cyber diplomacy is a word to describe how nations use the Internet to make diplomatic relations easier, but it can hold much more. Because of how easy it is to communicate with different countries, international laws regarding the Internet can be discussed much quicker to decide which one to implement. With how easy information can be accessed, countries can see which law works and which doesn’t.
        </p>
        <h3>
        Instead of explaining, why not show an example?
        </h3>
        <p>
        During the Paris Peace Forum on November 12, 2018, states, professional associations, civil society organizations, and major businesses like Google and Facebook (now Meta) have discussed to find solutions for the regulation in cyberspace, the practicability of international law, and the responsible behavior of States. This has led to the Paris Call for Trust and Security in Cyberspace.
        </p>
        <h3 style={{ marginBottom: '1.5rem' }}>
          The Paris Call for Trust and Security in Cyberspace has 9 key principles:
        </h3>
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '8px',
          padding: '1.5rem',
          margin: '1.5rem 0',
          borderLeft: '4px solid var(--primary)'
        }}>
          <ol style={{
            paddingLeft: '1.5rem',
            margin: 0,
            display: 'grid',
            gap: '1.25rem'
          }}>
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Protect Individuals and Infrastructure</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Prevent activities that intentionally damage critical infrastructure and ensure the protection of individuals online.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Protect the Internet</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Maintain the integrity, stability, and security of the core Internet infrastructure.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Defend Electoral Processes</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Strengthen our ability to prevent malign interference in democratic processes through cyber means.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Defend Intellectual Property</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Prevent the theft of intellectual property and trade secrets through cyber means.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Prevent Malicious Cyber Activities</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Halt the proliferation of malicious software and practices intended to cause harm.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Secure Digital Ecosystem</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Strengthen the security of digital processes, products, and services throughout their lifecycle and supply chain.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Enhance Cyber Hygiene</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Promote cybersecurity awareness and education, with special attention to protecting vulnerable groups, including children.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Prevent Non-State Hacking</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Prevent non-state actors from hacking back for their own purposes or those of others.
              </p>
            </li>
            
            <li style={{ padding: '0.75rem', backgroundColor: 'var(--bg-primary)', borderRadius: '6px' }}>
              <strong>Promote International Norms</strong>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Work together to develop and implement international norms of responsible state behavior in cyberspace.
              </p>
            </li>
          </ol>
        </div>
        <EmotionPoll articleId="article-3" />
        <p>
        This call has united 70+ countries and tech firms to establish norms without binding treaties—creating a "coalition of the willing" that operates parallel to traditional institutions.
        </p>
        <p>
        Despite best efforts to unite the world for a better Internet future, some countries different to what their priorities are. For example, in the United States alone, there is a divide among the liberal and the conservatives on what laws they implement. (Wheeler, 2023)
        </p>
        <p>
        In the conservative-led states like Iowa, Virginia and Utah, their data privacy laws tend to be business-friendly, like flexible compliance frameworks or stakeholder input. While in the liberal-led states like California, the laws revolve around consumers. Like strict standards, and hefty penalties for non-compliance.
        </p>
        <img src="images/articles/article3/dawprivlawch.png" alt="Data Privacy Law Chart" />
        <p>
        With different points of view in life, different laws and regulations are implemented to support different lifestyles. Because of this, it is hard to make a one-fits-all rule that will be followed by everyone. But communication has ever been easier for everyone. It won’t be long before a perfectly safe Internet environment can be achieved and be used by all.
        </p>
        <p>
        The digital age has created both unprecedented opportunities for global connection and complex challenges for governance that transcend traditional borders. As we've seen, cyber diplomacy has emerged as a vital tool for navigating these challenges, enabling nations to collaborate on Internet governance through initiatives like the Paris Call for Trust and Security in Cyberspace. However, the reality remains that different political ideologies, cultural values, and national priorities continue to shape how countries approach digital regulation. From the business-friendly frameworks of conservative US states to the consumer-focused protections in liberal jurisdictions.
        </p>
        <p>
        While achieving a universal "one-size-fits-all" approach to Internet governance may seem daunting given these fundamental differences, the ease of digital communication itself offers hope. The same technology that creates regulatory challenges also provides the platform for ongoing dialogue, knowledge sharing, and gradual consensus-building. As cyber diplomacy continues to evolve and mature, we may not need identical laws across all nations, but rather compatible frameworks that respect diverse values while maintaining the Internet's core promise of safe, secure global connectivity.
        </p>
        <p>
        The path forward lies not in forcing uniformity, but in fostering understanding, using the very digital tools that connect us to build a more secure and trustworthy cyberspace for everyone, one conversation at a time.
        </p>

      </div>
      < SectionDivider/>

      {/* Emotion Poll Section */}
      <HeartCounter articleId="article-3" />
      
      <StudentReflection 
        name="Angelo Pimentel" 
        role="Writer"
        content="
          <p>For me, it is interesting to see different views on the Internet and how it can be used for diplomacy. I also find it interesting to see how different countries have different views on the Internet and how it can be used for diplomacy. But I am skeptical to every country agreeing on the same laws and regulations. We will see in the future if everything will turn out well.</p>
          <p>For now, I am happy that the world is agreeing to keep the peace on the Internet, where everyone around the world interacts.</p>
        "
      />
      
      {/* References Section */}
      <div className="article-content" style={{ marginTop: '3rem' }}>
        <h2>References</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            Nakabugo, I. (2025, June 10). <i>Diplomacy in the digital age: The rise of cyber diplomacy</i>. IPPDR. <a href="https://ippdr.org/diplomacy-in-the-digital-age-the-rise-of-cyber-diplomacy/" target="_blank" rel="noopener noreferrer">https://ippdr.org/diplomacy-in-the-digital-age-the-rise-of-cyber-diplomacy/</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <i>What is cyber diplomacy?</i> What is Cyber Diplomacy? (n.d.). <a href="https://www.cyber-diplomacy-toolbox.com/Cyber_Diplomacy.html" target="_blank" rel="noopener noreferrer">https://www.cyber-diplomacy-toolbox.com/Cyber_Diplomacy.html</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Wheeler, J. (2023, November 7). <i>Exploring the political divide in U.S. privacy laws</i>. Didomi. <a href="https://www.didomi.io/blog/exploring-the-political-divide-in-u-s--privacy-laws" target="_blank" rel="noopener noreferrer">https://www.didomi.io/blog/exploring-the-political-divide-in-u-s--privacy-laws</a>
          </li>
        </ol>
      </div>

      {/* Related Articles Section */}
      <RelatedArticles currentArticleId="article-3" />
      
      {/* Footer */}
      <Footer />
    </ArticleLayout>
  );
}
