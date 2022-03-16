import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import "./App.css";
import Whatsapp from "./components/whatsapp";
import CollegePage from "./components/CollegePage";
import EngineeringCounsellingPage from "./components/EngineeringCounsellingPage";
import OtherCounsellingPage from "./components/OtherCounsellingPage";
import {MedicalCounsellingPage} from "./components/MedicalCounsellingPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="colleges/medical" element={<CollegePage />} />
        <Route exact path="counselling/Medical" element={<MedicalCounsellingPage />} />
        <Route exact path="counselling/Engineering" element={<EngineeringCounsellingPage />} />
        <Route exact path="counselling/Others" element={<OtherCounsellingPage />} />
      </Routes>
      <Whatsapp></Whatsapp>

    </div>
  );
}
