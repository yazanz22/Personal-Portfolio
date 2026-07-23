import React from 'react';
import profilePic from '../assets/profile.jpeg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="pfp-wrapper home-animate" style={{ animationDelay: '0s' }}>
        <img src={profilePic} className="pfp" alt="Yazan Zarka" />
      </div>

      <h1 className="home-animate" style={{ animationDelay: '0.15s' }}>Yazan N. Zarka</h1>
      <h3 className="home-animate" style={{ animationDelay: '0.3s' }}>Software Engineering Student</h3>
      <p className="home-animate" style={{ animationDelay: '0.45s' }}>3rd year software engineering student at Princess Sumaya University for Technology</p>

      <div className="home-buttons home-animate" style={{ animationDelay: '0.6s' }}>
        <a href="#experience">
          <button className="experience-button">Experience</button>
        </a>
        <a href="#contact">
          <button className="contact-button">Contact Me</button>
        </a>
        <a href="/Yazan Zarka - CV.pdf" download="Yazan Zarka - CV.pdf">
          <button className="cv-button">Download CV</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
