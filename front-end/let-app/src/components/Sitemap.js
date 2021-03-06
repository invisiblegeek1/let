import React from "react";
//import ma from "../assets/svg/envelope-regular.svg";
import wh from "../assets/svg/whatsapp.svg";
import lo from "../assets/svg/location.svg";
import mo from "../assets/svg/mobile.svg";
import "./Sitemap.css";
import ContactForm from "./ContactForm";

export default function Sitemap() {
  return (
    <div className="Sitemap-container" id="SitemapId">
      <div className="Sitemap-wrapper">
        <div className="Sitemap-navigation-link-container">
          <h2>Navigation</h2>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#HomeId">SERVICE</a></li>
            <li>ABOUT</li>
            <li><a href="#SitemapId">CONTACT</a></li>
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
        <ContactForm width="400px" height="470px"/>
      </div>
      <div className="Sitemap-copy">
        <h4>Copyright &copy; 2022 All rights  to Leelavathieducational Trust</h4>
      </div>
    </div>
  );
}
