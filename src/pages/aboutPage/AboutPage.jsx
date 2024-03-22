import React, { useEffect } from "react";
import "./AboutPage.css";
import images from "../../constants/images";
import { Helmet } from "react-helmet";
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | About us</title>
      </Helmet>
      <div
        style={{
          backgroundImage: `url(${images.bg_img})`,
          backgroundSize: "cover",
          // height: "85vh",
          // backgroundPosition: "inherit",
          // backdropFilter: "blur(2px)",
          // width: "100vw",
          // display: "flex",
          // alignItems: "center",
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
              {/* <div className="About_certificate_main">
          <div className="heading" style={{ color: "#8b0000" }}>
            <h2>Milestone</h2>
          </div>
          <div className="underline"></div>
          <div className="About_certificate_list_main">
            <div>
              <h3>• Global Presence</h3>
              <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>05+</h1>
            </div>
            <div>
              <h3>• Indian States Presence</h3>
              <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>20+</h1>
            </div>
            <div>
              <h3>• Industries Serving</h3>
              <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>15+</h1>
            </div>
            <div>
              <h3>• Team Members</h3>
              <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>200+</h1>
            </div>
            <div>
              <h3>• Happy Customers</h3>
              <h1 style={{ marginLeft: "1rem", color: "darkblue" }}>1100+</h1>
            </div>
          </div>
        </div> */}
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
            {/* <div className="about_galaxy_conveyor_main">
            <div className="heading">
              <h1>About Galaxy Conveyors</h1>
            </div>
            <div className="underline"></div>
            <div className="about_intro_para_main">
              <p>
                Galaxy Conveyors Pvt. Ltd., your trusted partner in the world of
                conveyor chains. With a relentless commitment to quality
                manufacturing and a passion for delivering reliable solutions,
                we stand as the industry’s beacon of excellence.
              </p>
              <br />
              <p>
                At Galaxy Conveyors Pvt. Ltd., we craft precision, durability,
                and trust into every link, ensuring that your operations run
                smoothly and efficiently.
              </p>
              <br />
              <p>
                Our mission is to be more than a supplier; we’re your dedicated
                partner in the journey to optimized conveyor performance.
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
