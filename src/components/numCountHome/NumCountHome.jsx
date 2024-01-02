import React, { useEffect, useState } from "react";
import "./NumCountHome.css";
import images from "../../constants/images";
import CountUp from "react-countup";

const NumCountHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCounterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const startCounterOnScroll = () => {
      // Replace the following line with the actual scroll threshold you want
      if (scrollPosition > /* Your Scroll Threshold */ 1700) {
        setCounterStarted(true);
        // Remove the scroll event listener once the counter is started (optional)
        window.removeEventListener("scroll", startCounterOnScroll);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Attach a separate event listener for starting the counter on scroll
    window.addEventListener("scroll", startCounterOnScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", startCounterOnScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="NumCountHome_main">
      <div
        className=""
        style={{
          backgroundImage: `url(${images.chain_img})`,
          backgroundSize: "cover",
          height: "100%",
          // backgroundPosition: "inherit",
          // backdropFilter: "blur(2px)",
          // width: "100vw",
          // display: "flex",
          // alignItems: "center",
        }}>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "var(--color-white)",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingBottom: "4rem",
          }}>
          <div className="heading" style={{ color: "darkgray" }}>
            <h1>Milestones</h1>
          </div>
          <div className="underline"></div>
          <div className="card_count_top">
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.global}
                  alt="global"
                  className="count_icon_inner"
                />
              </div>
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  0<CountUp start={0} end={5} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Global Presence</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.india_location}
                  alt="india_location"
                  className="count_icon_inner"
                />
              </div>
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={20} duration={2.75}></CountUp> +
                </div>
              )}

              <div>
                <h3 style={{ fontWeight: "800" }}>Indian States Presence</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Industries_Serving}
                  alt="Industries_Serving"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={15} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Industries Serving</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Team_Members}
                  alt="Team_Members"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={200} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Team Members</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Happy_Customers}
                  alt="Happy_Customers"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={1100} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Happy Customers</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Manufacturing_Capacity}
                  alt="Manufacturing_Capacity"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={250000} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Manufacturing Capacity</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.Manufacturing_Unitof}
                  alt="Manufacturing_Unitof"
                  className="count_icon_inner"
                />
              </div>{" "}
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={85000} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Manufacturing Unit of</h3>
              </div>
            </div>
            <div className="card_count_main">
              <div className="count_icon_main">
                <img
                  src={images.experience}
                  alt="experience"
                  className="count_icon_inner"
                />
              </div>
              {isCounterStarted && (
                <div style={{ fontSize: "40px", fontWeight: "900" }}>
                  <CountUp start={0} end={33} duration={2.75}></CountUp> +
                </div>
              )}
              <div>
                <h3 style={{ fontWeight: "800" }}>Years of experience</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumCountHome;
