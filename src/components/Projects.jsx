import React, { useState } from 'react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "ESP32 Health Monitor",
      desc: "Real-time IoT health monitor built with ESP32 & MAX30102. Tracks Heart Rate, SpO2, and estimated Blood Pressure, syncing live data wirelessly to the Blynk app. Features local LCD output, custom signal processing, and a buzzer that provides audible feedback for every detected heartbeat.",
      link: "https://github.com/yazanz22/ESP32-Health-Monitor/tree/main"
    },
    {
      title: "Taskify Website",
      desc: "Taskify is a productivity dashboard featuring a dynamic task manager with smart sorting and a timestamped notes scratchpad. Built with React.js and PHP/MySQL, it offers full-stack functionality including user authentication, task prioritization, and persistent data storage via a local API.",
      link: "https://github.com/yazanz22/Taskify-Tasks-Notes-Tracker"
    },
    {
      title: "Personal Portfolio Website",
      desc: "This right here lil bro.",
      link: null
    }
  ];

  const totalSlides = projects.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="slideshow-wrapper">
        
        {/* Previous Button */}
        <button className="arrow-btn prev-btn" onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="project-slideshow">
          <div 
            className="project-slideshow-container"
            style={{ transform: `translateX(${-currentIndex * (100 / totalSlides)}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className={`project${index + 1}`}>
                <h3>{project.title}</h3>
                <br />
                <p>{project.desc}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button className="arrow-btn next-btn" onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Dots */}
        <div className="dots-container">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;