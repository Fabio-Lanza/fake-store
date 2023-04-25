import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Contact Us</h1>
        <form className="form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <textarea
            type="text"
            placeholder="Write your message here"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
