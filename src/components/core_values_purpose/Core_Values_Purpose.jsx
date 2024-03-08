import React from "react";
import "./Core_Values_Purpose.css";
import images from "../../constants/images";

const Core_Values_Purpose = () => {
  return (
    <div className="Core_Values_Purpose_main">
      <div className="core_head_part">
        <div className="heading_values_purpose head_core">
          <h1
            style={{
              textTransform: "uppercase",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Core Purpose & Core Values
          </h1>
        </div>
        <div className="underline"></div>
        <div className="core_purpose_main">
          <h3 style={{ fontWeight: "600" }}>
            "To enhance the productivity and efficiency of the ecosystem by
            providing innovative solutions."
          </h3>

          <img
            src={images.core_purpose_head}
            className="core_purpose_head_img"
          />
        </div>
      </div>
      <div className="core_purpose_main_flex">
        <div className="core_purpose_inner_flex">
          <img src={images.core_img1} alt="" />
          <p className="core_img_text">
            QUALITY <br />
            ASSURANCE
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img2} alt="" />
          <p className="core_img_text">
            CUSTOMER <br />
            SATISFACTION
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img3} alt="" />
          <p className="core_img_text">
            MUTUAL <br />
            GROWTH
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img4} alt="" />
          <p className="core_img_text">
            TEAM <br />
            WORK
          </p>
        </div>

        <div className="core_purpose_inner_flex">
          <img src={images.core_img2} alt="" />
          <p className="core_img_text">
            RESPECT <br />
            FOR ALL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Core_Values_Purpose;
