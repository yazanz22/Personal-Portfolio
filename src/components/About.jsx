import React from 'react';

const skills = [
  {
    category: "Programming",
    items: ["C++", "Python", "Java", "C", "C#", "JavaScript", "Dart", "PHP", "MySQL", "HTML", "CSS", "Assembly (8086)"]
  },
  {
    category: "Frameworks & Tools",
    items: ["React.js", "Flutter", "Git", "GitHub", "Vite", "Microsoft 365", "Adobe Creative Cloud", "AI-Assisted Development"]
  },
  {
    category: "Languages",
    items: ["English", "Arabic", "Chinese (Limited Proficiency)"]
  },
  {
    category: "Other",
    items: ["Photography (Award-Winning)", "Incoterms 2020"]
  }
];

const About = () => {
  let tagIndex = 0;

  return (
    <section className="about reveal" id="about">
      <h1>About Me</h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            I'm a Software Engineering student at Princess Sumaya University for Technology with a background that spans
            more than just code. My work has taken me from building financial tracking systems at a commodity trading firm
            in Dubai, to creating land restoration models for an NGO in Jordan, to managing international humanitarian
            partnerships with UNICEF and UNHCR.
            <br /><br />
            My projects range from a health monitor that tracks vitals in real time, to a full-stack productivity tool,
            to a responsive portfolio built from scratch. I enjoy the challenge of taking a technical problem from idea
            to something that actually works and is worth using.
            <br /><br />
            Beyond the technical side, I've led fundraising efforts that raised over $90,000 for charity and pioneered
            the first international branch of Students for Refugees, overseeing operations across London, Amman, and
            Kathmandu. Outside of all of that, I'm an award-winning photographer and a fluent Arabic and English speaker
            working on my Mandarin.
            <br /><br />
            I'm currently looking for software engineering or AI internship opportunities where I can bring both
            technical depth and a global perspective to the table.
          </p>
        </div>
        <div className="about-skills skills-stagger">
          {skills.map((group) => (
            <div key={group.category} className="skills-group">
              <h3>{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((skill) => {
                  const delay = tagIndex * 0.045;
                  tagIndex++;
                  return (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ transitionDelay: `${delay}s` }}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
