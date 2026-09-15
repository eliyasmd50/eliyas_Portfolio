import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialButtons = () => {
  return (
    <div className="social-container">
      <a
        href="https://github.com/eliyasmd50"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaGithub /><span>GitHub</span>
      </a>
      <a
        href="https://linkedin.com/in/mohamed-eliyas-59b2841b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn"
      >
        <FaLinkedin /><span>LinkedIn</span>
      </a>
      <a
        href="mailto:eliyasmohamed50@gmail.com"
        className="social-btn"
        aria-label="Send Email"
      >
        Email me
      </a>
    </div>
  );
};

export default SocialButtons;