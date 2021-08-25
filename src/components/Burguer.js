import React from "react";
import { Link } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";

class Burguer extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
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
      </Menu>
    );
  }
}

export default Burguer;
