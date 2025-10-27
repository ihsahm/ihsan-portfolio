import React from 'react';

const education = [
  { period: '2018', 
    degree: 'High School Diploma', 
    institution: 'South West Academy', 
    location: 'Addis Ababa, Ethiopia' 

  },
  { 
    period: '2019 - 2023', 
    degree: 'Bachelor of Science in Computer Science', 
    institution: 'HiLCoE School of Computer Science and Technology', 
    location: 'Addis Ababa, Ethiopia' 
  },
];

export default function Education() {
  return (
    <section 
      className="py-20" 
      id="education"
      style={{ backgroundColor: 'var(--clr-bg-alt)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--clr-fg-alt)' }}
          >
            Education
          </h2>
        
        </div>
        
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          {education.map((edu, index) => (
            <div 
              className="rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg" 
              key={edu.period + edu.institution}
              style={{ 
                backgroundColor: 'var(--clr-bg)',
                boxShadow: 'var(--shadow)'
              }}
              data-aos="fade-up" 
              data-aos-delay={100 + index * 50}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 
                    className="text-xl font-semibold mb-2"
                    style={{ color: 'var(--clr-fg-alt)' }}
                  >
                    {edu.degree}
                  </h3>
                  <p 
                    className="font-medium mb-1"
                    style={{ color: 'var(--clr-primary)' }}
                  >
                    {edu.institution}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--clr-fg)' }}
                  >
                    {edu.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                    style={{ 
                      backgroundColor: 'var(--clr-primary)',
                      color: 'var(--clr-fg-alt)'
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}