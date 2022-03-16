import React from "react";
import Sitemap from "./Sitemap";
import "./CounsellingPage.css";

export default  function OtherCounsellingPage() {
  
  const handleFormLink=()=>{
    return window.open('https://forms.gle/GkyQNxvrn1Vkd9nz8')
  }
  
    return (
      <div className="Con_page_container">
        <div className="Con_Img_Container">
          <img className="Con-image" alt="" src="https://media.istockphoto.com/photos/businessman-hold-virtual-medical-network-connection-icons-covid19-picture-id1312765142?b=1&k=20&m=1312765142&s=170667a&w=0&h=ma8qI_qiKbpNXLqKbQN1HKmSr1hfEn2dw6XyCB-nsSA="></img>
        </div>
        <div className="UG-con-container">
          <div className="Con-card-title">
          UG / PG counselling
          </div>
          <div className="Con-card" onClick={handleFormLink}>
          Arts and Management
          </div>
         
        </div>
        
        <Sitemap></Sitemap>
      </div>
    );
  }
  