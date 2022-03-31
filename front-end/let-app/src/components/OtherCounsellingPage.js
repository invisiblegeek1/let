import React from "react";
import Sitemap from "./Sitemap";
import "./CounsellingPage.css";
import arrow from "../assets/svg/shapes/arroe.svg";

export default function OtherCounsellingPage() {
  const handleFormLink = () => {
    return window.open("https://forms.gle/xk6Qao66wB3f295K8");
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
        <div className="Con-card-title">UG / PG Courses Offered</div>

        <div className="Con-card" onClick={handleFormLink}>
          <p>BA, LLB</p>

          <img src={arrow} className="arrow-icon" alt=""></img>
        </div>
        <div className="Con-card" onClick={handleFormLink}>
          <p>BBA / MBA</p>

          <img src={arrow} className="arrow-icon" alt=""></img>
        </div>
        <div className="Con-card" onClick={handleFormLink}>
          <p>B.Com / M.Com</p>

          <img src={arrow} className="arrow-icon" alt=""></img>
        </div>
        <div className="Con-card" onClick={handleFormLink}>
          <p>B.Des (Interior Design)</p>

          <img src={arrow} className="arrow-icon" alt=""></img>
        </div>
        <div className="Con-card" onClick={handleFormLink}>
          <p>Hotel Management</p>

          <img src={arrow} className="arrow-icon" alt=""></img>
        </div>
      </div>

      <Sitemap></Sitemap>
    </div>
  );
}
