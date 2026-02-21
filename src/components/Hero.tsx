import SocialButtons from "./SocialButtons";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Hi, I'm Mohamed Eliyas</h2>
        <h1>Fullstack Developer</h1>
        <p>Passionate about building fast, secure, and maintainable web solutions.</p>
        <SocialButtons />
      </div>
    </section>
  );
};

export default Hero;
