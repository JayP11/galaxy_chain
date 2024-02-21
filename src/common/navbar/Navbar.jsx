import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import images from "../../constants/images";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}>
      <div className="nav-main-nav">
        <nav className="Navbar_main">
          <Link to="/" style={{ height: "100px", width: "100px" }}>
            {/* <h1>Logo</h1> */}
            <img
              src={images.gc_logo}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          <div className="navbar_links_main">
            <div className="link_decor_nav">
              <Link
                to="/"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/"
                      ? "var(--color-blue)"
                      : "var(--color-gray)",
                  fontWeight: "600",
                }}
              >
                Home
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/About"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/About"
                      ? "var(--color-blue)"
                      : "var(--color-gray)",
                  fontWeight: "600",
                }}
              >
                About
              </Link>
            </div>
            <div className="dropdown">
              <Link
                to="/ProductPage"
                className="link_decor_nav nav_link_h3"
                style={{
                  color:
                    location.pathname === "/ProductPage"
                      ? "var(--color-blue)"
                      : "var(--color-gray)",
                  fontWeight: "600",
                }}
              >
                Products
                {/* <button className="dropbtn">
                  Products
                  <h3
                    style={{ fontSize: "18px" }}
                    className="link_decor_nav nav_link_h3"
                  >
                    Products
                  </h3>
                </button> */}
              </Link>
              <div className="dropdown-content">
                <Link to="/RollerChains">Roller Chains</Link>
                <Link to="/BushChains">Bush Chains</Link>
                <Link to="/ExtendedPitchChains">Extended Pitch Chains</Link>
                <Link to="/LeafChains">Leaf Chains</Link>
                <Link to="/AttachmentChains">Attachment Chains</Link>
                <Link to="/AgricultureChains">Agriculture Chains</Link>
              </div>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/q"
                      ? "var(--color-blue)"
                      : "var(--color-gray)",
                  fontWeight: "600",
                }}
              >
                Media
              </Link>
            </div>
            <div className="link_decor_nav">
              <Link
                to="/Contact"
                className="nav_link_h3"
                style={{
                  color:
                    location.pathname === "/Contact"
                      ? "var(--color-blue)"
                      : "var(--color-gray)",
                  fontWeight: "600",
                }}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="nav-btn-icon-part">
            {toggleMenu === false ? (
              <button className="nav-btn" onClick={() => setToggleMenu(true)}>
                <AiOutlineMenu className="nav-btn-icon" />
              </button>
            ) : (
              <button className="nav-btn" onClick={() => setToggleMenu(false)}>
                <AiOutlineClose className="nav-btn-icon" />
              </button>
            )}
          </div>
        </nav>
      </div>
      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <li>
                <Link
                  to={"/"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Home
                </Link>
              </li>
              <div className="dropdown">
                <Link to="/About" className="mobile-nav-link">
                  About
                  <i className="fa fa-caret-down"></i>
                </Link>
              </div>
              <div className="dropdown">
                <Link to="/ProductPage" className="mobile-nav-link">
                  Products
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="dropdown-content">
                  <Link to="/RollerChains" style={{ color: "red" }}>
                    Roller Chains
                  </Link>
                  <Link to="/BushChains" style={{ color: "red" }}>
                    Bush Chains
                  </Link>
                  <Link to="/ExtendedPitchChains" style={{ color: "red" }}>
                    Extended Pitch Chains
                  </Link>
                  <Link to="/LeafChains" style={{ color: "red" }}>
                    Leaf Chains
                  </Link>
                  <Link to="/AttachmentChains" style={{ color: "red" }}>
                    Attachment Chains
                  </Link>
                  <Link to="/AgricultureChains" style={{ color: "red" }}>
                    Agriculture Chains
                  </Link>
                </div>
              </div>

              <li>
                <Link
                  to={"/Contact"}
                  // onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    </div>
  );
};

export default Navbar;
