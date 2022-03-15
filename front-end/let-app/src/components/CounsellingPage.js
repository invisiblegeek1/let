import React from "react";
import Sitemap from "./Sitemap";
import "./ConsellingPage.css";

export  function MedicalCounsellingPage() {
  
  return (
    <div className="Con_page_container">
      <div className="Con_Img_Container">
        <img className="Con-image" alt="" src="https://media.istockphoto.com/photos/businessman-hold-virtual-medical-network-connection-icons-covid19-picture-id1312765142?b=1&k=20&m=1312765142&s=170667a&w=0&h=ma8qI_qiKbpNXLqKbQN1HKmSr1hfEn2dw6XyCB-nsSA="></img>
      </div>
      <div className="UG-con-container">
        <div className="Con-card-title">
        UG counselling
        </div>
        <div className="Con-card">
          15% All India Quota seats MBBS/ BDS Seats of States (participation of
          the Union Territory of J&K is subject to their contribution of seats),
        </div>
        <div className="Con-card"> 100%MBBS/ BDS Seats of BHU,</div>
        <div className="Con-card">100% MBBS Seats of AIIMS across India,</div>
        <div className="Con-card">
          100% JIPMER seats (Puducherry/ Karaikal),
        </div>
        <div className="Con-card">100% AMU</div>
        <div className="Con-card">
          85% of State Quota seats of DU/ I.P University (VMMC/ ABVIMS/ESIC
          Dental),
        </div>
        <div className="Con-card">
          100% -Faculty of Dentistry (Jamia Milia Islamia) along with 5%
          internal Quota of Jamia students
        </div>
        <div className="Con-card">15% IP quota seats of ESIC.</div>
      </div>
      <div className="UG-con-container">
        <div className="Con-card-title">
        PG counselling
        </div>
        <div className="Con-card">
        50% All India Quota seats of all states (participation of the Union Territory of J&K is subject to their contribution of seats).

        </div>
        <div className="Con-card"> 100% seats (All India Quota seats + Institutional Quota seats) of Central Universities</div>
        <div className="Con-card">100% seats of Deemed Universities.</div>
        <div className="Con-card">
        50% AIQ P.G seats of colleges under Employee State Insurance Corporation (wards of ESIC insured persons).
        </div>
        <div className="Con-card"> Armed Forces Medical Services Institutions (only Registration part).</div>
        
      </div>
      <Sitemap></Sitemap>
    </div>
  );
}

