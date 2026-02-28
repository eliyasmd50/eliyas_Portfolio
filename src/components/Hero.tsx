import SocialButtons from "./SocialButtons";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Hi, I'm Mohamed Eliyas</h2>
        <h1>Fullstack Developer</h1>
        <p>Building scalable, microservice-driven applications from idea to deployment.</p>
        <SocialButtons />
      </div>
    </section>
  );
};

export default Hero;
