import React, { useEffect, useState } from "react";
import "./Single_bush_british.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Single_bush_british = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Bush Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Bush Chains</h2>
          <span>
            {/* TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp; */}
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            {/* &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606] */}
          </span>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.BushChainImage}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.BushChainGraph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
          <table width="572">
            <tbody>
              <tr>
                <th rowspan="3" width="60">
                  GALAXY Chain no.
                </th>
                <th colspan="2" width="142">
                  Description
                </th>
                <th rowspan="2" width="61">
                  Pitch 'P'
                </th>
                <th rowspan="2" width="61">
                  Width Between Inner Plate 'W'(Min)
                </th>
                <th rowspan="2" width="61">
                  Bearing Pin Diameter'd' (Max)
                </th>
                <th rowspan="2" width="61">
                  Width Over Bearing Pin 'B' (Max)
                </th>
                <th rowspan="2" width="61">
                  Plate Height (Max){" "}
                </th>
                <th rowspan="2" width="61">
                  Tensile Strength (Min)
                </th>
              </tr>
              <tr>
                <th colspan="2" width="142">
                  Pitch x WIP
                </th>
              </tr>
              <tr>
                <th>Inch</th>
                <th>mm</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(KN)</th>
              </tr>
              <tr>
                <td>GBB 12</td>
                <td>3/4 x 7/16</td>
                <td>19.05 x 11.68</td>
                <td>19.05</td>
                <td>11.68</td>
                <td>5.72</td>
                <td>22.70</td>
                <td>16.13</td>
                <td>28.94</td>
              </tr>
              <tr>
                <td>GBB 16</td>
                <td>1 x 11/16</td>
                <td>25.40 x 17.02</td>
                <td>25.40</td>
                <td>17.02</td>
                <td>8.28</td>
                <td>36.10</td>
                <td>21.08</td>
                <td>60.92</td>
              </tr>
              <tr>
                <td>GBB 20</td>
                <td>1 1/4 x 0.77</td>
                <td>31.75 x 19.56</td>
                <td>31.75</td>
                <td>19.56</td>
                <td>10.19</td>
                <td>43.20</td>
                <td>26.42</td>
                <td>95.16</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Single_bush_british;
