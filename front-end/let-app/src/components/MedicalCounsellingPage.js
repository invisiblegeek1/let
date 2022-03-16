import React from "react";
import Sitemap from "./Sitemap";
import "./CounsellingPage.css";

export function MedicalCounsellingPage() {
  const medicalCourse = [
    " MBBS",
    "BDS",
    "BVSc.AH(Veterinary)",
    "BAMS(Ayurvedic medicine)",
    "BHMS(Homeopathy medicine)",
    "B.Sc Nursing",
    "B.Pharm",
    "Pharm D",
  ];
  const medicalGenInfo = [
    "15% All India Quota seats MBBS/ BDS Seats of States (participation of the Union Territory of J&K is subject to their contribution of seats)",
    " 100%MBBS/ BDS Seats of BHU",
    " 100% MBBS Seats of AIIMS across India",
    "100% JIPMER seats (Puducherry/ Karaikal)",
    "100% AMU",
    " 85% of State Quota seats of DU/ I.P University (VMMC/ ABVIMS/ESIC Dental)",
    "100% -Faculty of Dentistry (Jamia Milia Islamia) along with 5% internal Quota of Jamia students",
    "15% IP quota seats of ESIC",
    "50% All India Quota seats of all states (participation of the Union Territory of J&K is subject to their contribution of seats)",
    " 100% seats (All India Quota seats + Institutional Quota seats) of Central Universities",
    "100% seats of Deemed Universities.",
    "50% AIQ P.G seats of colleges under Employee State Insurance Corporation (wards of ESIC insured persons).",
    "Armed Forces Medical Services Institutions (only Registration part).",
  ];

  const handleFormLink = () => {
    return window.open("https://forms.gle/GkyQNxvrn1Vkd9nz8");
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
        <div className="Con-card-title">UG /PG counselling</div>
        {medicalCourse.map((item, index) => {
          return (
            <div className="Con-card" key={index} onClick={handleFormLink}>
              {item}
            </div>
          );
        })}

        <div className="Con-card-title" id="Con-gen-info-title">
          General Information
        </div>
        {medicalGenInfo.map((item, index) => {
          return (
            <div className="Con-card" id="Con-gen-info" key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <Sitemap></Sitemap>
    </div>
  );
}
