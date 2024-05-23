import React, { useEffect } from "react";
import HomePgHero from "../../components/homePgHero/HomePgHero";
import Core_Values_Purpose from "../../components/core_values_purpose/Core_Values_Purpose";
import Industries_We_Empower from "../../components/industries_we_empower/Industries_We_Empower";
import NumCountHome from "../../components/numCountHome/NumCountHome";
import CategorySliderHome from "../../components/categorySliderHome/CategorySliderHome";
import GetQuoteHome from "../../components/getQuoteHome/GetQuoteHome";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const location = useLocation();

  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Galaxy Chain Pvt. Ltd.| Home</title>
      </Helmet>
      <div>
        <HomePgHero />
        <Core_Values_Purpose />
        <NumCountHome />
        <Industries_We_Empower />
        <CategorySliderHome />
        <GetQuoteHome />
      </div>
    </>
  );
};

export default Homepage;
