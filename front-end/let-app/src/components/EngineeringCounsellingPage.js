import React from "react";
import Sitemap from "./Sitemap";
import "./ConsellingPage.css";

export default function EngineeringCounsellingPage() {
  return (
    <div className="Con_page_container">
      <div className="Con_Img_Container">
        <img
          className="Con-image"
          alt=""
          src="https://media.istockphoto.com/photos/businessman-hold-virtual-medical-network-connection-icons-covid19-picture-id1312765142?b=1&k=20&m=1312765142&s=170667a&w=0&h=ma8qI_qiKbpNXLqKbQN1HKmSr1hfEn2dw6XyCB-nsSA="
        ></img>
      </div>
      <div className="UG-con-container">
        <div className="Con-card-title">UG / PG Counselling</div>
        <div className="Con-card">Aeronautical/Aerospace</div>
        <div className="Con-card"> Agriculture</div>
        <div className="Con-card">Automobile</div>
        <div className="Con-card">Biomedical</div>
        <div className="Con-card">Biotechnology</div>
        <div className="Con-card">Civil,</div>
        <div className="Con-card">Computer science (AI/IOT/ML)</div>
        <div className="Con-card">ECE/EEE</div>
        <div className="Con-card">Marine Engineering</div>
        <div className="Con-card">Mechanical Engineering</div>
        <div className="Con-card">Petroleum</div>
      </div>

      <Sitemap></Sitemap>
    </div>
  );
}
