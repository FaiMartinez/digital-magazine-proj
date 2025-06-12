import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import DataVisualization from '../components/DataVisualization';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import SectionDivider from '../components/SectionDivider';
import Footer from '../components/Footer';
import articles from '../data/articles';

export default function Article2() {
  const article = articles.find(a => a.id === 'article-2');
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

      {/* Main Content */}
      <div className="article-content">
      <p><b>Overview:</b> Computer scientists play a central role in designing digital systems that underpin national and international governance. Their work on encryption, cybersecurity, algorithmic fairness, and transparency tools is helping create systems that are secure, auditable, and ethical.</p>
      </div>

      <SectionDivider />

      {/* Part 1 Content */}
      <div className="article-content">
      <h2>The Digital Spine: Inside X-Road, the Engine of Estonia's E-Society</h2>
        <p>Imagine a country where government services are so efficient they feel invisible, where filing taxes takes less than five minutes, and every citizen can see exactly which official has accessed their personal data, and why. This isn't a futuristic dream; it's daily life in Estonia, a reality powered by a revolutionary platform called X-Road.</p>
        <img src="images/articles/article2/xroad.jpeg" alt="Estonia X-Road" />
        <p>Launched in 2001, X-Road is the secure data exchange layer that forms the backbone of e-Estonia. It isn't a massive, centralized super-database that holds all citizen information. Instead, it functions as a decentralized and distributed digital highway, allowing hundreds of separate public and private sector databases to communicate and exchange information securely in real-time. This ingenious design means data remains safe in its original location, and it enshrines the "once-only" principle: citizens provide information to the government just once, and various departments can then securely retrieve it when needed.</p>
        <p>The impact on daily life is profound. This seamless interoperability powers over 3,000 essential digital services. A doctor can instantly issue an e-Prescription that any pharmacy can access; a police officer can verify a driver's license and insurance information during a traffic stop in seconds. This efficiency is estimated to save the country an incredible 1,407 years of working time annually.</p>
        <p>However, the true power of X-Road lies in its ability to build trust through radical transparency. Every data query is digitally signed, encrypted, and automatically logged. Through the state portal, eesti.ee, citizens can easily monitor who has accessed their data, making any potential misuse traceable. This system fundamentally repositions citizens as the true owners of their information.</p>
        <p>The "secret sauce" behind this success isn't just technology; it's the combination of sustained political will and a robust legal framework that gives digital identity and signatures the same legal standing as their handwritten counterparts. As a proven, open-source model, X-Road's influence is going global, with versions of the technology now adopted by over 20 countries, including Finland, Iceland, and Japan. It stands as a powerful blueprint for any nation seeking to build a more efficient, secure, and trustworthy government for the digital age.</p>
        <p>Estonia's digital government is powered by X-Road, an open-source platform that connects private and public databases. The system ensures transparency by logging every data request, making it traceable and accountable. Over 25 countries are now exploring or using X-Road, including Finland and Namibia <b>(Hirdaramani, 2023)</b>.</p>
      </div>


      
      {/* Part 2 Content */}
      <div className="article-content">
        <h2>Ukraine's Digital Lifeline: How an App Sustains a Nation at War</h2>
        <img src="images/articles/article2/diia.jpg" alt="Diia" />
        <p>Amid the chaos of war, with 14 million of its people displaced, Ukraine has leaned on an unexpected pillar of strength: its state-of-the-art digital infrastructure. For millions who fled their homes, the ability to access identity papers, health records, and financial aid through a government phone app has been a critical tool for survival and a testament to the nation's resilience.</p>
        <p>This digital fortress wasn't built overnight. It is the result of a decade-long transformation, heavily influenced by Estonia’s world-leading e-government model. The journey began with anti-corruption tools like the Prozorro e-procurement platform in 2015, which paved the way for more ambitious projects.</p>
        <p>Under President Zelensky’s reform agenda, these efforts culminated in Diia, an all-in-one mobile application launched in 2020. Built on an interoperable data system, Diia provides citizens with seamless access to government services.</p>
        <img src="images/articles/article2/etools.png" alt="eTools" />
        <p>When the invasion began, this existing digital capacity allowed Ukraine to adapt rapidly. The war itself catalyzed further innovation, including a shift to secure cloud storage and the acceptance of Ukrainian digital credentials across Europe. Proving indispensable for its own citizens, Ukraine is now sharing its Diia technology with other governments, turning a tool for wartime survival into a global model for digital governance.</p>
        <p>Launched in 2020, Diia is Ukraine’s all-in-one e-government app. Ukrainians use it to pay taxes, apply for aid, and access government services. During wartime, it even served as a tool for national coordination. With over 22 million users, Diia shows how digital governance can be resilient and citizen-centered <b>(Ingram & Vora, 2024).</b></p>
        
      </div>
      {/* Emotion Poll Section */}
      <EmotionPoll articleId="article-2" />
      <SectionDivider />

      {/* Part 3 Content */}
       <div className="article-content">
        <h2>Digital Empires: How Big Tech Erodes the Sovereignty of Nations</h2>
        <img src="images/articles/article2/BigTechTrump3.jpg" alt="Diia" />
        <p>Global tech monopolies like Google and Meta have amassed power that rivals that of nation-states, not just in wealth—with a combined revenue surpassing $1.5 trillion in 2023—but in their ability to shape global policy. This immense influence has profound and troubling implications for the sovereignty of smaller nations, effectively creating a new world order where corporate power can override democratic governance.</p>
        <p>The most direct implication is the erosion of national lawmaking, as Big Tech now actively works to undermine sovereign governments. In a clear political shift, Meta's Mark Zuckerberg and X's Elon Musk have aligned with an anti-regulation agenda. This was seen when they mobilized an aggressive lobbying campaign in Brazil, using their own platforms to manipulate public perception and successfully block a "Fake News Bill" aimed at regulating their activities. This demonstrates a direct challenge to a nation's ability to govern itself.</p>
        <p>This issue, however, runs deeper than just passing laws. While smaller nations possess "digital sovereignty"—the theoretical right to govern their digital spaces—they often lack "digital agency," which is the practical capacity to act. They become "rule-takers" rather than rule-makers, forced to adapt to policies set in Silicon Valley because they depend on the critical digital infrastructure these companies control.</p>
        <p>This dependency is solidified through a modern form of digital colonialism, where tech monopolies embed themselves into the critical infrastructure of smaller nations to create long-term reliance. In Brazil, the federal government relies on Microsoft for cloud and email services, while in Argentina and Mexico, Google and Microsoft dominate educational platforms. This gives them enormous leverage; for instance, after Brazilian universities grew reliant on its services, Google abruptly ended its unlimited free cloud storage, forcing them to pay and creating a virtual monopoly on the region's knowledge economy.</p>
        <p>Ultimately, this combination of political influence and infrastructural control leads to the dawn of what one source calls an "AI-Cracy"—a system where unelected tech billionaires govern digital spaces through algorithms, economic coercion, and technological dependence. This form of oligarchic power operates like an extraterritorial entity, shaping elections and public debate beyond the control of democratic institutions and leaving smaller nations as corporate-controlled digital colonies. <b>(Cugler, 2025)</b></p>
      </div>

      <div className="article-content">
        <h2>Pioneering Digital Governance: The 25 Nations at the Forefront of E-Government </h2>
        <p>In an increasingly hyperconnected world, the shift to digital public services has become a cornerstone of modern governance, promising greater efficiency and transparency. This digital transformation not only cuts operational costs but also saves valuable time for the public, who can complete procedures from home. A recent study evaluated nine key online services—including e-residency, passport renewal, and online voting—to rank the top 25 countries in e-government.</p>
        <img src="images/articles/article2/scewc-top-countries-e-government_1.png" alt="Top Countries E-Government" />
        <h3>The Leaders of the Pack</h3>
        <p>The United Kingdom emerges as the global leader, with an e-government score of 95.3 percent. Through its centralized portal, www.gov.uk, citizens can easily access all services. The UK has digitized nearly all analyzed services, with the exceptions being e-residency and online voting.
New Zealand ranks second with a score of 92.1 percent, providing citizens with a wide range of public services through its RealMe system. While e-residency is not yet implemented, company registration can be completed within 24 hours.
Japan is third with an 88.8 percent score, making it the leading Asian country in e-government. Japan accelerated its digitization efforts following the pandemic using its "My Number" system.
</p>
      <p>New Zealand ranks second with a score of 92.1 percent, providing citizens with a wide range of public services through its RealMe system. While e-residency is not yet implemented, company registration can be completed within 24 hours.</p>
      <p>Japan is third with an 88.8 percent score, making it the leading Asian country in e-government. Japan accelerated its digitization efforts following the pandemic using its "My Number" system.</p>
      <h3>European and Asian Nations Dominate</h3>
      <p>European and Asian countries fill the remaining top positions. The Netherlands and Denmark rank just ahead of Singapore and Saudi Arabia with scores around 84 percent. Saudi Arabia, in sixth position with a score of 84.2 percent, enables access to all online services via its Absher platform.</p>
      <h3>Estonia: A Digital Pioneer</h3>
      <p>Estonia, ranking seventh with a score of 82.8 percent, stands out as a trailblazer. It is the only leading country to offer e-residency, a program it started in 2014, and is also the only nation where online voting is fully implemented for all elections, including for the European Parliament. Pushing the boundaries even further, Estonia was also the first country to implement digital marriages in 2023 and digital divorces in 2024.</p>
      <h3>Global Reach and Key Trends</h3>
      <p>The United States is the top American country, ranking eleventh with a score of 76.2 percent. China holds a score of 73.1 percent, though some processes like visa applications still require an in-person step. The most commonly digitized services across all 25 countries are individual and company registration, tax payments, and digital signatures. Despite challenges, the development of e-government continues to evolve, driven by the significant improvements it brings to public services. <b>(Smart City Expo World Congress, 2025)</b></p>
    </div>

      <SectionDivider />
      <HeartCounter articleId="article-2" />
      
      {/* Student Reflection Section */}
      <StudentReflection 
        name="Leonardo Chavez" 
        role="Writer"
        content="
          <p>This research opened my eyes to many important realizations. In today's digital age, technology plays a more critical role than ever before. As a result, global governance is also evolving to meet the demands of the digital era. E-governance is gaining significant attention as many countries transition toward more seamless and digitized public services.</p>
          
          <p>Leading nations such as Estonia, the United Kingdom, Japan, New Zealand, and others have digitized nearly all aspects of government operations including online voting, tax payments, digital passports, e-residency programs, centralized college applications, and more. However, these advancements come with serious challenges, particularly concerning data privacy and security.</p>          
          <p>Through this research, I came to understand that governance in the digital age isn't just about government policies, it's also about who controls your data, what content you see, and who has access to digital services. I once heard in a podcast that the real superpowers today are no longer just countries like the U.S. or China, but Big Tech companies and artificial intelligence.</p>
          
          <p>Corporations like Meta (by Mark Zuckerberg) and X (formerly Twitter, by Elon Musk) have amassed power that rivals that of nation-states and their ability to influence global policies. These companies have been known to interfere with government policymaking which often use lobbying campaigns to sway decisions in their favor.</p>
          
          <p>This level of influence is deeply concerning, especially when we consider how much control they have over personal data, data we often do not fully understand how they collect, use, or share. As future computer scientists we carry a significant responsibility. It is our duty to design systems that protect individual rights, promote transparency, and ensure accountability from the powerful tech platforms that shape the digital world.</p>
          
          <p>In conclusion, global governance today goes beyond governments, it now includes powerful tech companies that influence policies, control data, and shape digital experiences. As we move deeper into the digital age, governance must focus on protecting rights, ensuring transparency, and promoting accountability. This reflection made me realize that future tech professionals have a vital role in building systems that serve people not just locally but globally.</p>
        "
      />
      
      {/* References Section */}
      <div className="article-content" style={{ marginTop: '3rem' }}>
        <h2>References</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            Hirdaramani, Y. (2023, March). Estonia's X Road: Data exchange in the world's most digital society. <i>GovInsider</i>. <a href="https://govinsider.asia/intl-en/article/estonias-x-road-data-exchange-in-the-worlds-most-digital-society" target="_blank" rel="noopener noreferrer">https://govinsider.asia/intl-en/article/estonias-x-road-data-exchange-in-the-worlds-most-digital-society</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Ingram, G., & Vora, P. (2024, January 30). Ukraine: Digital resilience in a time of war. <i>Brookings</i>. <a href="https://www.brookings.edu" target="_blank" rel="noopener noreferrer">https://www.brookings.edu</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Cugler, E. (2025, January 31). Big Tech's global crusade against regulation. <i>Progressive</i>. <a href="https://progressive.org/latest/big-techs-global-crusade-against-regulation-cugler-20250131/" target="_blank" rel="noopener noreferrer">https://progressive.org/latest/big-techs-global-crusade-against-regulation-cugler-20250131/</a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Smart City Expo World Congress. (2025). The 25 countries leading in e-government: Paving the way for efficiency and transparency. <i>Smart City Expo World Congress</i>. <a href="https://www.smartcityexpo.com/the-25-countries-leading-in-e-government-paving-the-way-for-efficiency-and-transparency/" target="_blank" rel="noopener noreferrer">https://www.smartcityexpo.com/the-25-countries-leading-in-e-government-paving-the-way-for-efficiency-and-transparency/</a>
          </li>
        </ol>
      </div>
      
      {/* Related Articles Section */}
      <RelatedArticles currentArticleId="article-2" />
      
      {/* Footer */}
      <Footer />
    </ArticleLayout>
  );
}
