import React, { useState } from "react";
import "./ProductPage.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";

const ProductPage = () => {
  const [getImages, setGetImages] = useState(1);
  const [getchild, setchild] = useState([]);
  const [getColor, setColor] = useState(1);
  const [getindex, setindex] = useState();

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
      pdf: require("../../assets/RollerBritish.pdf"),
      list: [
        {
          id: 1,
          img: require("../../assets/RollerChain1.png"),
        },
        {
          id: 2,
          img: require("../../assets/RollerChain2.png"),
        },
        {
          id: 3,
          img: require("../../assets/RollerChain3.png"),
        },
        {
          id: 4,
          img: require("../../assets/RollerChain4.png"),
        },
      ],
    },
    {
      id: 2,
      name: "Leaf Chains",
      pdf: require("../../assets/RollerBritish.pdf"),
      list: [
        {
          id: 1,
          img: require("../../assets/Factory_img.png"),
        },
        {
          id: 2,
          img: require("../../assets/Factory_img.png"),
        },
      ],
    },
    {
      id: 3,
      name: "Extended Pitch Chains",
      pdf: require("../../assets/RollerBritish.pdf"),
      list: [
        {
          id: 1,
          img: require("../../assets/Factory_img.png"),
        },
        {
          id: 2,
          img: require("../../assets/Factory_img.png"),
        },
      ],
    },
    {
      id: 4,
      name: "Agriculture & Harvester Chains",
      pdf: require("../../assets/RollerBritish.pdf"),
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
      ],
    },
    {
      id: 5,
      name: "Other Chains",
      pdf: require("../../assets/RollerBritish.pdf"),
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
      img: require("../../assets/RollerChain1.png"),
      name: "Single Strand - Simplex",
      pdf: require("../../assets/RollerBritish.pdf"),
    },
    {
      id: 2,
      img: require("../../assets/RollerChain2.png"),
      name: "Single Strand - Simplex",
      pdf: require("../../assets/RollerBritish.pdf"),
    },
    {
      id: 3,
      img: require("../../assets/RollerChain3.png"),
      name: "Single Strand - Simplex",
      pdf: require("../../assets/RollerBritish.pdf"),
    },
    {
      id: 4,
      img: require("../../assets/RollerChain4.png"),
      name: "Single Strand - Simplex",
      pdf: require("../../assets/RollerBritish.pdf"),
    },
  ];

  const [getcondition, SetCondition] = useState(false);

  return (
    <>
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
        <div>
          <Link to="/" className="viewChart_btn_main">
            VIEW CHART
          </Link>
        </div>
        <div className="propage_img_block">
          {getcondition === true ? (
            <>
              {getchild.map((item, index) => {
                return (
                  <div>
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
                    <a
                      href={item.pdf}
                      target="_blank"
                      download
                      className="propage_name_main">
                      <div>Single Strand - Simplex</div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: " 0.2rem",
                        }}>
                        more info <FaAnglesRight />
                      </div>
                    </a>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {category1.map((item, index) => {
                return (
                  <>
                    <a href={item.pdf} target="_blank" download>
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
                        <div>
                          <span>Single Strand - Simplex</span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: " 0.2rem",
                          }}>
                          more info <FaAnglesRight />
                        </div>
                      </div>
                    </a>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;

{
  /* <div className="ProductPage_main">
  <div style={{ padding: "3rem 0" }}>
    <div className="heading">
      <h1>Products</h1>
    </div>
    <div className="underline"></div>
    <div className="products_page_card_top">
      <div className="products_page_card_main">
        <div className="products_page_img_main">
          <img
            src="https://www.shutterstock.com/image-photo/roller-chain-isolated-on-white-260nw-1448236418.jpg"
            alt="Factory_img"
            className="products_page_img_inner"
          />
        </div>
        <div className="products_page_card_desc_main">
          <div className="products_page_title_main">
            <div>
              <h3>Roller Chains</h3>
            </div>
            <div>
              <Link to="/RollerChains">
                <h4>Show more</h4>
              </Link>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit
              quam hic odio, ducimus inventore tempora aliquam. Quam, officiis
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div className="products_page_card_main">
        <div className="products_page_img_main">
          <img
            src={images.Factory_img}
            alt="Factory_img"
            className="products_page_img_inner"
          />
        </div>
        <div className="products_page_card_desc_main">
          <div className="products_page_title_main">
            <div>
              <h3>Leaf Chains</h3>
            </div>
            <div>
              <h4>Show more</h4>
            </div>{" "}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit
              quam hic odio, ducimus inventore tempora aliquam. Quam, officiis
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div className="products_page_card_main">
        <div className="products_page_img_main">
          <img
            src={images.Factory_img}
            alt="Factory_img"
            className="products_page_img_inner"
          />
        </div>
        <div className="products_page_card_desc_main">
          <div className="products_page_title_main">
            <div>
              <h3>Bush Chains</h3>
            </div>
            <div>
              <h4>Show more</h4>
            </div>{" "}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit
              quam hic odio, ducimus inventore tempora aliquam. Quam, officiis
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div className="products_page_card_main">
        <div className="products_page_img_main">
          <img
            src={images.Factory_img}
            alt="Factory_img"
            className="products_page_img_inner"
          />
        </div>
        <div className="products_page_card_desc_main">
          <div className="products_page_title_main">
            <div>
              <h3>Extended Pitch Chains</h3>
            </div>
            <div>
              <h4>Show more</h4>
            </div>{" "}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit
              quam hic odio, ducimus inventore tempora aliquam. Quam, officiis
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div className="products_page_card_main">
        <div className="products_page_img_main">
          <img
            src={images.Factory_img}
            alt="Factory_img"
            className="products_page_img_inner"
          />
        </div>
        <div className="products_page_card_desc_main">
          <div className="products_page_title_main">
            <div>
              <h3 style={{ maxWidth: "200px" }}>
                Agriculture & Harvester Chains
              </h3>
            </div>
            <div>
              <h4>Show more</h4>
            </div>{" "}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit
              quam hic odio, ducimus inventore tempora aliquam. Quam, officiis
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div className="products_page_card_main">
        <div className="products_page_img_main">
          <img
            src={images.Factory_img}
            alt="Factory_img"
            className="products_page_img_inner"
          />
        </div>
        <div className="products_page_card_desc_main">
          <div className="products_page_title_main">
            <div>
              <h3 style={{ maxWidth: "200px" }}>Attachment Roller Chains</h3>
            </div>
            <div>
              <h4>Show more</h4>
            </div>{" "}
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugit
              quam hic odio, ducimus inventore tempora aliquam. Quam, officiis
              assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{ padding: "3rem 0" }}>
    <div className="heading">
      <h1>Industries We Empower</h1>
    </div>
    <div className="underline"></div>

    <div className="industries_filter_title_main">
      {data.map((item) => {
        return (
          <div
            style={{
              background: item.id == getColor ? "#8b0000" : "#e60000",
            }}
            className="industries_filter_title"
            onClick={() => {
              setchild(item.list);
              setColor(item.id);

              SetCondition(true);
            }}
          >
            <p>{item.industry}</p>
          </div>
        );
      })}
    </div>

    <div className="propage_img_block">
      {getcondition === true ? (
        <>
          {getchild.map((item, index) => {
            return (
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
            );
          })}
        </>
      ) : (
        <>
          {data1.map((item, index) => {
            return (
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
            );
          })}
        </>
      )}
    </div>
  </div>
</div>; */
}
