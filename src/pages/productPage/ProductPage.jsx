import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import images from "../../constants/images";
import { Helmet } from "react-helmet";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [getchild, setchild] = useState([]);
  const [getColor, setColor] = useState(1);
  const [getcondition, SetCondition] = useState(false);
  const [getRollerLine, setRollerLine] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0rem",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
      width: "100%",
      height: "100%",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  const category = [
    {
      id: 1,
      name: "Roller Chains",
      list: [
        {
          id: 1,
          name: "Single Strand - Simplex",
          img: require("../../assets/simplexRollerChain.png"),
          category: "British Standard",
          link: "/Single_simplex_roller_british",
        },
        {
          id: 2,
          name: "Double Strand-Duplex",
          img: require("../../assets/duplexRollerChain.png"),
          category: "British Standard",
          link: "/Double_duplex_roller_british",
        },
        {
          id: 3,
          name: "Triple Strand-Triplex",
          img: require("../../assets/triplexRollerChain.png"),
          category: "British Standard",
          link: "/Triple_triplex_roller_british",
        },
        {
          id: 4,
          name: "Single Strand - Simplex",
          img: require("../../assets/simplexRollerChain.png"),
          category: "American Standard",
          link: "/Single_simplex_roller_american",
        },
        {
          id: 5,
          name: "Double Strand-Duplex",
          img: require("../../assets/duplexRollerChain.png"),
          category: "American Standard",
          link: "/Double_duplex_roller_american",
        },
        {
          id: 6,
          name: "Triple Strand-Triplex",
          img: require("../../assets/triplexRollerChain.png"),
          category: "American Standard",
          link: "/Triple_triplex_roller_american",
        },
      ],
    },
    {
      id: 2,
      name: "Leaf Chains",
      list: [
        {
          id: 1,
          name: "LL Series",
          img: require("../../assets/LLLeafChain.png"),
          link: "/LLSeriesLeaf",
        },
        {
          id: 2,
          name: "BL Series",
          img: require("../../assets/BLLeafChain.png"),
          link: "/BLSeriesLeaf",
        },
        {
          id: 3,
          name: "AL Series",
          img: require("../../assets/ALLeafChain.png"),
          link: "/ALSeriesLeaf",
        },
      ],
    },
    {
      id: 3,
      name: "Bush Chains",
      list: [
        {
          id: 1,
          name: "Single Strand",
          category: "British Standard",
          img: require("../../assets/BushChain.png"),
          link: "/Single_bush_british",
        },
      ],
    },
    {
      id: 4,
      name: "Extended Pitch Chains",
      list: [
        {
          id: 1,
          name: "Extended Pitch Chains",
          img: require("../../assets/ExtendedPitchChain.png"),
          link: "/Extended_pitch_chains",
        },
      ],
    },
    {
      id: 5,
      name: "Agriculture",
      list: [
        {
          id: 1,
          name: "Feeder Chains",
          img: require("../../assets/FeederChain.png"),
          category: "Agriculture",
          link: "/Agriculture_feeder_chain",
        },
        {
          id: 2,
          img: require("../../assets/ElevatorChain.png"),
          name: "Elevator Chains",
          category: "Agriculture",
          link: "/Agriculture_elevator_chain",
        },
      ],
    },
    {
      id: 6,
      name: "Other Chains",
      list: [
        {
          id: 1,
          img: require("../../assets/Other1.png"),
        },
        {
          id: 2,
          img: require("../../assets/Other2.png"),
        },
        {
          id: 3,
          img: require("../../assets/Other3.png"),
        },
        {
          id: 4,
          img: require("../../assets/Other4.png"),
        },
        {
          id: 5,
          img: require("../../assets/Other5.png"),
        },
        {
          id: 6,
          img: require("../../assets/Other6.png"),
        },
        {
          id: 7,
          img: require("../../assets/Other7.png"),
        },
        {
          id: 8,
          img: require("../../assets/Other8.png"),
        },
        {
          id: 9,
          img: require("../../assets/Other9.png"),
        },
        {
          id: 10,
          img: require("../../assets/Other10.jpg"),
        },
        {
          id: 11,
          img: require("../../assets/Other11.png"),
        },
        {
          id: 12,
          img: require("../../assets/Other12.jpg"),
        },
        {
          id: 13,
          img: require("../../assets/Other13.jpg"),
        },
        {
          id: 14,
          img: require("../../assets/Other14.png"),
        },
        {
          id: 15,
          img: require("../../assets/Other15.png"),
        },
        // {
        //   id: 16,
        //   img: require("../../assets/Other16.png"),
        // },
        {
          id: 17,
          img: require("../../assets/Other17.png"),
        },
      ],
    },
  ];

  const category1 = [
    {
      id: 1,
      name: "Single Strand - Simplex",
      // img: require("../../assets/RollerChain1.png"),
      img: require("../../assets/simplexRollerChain.png"),
      category: "British Standard",
      link: "/Single_simplex_roller_british",
    },
    {
      id: 2,
      name: "Double Strand-Duplex",
      img: require("../../assets/duplexRollerChain.png"),
      category: "British Standard",
      link: "/Double_duplex_roller_british",
    },
    {
      id: 3,
      name: "Triple Strand-Triplex",
      img: require("../../assets/triplexRollerChain.png"),
      category: "British Standard",
      link: "/Triple_triplex_roller_british",
    },
    {
      id: 4,
      name: "Single Strand - Simplex",
      img: require("../../assets/simplexRollerChain.png"),
      category: "American Standard",
      link: "/Single_simplex_roller_american",
    },
    {
      id: 5,
      name: "Double Strand-Duplex",
      img: require("../../assets/duplexRollerChain.png"),
      category: "American Standard",
      link: "/Double_duplex_roller_american",
    },
    {
      id: 6,
      name: "Triple Strand-Triplex",
      img: require("../../assets/triplexRollerChain.png"),
      category: "American Standard",
      link: "/Triple_triplex_roller_american",
    },
  ];

  // const location = useLocation();

  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.search);
  // }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Galaxy Chain Pvt. Ltd.| Our Products</title>
      </Helmet>
      <div style={{ background: "#F6F6F6" }}>
        <div className="prodpage_thought_main">
          <h2 className="prodpage_thought_inner">
            linking efficiency. unleashing potential.
          </h2>
        </div>
        <div
          className="industries_filter_title_main"
          style={{ padding: "1rem 0px 4px 0px" }}>
          {category.map((item) => {
            return (
              <div
                style={{
                  textDecoration: item.id == getColor ? "underline" : "",
                  textDecorationThickness: item.id == getColor ? "5px" : "",
                  fontWeight: item.id == getColor ? "800" : "600",
                  textDecorationColor:
                    item.id == getColor ? "var(--color-red)" : "",
                  color:
                    item.id == getColor
                      ? "var(--color-blue)"
                      : "var(--color-gray)",
                  textUnderlineOffset: "10px",
                }}
                className="industries_filter_title"
                onClick={() => {
                  setchild(item.list);
                  setColor(item.id);
                  SetCondition(true);
                  {
                    item.id == 1
                      ? setRollerLine(
                          "We makes these chains upto NanoPlex ( 9 Strands), Please share your Enquiry."
                        )
                      : setRollerLine("");
                  }
                }}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img
            src={images.Chainimg}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div className="propage_img_block" style={{ gap: "3rem" }}>
          {getcondition === true ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}>
                {getchild.map((item, index) => {
                  return (
                    <>
                      <div>
                        <Link to={item.link} style={{ cursor: "pointer" }}>
                          <div className="propage_name_main">
                            <div
                              style={{
                                color: "var(--color-blue)",
                                fontWeight: "800",
                              }}>
                              {item.name}
                            </div>
                          </div>
                          <div className="propage_img_main">
                            <img
                              src={item.img}
                              alt=""
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "contain",
                                background: "white",
                              }}
                            />
                          </div>
                          <div className="propage_name_main">
                            <div>{item.category}</div>
                          </div>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
              <h1 className="rollerLineH1">{getRollerLine}</h1>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}>
                {category1.map((item, index) => {
                  return (
                    <>
                      <Link to={item.link} style={{ cursor: "pointer" }}>
                        <div className="propage_name_main">
                          <div
                            style={{
                              color: "var(--color-blue)",
                              fontWeight: "800",
                            }}>
                            {item.name}
                          </div>
                        </div>
                        <div className="propage_img_main">
                          <img
                            src={item.img}
                            alt=""
                            style={{
                              height: "100%",
                              width: "100%",
                              objectFit: "contain",
                              background: "white",
                            }}
                          />
                        </div>
                        <div className="propage_name_main">
                          <div>{item.category}</div>
                        </div>{" "}
                      </Link>
                    </>
                  );
                })}
              </div>
              <h1 className="rollerLineH1">
                We makes these chains upto NanoPlex ( 9 Strands), Please share
                your Enquiry.
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
