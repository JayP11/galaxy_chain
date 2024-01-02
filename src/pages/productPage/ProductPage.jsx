import React, { useState } from "react";
import "./ProductPage.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [getImages, setGetImages] = useState(1);
  const [getchild, setchild] = useState([]);
  const [getColor, setColor] = useState(1);
  const [getindex, setindex] = useState();

  const data = [
    {
      id: 1,
      industry: "LPG Bottling Plants",
      list: [
        {
          id: 1,
          img: require("../../assets/Factory_img.png"),
        },
      ],
    },
    {
      id: 2,
      industry: "Power Plants",
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
      industry: "Cement Industries",
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
      industry: "Road Construction Machinery & Equipment Industries",
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
        {
          id: 5,
          img: require("../../assets/Factory_img.png"),
        },
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
        {
          id: 5,
          img: require("../../assets/Factory_img.png"),
        },
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
        {
          id: 5,
          img: require("../../assets/Factory_img.png"),
        },
      ],
    },
    {
      id: 5,
      industry: "Palm oil Industries",
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
    {
      id: 6,
      industry: "Steel Industries",
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
    {
      id: 7,
      industry: "Fertilizer Industries",
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

  const data1 = [
    {
      id: 1,
      img: require("../../assets/Factory_img.png"),
    },
  ];

  const [getcondition, SetCondition] = useState(false);

  return (
    <div className="ProductPage_main">
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
                // src={images.Factory_img}
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  fugit quam hic odio, ducimus inventore tempora aliquam. Quam,
                  officiis assumenda.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  fugit quam hic odio, ducimus inventore tempora aliquam. Quam,
                  officiis assumenda.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  fugit quam hic odio, ducimus inventore tempora aliquam. Quam,
                  officiis assumenda.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  fugit quam hic odio, ducimus inventore tempora aliquam. Quam,
                  officiis assumenda.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  fugit quam hic odio, ducimus inventore tempora aliquam. Quam,
                  officiis assumenda.
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
                    Attachment Roller Chains
                  </h3>
                </div>
                <div>
                  <h4>Show more</h4>
                </div>{" "}
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                  fugit quam hic odio, ducimus inventore tempora aliquam. Quam,
                  officiis assumenda.
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
                }}>
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
    </div>
  );
};

export default ProductPage;
