import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section section-wrap">
      <div className="section-label">About me <span>02</span></div>
      <div className="about-layout">
        <h2>Technical depth,<br /><em>human thinking.</em></h2>
        <div className="about-content">
          <p>I care about the part between the brief and the browser: making products feel clear, responsive, and built to last. My work spans thoughtful interfaces, robust APIs, and the infrastructure that connects them.</p>
          <p>For the last 4+ years, I&apos;ve helped teams ship e-commerce platforms and communication systems with React, TypeScript, Node.js, and NestJS.</p>
          <div className="skill-list"><span>Frontend systems</span><span>Backend architecture</span><span>API design</span><span>Product thinking</span></div>
        </div>
      </div>
    </section>
  );
};

export default About;