import React from 'react';
import profilePic from '../assets/pic111.jpeg'; 

const Home = () => {
  return (
    <section className="home" id="home">
      {/* Used the imported variable here */}
      <img src={profilePic} className="pfp" alt="Yazan Zarka" />
      
      <h1>Yazan N. Zarka</h1>
      <h3>Software Engineering Student</h3>
      <p>Second year software engineering student at Princess Sumaya University for Technology</p>
      
      <div className="home-buttons">
        <div className="home-button-card">
          <a href="#experience">
            <button className="experience-button">Experience</button>
          </a>
        </div>
        <div className="home-button-card">
          <a href="#contact">
            <button className="contact-button">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;