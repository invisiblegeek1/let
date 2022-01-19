import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import "./App.css";
//import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}
