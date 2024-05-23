import React from "react";
import "./Industries_We_Empower.css";
import images from "../../constants/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Industries_We_Empower = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2500,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home_slider_con">
      <div className="heading">
        <h1>Industries We Serve</h1>
      </div>
      <div className="underline"></div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
        <Slider {...settings}>
          <div className="home_slider_card_main">
            <img src={images.ind1} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Agriculture & Harvester</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind2} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Food Industries</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind3} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Material Handling Machinery</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind4} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Road Consturction Machinery</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind5} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Power Plant</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind6} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Cement Plant</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind7} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Steel Plant</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind8} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Fertilizer</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind9} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Tobacco Industries</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind10} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Palm oil Industries</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind11} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">LPG Bottling Plants</p>
            </div>
          </div>
          <div className="home_slider_card_main">
            <img src={images.ind12} alt="" className="home_slider_img" />
            <div className="home_slider_img_inner_main">
              <p className="home_slider_img_txt">Forged Link Chains</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Industries_We_Empower;

// import React from "react";
// import images from "../../constants/images";
// import "./Industries_We_Empower.css";
// const Industries_We_Empower = () => {
//   return (
//     <div className="Industries_We_Empower_main">
//       <div>
//         {/* <div className="heading"> */}
//         <div className="heading">
//           <h1>Industries We Empower</h1>
//         </div>

//         <div className="underline"></div>
//       </div>
//       <div className="industry_box_top">
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.agriculture}
//               alt="agriculture"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3 style={{ maxWidth: "100px" }}>Agricultural Machines</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.sugarcane}
//               alt="sugarcane"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Sugar Plants</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.escalator}
//               alt="Escalators"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Escalators</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.otherindustry}
//               alt="otherindustry"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Other Industries</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.power_plant}
//               alt="power_plant"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Power Plants</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.tobacco}
//               alt="tobacco"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Tobacco Machines</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.Mining}
//               alt="Mining"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Mining</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.Fertilizer_Plants}
//               alt="Fertilizer_Plants"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Fertilizer Plants</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.textile}
//               alt="textile"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Textile Machines</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.Steel_Plants}
//               alt="Steel_Plants"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Steel Plants</h3>
//           </div>
//         </div>
//         <div className="industry_box_main">
//           <div className="industry_icon_main">
//             <img
//               src={images.Cement_Plants}
//               alt="Cement_Plants"
//               className="industry_icon_inner"
//             />
//           </div>
//           <div>
//             <h3>Cement Plants</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Industries_We_Empower;
