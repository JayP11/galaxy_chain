import React, { useEffect, useState } from "react";
import "./Extended_pitch_chains.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Extended_pitch_chains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Extended Pitch Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Extended Pitch Chains</h2>
          <h4>
            EXTENDED PITCH CHAINS
            {/* TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp; AMERICAN STANDARD */}
            &nbsp;&nbsp;&nbsp;&nbsp; [ As per ASME B29.100 - 2011 ]
          </h4>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.ExtendedPitchChainImage}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.ExtendedPitchChainGraph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
          <table width="546">
            <tbody>
              <tr>
                <th rowspan="4" width="54">
                  Chain Number
                </th>
                <th rowspan="3" width="54">
                  Pitch&nbsp;&nbsp; 'P'
                </th>
                <th colspan="2" width="109">
                  Roller
                </th>
                <th rowspan="3" width="54">
                  Width Between Inner Plate 'W'
                </th>
                <th rowspan="3" width="54">
                  Pin Diameter
                </th>
                <th rowspan="3" width="54">
                  Chain Width 'B'
                </th>
                <th colspan="2" width="109">
                  Side Plate
                </th>
                <th rowspan="3" width="54">
                  Tensile Strength (Min)
                </th>
              </tr>
              <tr>
                <th width="54">Small</th>
                <th width="54">Large</th>
                <th rowspan="2" width="54">
                  Height 'H'
                </th>
                <th rowspan="2" width="54">
                  Thickness 'T'
                </th>
              </tr>
              <tr>
                <th width="54">Diameter 'R' </th>
                <th width="54">Diameter 'R' </th>
              </tr>
              <tr>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(mm)</th>
                <th>(KN)</th>
              </tr>
              <tr>
                <td>2050</td>
                <td>31.75</td>
                <td>10.16</td>
                <td>19.05</td>
                <td>9.53</td>
                <td>5.08</td>
                <td>23.50</td>
                <td>15.00</td>
                <td>2.03</td>
                <td>21.71</td>
              </tr>
              <tr>
                <td>2060</td>
                <td>38.10</td>
                <td>11.91</td>
                <td>22.23</td>
                <td>12.70</td>
                <td>5.94</td>
                <td>28.70</td>
                <td>18.00</td>
                <td>2.39</td>
                <td>31.27</td>
              </tr>
              <tr>
                <td>2080</td>
                <td>50.80</td>
                <td>15.88</td>
                <td>28.58</td>
                <td>15.88</td>
                <td>7.92</td>
                <td>35.50</td>
                <td>24.00</td>
                <td>3.18</td>
                <td>55.60</td>
              </tr>
              <tr>
                <td>2100</td>
                <td>63.50</td>
                <td>19.05</td>
                <td>39.67</td>
                <td>19.05</td>
                <td>9.53</td>
                <td>42.21</td>
                <td>28.70</td>
                <td>3.96</td>
                <td>86.87</td>
              </tr>
              <tr>
                <td>2120</td>
                <td>76.20</td>
                <td>22.23</td>
                <td>44.45</td>
                <td>25.40</td>
                <td>11.10</td>
                <td>52.42</td>
                <td>35.50</td>
                <td>4.75</td>
                <td>125.10</td>
              </tr>
              <tr>
                <td>2160</td>
                <td>101.60</td>
                <td>28.58</td>
                <td>57.15</td>
                <td>31.75</td>
                <td>14.27</td>
                <td>67.31</td>
                <td>47.59</td>
                <td>6.35</td>
                <td>222.40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Extended_pitch_chains;
