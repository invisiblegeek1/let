import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./CarouselPage.css"


export default function CarouselPage(){

    const imgList=[
        {
            img:"/images/caroselImages/close-up-hand-taking-notes.jpg",
            // img:medical,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            img:"/images/caroselImages/doctor-with-stethoscope-hands-hospital-background.jpg",
            // img:medical,
            text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ]

    

    return (<Carousel showStatus={false} dynamicHeight={true}  showIndicators={false} infiniteLoop  showThumbs={false}>
        {imgList.map((item)=>{
            return (
                <div className='Carosel-img-container'>
                    <img src={item.img} alt='' className='carosel-img' />
                    <div className='Carosel-content'>
                        <p className='Carosel-text'>{item.text}</p>
                        <button className='Carosel-read-more-btn'>Read more</button>
                    </div>
                </div>
            )
        })

        }
    </Carousel>


    )

}