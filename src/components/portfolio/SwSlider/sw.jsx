import React from "react";
import { useState } from "react";
import Slider from "react-slick";

import Proj1 from "../../../assets/portfolio1.jpg";
import Proj2 from "../../../assets/portfolio2.jpg";
import Proj3 from "../../../assets/portfolio3.jpg";
import Proj4 from "../../../assets/portfolio4.jpg";
import Proj5 from "../../../assets/portfolio3.jpg";
import Proj6 from "../../../assets/portfolio4.jpg";
import Proj7 from "../../../assets/portfolio4.jpg";
import Proj8 from "../../../assets/portfolio4.jpg";
import Proj9 from "../../../assets/portfolio4.jpg";
import "./Sw.css"; // Import your CSS file for styling
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [Proj1, Proj2, Proj3, Proj4, Proj5, Proj6, Proj7, Proj8, Proj9];
const Sw = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };


  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);


  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="sw">
    <h1>Project Image Galery</h1>
       <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sw;
