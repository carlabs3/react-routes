import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page">
      <p className="section-label">Portfolio</p>
      <h1 className="home-title">
        Hola, soy
        <br />
        <span>Carla.</span>
      </h1>
      <p className="home-subtitle">
        Desarrolladora web apasionada por crear interfaces bonitas y
        funcionales.
      </p>
      <div className="home-links">
        <Link to="/projects" className="btn btn-primary">
          Ver proyectos
        </Link>
        <Link to="/resume" className="btn">
          Mi currículum
        </Link>
      </div>
    </main>
  );
}

export default Home;
