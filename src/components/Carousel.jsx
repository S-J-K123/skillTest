import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import { useRef } from "react";
import picOne from "../assets/img 1.jpg";
import picTwo from "../assets/img-2.jpg";
import picThree from "../assets/img-3.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    style: { width: "800px", height: "100%"},
    responsive:[
    {  breakpoint: 863,
      settings: {
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false}
      }
    ]
  };

  const slider = useRef(null);
  const imageStyle = {
    width: "100%", 
    height: "auto", 

  };
  
  return (
    <div className="container">
        <div className=" section">
      <Slider {...settings} ref={slider}>
        <div>
          <h3>
            <img style={imageStyle} className="picOne" src={picOne} alt="pic one" />
          </h3>
        </div>
        <div>
          <h3>
            <img style={imageStyle} className="picTwo" src={picTwo} alt="pic two" />
          </h3>
        </div>
        <div>
          <h3>
            <img style={imageStyle} className="picThree" src={picThree} alt="pic-three" />
          </h3>
        </div>
      </Slider>
    </div>
    </div>
  
  );
};

export default Carousel;
