import projects from "../data/projects";

function Projects() {
  return (
    <main className="page">
      <p className="section-label">Trabajo</p>
      <h1>Mis Proyectos</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noreferrer">
                Ver proyecto →
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
