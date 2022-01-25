import React from "react";
import CaroselPage from "../components/CarouselPage";
import me from "../assets/svg/medical-equipment.svg";
import de from "../assets/svg/dental-care.svg";
//import en from "../assets/svg/engineering.svg";
import ay from "../assets/svg/home-remedies.svg";
import "./HomePage.css";
import Sitemap from "../components/Sitemap";

export default function HomePage() {
  return (
    <div>
      <CaroselPage></CaroselPage>
      <HomeSectionTwo></HomeSectionTwo>
      <Sitemap></Sitemap>
    </div>
  );
}

export function HomeSectionTwo() {
  const ServiceList1 = [
    {
      icon: me,
      title: "Medical",
      text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
    },
    {
      icon: de,
      title: "Dental",
      text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
    },
    {
      icon: ay,
      title: "Others",
      text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
    },
  ];
  // const ServiceList2 = [
  //   {
  //     icon: en,
  //     title: "Engineering",
  //     text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
  //   },
  //   {
  //     icon: ay,
  //     title: "Ayush",
  //     text: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
  //   },
  // ];
  return (
    <div className="Home-section-Two" id="HomeId">
      <h1 className="Home-section-title">The services we offer</h1>

      <div className="Home-section-wrapper">
        <div className="Service-wrapper-one">
          {ServiceList1.map((item, index) => {
            // return <ServiceCard key={index} content={item}></ServiceCard>;
            return <ServiceCard  key={index} content={item} />;
          })}
        </div>
      </div>
      <div className="contact-strip">
        Do you want to join the best colleges? Get in touch!
      </div>
    </div>
  );
}

export function ServiceCard(props) {
  return (
    <div className="Service-card-container">
      <div className="Service-card-hexagon">
        <div className="Service-card-shape">
          <img className="Service-icon" src={props.content.icon} alt=""></img>
          <p className="Service-title">{props.content.title}</p>
          <p className="Service-text">{props.content.text}</p>

        </div>
      </div>
      

      
    </div>
  );
}
