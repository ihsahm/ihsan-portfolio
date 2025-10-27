import React, { useState } from 'react';
import { projects } from '../data/projects';
import ImageModal from './ImageModal';
import PlayStoreIcon from './icons/PlayStoreIcon';
import AppStoreIcon from './icons/AppStoreIcon';

export default function Projects() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section 
      className="py-20" 
      id="projects"
      style={{ backgroundColor: 'var(--clr-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--clr-fg-alt)' }}
          >
            Featured Projects
          </h2>
          <p 
            className="text-lg"
            style={{ color: 'var(--clr-fg)' }}
          >
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
          {projects && projects.map((project, index) => (
            <div 
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group" 
              key={project.title}
              style={{ 
                backgroundColor: 'var(--clr-bg-alt)',
                boxShadow: 'var(--shadow)'
              }}
              data-aos="fade-up" 
              data-aos-delay={100 + index * 100}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                {project.image ? (
                  <img 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer" 
                    src={project.image} 
                    alt={project.title}
                    onClick={() => openModal(project.image, project.title)}
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--clr-primary)' }}
                  >
                    <span 
                      className="text-2xl font-bold"
                      style={{ color: 'var(--clr-fg-alt)' }}
                    >
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: 'var(--clr-fg-alt)' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ color: 'var(--clr-fg)' }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech && project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{ 
                        backgroundColor: 'var(--clr-bg)',
                        color: 'var(--clr-primary)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Store Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.links.map((link, index) => {
                      const isPlayStore = link.label === 'Play Store';
                      const isAppStore = link.label === 'App Store';
                      
                      if (isPlayStore || isAppStore) {
                        return (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                            style={{ 
                              backgroundColor: isPlayStore ? '#01875f' : '#007AFF',
                              color: 'white'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.opacity = '0.9';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.opacity = '1';
                            }}
                          >
                            {isPlayStore ? (
                              <PlayStoreIcon className="w-4 h-4" />
                            ) : (
                              <AppStoreIcon className="w-4 h-4" />
                            )}
                            {link.label}
                          </a>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
                
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      style={{ 
                        backgroundColor: 'var(--clr-primary)',
                        color: 'var(--clr-fg-alt)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--clr-bg)';
                        e.target.style.color = 'var(--clr-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'var(--clr-primary)';
                        e.target.style.color = 'var(--clr-fg-alt)';
                      }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      className="px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200"
                      style={{ 
                        borderColor: 'var(--clr-primary)',
                        color: 'var(--clr-primary)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--clr-primary)';
                        e.target.style.color = 'var(--clr-fg-alt)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--clr-primary)';
                      }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={modalImage?.src}
        imageAlt={modalImage?.alt}
      />
    </section>
  );
}