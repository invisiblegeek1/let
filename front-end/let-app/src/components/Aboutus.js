import React from "react";
import "./CounsellingPage.css";
import "./Aboutus.css";
import diamond from "../assets/svg/shapes/diamondBlue.svg";
import Sitemap from "./Sitemap";

export default function Aboutus() {
  const aboutUs = [
    "Leelavathi Educational Trust started out in the year 2003 with a philanthropic vision of spreading educational awareness and helping students make academic and career decision that fits them the best.",
    "With 19 years in service and a strong presence in the states of Andhra Pradesh and Tamil Nadu, Leelavathi Educational Trust has successfully extended educational and career guidance to more than 5000 students and their families",
    "With the recognition and reputation we have gained, faith and trust we have earned in the past two decades, to suit the modern age and to expand our reach to more and more students and their families, we have now successfully built a team of people equipped with knowledge in different arena of life – from Arts, Medicine to Engineering.",
    "We provide wholesome support to students by assessing and understanding their aspirations, existing skill-set, futuristic abilities and family background. With this understanding, each member at Leelavathi Education Trust works with the ethos to empower the students and their families that eventually would empower the society. We are here to help students break barriers and achieve what they aspire for!",
  ];
  return (
    <div className="About_Us_Container">
      <div className="About_Us_Wrapper">
        <div className="Con-card-title">About Us</div>
        {aboutUs.map((item, index) => {
          return (
            <div className="Con-card" id="About-info" key={index}>
              <img src={diamond} alt="" className="diamond_bullet_point"></img>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <Sitemap />
    </div>
  );
}
