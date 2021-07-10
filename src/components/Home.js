import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="main">
      <h2>¿Qué tarea deseas realizar?</h2>
      <nav>
        <ul>
          <li>
            <Link to="/nueva-granja">Crear una nueva granja </Link>
          </li>
          <li>
            <Link to="/nueva-tarea"> Crear una nueva tarea</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Home;
