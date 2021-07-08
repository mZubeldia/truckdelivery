import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
//import Header from "./Header";
//import Footer from "./Footer";

//servicios
//import getApiData from "../services/api";
//import localSt from "../services/localStorage";

const App = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-text">Truck delivery</h1>
      </header>

      <footer className="footer">
        <small className="footer__rights">
          <span className="rights__item">&copy;2021</span>
        </small>
      </footer>
    </>
  );
};

export default App;
