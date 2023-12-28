import React from "react";
import "./CategorySliderHome.css";
import Slider from "react-slick";
import images from "../../constants/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategorySliderHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: "unslick",
      },
    ],
  };

  return (
    <div style={{ background: "#edd8d2" }}>
      <div className="CategorySliderHome_main">
        <div className="heading">
          <h1>Categories</h1>
        </div>
        <div className="underline"></div>
        <Slider {...settings}>
          <div className="category_box_main">
            <div className="category_img_main">
              <img
                src={images.Factory_img}
                alt="factory"
                className="category_img_inner"
              />
            </div>
            <div>
              <h3>Roller Chains</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                perferendis quaerat! Sapiente?
              </p>
            </div>
            <div>
              <button className="See_More_btn">See More</button>
            </div>
          </div>
          <div className="category_box_main2">
            <div className="category_img_main">
              <img
                src={images.Factory_img}
                alt="factory"
                className="category_img_inner"
              />
            </div>
            <div>
              <h3>Leaf Chains</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                perferendis quaerat! Sapiente?
              </p>
            </div>
            <div>
              <button className="See_More_btn">See More</button>
            </div>
          </div>
          <div className="category_box_main">
            <div className="category_img_main">
              <img
                src={images.Factory_img}
                alt="factory"
                className="category_img_inner"
              />
            </div>
            <div>
              <h3>Bush Chains</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                perferendis quaerat! Sapiente?
              </p>
            </div>
            <div>
              <button className="See_More_btn">See More</button>
            </div>
          </div>
          <div className="category_box_main2">
            <div className="category_img_main">
              <img
                src={images.Factory_img}
                alt="factory"
                className="category_img_inner"
              />
            </div>
            <div>
              <h3>Extended Pitch Chains</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                perferendis quaerat! Sapiente?
              </p>
            </div>
            <div>
              <button className="See_More_btn">See More</button>
            </div>
          </div>
          <div className="category_box_main">
            <div className="category_img_main">
              <img
                src={images.Factory_img}
                alt="factory"
                className="category_img_inner"
              />
            </div>
            <div>
              <h3>Agriculture & Harvester Chains</h3>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                perferendis quaerat! Sapiente?
              </p>
            </div>
            <div>
              <button className="See_More_btn">See More</button>
            </div>
          </div>
        </Slider>{" "}
      </div>
    </div>
  );
};

export default CategorySliderHome;
