import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
import Header from "./Header";
import Footer from "./Footer";

//servicios
//import getApiData from "../services/api";
//import localSt from "../services/localStorage";

const App = () => {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
};

export default App;
