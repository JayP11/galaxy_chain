import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import images from "../../constants/images";

import { FaSquarePhone, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Image } from "@react-pdf/renderer";

const Footer = () => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" }}>
      <div className="Footer_main">
        <div>
          <div className="links_sec_footer">
            <h3>Quick Links</h3>
            <div
              className="underline"
              style={{
                marginLeft: "0px",
                marginTop: "0px",
                marginBottom: "1rem",
              }}></div>

            <div className="links_sec_footer_inner">
              <Link to="/" className="link_decor_footer">
                <h4 className="footer_link_color">Home</h4>
              </Link>
              <Link to="/About" className="link_decor_footer">
                <h4 className="footer_link_color">About us</h4>
              </Link>
              <Link to="/Contact" className="link_decor_footer">
                <h4 className="footer_link_color">Contact us</h4>
              </Link>
              {/* <Link to="/ProductPage" className="link_decor_footer">
                <h4 className="footer_link_color">Media</h4>
              </Link> */}
              <Link to="/ProductPage" className="link_decor_footer">
                <h4 className="footer_link_color">Products</h4>
              </Link>
              <div style={{ marginTop: "3rem" }} className="link_decor_footer">
                <a
                  href={images.catalogue}
                  target="_blank"
                  className="btn btn_catalogue"
                  style={{
                    padding: "10px 24px",
                  }}>
                  Download Catalogue
                </a>
              </div>
              <div style={{ marginTop: "2rem" }} className="link_decor_footer">
                <Link
                  to="/contact"
                  className="btn btn_getintouch"
                  style={{
                    padding: "10px 43px",
                  }}>
                  GET IN TOUCH
                </Link>
                {/* <h4 className="footer_link_color">Contact us</h4> */}
              </div>
            </div>
          </div>
        </div>
        <div className="Galaxy_Chains_block">
          <div style={{ color: "darkblue" }}>
            <h3>Galaxy Chains Pvt. Ltd.</h3>
          </div>
          <div
            className="underline"
            style={{
              marginLeft: "0px",
              marginTop: "0px",
              marginBottom: "1rem",
            }}></div>

          <div>
            <p>
              Shapar Industrial Zone, <br />
              N.H. 27, Opp. Field Marshal School,
              <br /> Shapar (Veraval),
              <br /> Dist. Rajkot - 360 024.
            </p>
          </div>
          <div className="footer_ph_details">
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <div>
                <FaSquarePhone />
              </div>
              <div>
                <a
                  href="tel:919099932799"
                  className="link_decor footer_link_color">
                  +91 90999 32799
                </a>
                {/* &nbsp; /&nbsp;
                <a
                  href="tel:0281252218"
                  className="link_decor footer_link_color"
                >
                  +02827 252217
                </a> */}
              </div>
            </div>

            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <div>
                <FaSquarePhone />
              </div>
              <div>
                <a
                  href="tel: 02827252217"
                  className="link_decor footer_link_color">
                  02827 252217
                </a>
                &nbsp; /&nbsp;
                <a
                  href="tel:02827252218"
                  className="link_decor footer_link_color">
                  02827 252218
                </a>
              </div>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <MdEmail />
              <a href="mailto:galaxy@galaxychains.com" className="link_decor">
                galaxy@galaxychains.com
              </a>
            </div>
          </div>
          <div>
            <h5>CIN – U 29199 GJ 1990 PTC 013473</h5>
          </div>
        </div>

        <div className="Galaxy_Chains_block">
          <div style={{ color: "darkorange" }}>
            <h3>Galaxy Conveyors Pvt. Ltd.</h3>
          </div>
          <div
            className="underline"
            style={{
              marginLeft: "0px",
              marginTop: "0px",
              marginBottom: "1rem",
            }}></div>
          <div>
            <p>
              Shapar Industrial Zone, <br />
              N.H. 27, Opp. Field Marshal School,
              <br /> Shapar (Veraval),
              <br /> Dist. Rajkot - 360 024.
            </p>
          </div>
          <div className="footer_ph_details">
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <div>
                <FaSquarePhone />
              </div>
              <div>
                <a
                  href="tel:919099932799"
                  className="link_decor footer_link_color">
                  +91 90999 32799
                </a>
                {/* &nbsp; /&nbsp;
                <a
                  href="tel:0281252218"
                  className="link_decor footer_link_color"
                >
                  +02827 252217
                </a> */}
              </div>
            </div>

            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <div>
                <FaSquarePhone />
              </div>
              <div>
                <a
                  href="tel: 02827252217"
                  className="link_decor footer_link_color">
                  02827 252217
                </a>
                &nbsp; /&nbsp;
                <a
                  href="tel:02827252218"
                  className="link_decor footer_link_color">
                  02827 252218
                </a>
              </div>
            </div>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <MdEmail />
              <a
                href="mailto:galaxy@galaxyconveyors.com"
                className="link_decor">
                galaxy@galaxyconveyors.com
              </a>
            </div>
          </div>
          <div>
            <h5>CIN – U 31100 GJ 1990 PTC 13882</h5>
          </div>
        </div>
      </div>
      {/* <div className="f-link-btn">
        <a
          href="http://api.whatsapp.com/send?phone=9099932799&text=Let%27s%20Get%20in%20Touch"
          target="_blank">
          <FaWhatsapp />
        </a>
      </div> */}
      <div className="f-link-btn">
        <a
          href="http://api.whatsapp.com/send?phone=9099932789&text=Let%27s%20Get%20in%20Touch%20with%20Galaxy%20Chains."
          target="_blank">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Footer;
