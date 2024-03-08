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
      if (scrollPosition > /* Your Scroll Threshold */ 700) {
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
      <div className="heading">
        <h1>Milestones</h1>
      </div>
      <div class="underline"></div>
      <div
        className=""
        style={{
          backgroundImage: `url(${images.chain_img})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
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
          }}
        >
          <div className="milestone_con">
            <div className="milestone_part">
              <div className="milestone_part_inner1">
                <p className="milestone_part_text">GLOBAL</p>
                <p className="milestone_part_text">PRESENCE</p>
              </div>

              <div className="milestone_part_inner2_main">
                <div className="milestone_part_inner2">
                  {isCounterStarted && (
                    <p className="milestone_part_text_white">
                      <CountUp start={0} end={5} duration={2.75}></CountUp> +
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="milestone_part">
              <div className="milestone_part_inner1__light_blue_main">
                <div className="milestone_part_inner1__light_blue">
                  {isCounterStarted && (
                    <p className="milestone_part_text_white">
                      <CountUp start={0} end={20} duration={2.75}></CountUp> +
                    </p>
                  )}
                </div>
              </div>

              <div className="milestone_part_inner1 milestone_part_inner1_trans">
                <p className="milestone_part_text">INDIAN STATES</p>
                <p className="milestone_part_text">PRESENCE</p>
              </div>
            </div>

            <div className="milestone_part">
              <div className="milestone_part_inner1">
                <p className="milestone_part_text">TEAM</p>
                <p className="milestone_part_text">MEMBERS</p>
              </div>

              <div className="milestone_part_inner2_main_green">
                <div className="milestone_part_inner2_green">
                  {isCounterStarted && (
                    <p className="milestone_part_text_white">
                      <CountUp start={0} end={200} duration={2.75}></CountUp> +
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="milestone_part">
              <div className="milestone_part_inner1__light_yellow_main">
                <div className="milestone_part_inner1__light_yellow">
                  {isCounterStarted && (
                    <p className="milestone_part_text_white">
                      <CountUp start={0} end={1100} duration={2.75}></CountUp> +
                    </p>
                  )}
                </div>
              </div>

              <div className="milestone_part_inner1 milestone_part_inner1_trans">
                <p className="milestone_part_text">HAPPY</p>
                <p className="milestone_part_text">CUSTOMERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumCountHome;
