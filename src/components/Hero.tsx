const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Hi, I'm Mohamed Eliyas</h2>
        <h1>Fullstack Developer</h1>
        <p>Passionate about building fast, secure, and maintainable web solutions.</p>
        <div className="hero-buttons">
          <a href="./src/Resume.pdf" download="Mohamed_Eliyas_Resume.pdf" className="cv-btn">
            Download CV
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 4v12"></path>
              <path d="M7 11l5 5 5-5"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
