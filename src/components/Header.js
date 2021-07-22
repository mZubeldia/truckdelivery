import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h2 className="header-text">Acciones</h2>
      <nav>
        <ul className="nav ">
          <li className="nav-item">
            <Link to="/nueva-granja" className="nav-link ">
              Crear una nueva granja
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nueva-tarea" className="nav-link">
              Crear una nueva tarea
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/granjas" className="nav-link">
              Granjas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tareas" className="nav-link">
              Tareas
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tareas-historico" className="nav-link">
              Histórico de tareas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
