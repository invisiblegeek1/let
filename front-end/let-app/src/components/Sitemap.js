import React from "react";
import ma from "../assets/svg/envelope-regular.svg";
import "./Sitemap.css"

export default function Sitemap() {
  return (
    <div className="Sitemap-container">
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
        <div className="Sitemap-address-container">
          <img className="Sitemap-address-icon" alt="" src={ma} />
          <div className="Sitemap-address-text">
            No 1,example street, chennai, tamil nadu 123456
          </div>
        </div>
        <div className="Sitemap-address-container">
          <img className="Sitemap-address-icon" alt="" src={ma} />
          <div className="Sitemap-address-text">
            No 1,example street, chennai, tamil nadu 123456
          </div>
        </div>
        <div className="Sitemap-address-container">
          <img className="Sitemap-address-icon" alt="" src={ma} />

          <div className="Sitemap-address-text">
            No 1,example street, chennai, tamil nadu 123456
          </div>
        </div>
      </div>
    </div>
  );
}
