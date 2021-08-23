import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header-text">
        <a href="/">Truck Delivery</a>
      </h1>
      <nav>
        <ul className="nav ">
          <li className="nav-item">
            <Link to="/nueva-granja" className="nav-link ">
              <i class="fas fa-plus"></i> <i class="fas fa-tractor"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nueva-tarea" className="nav-link">
              <i class="fas fa-plus"></i> <i class="fas fa-clipboard-list"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
