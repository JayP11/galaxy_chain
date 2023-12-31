import React from "react";
import HomePgHero from "../../components/homePgHero/HomePgHero";
import Core_Values_Purpose from "../../components/core_values_purpose/Core_Values_Purpose";
import Industries_We_Empower from "../../components/industries_we_empower/Industries_We_Empower";
import NumCountHome from "../../components/numCountHome/NumCountHome";
import CategorySliderHome from "../../components/categorySliderHome/CategorySliderHome";

const Homepage = () => {
  return (
    <div>
      <HomePgHero />
      <Core_Values_Purpose />
      <Industries_We_Empower />
      <NumCountHome />
      <CategorySliderHome />
    </div>
  );
};

export default Homepage;
