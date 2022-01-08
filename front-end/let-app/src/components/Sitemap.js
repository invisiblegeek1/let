import React from "react";
//import ma from "../assets/svg/envelope-regular.svg";
import wh from "../assets/svg/whatsapp.svg";
import lo from "../assets/svg/location.svg";
import mo from "../assets/svg/mobile.svg";
import "./Sitemap.css";
import ContactForm from "./ContactForm";

export default function Sitemap() {
  return (
    <div className="Sitemap-container">
      <div className="Sitemap-wrapper">
        <div className="Sitemap-navigation-link-container">
          <h2>Navigation</h2>
          <ul>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="Sitemap-contact-container">
          <h1>Contact</h1>
          <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={mo} />
            <div className="Sitemap-address-text">91-9282121212</div>
          </div>
          <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={wh} />
            <div className="Sitemap-address-text">9698121212</div>
          </div>
          <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={lo} />

            <div className="Sitemap-address-text">
              No 1,example street, chennai, tamil nadu 123456
            </div>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
      <div className="Sitemap-copy">
        <h3>Copyright &copy; 2021 All rights reserved </h3>
      </div>
    </div>
  );
}
