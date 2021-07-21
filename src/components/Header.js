import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h2 className="header-text">Acciones</h2>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/nueva-granja">Crear una nueva granja </Link>
          </li>
          <li>
            <Link to="/nueva-tarea"> Crear una nueva tarea</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
