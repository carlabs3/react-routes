import { studies, experiences } from "../data/resume";

function Resume() {
  return (
    <main className="page">
      <p className="section-label">Sobre mí</p>
      <h1>Currículum</h1>

      <div className="resume-section">
        <h2>Estudios</h2>
        {studies.map((study) => (
          <div key={study.id} className="resume-item">
            <h3>{study.title}</h3>
            <p className="company">{study.institution}</p>
            <span className="date">{study.date}</span>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h2>Experiencia</h2>
        {experiences.map((exp) => (
          <div key={exp.id} className="resume-item">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <span className="date">{exp.date}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Resume;
