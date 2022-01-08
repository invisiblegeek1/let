import React from "react";
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselPage.css";

export default function CarouselPage() {
  const imgList = [
    {
      img: "/images/caroselImages/close-up-hand-taking-notes.webp",
      // img:medical,
      text: "Welcome to Leelavathi Educational Trust",
    },
    {
      img: "/images/caroselImages/doctor-with-stethoscope-hands-hospital-background.webp",
      // img:medical,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "/images/caroselImages/close-up-hand-taking-notes.webp",
      // img:medical,
      text: "Welcome to Leelavathi Educational Trust",
    },
    {
      img: "/images/caroselImages/doctor-with-stethoscope-hands-hospital-background.webp",
      // img:medical,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
              <button className="Carosel-read-more-btn">Read more</button>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
