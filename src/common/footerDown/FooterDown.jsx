import React from "react";
import "./FooterDown.css";

const FooterDown = () => {
  return (
    <div className="footer_down_main">
      <div className="footer_down_con">
        <p className="footer_down_text">
          &copy; Copyright 2024 - Galaxy Chains
        </p>
        <ul className="footer_down_list_main">
          <li className="footer_down_list">Privacy Policy</li>
          <li className="footer_down_list">Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterDown;
