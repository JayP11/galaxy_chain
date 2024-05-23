import React, { useEffect, useState } from "react";
import "./Agriculture_feeder_chain.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Agriculture_feeder_chain = () => {
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
            FEEDER CHAIN
            {/* &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO 606] */}
          </h4>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.AgricultureFeederChain}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.AgricultureFeederChainGraph}
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
                <th rowspan="2" width="77">
                  Chain Number
                </th>
                <th width="31">Pitch&nbsp;&nbsp; 'P'</th>
                <th width="46">Inner Width 'W' (Min)</th>
                <th width="46">Roller Diameter 'D1' (Max)</th>
                <th width="46">Pin Diameter 'D2' (Max)</th>
                <th width="51">Plate Thickness 'S'</th>
                <th width="46">A'</th>
                <th width="46">B' (Max)</th>
                <th width="46">Plateform Height'C'</th>
                <th width="46">Slot Width 'M' (Min)</th>
                <th colspan="2" width="77">
                  Slot Length 'n' (Min)
                </th>
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
              </tr>
              <tr>
                <td>S B41</td>
                <td rowspan="2" width="31">
                  41.30
                </td>
                <td rowspan="2" width="46">
                  21.40
                </td>
                <td rowspan="2">15.88</td>
                <td rowspan="2">8.28</td>
                <td rowspan="2">3.20</td>
                <td rowspan="2">35.00</td>
                <td rowspan="2">47.65</td>
                <td rowspan="2">16.00</td>
                <td rowspan="2">11.50</td>
                <td colspan="2" rowspan="2">
                  9.00
                </td>
              </tr>
              <tr>
                <td width="77">(Feeder Chain)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Agriculture_feeder_chain;
