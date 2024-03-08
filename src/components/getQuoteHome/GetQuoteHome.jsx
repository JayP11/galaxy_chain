import React from "react";
import "./GetQuoteHome.css";
import { Link } from "react-router-dom";

const GetQuoteHome = () => {
  return (
    <div className="GetQuoteHome_main">
      <h1 className="GetQuoteHome_h1">Looking for cusomized Roller chains</h1>
      <Link to="/contact" className="btn">
        Get a Quote
      </Link>
    </div>
  );
};

export default GetQuoteHome;
