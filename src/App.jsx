import React, { useEffect } from 'react';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 2. Scroll-triggered fade-in for sections
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // 3. Staggered skill tags
    const skillsContainer = document.querySelector('.skills-stagger');
    const skillsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('skills-visible');
          skillsObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (skillsContainer) skillsObserver.observe(skillsContainer);

    return () => {
      revealObserver.disconnect();
      skillsObserver.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
