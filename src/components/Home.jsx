import React from 'react';
import profilePic from '../assets/pic111.jpeg';
import cvPdf from '../assets/Yazan Zarka - CV - 20260130.pdf';

const Home = () => {
  return (
    <section className="home" id="home">
      <img src={profilePic} className="pfp" alt="Yazan Zarka" />

      <h1>Yazan N. Zarka</h1>
      <h3>Software Engineering Student</h3>
      <p>Second year software engineering student at Princess Sumaya University for Technology</p>

      <div className="home-buttons">
        <a href="#experience">
          <button className="experience-button">Experience</button>
        </a>
        <a href="#contact">
          <button className="contact-button">Contact Me</button>
        </a>
        <a href={cvPdf} download="Yazan_Zarka_CV.pdf">
          <button className="cv-button">Download CV</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
