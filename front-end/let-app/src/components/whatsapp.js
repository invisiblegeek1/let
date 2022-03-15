import React from 'react';
import './whatsapp.css';
import wh from "../assets/svg/whatsapp.svg";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className='whatsapp-btn-container'>
        <a href='https://wa.me/919698121212?text=Hi%20I%20am%20looking%20for%20your%20counselling'>
        <img src={wh} alt='' className='whatsapp-btn'></img>


        </a>
       

    </div>
  )
}
