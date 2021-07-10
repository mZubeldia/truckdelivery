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
        <section></section>
        <h2>Nueva granja</h2>
        <form action="" method="#" className="farm-form form"></form>
      </main>
      <Footer />
    </>
  );
};

export default App;
