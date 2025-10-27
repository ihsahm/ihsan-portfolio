import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg border-b shadow-lg' 
          : 'backdrop-blur-md border-b'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--clr-bg-alt)' : 'rgba(42, 47, 76, 0.8)',
        borderBottomColor: isScrolled ? 'var(--clr-primary)' : 'rgba(189, 189, 221, 0.2)',
        boxShadow: isScrolled ? 'var(--shadow)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="font-bold text-xl hover:scale-105 transition-transform cursor-pointer"
            style={{ color: 'var(--clr-primary)' }}
          >
            Ihsan Ahmed Mohammed
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Languages', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
              <a 
                key={item}
                className="relative transition-colors duration-300 group"
                style={{ color: 'var(--clr-fg)' }}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={(e) => e.target.style.color = 'var(--clr-fg-alt)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--clr-fg)'}
              >
                {item}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--clr-primary)' }}
                ></span>
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="transition-colors"
              style={{ color: 'var(--clr-fg)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--clr-fg-alt)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--clr-fg)'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}