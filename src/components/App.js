import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
import Header from "./Header";
import Footer from "./Footer";
import CreateTask from "./CreateTask";
import CreateFarm from "./CreateFarm";

//servicios
//import getApiData from "../services/api";
//import localSt from "../services/localStorage";

const App = () => {
  return (
    <>
      <Header />
      {/*<CreateTask />*/}
      <CreateFarm />
      <Footer />
    </>
  );
};

export default App;
