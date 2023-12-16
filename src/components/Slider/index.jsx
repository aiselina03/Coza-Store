import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import React from "react";

function SliderImage() {
  const settings = {
  
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Women Collection 2018</p>
              <h1>NEW SEASON</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Men New-Season</p>
              <h1>JACKETS & COATS</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
          <div className="photo">
            <img
              src="https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp"
              alt=""
            />
            <div className="text">
              <p>Men Collection 2018</p>
              <h1>NEW ARRIVALS</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderImage;
