import { Link } from "react-router-dom";
import Burguer from "./Burguer";
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="header-text">
          <a href="/">Truck Delivery</a>
        </h1>

        <Burguer />
      </nav>
    </header>
  );
};

export default Header;
