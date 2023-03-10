import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Content from "../../GenericContent";

import "../../Styles/footer__multiline.css";

const Hover = () => {
  const [clicked, setClicked] = useState("false");

  const setState = (e) => {
    setClicked(!clicked);
    e.preventDefault();
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Multi Line Footer</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__footer-page_wrap">
        <Content />
        <div className="multiline__footer-wrap">
          <div className="multiline__footer-heading">
            <h2>useful links</h2>
          </div>
          <div className="multiline__footer-links">
            <Link to="#">link 1</Link>
            <Link to="#">link 2</Link>
            <Link to="#">link 3</Link>
            <Link to="#">link 4</Link>
          </div>
          <div className="multiline__footer-heading">
            <h2>newsletter</h2>
          </div>
          <form className={clicked ? "" : "submitted"}>
            <input
              type="text"
              name="news-name"
              placeholder="Your Name"
              className="multiline__footer-form_name"
              required
            />
            <input
              type="email"
              name="news-email"
              placeholder="Your_Email@Domain.com"
              className="multiline__footer-form_email"
              required
            />
            <input
              type="submit"
              value="Send"
              name="news-submit"
              className="multiline__footer-form_btn"
              onClick={setState}
            />
            <p className="hidden__response">
              Congratulations on your pretend newsletter signup!
            </p>
          </form>
          <div className="multiline__footer-heading">
            <h2>keep in touch</h2>
          </div>
          <div className="multiline__footer-media">
            <a href="https://www.facebook.com/" target="_blank">
              facebook
            </a>
            <a href="https://twitter.com/" target="_blank">
              twitter
            </a>
            <a href="https://instgram.com/" target="_blank">
              instagram
            </a>
            <a href="https://discord.com/app" target="_blank">
              discord
            </a>
          </div>
          <div className="multiline__footer-copyRight">
            <p>copyright &copy;2022 your company. all rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hover;
