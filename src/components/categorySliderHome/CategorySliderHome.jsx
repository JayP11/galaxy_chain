import React from "react";
import "./CategorySliderHome.css";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";

const CategorySliderHome = () => {
  return (
    <div>
      <div className="CategorySliderHome_main">
        <div className="heading">
          <h1 style={{ color: "var(--color-blue)", fontWeight: "800" }}>
            Categories
          </h1>
        </div>
        <div className="underline"></div>
        <div className="cat_card_main_flex">
          <div className="cat_card_main">
            <img src={images.cat_roller} alt="" />
            <div className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </div>

            <div className="cat_desc_part">
              <p className="cat_desc">Roller</p>

              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_agriculture} alt="" />
            <div className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </div>

            <div className="cat_desc_part">
              <p className="cat_desc">Agriculture</p>

              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_leaf} alt="" />
            <div className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </div>

            <div className="cat_desc_part">
              <p className="cat_desc">Leaf</p>

              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_bush} alt="" />
            <div className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </div>

            <div className="cat_desc_part">
              <p className="cat_desc">Bush</p>

              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_extended} alt="" />
            <div className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </div>

            <div className="cat_desc_part">
              <p className="cat_desc">Extended</p>

              <p className="cat_desc">Peach Chains</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySliderHome;
