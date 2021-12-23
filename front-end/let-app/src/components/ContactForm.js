import React from "react";
import "./ContactForm.css";
import Axios from 'axios';

export default function ContactForm() {
  //const form = document.getElementById('User-contact-form');
  // const script ="https://script.google.com/macros/s/AKfycbwnXMso02c9EwR92HRInAS098uZqNx_CQK5x--1rN85vLx1ynTuBKS33nBFnF1c00uFrg/exec";
  // form.addEventListener('submit', e => {
  //   e.preventDefault()
  //   fetch(script, { method: 'POST', body: new FormData(form)})
  //     .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  //     .catch(error => console.error('Error!', error.message))})

  function handleSubmit(e) {
    e.preventDefault()
  //   console.log(e);

    
  //   // const myHeaders = new Headers({
  //   //   ''
  //   // });
  //   const data=new FormData(form)
  const script ="https://script.google.com/macros/s/AKfycbzPUOQ4WkwPqzvpLxCyoXeOTqH8MozJYV2aJjnSBxfHnr1BJcaOXWEWtbhBvbQUFZXGQg/exec";

    Axios({
      method:'POST',
      url:script,
      data:new FormData(document.getElementById('User-contact-form'))
      
    }).then((res) => {
      console.log(res);
      alert("Success!");
    }).catch((err)=>{console.log(err);})
  }

  return (
    <div className="Contact-form-container">
      <form
        id="User-contact-form"
        className="Contact-form"
        
  
      >
        <input
          name="Name"
          className="Contact-form-input"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="Email"
          className="Contact-form-input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          name="Mobile"
          className="Contact-form-input"
          type="text"
          placeholder="Mobilel"
          required
        />
        <textarea
          name="Message"
          className="Contact-form-message-input"
          type="text"
          placeholder="Message"
          required
        />

        <button className="Contact-form-btn" type="button" onClick={e=>handleSubmit(e)}>
          Send
        </button>
      </form>
    </div>
  );
}
