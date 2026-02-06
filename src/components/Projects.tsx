type Project = {
  title: string
}

const projects: Project[] = [
  { title: "Nature Portfolio" },
  { title: "React Dashboard" },
  { title: "Landing Page" }
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="card">
            {project.title}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
