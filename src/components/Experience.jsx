import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Students for Refugees (SFR)",
      link: "https://studentsforrefugees.org",
      location: "Texas, USA",
      role: "Head of International Relations | 07/2023 - Present",
      points: [
        "Facilitate high-level strategic meetings with global organizations, including UNICEF and UNHCR, to identify and develop partnership opportunities.",
        "Oversee operations for three international branches across London (UK), Amman (Jordan), and Kathmandu (Nepal), ensuring consistent organizational standards.",
        "Pioneered the creation of SFR's first international branch, located in Amman, Jordan, opening the way for more international branches to open.",
        "Filed, successfully, for form SS-4 and form 1023-EZ for 501(c)(3) for tax exemption status.",
        "Participated in countless food drives aimed at providing cultural food for new refugees, usually providing for about 350 refugees per food drive."
      ]
    },
    {
      company: "Montfort FZE",
      link: "https://mont-fort.com",
      location: "Dubai, UAE",
      role: "Intern | 05/2023 - 07/2023",
      points: [
        "Engineered an automated financial tracking system using VBA and Excel macros to synchronize live commodity pricing data with projected trade outcomes, ensuring real-time PnL accuracy.",
        "Analyzed thousands of bills of lading documents and contracts to repair all load and discharge ports information from the 2,186 trades made to date by Montfort on their system.",
        "Designed detailed oil downstream country profile presentations on Ghana, Pakistan, Sri Lanka, Bangladesh, and Mozambique for use by trade analysts."
      ]
    },
    {
      company: "Gulf Business Machines",
      link: "https://gbmme.com",
      location: "Doha, Qatar",
      role: "IT Intern | 05/2021",
      points: [
        "Developed a point of sale software using basic HTML and Java, structuring the project using Microsoft Project.",
        "Experienced the working environment in IT consulting and software development, as well as discussing IT career options with professionals."
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <h1>Experience</h1>
      <div className="experience-container">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          // Logic: Even numbers go Left, Odd numbers go Right
          <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="experience-content">
              <div className="co-name">
                <a href={exp.link} target="_blank" rel="noreferrer">
                  <h3>{exp.company}</h3>
                </a>
                <p><i className="fa-solid fa-location-dot"></i>{exp.location}</p>
              </div>
              <p>{exp.role}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Experience;