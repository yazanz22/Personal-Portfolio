import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <div className="contact-container">
        
        {/* Email Card */}
        <a href="mailto:yazanzarka@gmail.com">
          <div className="contact-card">
            <i className="fa-solid fa-square-envelope"></i>
            <p>yazanzarka@gmail.com</p>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a href="https://www.linkedin.com/in/yazanzarka/" target="_blank" rel="noreferrer">
          <div className="contact-card">
            <i className="fa-brands fa-linkedin"></i>
            <p>/in/yazanzarka/</p>
          </div>
        </a>

        {/* GitHub Card */}
        <a href="https://github.com/yazanz22" target="_blank" rel="noreferrer">
          <div className="contact-card">
            <i className="fa-brands fa-github"></i>
            <p>@yazanz22</p>
          </div>
        </a>

      </div>
    </section>
  );
};

export default Contact;