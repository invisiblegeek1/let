import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo-leelavathi-education-trust.jpg";
import wa from "../assets/svg/whatsapp-brands.svg";
import ma from "../assets/svg/envelope-regular.svg";
import mo from "../assets/svg/mobile-alt-solid.svg";
export default function Navbar() {
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className="Navbar-outter-container">
      <div className="Navbar-inner-container">
        <div className="Navbar-wrapper">
          <div className="Navbar-logo-container">
            <img className="Navbar-logo" alt="" src={logo}></img>
          </div>

          <div className="Navbar-items-container">
            <div
              className="Navbar-Toogle-container"
              onClick={() => setToggleState((state) => !state)}
            >
              <div className="Toggle-bar"></div>
              <div className="Toggle-bar"></div>
              <div className="Toggle-bar"></div>
            </div>
            <ul className="Navbar-items">
              <li className="Navbar-item">HOME</li>
              <li className="Navbar-item">SERVICE</li>
              <li className="Navbar-item">ABOUT</li>
              <li className="Navbar-item">COLLEGES</li>
              <li className="Navbar-item">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="Navbar-contact-wrapper">
          <div className="contact-element">
            <img
              src={wa}
              alt=""
              className="contact-icon"
              onClick={() =>
                window.open(
                  "https://web.whatsapp.com:/919150436073?text=This%20is%20whatsapp%20sharing%20example%20using%20button"
                )
              }
            ></img>
            <p>9698121212</p>
          </div>
          <div className="contact-element">
            <img src={mo} alt="" className="contact-icon"></img>
            <p>91-9282121212</p>
          </div>
          <div className="contact-element">
            <img src={ma} alt="" className="contact-icon"></img>
            <a href="mailto:leelavathicareers@gmail.com">
              <p>www.help@leelavathi.com</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="Navbar-toggle-items-container"
        style={{ display: toggleState === true ? "flex" : "none" }}
      >
        <ul className="Navbar-toggle-items">
          <li className="Navbar-toggle-item">HOME</li>
          <li className="Navbar-toggle-item">SERVICE</li>
          <li className="Navbar-toggle-item">ABOUT</li>
          <li className="Navbar-toggle-item">COLLEGES</li>
          <li className="Navbar-toggle-item">CONTACT</li>
        </ul>
      </div>
    </div>
  );
}
