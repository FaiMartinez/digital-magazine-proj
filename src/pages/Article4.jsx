import React from 'react';
import ArticleLayout from '../components/ArticleLayout';
import EmotionPoll from '../components/EmotionPoll';
import Footer from '../components/Footer';
import StudentReflection from '../components/StudentReflection';
import HeartCounter from '../components/HeartCounter';
import RelatedArticles from '../components/RelatedArticles';
import articles from '../data/articles';
import SectionDivider from '../components/SectionDivider';

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
        <p>In today’s hyperconnected world, media is no longer confined by geography. Whether it’s a viral TikTok from Seoul, a political livestream from Manila, or a Netflix series from Madrid, content travels faster and farther than ever before. This is the reality of global media culture, a digital ecosystem where ideas, images, and voices transcend borders.</p>
      </div>

      < SectionDivider />

      
      <div className="article-content">
        <p>
        Fueled by smartphones, high-speed internet, and social media platforms, global media culture has reshaped how we communicate, learn, and define ourselves. It connects us to cultures we’ve never visited and movements we’ve never seen, influencing everything from fashion and slang to activism and belief systems.  
        </p>        
        <p>
        But this global flow is a double-edged sword. While it enables cross-cultural exchange and elevates diverse perspectives, it also raises pressing concerns: Are we losing our local identities to global trends? Who controls the content we see? How do we separate fact from fiction in a sea of information?
        </p>
        <p>
        Understanding global media culture means understanding not just what we watch, but how it shapes the way we think, behave, and belong in a rapidly evolving digital world. <b>(Stasberger, 2023)</b>
        </p>
      </div>

      <div className="article-content">
      <h2>Algorithm Nations: How Social Media Fuels Disinformation and Distorts Culture</h2>
        <img src="images/articles/article4/algonation.jpg" alt="Algorithm Nations" />
        <p>
        In the digital age, what we see is not always what is true. And more importantly, what we see is often what social media platforms want us to see.        </p>        
        <p>
        But this global flow is a double-edged sword. While it enables cross-cultural exchange and elevates diverse perspectives, it also raises pressing concerns: Are we losing our local identities to global trends? Who controls the content we see? How do we separate fact from fiction in a sea of information?
        </p>
        <p>
        A recent pair of investigations by Reuters and EngageMedia reveal how algorithms and artificial intelligence are fueling a powerful new wave of disinformation. The impacts are global, but the damage is deeply personal: reshaping political opinions, rewriting historical truths, and reinforcing harmful stereotypes.        </p>
      </div>

      < SectionDivider />

      <div className="article-content">
      <h2>Engineered Virality: The Philippine Disinformation Machine</h2>
        <p>
        In a country where over 75 million Filipinos use social media, platforms like Facebook, TikTok, and X (formerly Twitter) have become the main source of news, especially for the youth. But what many don’t realize is that what trends on these platforms isn't always organic, it’s often engineered. But this global flow is a double-edged sword. While it enables cross-cultural exchange and elevates diverse perspectives, it also raises pressing concerns: Are we losing our local identities to global trends? Who controls the content we see? How do we separate fact from fiction in a sea of information?
        </p>
        <p>
        The Reuters investigation (April 2025) uncovered a disturbing network of fake social media accounts used to manipulate public opinion in the Philippines. These bots, many of them powered by artificial intelligence, flooded social media with praise for former President Rodrigo Duterte as he faced investigation by the International Criminal Court (ICC) over his deadly drug war.
        </p>
        <p>
        Over 30% of the online conversation around Duterte and the ICC was found to be inauthentic. Driven by copy-pasted posts, AI-written defenses, and mass retweeting. These accounts didn’t just post once, they posted at scale, in waves, using tactics that exploited platform algorithms to reach millions.        </p>
        <p>
        And this isn’t a new strategy. Duterte’s rise to power in 2016 was already backed by an aggressive social media campaign. What’s different now is the technological sophistication of the deception: AI-generated text, cloned voices, and fake accounts that blend seamlessly with real users.        </p>
        <p>
        What makes this particularly dangerous is how social media algorithms reward engagement over truth. When a bot army floods Facebook or TikTok with pro-Duterte content, the algorithm sees it as “popular” and amplifies it to more people, regardless of whether it’s misleading or fake. Users then engage with it: liking, sharing, commenting which further boosts the post in others’ feeds.
        </p>
        <p>
        This creates an illusion of consensus: that Duterte is widely supported, that critics are “biased,” and that the ICC is just a political tool. It becomes hard for the average person to separate real sentiment from manufactured support.        
        </p>
        <p>
        Now that the 2025 Philippine midterm elections have concluded, it’s clear that these tactics extended far beyond any single political figure. The Reuters report revealed that nearly 45% of online election content was likely artificially manipulated used to amplify propaganda, attack opposition candidates, and distort public narratives.        </p>
        <p>
        In this digital battleground, algorithms acted as unseen kingmakers. They didn’t just reflect public opinion, they actively shaped it, favoring content that provoked strong reactions, regardless of its truthfulness. The result? A political landscape increasingly influenced by algorithmic bias and manufactured consensus, rather than informed civic debate.
        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>Deepfakes, Distortion, and the Rise of AI Misinformation</h2>
        <p>
        Meanwhile, the 2023 EngageMedia report zooms in on the threat of AI-generated misinformation in the Philippines, particularly its effect on Gen Z and millennials. Youth journalist Kyle Marcelino shares how AI tools are being used to create fake videos, altered headlines, and even voice recordings impersonating public figures.        </p>
        <p>
        These aren't just tech pranks. They're tools of political manipulation and cultural distortion.        </p>
        <p>
        One alarming case: Filipino youth believed that AI-edited scenes from a José Rizal film were historical footage. This reveals how algorithms can revive cultural stereotypes and revisionist narratives disguised as entertainment or education.        And this isn’t a new strategy. Duterte’s rise to power in 2016 was already backed by an aggressive social media campaign. What’s different now is the technological sophistication of the deception: AI-generated text, cloned voices, and fake accounts that blend seamlessly with real users.        </p>
        <p>
        And again, platform algorithms are complicit. If a deepfake gets more likes, shares, and comments, it’s boosted. And it doesn’t matter whether it’s false or not.
        </p>        
      </div>

      < SectionDivider />
      <div className="article-content">
      <h2>🌏 Algorithms and the Global Spread of Cultural Stereotypes</h2>
        <p>
        What happens in the Philippines isn’t isolated.       
        </p>
        <p>
        Across the globe, algorithms are flattening local cultures into viral caricatures. Think of how Asian societies are often reduced to food, K-pop, or authoritarianism online, or how Western narratives dominate what’s "trending" globally.        
        </p>
        <p>
        In the Philippines, this algorithmic influence turns political tensions into internet entertainment. It promotes strongman imagery, glorifies historical revisionism, and sidelines indigenous or nuanced voices.
        </p>
        <p>
        Platforms like Facebook, YouTube, TikTok, and X are global engines—but they rarely reflect the rich diversity or complexity of local culture. Instead, they incentivize repetition of stereotypes that get the most clicks.
        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>Plugged In and Politicized: How Global Media Culture Shapes Filipino Youth Online</h2>
        <img src="images/articles/article4/plugandpol.jpg" alt="Plugged In and Politicized" />
        <p>
        In the Philippines, youth are no longer just scrolling through social media, they are reshaping democracy in real time.
        </p>
        <p>
        From the 2022 elections to the historic 2025 midterms, Filipino Gen Z and Millennials have emerged as hyper-connected political agents, guided by both local struggles and global media culture. Their identities are no longer formed solely in homes, classrooms, or communities, they are crafted in hashtags, livestreams, memes, and TikTok explainers.        
        </p>
        <p>
        But how did we get here?        
        </p>
      </div>
      
      {/* Emotion Poll Section */}
      <EmotionPoll articleId="article-4" />
      <div className="article-content">
      <h2>🌐 The Global Media Mirror: Reflecting—and Shaping—Digital Identity</h2>
        <p>
        The average Filipino youth spends upwards of 8–10 hours per day online, much of that time engaged with platforms shaped by global media logic: YouTube, TikTok, Instagram, and X (formerly Twitter). These are not neutral spaces, they are algorithmic ecosystems built to reward virality, visibility, and engagement.
        </p>
        <p>
        The result? Filipino youth absorb, remix, and participate in trends that often originate in Western or East Asian cultural hubs. Korean pop, American influencer culture, Japanese aesthetics, and meme formats from global subcultures. These trends heavily shape how they present themselves online: through curated Instagram aesthetics, stylized TikTok humor, or short-form political rants inspired by global protest culture.
        </p>
        <p>
        This influence is more than surface-level. As Britanico’s 2025 study shows, Gen Z and Millennials in the Philippines are using digital spaces to forge identities that are both globally aware and politically grounded. Their political behavior. What they share, like, post, or challenge is inseparable from the media culture that trained them to be quick-thinking, meme-literate, and advocacy-driven.        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>📱 From Meme to Movement: Online Behavior in the 2025 Elections</h2>
        <p>
        The average Filipino youth spends upwards of 8–10 hours per day online, much of that time engaged with platforms shaped by global media logic: YouTube, TikTok, Instagram, and X (formerly Twitter). These are not neutral spaces, they are algorithmic ecosystems built to reward virality, visibility, and engagement.
        </p>
        <p>
        The result? Filipino youth absorb, remix, and participate in trends that often originate in Western or East Asian cultural hubs. Korean pop, American influencer culture, Japanese aesthetics, and meme formats from global subcultures. These trends heavily shape how they present themselves online: through curated Instagram aesthetics, stylized TikTok humor, or short-form political rants inspired by global protest culture.
        </p>
        <p>
        This influence is more than surface-level. As Britanico’s 2025 study shows, Gen Z and Millennials in the Philippines are using digital spaces to forge identities that are both globally aware and politically grounded. Their political behavior. What they share, like, post, or challenge is inseparable from the media culture that trained them to be quick-thinking, meme-literate, and advocacy-driven.        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>🧠 From Passive Consumers to Purposeful Citizens</h2>
        <p>
        What’s remarkable is that this generation, raised on global media, has not simply copied foreign behavior. Instead, they have localized global media formats to fit Filipino realities. Their livestreamed debates may mimic U.S. political YouTubers, but the issues they tackle: typhoon recovery, disinformation, dynastic elites. They are uniquely their own.
        </p>
        <p>
        And their impact didn’t stop online. As Britanico notes, Filipino youth went offline too—knocking on doors, volunteering in underserved communities, and translating digital campaigns into house-to-house conversations.        </p>
        <p>
        This hybrid activism, online fluency paired with grassroots engagement, signals a new type of citizenship. It’s informed by global media, but rooted in local values. It’s performative, yet substantive. It’s memetic, but mission-driven.
        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>⚖️ The Double-Edged Sword of Global Influence</h2>
        <p>
        Of course, not all outcomes are positive.
        </p>
        <p>
        The same global media systems that empower also polarize. As the Kyoto Review warns, algorithmic incentives can amplify misinformation, reinforce political echo chambers, and breed performative activism. When Filipino youth imitate global influencers, they sometimes adopt harmful standards of beauty, success, or extremism reshaping self-worth and public discourse.
        </p>
        <p>
        Still, the evidence suggests that Filipino youth are increasingly aware of this tension. Many are learning to use social media not for vanity, but for voice. Not just to scroll, but to speak out.        </p>
      </div>
      < SectionDivider />

      <div className="article-content">
      <h2>🌱 A Generation Ready to Lead</h2>
        <p>
        The 2025 midterms were more than an election, they were a coming-of-age moment for the Philippines’ digital generation. They proved that memes and movement-building aren’t mutually exclusive. That TikTok can be a platform for both dance trends and democratic accountability. That identity online isn’t just about who you are, it’s about what you stand for.
        </p>
        <p>
        As global media continues to influence youth behavior in developing nations, the story of the Filipino youth offers hope: that digital culture can be a tool not just for consumption, but for change.        </p>
        <p><b>(Marcelino, K. N. (2023); Britanico, 2025)</b></p>
      </div>
      < SectionDivider />
      
      
      <HeartCounter articleId="article-4" />
      
      {/* Student Reflection Section */}
      <StudentReflection 
        name="Angelo Pimentel" 
        role="Editor"
        content="This shows how powerful global media can be in shaping the behavior of youth in developing nations. It may be used for malicious intent, but it can also inspire other people to do what is right. 
        It also shows how important it is to be aware of the impact of global media on youth behavior. Right, wrong, it does both. What truly matters is how you use it.
        How you will it, how you intend to make it worth your time, worth everyone's time. That's what matters. "
      />

