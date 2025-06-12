import React, { useState, useEffect } from 'react';
import { ref, get, set, onValue, update, serverTimestamp } from 'firebase/database';
import { database } from '../firebase';

export default function EmotionPoll({ articleId = 'default-article' }) {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteCounts, setVoteCounts] = useState({
    happy: 0,
    sad: 0,
    angry: 0,
    surprised: 0,
    thoughtful: 0
  });

  const emotions = [
    { id: 'happy', label: '😊 Happy', color: '#FFD700' },
    { id: 'sad', label: '😢 Sad', color: '#1E90FF' },
    { id: 'angry', label: '😠 Angry', color: '#FF4500' },
    { id: 'surprised', label: '😲 Surprised', color: '#9370DB' },
    { id: 'thoughtful', label: '🤔 Thoughtful', color: '#32CD32' }
  ];

  // Set up real-time listener for vote counts
  useEffect(() => {
    const votesRef = ref(database, `emotionPolls/${articleId}/votes`);
    
    // Set up real-time listener
    const unsubscribe = onValue(votesRef, (snapshot) => {
      if (snapshot.exists()) {
        setVoteCounts(snapshot.val());
      }
      setIsLoading(false);
    }, (error) => {
      console.error('Error fetching vote counts:', error);
      setError('Failed to load vote counts');
      setIsLoading(false);
    });

    // Check if user has already voted
    const userVote = localStorage.getItem(`emotionVote_${articleId}`);
    if (userVote) {
      setSelectedEmotion(userVote);
      setHasVoted(true);
    }

    return () => unsubscribe();
  }, [articleId]);

  const handleVote = async (emotion) => {
    if (hasVoted) return;
    
    try {
      setIsLoading(true);
      setSelectedEmotion(emotion);
      
      // Update the vote count in Firebase
      const voteRef = ref(database, `emotionPolls/${articleId}/votes/${emotion}`);
      const snapshot = await get(voteRef);
      const currentCount = snapshot.val() || 0;
      
      await set(voteRef, currentCount + 1);
      
      // Update the last updated timestamp
      await update(ref(database, `emotionPolls/${articleId}`), {
        lastUpdated: serverTimestamp()
      });
      
      // Mark as voted in localStorage
      localStorage.setItem(`emotionVote_${articleId}`, emotion);
      setHasVoted(true);
    } catch (error) {
      console.error('Error submitting vote:', error);
      setError('Failed to submit your vote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0);

  if (isLoading && !hasVoted) {
    return <div className="emotion-poll">Loading emotions...</div>;
  }

  if (error) {
    return <div className="emotion-poll error">{error}</div>;
  }

  return (
    <div className="emotion-poll">
      <h3>How does this article make you feel?</h3>
      <div className="emotion-buttons">
        {emotions.map(emotion => {
          const count = voteCounts[emotion.id] || 0;
          const percentage = totalVotes > 0 
            ? Math.round((count / totalVotes) * 100) 
            : 0;
            
          return (
            <button
              key={emotion.id}
              onClick={() => handleVote(emotion.id)}
              disabled={hasVoted || isLoading}
              className={`emotion-button ${selectedEmotion === emotion.id ? 'selected' : ''}`}
              style={{
                '--emotion-color': emotion.color,
                '--emotion-bg': `${emotion.color}33`,
                position: 'relative',
                overflow: 'hidden'
              }}
              aria-label={`Vote ${emotion.id}`}
            >
              <span style={{ position: 'relative', zIndex: 2 }}>
                {emotion.label.split(' ')[0]}
              </span>
              {hasVoted && (
                <>
                  <span 
                    className="vote-percentage"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      zIndex: 2,
                      background: 'rgba(0,0,0,0.7)',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      fontSize: '0.8em',
                      color: 'white'
                    }}
                  >
                    {percentage}%
                  </span>
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: `${percentage}%`,
                      backgroundColor: `${emotion.color}33`,
                      zIndex: 1,
                      transition: 'width 0.3s ease'
                    }}
                  />
                </>
              )}
            </button>
          );
        })}
      </div>
      {hasVoted && (
        <p className="vote-thanks">
          Thanks for sharing how you feel! {totalVotes} {totalVotes === 1 ? 'person has' : 'people have'} voted.
        </p>
      )}
      <style jsx>{`
        .emotion-poll {
          background-color: var(--card-bg);
          border-radius: 12px;
          padding: 1.5rem;
          margin: 2rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .emotion-poll h3 {
          margin-top: 0;
          color: var(--text-color);
        }
        
        .emotion-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin: 1rem 0;
        }
        
        .emotion-button {
          padding: 0.5rem 1rem;
          border: 2px solid var(--emotion-color, #ccc);
          border-radius: 20px;
          background: transparent;
          color: var(--text-color);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
          position: relative;
          overflow: hidden;
        }
        
        .emotion-button:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
        
        .emotion-poll.error {
          color: #ff4d4f;
          background-color: #fff2f0;
          border: 1px solid #ffccc7;
          padding: 1rem;
          border-radius: 8px;
        }
        
        .emotion-button.selected {
          background: var(--emotion-bg, rgba(0,0,0,0.1));
        }
        
        .emotion-button:disabled {
          opacity: 0.6;
          cursor: default;
        }
        
        .emotion-button:not(:disabled):hover {
          background: var(--emotion-bg, rgba(0,0,0,0.1));
        }
        
        .vote-percentage {
          font-size: 0.8em;
          color: var(--emotion-color);
        }
        
        .vote-thanks {
          margin: 0.5rem 0 0;
          font-size: 0.9em;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
