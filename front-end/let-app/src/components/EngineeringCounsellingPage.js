import React from "react";
import Sitemap from "./Sitemap";
import "./CounsellingPage.css";
import arrow from "../assets/svg/shapes/arroe.svg";
import bussines from "../assets/images/bussines-med.jpg";

export default function EngineeringCounsellingPage() {
  const EnggCourse = [
    "Aeronautical/Aerospace",
    "Agriculture",
    "Automobile",
    "Biomedical",
    "Biotechnology",
    "Civil",
    "Computer science (AI/IOT/ML)",
    "ECE/EEE",
    "Marine Engineering",
    "Mechanical Engineering",
    "Petroleum",
    "B.Arch",
    "Food technology",
  ].sort();
  const handleFormLink = () => {
    return window.open("https://forms.gle/kHiRAfonxrqVCD7VA");
  };
  return (
    <div className="Con_page_container">
      <div className="Con_Img_Container">
        <img className="Con-image" alt="" src={bussines}></img>
      </div>
      <div className="UG-con-container">
        <div className="Con-card-title">UG / PG Courses Offered</div>
        {EnggCourse.map((item, index) => {
          return (
            <div className="Con-card" key={index} onClick={handleFormLink}>
              <p>{item}</p>
              <img src={arrow} className="arrow-icon" alt=""></img>
            </div>
          );
        })}
      </div>

      <Sitemap></Sitemap>
    </div>
  );
}
