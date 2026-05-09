import React from 'react';

const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "C", "C#", "Java", "JavaScript", "Assembly (8086)"]
  },
  {
    category: "Web & Frameworks",
    items: ["React", "HTML/CSS", "PHP", "Vite"]
  },
  {
    category: "Tools",
    items: ["Git", "MySQL", "VBA & Excel", "Microsoft Project"]
  }
];

const About = () => {
  return (
    <section className="about" id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            I am a Software Engineering student at Princess Sumaya University for Technology with a focus on developing
            technical solutions that address real-world complexities. My experience ranges from building Java-based software
            at GBM to creating live financial tracking tools at Montfort and designing land restoration models for WADI. I
            enjoy the challenge of turning technical requirements into efficient, scalable code.
            <br /><br />
            Beyond my core technical stack in Python, C++, and React, I bring a global perspective to my work.
            Having lived in four countries, I have developed a high degree of adaptability and the ability to
            communicate effectively across diverse teams. This international mindset has also driven my leadership
            efforts, where I pioneered the expansion of Students for Refugees and managed significant fundraising
            operations. I am eager to apply this combination of technical skill and cross-cultural experience to
            an AI or Software Engineering internship.
          </p>
        </div>
        <div className="about-skills">
          {skills.map((group) => (
            <div key={group.category} className="skills-group">
              <h3>{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
