import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import "./App.css";
import CollegePage from "./components/CollegePage";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="colleges/medical" element={<CollegePage />} />
        </Routes>
      </Router>
    </div>
  );
}
