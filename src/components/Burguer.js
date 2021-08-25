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
        <Link to="/nueva-granja" className="nav-link ">
          <i class="fas fa-plus burger-icon"></i>{" "}
          <i class="fas fa-tractor burger-icon"></i>
        </Link>

        <Link to="/nueva-tarea" className="nav-link">
          <i class="fas fa-plus burger-icon"></i>{" "}
          <i class="fas fa-clipboard-list burger-icon"></i>
        </Link>
      </Menu>
    );
  }
}

export default Burguer;
