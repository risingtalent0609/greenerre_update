import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
//import CSS
import "./HomeCarousel.scss";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {console.log(window.innerWidth)}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel-container mt-[100px]"
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slide/slide1.webp"
            alt="First slide"
          />

          <Link>
            <div className="banner-description">
              <img
                src="/slide/esg-reporting.jpg"
                width="150px"
                alt="esg reporting"
              />
              What is ESG Reporting? <br /> And why should it be your
              organization's new focus?
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slide/slide2.webp"
            alt="Second slide"
          />

          <Link>
            <div className="banner-description">
              <img
                src="/slide/tree-planting.jpg"
                width="150px"
                alt="tree planting"
              />
              Do you know you can EARN while doing sustainable activities?{" "}
              <br />
              You can click here to find an activity near you today.
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/slide/slide3.webp"
            alt="Third slide"
          />
          <Link>
            <div className="banner-description">
              <img
                src="/slide/web3-business.png"
                width="150px"
                alt="web3 business"
              />
              How your business can use WEB3?
            </div>
          </Link>
        </Carousel.Item>
      </Carousel>
      <div>
        <div
          style={{
            // position: "absolute",
            // display: "flex",
            // margin: "auto",
            top: 200,
          }}
          id="logoImage"
        >
          <div style={{ backgroundColor: "white", padding: "40px" }}>
            <h3 style={{ color: "green" }}>Sustainability Made Easy</h3>
            <img src="/site_logo.webp" alt="site logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
