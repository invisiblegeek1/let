import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo-leelavathi-education-trust.jpg";
import logo2 from "../assets/images/Leelavathi Educational Trust text.png";
import wa from "../assets/svg/whatsapp-brands.svg";
import ma from "../assets/svg/envelope-regular.svg";
import mo from "../assets/svg/mobile-alt-solid.svg";
import { useNavigate, nav } from "react-router-dom";
//import { Link } from "react-router-dom";
export default function Navbar() {
  let navigate = useNavigate();
  const handleClick = (route) => {
    navigate(route);
  };
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className="Navbar-outter-container">
      <div className="Navbar-inner-container">
        <div className="Navbar-wrapper">
          <div className="Navbar-logo-container">
            <img className="Navbar-logo" alt="" src={logo}></img>
            <img className="Navbar-logo2" alt="" src={logo2}></img>
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
              <li className="Navbar-item">
                <a href="/">HOME</a>
              </li>
              {/* <Link className="Navbar-item" to="#HomeId">SERVICE</Link> */}
              <li className="Navbar-item">
                <a href="/#HomeId">SERVICES</a>
              </li>
              <li className="Navbar-item">
              <a href="/aboutus">ABOUT</a></li>

              <li className="Navbar-item">
                <a href="#SitemapId">CONTACT</a>
              </li>
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
                  "https://wa.me/+919698121212?text=Hi%20I%20am%20looking%20for%20your%20counselling"
                )
              }
            ></img>
            <p>9698121212</p>
          </div>
          <div className="contact-element">
          <a href="tel:919282121212"><img src={mo} alt="" className="contact-icon"></img></a>
            <a href="tel:919282121212"><p>91-9282121212</p></a>
            
          </div>
          <div className="contact-element">
          <a href="mailto:leelavathicareers@gmail.com"><img src={ma} alt="" className="contact-icon"></img></a>
            <a href="mailto:leelavathicareers@gmail.com">
              <p>leelavathicareers@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="Navbar-toggle-items-container"
        style={{ display: toggleState === true ? "flex" : "none" }}
      >
        <ul className="Navbar-toggle-items">
          <li className="Navbar-toggle-item">
            <a href="/">HOME</a>
          </li>
          <li className="Navbar-toggle-item">
            <a href="/#HomeId">SERVICES</a>
          </li>
          <li className="Navbar-toggle-item"><a href="/aboutus">ABOUT</a></li>

          <li className="Navbar-toggle-item">
            <a href="#SitemapId">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
