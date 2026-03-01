import React from "react";

type Company = {
  name: string;
  role: string;
  duration: string;
  description: string;
};

type Project = {
  title: string;
  technologies: string;
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
  { title: "Personal Portfolio", technologies: "React, TypeScript, CSS, Bootstrap", link: "https://eliyasmd50.github.io/eliyas_Portfolio/" },
  { title: "React Dashboard", technologies: "React, Redux, Chart.js", link: "#" },
  { title: "Landing Page", technologies: "React, HTML, CSS", link: "#" },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="py-5 works-section">
      <div className="container">
        <h2 className="text-center mb-5">My Works</h2>

        {/* Work Experience */}
        <h3 className="mb-4">Work Experience</h3>
        <div className="row g-4 mb-5">
          {companies.map((company, index) => (
            <div className="col-md-6" key={index}>
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{company.name}</h5>
                  <h6 className="card-subtitle mb-2">{company.role}</h6>
                  <span className="duration">{company.duration}</span>
                  <p className="card-text mt-2">{company.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Projects */}
        <h3 className="mb-4">Personal Projects</h3>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card custom-card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.technologies}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;