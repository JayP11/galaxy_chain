import React, { useEffect } from "react";
import "./AboutPage.css";
import images from "../../constants/images";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AboutPage = () => {
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
        <title>Galaxy Chain Pvt. Ltd.| About us</title>
      </Helmet>
      <div>
        <div className="hero_path">
          <h1>
            <Link
              className="GetQuoteHome_main"
              to="/"
              style={{ minHeight: "100%" }}
            >
              Home&nbsp;&nbsp;/
            </Link>
          </h1>
          &nbsp;&nbsp;
          <h1 className="GetQuoteHome_main" style={{ minHeight: "100%" }}>
            About us
          </h1>
        </div>

        <div className="about_head">
          <h2
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                color: "var(--color-red)",
              }}
            >
              MANUFACTURER
              <br />
            </span>
            <span style={{ color: "var(--color-blue)" }}>
              OF INDUSTRIAL ROLLER CHAINS <br />
            </span>
            <span style={{ color: "var(--color_orange_shade)" }}>
              & CUSTOMIZED CONVEYOR CHAINS CHAINS
            </span>
          </h2>
        </div>

        <div className="About_part2_main">
          <div className="About_part2_inner_1">
            <img
              src={images.Factory_img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                // height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="About_part2_inner_2">
            <div>
              <img
                src={images.About_head}
                alt=""
                style={{
                  height: "100px",
                  objectFit: "cover",
                  width: "240px",
                }}
              />
            </div>
            <div>
              <h2
                style={{
                  color: "var(--color-blue)",
                }}
              >
                From Concept to Creation: Experience the Difference in
                Industrial Chains
              </h2>
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>
                <span style={{ color: "var(--color-blue)", fontWeight: "700" }}>
                  34
                </span>{" "}
                Years Of Experience in Chain technology
              </p>
            </div>
            <div
              style={{
                color: "gray",
                fontSize: "16px",
                lineHeight: "1.3",
                letterSpacing: "1px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                With over 34 years of experience, Galaxy Chains has emerged as a
                global leader in the supply of industrial roller chains and
                customized conveyor chains. Galaxy Chains, which is housed in a
                massive 4300-square-meter facility in the Shapar Industrial
                Area, quickly gained industry recognition.
                {/* Galaxy Chains has specialized in chains that transmit mechanical
                power and help us material handling. With more than 34 years of
                experience in chain technology, the company today ranks among
                the world’s leading suppliers of industrial Roller Chains and
                Customized Conveyor Chains and offers a range of high efficiency
                products. */}
              </p>
            </div>
            <div
              style={{
                color: "gray",
                fontSize: "16px",
                lineHeight: "1.3",
                letterSpacing: "1px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                The Company has a completely integrated unit with state-of-
                the-art manufacturing facilities for every critical operation.
                The company and its brand name GALAXY are synonyms of
                uncompromising quality.
              </p>
            </div>
            <div
              style={{
                color: "gray",
                fontSize: "16px",
                lineHeight: "1.3",
                letterSpacing: "1px",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <h2
                style={{
                  color: "var(--color-blue)",
                }}
              >
                Quality Roadmap
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  paddingTop: "0.5rem",
                }}
              >
                Our commitment to excellence transcends product quality, as
                evidenced by our certifications from esteemed organizations such
                as ISI, UNICEF, and the American Petroleum Institute (API 7 F).
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Galaxy Chains achieved remarkable success in its early days, as
                it received product approval from the globally recognized
                organization, UNICEF. With continuous efforts towards quality,
                precision, and capabilities ,they also received the prestigious
                API 7 F approval (withdrawn in March 2022).
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                The technicians carry out periodic inspections of production
                sites to ensure that work cycles are running smoothly. Their
                primary focus is to monitor, supervise, define, and implement
                the Key Performance Indicators (KPIs) for each production site.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src={images.ProductRange}
            alt=""
            className="ProductRange_inner"
          />
        </div>
        <div
          style={{
            background: "var(--color-blue)",
            padding: "3rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <div>
              <h2 style={{ color: "white" }}>Manufacturing Capacity</h2>
            </div>
            <div>
              <h2 style={{ color: "red" }}>2,50,000 Meters</h2>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
            }}
          >
            <div>
              <h2 style={{ color: "white" }}>Infrastructure Spread Over</h2>
            </div>
            <div>
              <h2 style={{ color: "red" }}>85,000 Square Feet</h2>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="heading" style={{ color: "#8b0000" }}>
            <h1>Product Range</h1>
          </div>
          <div style={{ background: "white" }} className="underline"></div>
          <div
            className="About_product_range_block_main"
            style={{ flexDirection: "row" }}
          >
            <div className="About_product_range_main">
              <h1
                className="About_product_range_list_h3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "18px" }}>•</span> Roller Chains
              </h1>
              <h2 style={{ marginLeft: "1rem" }}>0.5” to 2.5” Pitch</h2>
              <h3
                style={{ marginLeft: "1rem" }}
                className="About_product_range_list_h3"
              >
                with customized solutions.
              </h3>
            </div>
            <div
              className="About_product_range_main"
              style={{
                width: "350px",
              }}
            >
              <h1
                className="About_product_range_list_h3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    marginTop: "0.6rem",
                  }}
                >
                  •
                </span>{" "}
                Customized Conveyor Chains
              </h1>
              <h2 style={{ marginLeft: "1rem" }}>13” Pitch</h2>
              <h3
                style={{ marginLeft: "1rem" }}
                className="About_product_range_list_h3"
              >
                as per customer requirement.
              </h3>
            </div>
          </div>
        </div> */}
        <div
          style={{
            backgroundImage: `url(${images.factory_gray})`,
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            flexDirection: "column",
            gap: "1rem",

            backgroundPosition: "center",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "revert-layer",
            backgroundSize: "cover",
            // position: "relative",
          }}
        >
          {/* <div
            style={{
              // height: "300px",
              padding: "3rem",
              background: "lightsteelblue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
              gap: "1rem",
            }} 
          > */}
          <div>
            <div className="heading" style={{ color: "#8b0000" }}>
              <h1>Certificates</h1>
            </div>
            <div style={{ background: "white" }} className="underline"></div>
          </div>
          <div className="Certificate_img_top">
            <div className="Certificate_img_main">
              <img
                src={images.Certificate1}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="about_para_main">
          <div className="about_para_main_part1">
            <img
              src={images.chain_mix}
              // src={images.chain_img}
              className="about_para_main_img"
              alt=""
            />
          </div>
          <div className="about_para_main_part2">
            <p
              style={{
                letterSpacing: "1px",
                fontSize: "18px",
                fontWeight: "700",
              }}
            >
              A legacy of 34 years and counting
            </p>
            <h2
              style={{
                color: "var(--color-blue)",
              }}
            >
              Connecting You To The Roots Of Our Past
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p>
                Established in 1965, Galaxy Group was born out of a visionary's
                desire to empower communities and create lasting impact. What
                began as a mission to address fundamental needs like education
                and entertainment soon grew into a multifaceted enterprise,
                venturing into construction and manufacturing, and generating
                substantial employment opportunities.
              </p>
              <p>
                In 1990, Galaxy Chains emerged as a pivotal endeavor, aiming to
                replace imported products with top-tier domestic solutions.{" "}
              </p>
              {/* <p>
                With over 34 years of experience, Galaxy Chains has emerged as a
                global leader in the supply of industrial roller chains and
                customized conveyor chains. Nestled within a sprawling 4300
                square meter facility in the Shapar Industrial Area, Galaxy
                Chains swiftly garnered industry acclaim.
              </p> */}
              <p>
                Global Reach, Local Expertise: 5+ Countries, 20+ Indian states,
                200+ passionate minds - all working to make 1,100+ customers
                happy. Our team of experts, along with their technical expertise
                and cutting-edge equipment, establishes Galaxy Chains as a
                trusted partner across diverse sectors.
              </p>
              <p>
                From fertilizers and chemicals to power, cement, bottling, and
                railways, we became synonymous with efficient and reliable power
                transmission and material handling solutions.
              </p>
              <p>
                At Galaxy Chains, the wellbeing of our team is paramount. We
                practice equal opportunity employment, fostering a diverse and
                inclusive environment where everyone feels valued and respected.
              </p>
              <p>
                Additionally, we are committed to a safe and healthy work
                environment through the active implementation of our Health,
                Safety, and Environment (HSE) Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
