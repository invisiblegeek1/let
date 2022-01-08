import React from "react";
import "./ContactForm.css";
import Axios from "axios";

export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const script =
      "https://script.google.com/macros/s/AKfycbzMJ65IxK9K9--3g3AtVRqAJAYg1GmiaI_BN-4NIsTkZLTs3boc6BMhVvJzbmEmmGUk/exec";

    Axios({
      method: "POST",
      url: script,
      data: new FormData(document.getElementById("User-contact-form")),
    })
      .then((res) => {
        console.log(res);
        alert("Success!");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Contact-form-container">
      <form
        id="User-contact-form"
        className="Contact-form"
        onSubmit={(e) => handleSubmit(e)}
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

        <button className="Contact-form-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
