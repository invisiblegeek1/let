import React from "react";
//import ma from "../assets/svg/envelope-regular.svg";
import wh from "../assets/svg/whatsapp.svg";
import lo from "../assets/svg/location.svg";
// import mo from "../assets/svg/mobile.svg";
import "./Sitemap.css";
import ContactForm from "./ContactForm";

export default function Sitemap() {
  return (
    <div className="Sitemap-container" id="SitemapId">
      <div className="Sitemap-wrapper">
        <div className="Sitemap-navigation-link-container">
          <h2>Navigation</h2>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="#HomeId">SERVICE</a>
            </li>
            <li>
              <a href="/aboutus">ABOUT</a>
            </li>
            <li>
              <a href="/#SitemapId">CONTACT</a>
            </li>
            <li>
              <a href="/privacy">PRIVACY POLICY</a>
            </li>
            <li>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/Leelavathi%20Admission%20Guidance%20-%202022%20-%20small%20size.pdf?alt=media&token=97b9fa6b-cfc2-4015-80fc-56ab2f2aaee7"
                target="_blank"
                download
                rel="noreferrer"
              >
                BROCHURE
              </a>
            </li>
          </ul>
        </div>
        <div className="Sitemap-contact-container">
          <h1>Contact</h1>
          {/* <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={mo} />
            <div className="Sitemap-address-text">91-9282121212</div>
          </div> */}
          <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={wh} />
            <div className="Sitemap-address-text">9698121212</div>
          </div>
          <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={lo} />
            <a
              className="Sitemap-address-text"
              href="https://maps.app.goo.gl/qetpc9uBAhPY7ZBaA"
            >
              Google map
            </a>
          </div>
          <div className="Sitemap-address-container">
            <img className="Sitemap-address-icon" alt="" src={lo} />

            <div className="Sitemap-address-text">
              New No: 4/8, Rajendra Colony, Saligramam, Chennai, Tamil Nadu
              600093
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="Sitemap-copy">
        <h4>
          Copyright &copy; 2022 All rights reserved to Leelavathieducational
          Trust
        </h4>
      </div>
    </div>
  );
}
