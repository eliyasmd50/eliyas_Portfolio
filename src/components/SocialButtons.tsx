import { FaGithub, FaLinkedin, FaEnvelope  } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div style={{ display: "flex", gap: "15px" }} className="hero-buttons">
    <a 
      href="resume.pdf"
      download="Mohamed_Eliyas_Resume.pdf" 
      className="cv-btn">
        Download CV
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 4v12"></path>
            <path d="M7 11l5 5 5-5"></path>
        </svg>
    </a>
    <div className="social-container">
      <a
        href="https://github.com/eliyasmd50"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/mohamed-eliyas-59b2841b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:eliyasmohamed50@gmail.com"
        className="social-btn"
        aria-label="Send Email"
      >
        <FaEnvelope />
      </a>
    </div>
    </div>
  );
};

export default SocialButtons;