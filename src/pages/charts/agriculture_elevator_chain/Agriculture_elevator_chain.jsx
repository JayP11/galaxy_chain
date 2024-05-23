import React, { useEffect, useState } from "react";
import "./Agriculture_elevator_chain.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Agriculture_elevator_chain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Agriculture Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Agriculture Chains</h2>
          <h4>
            {/* TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp; */}
            ELEVATOR CHAIN
            {/* &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO 606] */}
          </h4>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.AgricultureElevatorChain}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.AgricultureElevatorChainGraph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
          <table width="566">
            <tbody>
              <tr>
                <th rowspan="2">Chain Number</th>
                <th>Pitch&nbsp;&nbsp; 'P'</th>
                <th width="46">Inner Width 'W' (Min)</th>
                <th>Roller Diameter 'D1' (Max)</th>
                <th width="46">Pin Diameter 'D2' (Max)</th>
                <th>Plate Thickness 'S'</th>
                <th>A'</th>
                <th>B' (Max)</th>
                <th>Centre Height 'C'</th>
                <th>Overall Height 'H' (Min)</th>
                <th>Hole Diameter 'D'(Min)</th>
                <th>U'</th>
              </tr>
              <tr>
                <th>Inch</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
              </tr>
              <tr>
                <td>S B41</td>
                <td rowspan="2">41.30</td>
                <td rowspan="2">21.40</td>
                <td rowspan="2">15.88</td>
                <td rowspan="2">8.27</td>
                <td rowspan="2">3.20</td>
                <td rowspan="2">30.00</td>
                <td rowspan="2">-</td>
                <td rowspan="2">27.00</td>
                <td rowspan="2">45.00</td>
                <td rowspan="2">8.00</td>
                <td rowspan="2">37.80</td>
              </tr>
              <tr>
                <td width="77">(Elevator Chain)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Agriculture_elevator_chain;
