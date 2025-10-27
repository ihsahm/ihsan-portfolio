import React from 'react';

export default function Header() {
  return (
    <header 
      className="min-h-screen flex items-center justify-center" 
      id="about"
      style={{ backgroundColor: 'var(--clr-bg)' }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div data-aos="fade-up">
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--clr-fg-alt)' }}
          >
            Ihsan Ahmed Mohammed
          </h1>
          <h2 
            className="text-xl md:text-2xl mb-8 font-light"
            style={{ color: 'var(--clr-primary)' }}
          >
            A Mobile App Developer.
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'var(--clr-fg)' }}
          >
            I build cross platform mobile apps with Flutter and multiple technologies. Passionate about creating the next big thing
            that would make a big difference and touch people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <a 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg transition-colors duration-200" 
              style={{ 
                color: 'var(--clr-fg-alt)', 
                backgroundColor: 'var(--clr-primary)',
                boxShadow: 'var(--shadow)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--clr-bg-alt)';
                e.target.style.color = 'var(--clr-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--clr-primary)';
                e.target.style.color = 'var(--clr-fg-alt)';
              }}
              href="#projects"
            >
              View Projects
            </a>
            <a 
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium border-2 rounded-lg transition-colors duration-200" 
              style={{ 
                color: 'var(--clr-primary)', 
                borderColor: 'var(--clr-primary)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--clr-primary)';
                e.target.style.color = 'var(--clr-fg-alt)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--clr-primary)';
              }}
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-col items-center">
            <span 
              className="text-sm mb-2"
              style={{ color: 'var(--clr-fg)' }}
            >
              Scroll down
            </span>
            <div 
              className="w-6 h-10 border-2 rounded-full flex justify-center"
              style={{ borderColor: 'var(--clr-primary)' }}
            >
              <div 
                className="w-1 h-3 rounded-full mt-2 animate-bounce"
                style={{ backgroundColor: 'var(--clr-primary)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}