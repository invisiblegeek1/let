import React from "react";
import Sitemap from "./Sitemap";
import "./CounsellingPage.css";

export default function EngineeringCounsellingPage() {
  const EnggCourse = [
    "Aeronautical/Aerospace",
    "Agriculture",
    "Automobile",
    "Biomedical",
    "Biotechnology",
    "Biotechnology",
    "Computer science (AI/IOT/ML)",
    "ECE/EEE",
    "Marine Engineering",
    "Mechanical Engineering",
    "Petroleum",
  ];
  const handleFormLink = () => {
    return window.open("https://forms.gle/kHiRAfonxrqVCD7VA");
  };
  return (
    <div className="Con_page_container">
      <div className="Con_Img_Container">
        <img
          className="Con-image"
          alt=""
          src="https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/carousel%20images%2Fbussines-med.jpg?alt=media&token=78d35997-8a17-435e-915d-1499629ec2bf"
        ></img>
      </div>
      <div className="UG-con-container">
        <div className="Con-card-title">UG / PG Counselling</div>
        {EnggCourse.map((item, index) => {
          return (
            <div className="Con-card" key={index} onClick={handleFormLink}>
              {item}
            </div>
          );
        })}
      </div>

      <Sitemap></Sitemap>
    </div>
  );
}
