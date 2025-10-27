import React from 'react';
import VisitorCounter from './VisitorCounter';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Contact() {
  return (
    <section 
      className="py-20 relative" 
      id="contact"
      style={{ backgroundColor: 'var(--clr-bg-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--clr-fg-alt)' }}
          >
            Get In Touch
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--clr-fg)' }}
          >
            Ready to bring your ideas to life? Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12" data-aos="fade-up" data-aos-delay="200">
          {/* Phone */}
          <div className="group relative">
            <div 
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--clr-bg)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--clr-primary)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 
                  className="font-semibold ml-4"
                  style={{ color: 'var(--clr-fg-alt)' }}
                >
                  Phone
                </h3>
              </div>
              <a 
                className="text-lg font-medium transition-colors hover:opacity-80" 
                href="tel:+251910873541"
                style={{ color: 'var(--clr-primary)' }}
              >
                +251 910 873 541
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="group relative">
            <div 
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--clr-bg)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--clr-primary)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 
                  className="font-semibold ml-4"
                  style={{ color: 'var(--clr-fg-alt)' }}
                >
                  Email
                </h3>
              </div>
              <a 
                className="text-lg font-medium transition-colors hover:opacity-80" 
                href="mailto:ihsahm11@gmail.com"
                style={{ color: 'var(--clr-primary)' }}
              >
                ihsahm11@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div 
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: 'var(--clr-bg)',
                boxShadow: 'var(--shadow)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--clr-primary)' }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 
                  className="font-semibold ml-4"
                  style={{ color: 'var(--clr-fg-alt)' }}
                >
                  Location
                </h3>
              </div>
              <span 
                className="text-lg font-medium"
                style={{ color: 'var(--clr-primary)' }}
              >
                Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <button 
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--clr-primary)',
              color: 'var(--clr-fg-alt)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <span>Let's Start a Conversation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Footer with Social Links and Visitor Counter */}
        <div className="mt-16 pt-8 border-t border-opacity-20" style={{ borderColor: 'var(--clr-fg)' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p style={{ color: 'var(--clr-fg)' }} className="text-sm mb-3">
                © 2024 Ihsan Portfolio. All rights reserved.
              </p>
              {/* Social Links */}
              <div className="flex justify-center sm:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
                <a
                  href="https://github.com/ihsahm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'var(--clr-bg)',
                    color: 'var(--clr-fg)',
                    boxShadow: 'var(--shadow)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--clr-bg)';
                    e.target.style.color = 'var(--clr-fg)';
                  }}
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ihsan-ahmed-mo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ 
                    backgroundColor: 'var(--clr-bg)',
                    color: 'var(--clr-fg)',
                    boxShadow: 'var(--shadow)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#0077B5';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--clr-bg)';
                    e.target.style.color = 'var(--clr-fg)';
                  }}
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <VisitorCounter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}