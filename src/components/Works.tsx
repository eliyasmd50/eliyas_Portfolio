import React from "react";

type Company = {
  name: string;
  role: string;
  duration: string;
  description: string;
};

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  link?: string;
};

const companies: Company[] = [
  {
    name: "Photon Interactive Pvt. Ltd.",
    role: "Full Stack Developer",
    duration: "2025 - Present",
    description: "Worked on scalable e-commerce platforms using React + NestJS.",
  },
  {
    name: "Sensiple Software Solutions",
    role: "Junior Developer",
    duration: "2021 - 2024",
    description: "Developed APIs for IVR systems focusing on reliability and performance.",
  },
];

const projects: Project[] = [
  {
    title: "Shaji Tax Associates",
    eyebrow: "Featured project / 2026",
    description: "A clear, trustworthy digital presence for a tax advisory and business compliance firm, designed to turn complex services into confident enquiries.",
    technologies: ["Responsive web design", "Service discovery", "Enquiry flow"],
    link: "https://www.shajitaxassociates.com/",
  },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="works-section section-wrap">
      <div className="section-label">Selected work <span>03</span></div>
      <div className="works-heading"><h2>Where I&apos;ve<br /><em>made an impact.</em></h2><p>A few chapters from my professional journey and the kind of problems I enjoy solving.</p></div>
      <div className="experience-list">
          {companies.map((company, index) => (
            <div className="experience-row" key={index}>
              <span className="experience-date">{company.duration}</span>
              <div><h3>{company.name}</h3><p className="experience-role">{company.role}</p><p>{company.description}</p></div>
              <span className="row-arrow">↗</span>
            </div>
          ))}
      </div>
      <div className="project-heading"><span>Featured project</span><span>A live product built for a real business</span></div>
      <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <div className="project-preview" aria-hidden="true">
                <span className="preview-bar"><i /><i /><i /></span>
                <span className="preview-brand">ST<span>A</span></span>
                <span className="preview-rule" />
                <span className="preview-copy">Tax advisory<br /><b>& compliance</b></span>
                <span className="preview-button">ENQUIRE NOW</span>
              </div>
              <div className="project-details">
                <span className="project-eyebrow">{project.eyebrow}</span>
                <h3>{project.title}</h3><p>{project.description}</p>
                <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                {project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">Visit live site <span>↗</span></a>}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Works;