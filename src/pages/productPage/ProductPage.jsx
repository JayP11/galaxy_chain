import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import images from "../../constants/images";
import { Helmet } from "react-helmet";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import Navbar from "../../common/navbar/Navbar";

const ProductPage = () => {
  const [getchild, setchild] = useState([]);
  const [getColor, setColor] = useState(1);
  const [getcondition, SetCondition] = useState(false);
  const [getModal, setModal] = useState(false);

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

  // const data = [
  //   {
  //     id: 1,
  //     industry: "LPG Bottling Plants",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     industry: "Power Plants",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     industry: "Cement Industries",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  //   {
  //     industry: "Road Construction Machinery & Equipment Industries",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 4,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 5,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 4,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 5,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 4,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 5,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     industry: "Palm oil Industries",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 4,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     industry: "Steel Industries",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 4,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     industry: "Fertilizer Industries",
  //     list: [
  //       {
  //         id: 1,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 2,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 3,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //       {
  //         id: 4,
  //         img: require("../../assets/Factory_img.png"),
  //       },
  //     ],
  //   },
  // ];
  const category = [
    {
      id: 1,
      name: "Roller Chains",
      list: [
        {
          id: 1,
          name: "Single Strand - Simplex",
          img: require("../../assets/RollerChain1.png"),
          category: "British Standard",
          link: "/Single_simplex_roller_british",
        },
        {
          id: 2,
          name: "Double Strand-Duplex",
          img: require("../../assets/RollerChain2.png"),
          category: "British Standard",
          link: "/Double_duplex_roller_british",
        },
        {
          id: 3,
          name: "Triple Strand-Triplex",
          img: require("../../assets/RollerChain3.png"),
          category: "British Standard",
          link: "/Triple_triplex_roller_british",
        },
        {
          id: 4,
          name: "Single Strand - Simplex",
          img: require("../../assets/RollerChain4.png"),
          category: "American Standard",
          link: "/Single_simplex_roller_american",
        },
        {
          id: 5,
          name: "Double Strand-Duplex",
          img: require("../../assets/RollerChain4.png"),
          category: "American Standard",
          link: "/Double_duplex_roller_american",
        },
        {
          id: 6,
          name: "Triple Strand-Triplex",
          img: require("../../assets/RollerChain4.png"),
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
          img: require("../../assets/Factory_img.png"),
        },
        {
          id: 2,
          name: "BL Series",
          img: require("../../assets/Factory_img.png"),
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
          img: require("../../assets/RollerChain1.png"),
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
          img: require("../../assets/RollerChain1.png"),
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
          img: require("../../assets/RollerChain1.png"),
          name: "Feeder Chains",
          category: "Agriculture",
          link: "/Agriculture_feeder_chain",
        },
        {
          id: 2,
          img: require("../../assets/RollerChain1.png"),
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
          img: require("../../assets/Factory_img.png"),
        },
        {
          id: 2,
          img: require("../../assets/Factory_img.png"),
        },
        {
          id: 3,
          img: require("../../assets/Factory_img.png"),
        },
        {
          id: 4,
          img: require("../../assets/Factory_img.png"),
        },
      ],
    },
  ];

  const category1 = [
    {
      id: 1,
      name: "Single Strand - Simplex",
      img: require("../../assets/RollerChain1.png"),
      category: "British Standard",
      link: "/Single_simplex_roller_british",
    },
    {
      id: 2,
      name: "Double Strand-Duplex",
      img: require("../../assets/RollerChain2.png"),
      category: "British Standard",
      link: "/Double_duplex_roller_british",
    },
    {
      id: 3,
      name: "Triple Strand-Triplex",
      img: require("../../assets/RollerChain3.png"),
      category: "British Standard",
      link: "/Triple_triplex_roller_british",
    },
    {
      id: 4,
      name: "Single Strand - Simplex",
      img: require("../../assets/RollerChain4.png"),
      category: "American Standard",
      link: "/Single_simplex_roller_american",
    },
    {
      id: 5,
      name: "Double Strand-Duplex",
      img: require("../../assets/RollerChain4.png"),
      category: "American Standard",
      link: "/Double_duplex_roller_american",
    },
    {
      id: 6,
      name: "Triple Strand-Triplex",
      img: require("../../assets/RollerChain4.png"),
      category: "American Standard",
      link: "/Triple_triplex_roller_american",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const getIndex = localStorage.getItem("index");
  //   if (getIndex) {
  //     setColor(getIndex);
  //     SetCondition(true);
  //   } else {
  //     setColor(1);
  //   }
  //   console.log("getIndex", getIndex);
  // }, [getColor]);

  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Our Products</title>
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

        <div className="propage_img_block">
          {getcondition === true ? (
            <>
              {getchild.map((item, index) => {
                return (
                  <Link to={item.link} style={{ cursor: "pointer" }}>
                    <div className="propage_name_main">
                      <div>{item.name}</div>
                    </div>
                    <div className="propage_img_main">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="propage_name_main">
                      <div>{item.category}</div>
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              {category1.map((item, index) => {
                return (
                  <Link to={item.link} style={{ cursor: "pointer" }}>
                    <div className="propage_name_main">
                      <div>{item.name}</div>
                    </div>
                    <div className="propage_img_main">
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="propage_name_main">
                      <div>{item.category}</div>
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
      {/* <ReactModal
        isOpen={getModal}
        onRequestClose={() => {
          setModal(false);
        }}
        style={customStyles}>
        <Navbar />
        <div className="ChartDemo_main">
          <div
            className="chart_head_main"
            style={{ letterSpacing: "1px", lineHeight: "1.4" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setModal(false);
              }}>
              <div className="chart_name_head_main">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                  {" "}
                  <IoChevronBackCircle
                    style={{ fontSize: "24px", color: "var(--color-white)" }}
                  />
                  <h1>Roller Chains</h1>
                </div>
              </div>
            </div>
            <h3>BRITISH STANDARD</h3>
            <span>[As per BS 228 / DIN 8187 / IS 2403 / ISO 606]</span>
          </div>
          <div className="table_main">
            <table width="418">
              <tbody>
                <tr>
                  <td rowspan="3" width="26">
                    CHAIN NO.
                  </td>
                  <td rowspan="2" width="22">
                    PITCH
                  </td>
                  <td rowspan="2" width="26">
                    ROLLER
                  </td>
                  <td rowspan="2" width="22">
                    WIDTH
                  </td>
                  <td colspan="13" width="275">
                    ATTACHMENT&nbsp;&nbsp; DIMENSION
                  </td>
                  <td rowspan="2" width="45">
                    BREAKING LOAD
                  </td>
                </tr>
                <tr>
                  <td rowspan="2">S</td>
                  <td rowspan="2">Wp</td>
                  <td rowspan="2">N</td>
                  <td rowspan="2">O</td>
                  <td rowspan="2">Ti</td>
                  <td rowspan="2">T</td>
                  <td rowspan="2">C</td>
                  <td rowspan="2">X</td>
                  <td rowspan="2">Dp</td>
                  <td rowspan="2">Lp</td>
                  <td rowspan="2">C1</td>
                  <td rowspan="2">Xs</td>
                  <td rowspan="2">L1</td>
                </tr>
                <tr>
                  <td>P</td>
                  <td>Dr</td>
                  <td>W</td>
                  <td>KN.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MIN.</td>
                </tr>
                <tr>
                  <td>10B-1</td>
                  <td>15.88</td>
                  <td>10.16</td>
                  <td>9.65</td>
                  <td>10.31</td>
                  <td>14.60</td>
                  <td>14.10</td>
                  <td>5.30</td>
                  <td>1.65</td>
                  <td>1.65</td>
                  <td>15.90</td>
                  <td>23.80</td>
                  <td>5.08</td>
                  <td>21.20</td>
                  <td>15.90</td>
                  <td>23.70</td>
                  <td>11.88</td>
                  <td>22.27</td>
                </tr>
                <tr>
                  <td>12B-1</td>
                  <td>19.05</td>
                  <td>12.07</td>
                  <td>11.68</td>
                  <td>13.46</td>
                  <td>16.00</td>
                  <td>16.00</td>
                  <td>6.40</td>
                  <td>1.80</td>
                  <td>1.80</td>
                  <td>19.05</td>
                  <td>25.80</td>
                  <td>5.72</td>
                  <td>24.18</td>
                  <td>17.90</td>
                  <td>26.20</td>
                  <td>14.28</td>
                  <td>28.94</td>
                </tr>
                <tr>
                  <td>16B-1</td>
                  <td>25.40</td>
                  <td>15.88</td>
                  <td>17.02</td>
                  <td>15.90</td>
                  <td>19.70</td>
                  <td>19.00</td>
                  <td>6.40</td>
                  <td>3.90</td>
                  <td>3.10</td>
                  <td>25.40</td>
                  <td>37.40</td>
                  <td>8.28</td>
                  <td>38.00</td>
                  <td>26.00</td>
                  <td>35.00</td>
                  <td>19.08</td>
                  <td>60.04</td>
                </tr>
                <tr>
                  <td>20B-1</td>
                  <td>31.75</td>
                  <td>19.05</td>
                  <td>19.56</td>
                  <td>19.85</td>
                  <td>25.80</td>
                  <td>25.25</td>
                  <td>8.40</td>
                  <td>4.50</td>
                  <td>3.50</td>
                  <td>31.75</td>
                  <td>42.85</td>
                  <td>10.19</td>
                  <td>44.00</td>
                  <td>37.75</td>
                  <td>42.00</td>
                  <td>23.81</td>
                  <td>95.16</td>
                </tr>
                <tr>
                  <td>24B-1</td>
                  <td>38.10</td>
                  <td>25.40</td>
                  <td>25.40</td>
                  <td>26.70</td>
                  <td>33.00</td>
                  <td>28.00</td>
                  <td>10.50</td>
                  <td>6.15</td>
                  <td>4.90</td>
                  <td>38.10</td>
                  <td>51.85</td>
                  <td>14.62</td>
                  <td>57.30</td>
                  <td>38.00</td>
                  <td>60.00</td>
                  <td>28.58</td>
                  <td>160.10</td>
                </tr>
                <tr>
                  <td>28B-1</td>
                  <td>44.45</td>
                  <td>27.94</td>
                  <td>30.99</td>
                  <td>28.58</td>
                  <td>36.20</td>
                  <td>38.00</td>
                  <td>13.10</td>
                  <td>6.60</td>
                  <td>6.00</td>
                  <td>44.45</td>
                  <td>57.10</td>
                  <td>15.89</td>
                  <td>68.90</td>
                  <td>45.00</td>
                  <td>65.00</td>
                  <td>33.33</td>
                  <td>200.12</td>
                </tr>
                <tr>
                  <td>32B-1</td>
                  <td>50.80</td>
                  <td>29.21</td>
                  <td>30.99</td>
                  <td>31.75</td>
                  <td>41.00</td>
                  <td>44.50</td>
                  <td>13.10</td>
                  <td>6.60</td>
                  <td>6.00</td>
                  <td>50.80</td>
                  <td>68.50</td>
                  <td>17.80</td>
                  <td>70.50</td>
                  <td>50.80</td>
                  <td>77.00</td>
                  <td>38.10</td>
                  <td>250.16</td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
        </div>
      </ReactModal> */}
    </>
  );
};

export default ProductPage;
