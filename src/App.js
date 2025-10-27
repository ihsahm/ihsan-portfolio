import React, { useEffect } from 'react';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 60, once: true });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: 'var(--clr-bg)'}}>
      {/* Animated background elements with dark theme colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{backgroundColor: 'var(--clr-primary)'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{backgroundColor: 'var(--clr-fg-alt)', animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{backgroundColor: 'var(--clr-primary)', animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <Header />
        <main>
          <Skills />
          <Languages />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
