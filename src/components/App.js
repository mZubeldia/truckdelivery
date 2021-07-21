import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import CreateTask from "./CreateTask";
import CreateFarm from "./CreateFarm";

//servicios
//import getApiData from "../services/api";
//import localSt from "../services/localStorage";

const App = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nueva-granja">
          <CreateFarm />
        </Route>
        <Route path="/nueva-tarea">
          <CreateTask />
        </Route>
      </Switch>

      <Footer />
    </>
  );
};

export default App;