<div className="article-content" style={{ marginTop: '3rem' }}>
        <h2>References</h2>
        <ol style={{ paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            Stasberger, G. (2023). <i>Media Globalization: Connecting the World through Information and Culture</i>. Retrieved from{' '}
            <a 
              href="https://www.globalmediajournal.com/open-access/media-globalization-connecting-the-world-through-information-and-culture.php?aid=93431"
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.globalmediajournal.com/open-access/media-globalization-connecting-the-world-through-information-and-culture.php
            </a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Mcpherson, P. (2025, April 11). <i>Exclusive: Fake accounts drove praise of Duterte and now target Philippine election</i>. Reuters.{' '}
            <a 
              href="https://www.reuters.com/world/asia-pacific/fake-accounts-drove-praise-duterte-now-target-philippine-election-2025-04-11/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://www.reuters.com/world/asia-pacific/fake-accounts-drove-praise-duterte-now-target-philippine-election-2025-04-11/
            </a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Manager, S. (2023). <i>Mobilizing yet polarizing: Social media youth engagement in the 2022 Philippine elections</i> - Kyoto Review of Southeast Asia. Retrieved from{' '}
            <a 
              href="https://kyotoreview.org/issue-36/social-media-youth-engagement-in-the-2022-philippine-elections/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://kyotoreview.org/issue-36/social-media-youth-engagement-in-the-2022-philippine-elections/
            </a>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            Marcelino, K. N. (2023). <i>Machine-made deception: Dangers of AI-powered disinformation in Philippine social media</i>. EngageMedia.{' '}
            <a 
              href="https://engagemedia.org/2023/youth-philippines-disinformation/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://engagemedia.org/2023/youth-philippines-disinformation/
            </a>
          </li>
        </ol>
      </div>
      
      {/* Related Articles Section */}
      <RelatedArticles currentArticleId="article-4" />
      
      {/* Footer */}
      <Footer />
    </ArticleLayout>
  );
}
