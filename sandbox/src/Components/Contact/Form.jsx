import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import "../../Styles/contact__form.css";

const Form = () => {
  const [clicked, setClicked] = useState("false");

  const setState = (e) => {
    setClicked(!clicked);
    e.preventDefault();
  };

  const path = useLocation().pathname;
  const element = path.split("/")[1];
  const type = path.split("/")[2];

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Contact Form</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__form-wrap">
        <h1>
          {element}: {type}
        </h1>
        <h6>Welcome To The Sandbox</h6>
        <form className={clicked ? "" : "submitted"}>
          <div className="pm__contact_input-group">
            <label>Full Name *</label>
            <input
              type="text"
              class="pm__contact_input-item"
              placeholder="Enter Your Name"
              name="name"
              required
            />
          </div>
          <div className="pm__contact_input-groups">
            <div className="pm__contact_input-group">
              <label>Email *</label>
              <input
                type="email"
                class="pm__contact_input-item"
                placeholder="Someone@Example.com"
                name="email"
                required
              />
            </div>
            <div className="pm__contact_input-group">
              <label>Phone</label>
              <input
                type="tel"
                class="pm__contact_input-item"
                placeholder="Enter Your Phone Number"
                name="phone"
              />
            </div>
          </div>
          <div className="pm__contact_input-group">
            <label>Message *</label>
            <textarea
              class="pm__contact_input-textarea"
              placeholder="Your Message Here"
              name="message"
              required
            />
          </div>
          <input
            type="submit"
            value="Send Message"
            name="submit"
            className="pm__contact_input-button"
            onClick={setState}
          />
          <h2 className="hidden__response">
            if this was a real form
            <br />
            your message would be sent to you!
            <br />
            click <a href="/contact/form">here</a> to reset the form
          </h2>
        </form>
      </div>
    </>
  );
};

export default Form;
