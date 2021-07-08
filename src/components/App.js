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
        <p>¡Hola!</p>
      </header>

      <main className="main">
        <section className="task-section">
          <h2>Nueva tarea</h2>

          <form className="task-form">
            <fieldset className="task-form__route">
              <legend>Nueva ruta</legend>
              <label className="task-form__route-item">
                Granja
                <select name="farm">
                  <option value="1">Granja 1</option>
                  <option value="2">Granja 2</option>
                  <option value="3">Granja 3</option>
                </select>
              </label>

              <label className="task-form__route-item">
                Tipo de camión
                <select name="truck">
                  <option value="sm">Camión 1</option>
                  <option value="md">Camión 2</option>
                  <option value="bg">Camión 3</option>
                </select>
              </label>

              <label className="task-form__route-item">
                Tipo de carga
                <label className="task-form__route-item">
                  Nº de cerdos
                  <input type="number" />
                </label>
                <label>
                  Tipo de cerdos
                  <select name="pigs">
                    <option value="w">Tipo 1</option>
                    <option value="b">Tipo 2</option>
                    <option value="d">Tipo 3</option>
                  </select>
                </label>
              </label>
            </fieldset>

            <fieldset>
              <legend>Fecha</legend>
              <label className="task-form__route-item">
                Fecha de la tarea
                <input type="date" />
              </label>
            </fieldset>
            <button className="task-btn">Crear</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <small className="footer__rights">
          <span className="rights__item">&copy;2021</span>
        </small>
      </footer>
    </>
  );
};

export default App;
