import SocialButtons from "./SocialButtons";
import { FiArrowDownRight, FiMapPin } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-stage">
        <div className="hero-content">
          <p className="eyebrow"><span className="status-dot" /> Available for select projects</p>
          <h1>Building digital products that <em>work hard.</em></h1>
          <p className="hero-intro">I&apos;m Mohamed Eliyas, a full-stack developer with 4+ years of experience turning complex product ideas into fast, dependable web applications.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#works">See my experience <FiArrowDownRight /></a>
            <a className="text-link" href="mailto:eliyasmohamed50@gmail.com">Start a conversation <FiArrowDownRight /></a>
          </div>
          <SocialButtons />
          <div className="hero-meta"><span><FiMapPin /> Chennai, India</span><span>React · TypeScript · Node.js</span></div>
        </div>
        <div className="hero-build-card" aria-label="Full-stack development capabilities">
          <div className="build-card-top"><span>eliiyas.dev / stack</span><span>● online</span></div>
          <div className="build-card-body">
            <span className="build-line muted">01&nbsp;&nbsp; const product = &#123;</span>
            <span className="build-line">02&nbsp;&nbsp;&nbsp;&nbsp; frontend: <b>React</b>,</span>
            <span className="build-line">03&nbsp;&nbsp;&nbsp;&nbsp; backend: <b>NestJS</b>,</span>
            <span className="build-line">04&nbsp;&nbsp;&nbsp;&nbsp; data: <b>PostgreSQL</b>,</span>
            <span className="build-line">05&nbsp;&nbsp;&nbsp;&nbsp; shipped: <b>true</b></span>
            <span className="build-line muted">06&nbsp;&nbsp; &#125;</span>
          </div>
          <div className="build-card-footer"><span>SCALABLE BY DEFAULT</span><span>↗</span></div>
        </div>
      </div>
      <div className="hero-aside"><span>01</span><div className="aside-line" /><span>SCROLL TO EXPLORE</span></div>
    </section>
  );
};

export default Hero;
