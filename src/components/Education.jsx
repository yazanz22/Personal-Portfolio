import React from 'react';

import psutLogo from '../assets/PSUT_Logo.png';
import flutterCert from '../assets/Flutter Certificate - Yazan Zarka.pdf';
import cCert from '../assets/C Course Certificate.jpg';
import acpcCert from '../assets/ACPC Volunteering Certificate.pdf';

const Education = () => {
  return (
    <section className="education" id="education">
      <h1>Education</h1>
      
      <div className="education-container">
        <div className="education-left">
          <div className="university">
            {/* Use the imported variable for the image source */}
            <img src={psutLogo} alt="PSUT Logo" className="PSUT-logo" />
            <h2>Princess Sumaya University for Technology</h2>
            <h3>B.Sc. Software Engineering</h3>
            <p>10/2024 - Present</p>
          </div>

          <div className="education-flexbox"> 
            <h3>Relevant Coursework</h3>
            <div className="courses-gridbox">
              <div className="courses-griditem"><p>Structured Programming (C)</p></div>
              <div className="courses-griditem"><p>Object Oriented Programming (C++)</p></div>
              <div className="courses-griditem"><p>Intro to Software Engineering</p></div>
              <div className="courses-griditem"><p>Discrete Math</p></div>
              <div className="courses-griditem"><p>Digital Logic Design</p></div>
              <div className="courses-griditem"><p>Webpage Design & Programming</p></div>
            </div>
          </div>
        </div>

        <div className="education-right">
          <div className="education-flexbox certifications-side"> 
            <h3>Certifications</h3>
            <div className="certs-gridbox">
              
              {/* Using imported variables for links */}
              <a href={flutterCert} target="_blank" rel="noreferrer">
                <div className="certs-griditem"><p>GDG Flutter Course</p></div>
              </a>
              
              <a href={cCert} target="_blank" rel="noreferrer">
                <div className="certs-griditem"><p>LinkedIn C Course</p></div>
              </a>
              
              <a href={acpcCert} target="_blank" rel="noreferrer">
                <div className="certs-griditem"><p>ACPC Volunteer</p></div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;