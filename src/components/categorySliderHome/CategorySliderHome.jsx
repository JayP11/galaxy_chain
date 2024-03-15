import React from "react";
import "./CategorySliderHome.css";
import images from "../../constants/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategorySliderHome = () => {
  return (
    <div style={{ background: "#f6f6f6" }}>
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
            <Link to="ProductPage" className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </Link>

            <div className="cat_desc_part">
              <p className="cat_desc">Roller</p>
              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_agriculture} alt="" />
            <Link to="ProductPage" className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </Link>

            <div className="cat_desc_part">
              <p className="cat_desc">Agriculture</p>
              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_leaf} alt="" />
            <Link to="ProductPage" className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </Link>

            <div className="cat_desc_part">
              <p className="cat_desc">Leaf</p>
              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_bush} alt="" />
            <Link to="ProductPage" className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </Link>
            <div className="cat_desc_part">
              <p className="cat_desc">Bush</p>

              <p className="cat_desc">Chains</p>
            </div>
          </div>

          <div className="cat_card_main">
            <img src={images.cat_extended} alt="" />
            <Link to="ProductPage" className="cat_arrow_main">
              <BsArrowRight color="#fff" size={20} />
            </Link>
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
