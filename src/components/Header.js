import { Link } from "react-router-dom";
import Burguer from "./Burguer";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="header-text">
          <a href="/">Truck Delivery</a>
        </h1>
        {/* 
        <ul className="nav-menu">
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
*/}

        <Burguer />
        {/*
        <div className="hamburger">
          <button type="button" className="hamburger-btn">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
        */}
      </nav>
    </header>
  );
};

export default Header;
