import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2>Let’s Work Together</h2>

      <p className="contact-text">
        I’m currently open for freelance work and full-time opportunities.
        If you have a project in mind or just want to connect, feel free to reach out.
      </p>

      <div className="contact-links">
        <a href="mailto:eliyasmohamed50@gmail.com" className="contact-item">
          📧 Email Me
        </a>

        <a
          href="https://linkedin.com/in/mohamed-eliyas-59b2841b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://github.com/eliyasmd50"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
