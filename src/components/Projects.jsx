import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

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
      desc: "Responsive personal portfolio built with React + Vite. Features custom CSS styling, an interactive project slider using React Hooks, and a dynamic experience timeline to showcase my professional experience.",
      link: "https://github.com/yazanz22/Personal-Portfolio/tree/main"
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

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true
  });

  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="slideshow-wrapper">
        
        <button className="arrow-btn prev-btn" onClick={prevSlide}>
          <FaArrowAltCircleLeft size={40} />
        </button>

        <div className="project-slideshow" {...handlers}>
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

        <button className="arrow-btn next-btn" onClick={nextSlide}>
          <FaArrowAltCircleRight size={40} />
        </button>

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
