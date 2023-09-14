import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import { useRef } from "react";
import picOne from '../assets/pic-1.png';
import picTwo from '../assets/pic-2.png';
import picThree from '../assets/pic-3.png';





  

const Carousel = () => {
    const settings = {
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    
    }

    const slider = useRef(null);
    return (
     
  <div>
       
        <Slider {...settings} ref={slider}>
          <div>
            <h3><img className="picOne" src={picOne} alt="pic one" /></h3>
          </div>
          <div>
            <h3><img className="picTwo" src={picTwo} alt="pic two" /></h3>
          </div>
          <div>
            <h3><img className="picThree" src={picThree} alt="pic-three" /></h3>
          </div>
     
        </Slider>
      </div>
    
    );
}

export default Carousel;
