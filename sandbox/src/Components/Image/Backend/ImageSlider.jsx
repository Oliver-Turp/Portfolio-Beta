import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SliderData } from "./SliderData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const path = useLocation().pathname;
  const element = path.split("/")[1];
  const type = path.split("/")[2];
  return (
    <div className="generic__slider-wrap">
      <h3 className="">
        {element}: {type}
      </h3>
      <h6 className="">Welcome To The Sandbox. Click The Arrows</h6>
      <div className="generic__images-slider">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          className="left-arrow"
          onClick={prevSlide}
        />
        <FontAwesomeIcon
          icon={faArrowAltCircleRight}
          className="right-arrow"
          onClick={nextSlide}
        />
        <ul>
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <li>
                    <div className="slide-title">
                      {slide.name} {slide.id}
                    </div>
                    <img className="image" src={slide.src} />
                  </li>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImageSlider;
