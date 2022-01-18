import React from "react";
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselPage.css";

export default function CarouselPage() {
  const imgList = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/carousel%20images%2Fclose-up-hand-taking-notes.webp?alt=media&token=2c0dbc77-c3ae-46dd-9aff-22005c14d2e0",
      // img:medical,
      text: "Welcome to Leelavathi Educational Trust",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/carousel%20images%2Fdoctor-with-stethoscope-hands-hospital-background.webp?alt=media&token=21598627-0f33-46de-aaa1-b529776951ec",
      // img:medical,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/carousel%20images%2Fclose-up-hand-taking-notes.webp?alt=media&token=2c0dbc77-c3ae-46dd-9aff-22005c14d2e0",
      // img:medical,
      text: "Welcome to Leelavathi Educational Trust",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/leelavathieducationaltrust.appspot.com/o/carousel%20images%2Fdoctor-with-stethoscope-hands-hospital-background.webp?alt=media&token=21598627-0f33-46de-aaa1-b529776951ec",
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
