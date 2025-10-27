import React from 'react';

const languages = [
  { 
    name: 'English', 
    level: 'Fluent',
    proficiency: 95,
    flag: '🇺🇸'
  },
  { 
    name: 'Amharic', 
    level: 'Native',
    proficiency: 100,
    flag: '🇪🇹'
  },
  { 
    name: 'Arabic', 
    level: 'Intermediate',
    proficiency: 50,
    flag: '🇸🇦'
  },
];

export default function Languages() {
  return (
    <section 
      className="py-20" 
      id="languages"
      style={{ backgroundColor: 'var(--clr-bg)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--clr-fg-alt)' }}
          >
            Languages
          </h2>
        
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {languages.map((language, index) => (
            <div 
              className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer" 
              key={language.name}
              style={{ 
                backgroundColor: 'var(--clr-bg-alt)',
                boxShadow: 'var(--shadow)'
              }}
              data-aos="fade-up" 
              data-aos-delay={100 + index * 100}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--clr-primary)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--clr-bg-alt)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
            
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--clr-fg-alt)' }}
              >
                {language.name}
              </h3>
              <p 
                className="text-sm mb-4"
                style={{ color: 'var(--clr-fg)' }}
              >
                {language.level}
              </p>
              
              {/* Proficiency Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${language.proficiency}%`,
                    backgroundColor: 'var(--clr-primary)'
                  }}
                ></div>
              </div>
              <span 
                className="text-xs"
                style={{ color: 'var(--clr-fg)' }}
              >
                {language.proficiency}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}