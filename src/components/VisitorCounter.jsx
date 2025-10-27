import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeVisitorCount = () => {
      try {
        // Get current visitor count from localStorage
        const currentCount = localStorage.getItem('portfolioVisitorCount');
        const lastVisit = localStorage.getItem('portfolioLastVisit');
        const today = new Date().toDateString();

        let count = currentCount ? parseInt(currentCount, 10) : 0;

        // Check if this is a new visit (different day or first time)
        if (!lastVisit || lastVisit !== today) {
          count += 1;
          localStorage.setItem('portfolioVisitorCount', count.toString());
          localStorage.setItem('portfolioLastVisit', today);
        }

        setVisitorCount(count);
        setIsLoading(false);
      } catch (error) {
        console.error('Error accessing localStorage:', error);
        // Fallback to a default count if localStorage is not available
        setVisitorCount(1);
        setIsLoading(false);
      }
    };

    // Small delay to simulate loading and make the counter appear smoothly
    const timer = setTimeout(initializeVisitorCount, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <div 
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: 'var(--clr-primary)' }}
        ></div>
        <span style={{ color: 'var(--clr-fg)' }}>Loading visitors...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      <svg 
        className="w-4 h-4" 
        fill="currentColor" 
        viewBox="0 0 20 20"
        style={{ color: 'var(--clr-primary)' }}
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
      </svg>
      <span style={{ color: 'var(--clr-fg)' }}>
        <span className="font-medium">{formatNumber(visitorCount)}</span> visitors
      </span>
    </div>
  );
};

export default VisitorCounter;