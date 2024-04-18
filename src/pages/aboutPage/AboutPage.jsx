import React, { useEffect } from "react";
import "./AboutPage.css";
import images from "../../constants/images";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const AboutPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | About us</title>
      </Helmet>
      <div>
        <div className="hero_path">
          <h1>
            <Link
              className="GetQuoteHome_main"
              to="/"
              style={{ minHeight: "100%" }}>
              Home&nbsp;&nbsp;/
            </Link>
            {"  "}
          </h1>
          &nbsp;&nbsp;
          <h1 className="GetQuoteHome_main" style={{ minHeight: "100%" }}>
            About us
          </h1>
          {/* <img src={images.about_banner} alt="" /> */}
        </div>
        <div className="About_part2_main">
          <div className="About_part2_inner_1">
            <img
              src={images.Factory_img}
              // src={images.chain_img}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
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
              <h1
                style={{
                  color: "var(--color-blue)",
                }}>
                Galaxy Chains
              </h1>
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>
                <span style={{ color: "var(--color-blue)", fontWeight: "700" }}>
                  33
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
              }}>
              <p
                style={{
                  fontSize: "14px",
                }}>
                Galaxy Chains has specialized in chains that transmit mechanical
                power and help us material handling. With more than 33 years of
                experience in chain technology, the company today ranks among
                the world’s leading suppliers of industrial Roller Chains and
                Customized Conveyor Chains and offers a range of high efficiency
                products.
              </p>
            </div>
            <div
              style={{
                color: "gray",
                fontSize: "16px",
                lineHeight: "1.3",
                letterSpacing: "1px",
              }}>
              <p
                style={{
                  fontSize: "14px",
                }}>
                The Company has a completely integrated unit with state-of-
                the-art manufacturing facilities for every critical operation.
                The company and its brand name GALAXY are synonyms of
                uncompromising quality.
              </p>
            </div>

            {/* <div>
                <div>• Roller Chains</div>
                <div>
                  <h4>0.5” to 2.5” Pitch</h4>
                </div>
                <div>with customized solutions.</div>
              </div> */}
            {/* <div>
                <p style={{ fontSize: "20px" }}>
                  <div>• Roller Chains</div>
                </p>
                <h2 style={{ marginLeft: "1rem", color: "darkblue" }}>
                  0.5” to 2.5” Pitch
                </h2>
                <h3
                  style={{ marginLeft: "1rem" }}
                  className="About_product_range_list_h3">
                  with customized solutions.
                </h3>
              </div> */}
          </div>
        </div>
        <div
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
          }}>
          <div>
            <div className="heading" style={{ color: "#8b0000" }}>
              <h1>Product Range</h1>
            </div>
            <div style={{ background: "white" }} className="underline"></div>
          </div>
          <div
            className="About_product_range_block_main"
            style={{ flexDirection: "row" }}>
            <div className="About_product_range_main">
              <h1
                className="About_product_range_list_h3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                <span style={{ fontSize: "18px" }}>•</span> Roller Chains
              </h1>
              <h2 style={{ marginLeft: "1rem" }}>0.5” to 2.5” Pitch</h2>
              <h3
                style={{ marginLeft: "1rem" }}
                className="About_product_range_list_h3">
                with customized solutions.
              </h3>
            </div>
            <div
              className="About_product_range_main"
              style={{
                width: "350px",
              }}>
              <h1
                className="About_product_range_list_h3"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                <span
                  style={{
                    fontSize: "18px",
                    alignSelf: "flex-start",
                    marginTop: "0.6rem",
                  }}>
                  •
                </span>{" "}
                Customized Conveyor Chains
              </h1>
              <h2 style={{ marginLeft: "1rem" }}>13” Pitch</h2>
              <h3
                style={{ marginLeft: "1rem" }}
                className="About_product_range_list_h3">
                as per customer requirement.
              </h3>
            </div>
          </div>
        </div>
        <div className="about_para_main">
          <div className="about_para_main_part1">
            <img
              src={images.chain_img}
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
              }}>
              A legacy of 34 years and counting
            </p>
            <h2
              style={{
                color: "var(--color-blue)",
              }}>
              Connecting You To The Roots Of Our Past
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
              <p>
                With over 33 years of experience, Galaxy Chains has ascended to
                the forefront of the global industrial landscape as a leader in
                the supply of industrial roller chains and customized conveyor
                chains. Nestled within a sprawling 4300 square meter facility in
                the Shapar Industrial Area, Galaxy Chains swiftly garnered
                industry acclaim.
              </p>
              <p>
                Our dedication to quality, amplified by technical expertise and
                cutting-edge equipment, established Galaxy Chains as a trusted
                partner across diverse sectors. From fertilizers and chemicals
                to power, cement, bottling, and railways, we became synonymous
                with efficient and reliable power transmission and material
                handling solutions.
              </p>
              <p>
                Our commitment to excellence transcends product quality, as
                evidenced by our certifications from esteemed organizations such
                as ISI, UNICEF, and the American Petroleum Institute (API 7 F).
                These certifications underscore our steadfast adherence to
                global standards and our unwavering pursuit of continuous
                improvement through a culture of innovation and efficiency.
              </p>
              <p>
                At Galaxy Chains, the wellbeing of our team is paramount. We
                practice equal opportunity employment, fostering a diverse and
                inclusive environment where everyone feels valued and respected.
                Additionally, we are committed to a safe and healthy work
                environment through the active implementation of our Health,
                Safety, and Environment (HSE) Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          backgroundImage: `url(${images.bg_img})`,
          backgroundSize: "cover",
        }}>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            color: "var(--color-white)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          <div className="AboutPage_main">
            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}>
              <div className="About_certificate_main">
                <div>
                  <div className="heading" style={{ color: "#8b0000" }}>
                    <h2>Quality & Standards</h2>
                  </div>
                  <div className="underline"></div>
                  <div className="About_certificate_list_main">
                    <div>
                      <h3 className="About_certificate_list_h3">
                        • ISO 9001 : 2015
                      </h3>
                    </div>
                    <div>
                      <h3 className="About_certificate_list_h3">
                        • IS 2403 : Indian Standard
                      </h3>
                    </div>
                    <div>
                      <h3 className="About_certificate_list_h3">
                        • ANSI B 29.1
                      </h3>
                    </div>
                    <div>
                      <h3 className="About_certificate_list_h3">• ISO 606</h3>
                    </div>
                    <div>
                      <h3 className="About_certificate_list_h3">• IS 1072</h3>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <h3> •</h3>
                      <h3 className="About_certificate_list_h3">
                        API 7F (withdrawn March 2022 )
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="About_certificate_main">
                <div className="heading" style={{ color: "#8b0000" }}>
                  <h2>Milestone</h2>
                </div>
                <div className="underline"></div>
                <div className="About_certificate_list_main">
                  <div>
                    <h3>• Global Presence</h3>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      05+
                    </h1>
                  </div>
                  <div>
                    <h3>• Indian States Presence</h3>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      20+
                    </h1>
                  </div>
                  <div>
                    <h3>• Industries Serving</h3>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      15+
                    </h1>
                  </div>
                  <div>
                    <h3>• Team Members</h3>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      200+
                    </h1>
                  </div>
                  <div>
                    <h3>• Happy Customers</h3>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      1100+
                    </h1>
                  </div>
                </div>
              </div>
              <div className="About_certificate_main">
                <div className="heading" style={{ color: "#8b0000" }}>
                  <h2>Product Range</h2>
                </div>
                <div className="underline"></div>
                <div className="About_product_range_block_main">
                  <div className="About_product_range_main">
                    <h3 className="About_product_range_list_h3">
                      • Roller Chains
                    </h3>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      0.5” to 2.5” Pitch
                    </h1>
                    <h3
                      style={{ marginLeft: "1rem" }}
                      className="About_product_range_list_h3">
                      with customized solutions.
                    </h3>
                  </div>
                  <div className="About_product_range_main">
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <h3>•</h3>
                      <h3 className="About_product_range_list_h3">
                        Customized Conveyor Chains upto
                      </h3>
                    </div>
                    <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>
                      13” Pitch
                    </h1>
                    <h3 style={{ marginLeft: "1rem" }}>
                      as per customer requirement.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_galaxy_chain_main">
              <div className="heading">
                <h1>About Galaxy Chain</h1>
              </div>
              <div className="underline"></div>
              <div className="about_intro_para_main">
                <p>
                  Galaxy Chains has specialized in chains that transmit
                  mechanical power and help us material handling. With more than
                  33 years of experience in chain technology, the company today
                  ranks among the world’s leading suppliers of industrial Roller
                  Chains and Customized Conveyor Chains and offers a range of
                  high efficiency products.
                </p>
                <br />
                <p>
                  The Company has a completely integrated unit with state-of-
                  the-art manufacturing facilities for every critical operation.
                  The company and its brand name GALAXY are synonyms of
                  uncompromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutPage;
