import React from "react";
import "./HomePgHero.css";
import images from "../../constants/images";
const HomePgHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.Factory_img})`,
        backgroundSize: "cover",
        height: "85vh",
        // backgroundPosition: "inherit",
        // backdropFilter: "blur(2px)",
        // width: "100vw",
        // display: "flex",
        // alignItems: "center",
      }}>
      <div
        className=""
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "var(--color-white)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        <div className="homehero_galaxychain_logos_main">
          <div className="homehero_gc_logo_main">
            <img
              src={images.gc_logo}
              alt="gc_logo"
              className="homehero_gc_logo_inner"
            />
          </div>
          <div className="homehero_gc_logo_main">
            <img
              src={images.gconveyors}
              alt="gc_logo"
              className="homehero_gc_logo_inner"
            />
          </div>
        </div>
        <div className="manufacturing_details_home_hero">
          <div>
            <h1 style={{ color: "whitesmoke", fontStyle: "italic" }}>
              Manufacturer of
            </h1>
          </div>
          <div>
            <h1 className="INDUSTRIAL_ROLLER_CHAINS_H1">
              INDUSTRIAL ROLLER CHAINS
            </h1>
          </div>
          <div>
            <h1 className="CUSTOMIZED_CONVEYOR_CHAINS_H1">
              {/* // color: "darkorange",
                // fontWeight: "900",
                // fontSize: "50px",
                // fontStyle: "italic",
                // textShadow: "2px 2px #838383", */}
              & CUSTOMIZED CONVEYOR CHAINS.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePgHero;
