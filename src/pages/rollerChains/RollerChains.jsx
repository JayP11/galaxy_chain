import React, { useEffect } from "react";
import "./RollerChains.css";
import images from "../../constants/images";

const RollerChains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="RollerChains_main">
      <div className="heading">
        <h1>Roller Chains</h1>
      </div>
      <div className="underline"></div>
      <div className="RollerChains_images_main">
        <div className="RollerChains_chart_main">
          <img
            src={images.RollerChains}
            alt="RollerChains"
            className="RollerChains_chart_inner"
          />
        </div>
        <div className="RollerChains_img_main">
          <img
            src={images.RollerChains_img}
            className="RollerChains_img_inner"
            alt="RollerChains_img"
          />
        </div>
      </div>
    </div>
  );
};

export default RollerChains;
