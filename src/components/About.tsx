import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          
          {/* Left 1/4 */}
          <div className="about-title">
            <h2>About</h2>
          </div>

          {/* Divider */}
          <div className="about-divider" />

          {/* Right 3/4 */}
          <div className="about-content">
            <p>
              I’m a Full Stack Developer specializing in React, TypeScript,
              Node.js, and NestJS, with hands-on experience building scalable
              e-commerce platforms and API-driven systems.
            </p>

            <p>
              I’ve worked on microservice-based architectures for e-commerce
              applications, designing modular backend services and building
              responsive frontend interfaces that deliver seamless user experiences.
            </p>

            <p>
              I’ve also developed APIs for IVR systems, focusing on reliability,
              performance, and clean service communication.
            </p>

            <p>
              I build systems that are scalable, maintainable, and designed
              for long-term growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;