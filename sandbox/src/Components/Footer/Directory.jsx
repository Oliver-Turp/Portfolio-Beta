import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEbay,
  faFacebook,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Content from "../../GenericContent";
import Logo from "../../Assets/Images/FooterLogo.png";

import "../../Styles/footer__directory.css";

const Directory = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Sandbox | Directory Footer</title>
        </Helmet>
      </HelmetProvider>
      <div className="generic__footer-page_wrap">
        <Content />
        <div className="directory-wrap">
          <div className="directory-column">
            <img src={Logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
              velit optio voluptatibus! Maiores, error laboriosam doloremque
              nostrum magni possimus facilis quos nobis odit modi adipisci
              repellat necessitatibus voluptatum sint? Ipsam fugit recusandae
              ipsa nam delectus blanditiis est! Cum ex dolorum, sint doloremque
              in laboriosam necessitatibus commodi, eos deserunt facilis
              quisquam!
            </p>
            <div className="directory-socials">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.youtube.com/turpochargedgaming">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.tiktok.com/">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href="https://ebay.co.uk/">
                <FontAwesomeIcon icon={faEbay} />
              </a>
            </div>
          </div>
          <div className="directory-column">
            <h5>product</h5>
            <Link to="#">product 1</Link>
            <Link to="#">product 2</Link>
            <Link to="#">product 3</Link>
            <Link to="#">product 4</Link>
            <Link to="#">product 5</Link>
          </div>
          <div className="directory-column">
            <h5>useful links</h5>
            <Link to="#">link 1</Link>
            <Link to="#">link 2</Link>
            <Link to="#">link 3</Link>
            <Link to="#">link 4</Link>
            <Link to="#">link 5</Link>
          </div>
          <div className="directory-column">
            <h5>address</h5>
            <p>123 made up street,</p>
            <p>some place,a city,</p>
            <p>p0st c0d3</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52505.66339485735!2d-111.70183701051151!3d34.664703439735405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872dac50ae6f37b1%3A0xd7ff953e0b29a233!2sWet%20Beaver%20Creek!5e0!3m2!1sen!2suk!4v1662579901320!5m2!1sen!2suk"
              allowFullScreen={true}
              loading="eager"
            ></iframe>
          </div>
          <div className="directory-row">
            &copy;2022 your company, all rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Directory;
