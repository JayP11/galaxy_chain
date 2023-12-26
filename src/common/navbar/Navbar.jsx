import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import images from "../../constants/images";
const Navbar = () => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}>
      <div className="Navbar_main">
        <div style={{ height: "100px", width: "100px" }}>
          {/* <h1>Logo</h1> */}
          <img
            src={images.gc_logo}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="navbar_links_main">
          <div className="link_decor_nav">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </div>
          <div className="link_decor_nav">
            <Link to="/About">
              <h3>About</h3>
            </Link>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              <h3 style={{ fontSize: "18px" }} className="link_decor_nav">
                Products
              </h3>
            </button>
            <div className="dropdown-content">
              <a href="#">Roller Chains</a>
              <a href="#">Bush Chains</a>
              <a href="#">Extended Pitch Chains</a>
              <a href="#">Leaf Chains</a>
              <a href="#">Attachment Chains</a>
              <a href="#">Agriculture Chains</a>
            </div>
          </div>
          <div className="link_decor_nav">
            <Link to="/Contact">
              <h3>Contact</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
