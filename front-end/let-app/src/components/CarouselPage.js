import React from "react";
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselPage.css";
import clousup from "../assets/images/close-up-hand-taking-notes.webp";
import doctor from "../assets/images/doctor-with-stethoscope-hands-hospital-background.webp";


export default function CarouselPage() {
  const imgList = [
    {
      img: clousup,
      // img:medical,
      text: "Welcome to Leelavathi Educational Trust",
    },
    {
      img:doctor,
      // img:medical,
      text: "Study hard until you can say, trust me, I’m your doctor",
    },
    {
      img: clousup,
      // img:medical,
      text: "Welcome to Leelavathi Educational Trust",
    },
    {
      img:doctor,
      // img:medical,
      text: "A profession where knowledge, power and heart come together",
    },
  ];

  return (
    <Carousel
      showStatus={false}
      dynamicHeight={true}
      showIndicators={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {imgList.map((item, index) => {
        return (
          <div className="Carosel-img-container" key={index}>
            <img src={item.img} alt="" className="carosel-img" />
            <div className="Carosel-content">
              <p className="Carosel-text">{item.text}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
