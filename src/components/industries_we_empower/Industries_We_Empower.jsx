import React from "react";
import images from "../../constants/images";
import "./Industries_We_Empower.css";
const Industries_We_Empower = () => {
  return (
    <div className="Industries_We_Empower_main">
      <div>
        <div className="heading">
          <h1>Industries We Empower</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="industry_box_top">
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.agriculture}
              alt="agriculture"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3 style={{ maxWidth: "100px" }}>Agricultural Machines</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.sugarcane}
              alt="sugarcane"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Sugar Plants</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.escalator}
              alt="Escalators"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Escalators</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.otherindustry}
              alt="otherindustry"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Other Industries</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.power_plant}
              alt="power_plant"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Power Plants</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.tobacco}
              alt="tobacco"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Tobacco Machines</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.Mining}
              alt="Mining"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Mining</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.Fertilizer_Plants}
              alt="Fertilizer_Plants"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Fertilizer Plants</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.textile}
              alt="textile"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Textile Machines</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.Steel_Plants}
              alt="Steel_Plants"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Steel Plants</h3>
          </div>
        </div>
        <div className="industry_box_main">
          <div className="industry_icon_main">
            <img
              src={images.Cement_Plants}
              alt="Cement_Plants"
              className="industry_icon_inner"
            />
          </div>
          <div>
            <h3>Cement Plants</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries_We_Empower;
