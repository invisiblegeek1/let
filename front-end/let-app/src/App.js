import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./containers/HomePage";
import "./App.css";
import Whatsapp from "./components/whatsapp";
import Aboutus from "./components/Aboutus";
// import CollegePage from "./components/CollegePage";
import EngineeringCounsellingPage from "./components/EngineeringCounsellingPage";
import OtherCounsellingPage from "./components/OtherCounsellingPage";
import { MedicalCounsellingPage } from "./components/MedicalCounsellingPage";


import { Routes, Route } from "react-router-dom";
import Privacy from "./components/Privacy";


export default function App() {
  // const analytics = getAnalytics();

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="colleges/medical" element={<CollegePage />} /> */}
        <Route
          exact
          path="counselling/Medical"
          element={<MedicalCounsellingPage />}
        />
        <Route
          exact
          path="counselling/Engineering"
          element={<EngineeringCounsellingPage />}
        />
        <Route
          exact
          path="counselling/Others"
          element={<OtherCounsellingPage />}
        />
        <Route
          exact
          path="aboutus"
          element={<Aboutus />}
        />
        <Route
          exact
          path="privacy"
          element={<Privacy />}
        />
      </Routes>
      <Whatsapp></Whatsapp>
    </div>
  );
}
