import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}
