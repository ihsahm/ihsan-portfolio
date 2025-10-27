import React from 'react';

const skills = [
  { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
  { name: 'Dart', icon: 'devicon-dart-plain colored' },
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'REST API', icon: 'devicon-fastapi-plain colored' },
  { name: '.NET Core', icon: 'devicon-dotnetcore-plain colored' },
  { name: 'Postman', icon: 'devicon-nodejs-plain colored' },
  { name: 'Jira', icon: 'devicon-jira-plain colored' },
  { name: 'Asana', icon: 'devicon-trello-plain colored' },
  { name: 'Notion', icon: 'devicon-markdown-original colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'Linux', icon: 'devicon-linux-plain colored' },
];

export default function Skills() {
  return (
    <section 
      className="py-20" 
      id="skills"
      style={{ backgroundColor: 'var(--clr-bg-alt)' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--clr-fg-alt)' }}
          >
            Skills & Technologies
          </h2>
       
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6" data-aos="fade-up" data-aos-delay="200">
          {skills.map((skill, index) => (
            <div 
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer" 
              key={skill.name}
              style={{ 
                backgroundColor: 'var(--clr-bg)',
                boxShadow: 'var(--shadow)'
              }}
              data-aos="fade-up" 
              data-aos-delay={100 + index * 50}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--clr-primary)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--clr-bg)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <i 
                className={`${skill.icon} text-5xl mb-4 block`}
              ></i>
              <h3 
                className="text-lg font-semibold"
                style={{ color: 'var(--clr-fg-alt)' }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}