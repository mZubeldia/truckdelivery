import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
import Header from "./Header";
import Footer from "./Footer";
import CreateTask from "./CreateTask";

//servicios
//import getApiData from "../services/api";
//import localSt from "../services/localStorage";

const App = () => {
  return (
    <>
      <Header />
      {/*<CreateTask />*/}
      <main className="main">
        <h2>Crear granja</h2>
        <form action="" method="#" className="farm-form form">
          <div className="left-side">
            <label htmlFor="new-farm" className="form__label">
              Nueva granja
              <input
                className="form-item"
                type="text"
                name="new-farm"
                placeholder="Granja Pepe"
              />
            </label>
            <label htmlFor="location" className="form__label">
              Geolocalización
              <input
                className="form-item"
                type="text"
                name="location"
                placeholder="1.111.111"
              />
            </label>
            <label htmlFor="phone" className="form__label">
              Nueva granja
              <input
                className="form-item"
                type="text"
                name="phone"
                placeholder="656 111 223"
              />
            </label>
          </div>
          <div className="right-side">
            <label htmlFor="others" className="form__label">
              Comentarios adicionales
              <input
                className="form-item others"
                type="textarea"
                name="others"
                placeholder="Tipo de entrada, hora de apertura, etc."
              />
            </label>
          </div>
          <button className="btn-farm">Crear</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default App;
