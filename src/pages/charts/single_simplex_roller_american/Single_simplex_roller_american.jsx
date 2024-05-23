import React, { useEffect, useState } from "react";
import "./Single_simplex_roller_american.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Single_simplex_roller_american = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Roller Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}
        >
          <h2 className="prodpage_thought_inner">Roller Chains</h2>
          <span>
            SINGLE STRAND - SIMPLEX&nbsp;&nbsp;&nbsp;&nbsp; AMERICAN STANDARD
            &nbsp;&nbsp;&nbsp;&nbsp; [As per ANSI B-29.1 / DIN 8188 / IS 2403 /
            ISO 606]
          </span>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.RollerChainSimplex}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.RollerChainSimplexGraph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main ChartDemo_main_roller_american">
          <table width="864">
            <tbody>
              <tr>
                <th colspan="4" width="230">
                  Chain Number
                </th>
                <th colspan="2" width="115">
                  Description
                </th>
                <th rowspan="2" width="57">
                  Pitch&nbsp;&nbsp; 'P'
                </th>
                <th rowspan="2" width="57">
                  Transverse Pitch 'Pt'&nbsp;
                </th>
                <th rowspan="2" width="57">
                  Roller Diameter 'D'(Max)
                </th>
                <th rowspan="2" width="57">
                  Bearing Pin Diameter'd' (Max)
                </th>
                <th rowspan="2" width="57">
                  Width Between Inner Plate 'W'(Min)
                </th>
                <th rowspan="2" width="57">
                  Width Over Bearing Pin 'B' (Max)
                </th>
                <th rowspan="2" width="57">
                  Plate Height (Max)
                </th>
                <th rowspan="2" width="57">
                  Tensile Strength (Min)
                </th>
                <th rowspan="2" width="57">
                  Average Weight Per Meter
                </th>
              </tr>
              <tr>
                <th rowspan="2" width="57">
                  GALAXY&nbsp; No.
                </th>
                <th colspan="2" rowspan="2" width="115">
                  ISO No.
                </th>
                <th rowspan="2" width="57">
                  ASA No.
                </th>
                <th colspan="2">Pitch x WIP</th>
              </tr>
              <tr>
                <th>inch</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>KN</th>
                <th>Kg.</th>
              </tr>
              <tr>
                <td>GH 501</td>
                <td colspan="2">10A - 1</td>
                <td>50H</td>
                <td>5/8 x 3/8</td>
                <td>15.88 x 9.53</td>
                <td>15.88</td>
                <td>-</td>
                <td>10.16</td>
                <td>5.08</td>
                <td>9.53</td>
                <td>21.80</td>
                <td>15.09</td>
                <td>26.97</td>
                <td>1.082</td>
              </tr>
              <tr>
                <td>GA 601</td>
                <td colspan="2">12A - 1</td>
                <td>60</td>
                <td>3/4 x 1/2</td>
                <td>19.05 x 12.58</td>
                <td>19.05</td>
                <td>-</td>
                <td>11.91</td>
                <td>5.96</td>
                <td>12.58</td>
                <td>26.80</td>
                <td>18.08</td>
                <td>31.28</td>
                <td>1.506</td>
              </tr>
              <tr>
                <td>GA 801</td>
                <td colspan="2">16A - 1</td>
                <td>80</td>
                <td>1 x 5/8</td>
                <td>25.40 x 15.75</td>
                <td>25.40</td>
                <td>-</td>
                <td>15.88</td>
                <td>7.94</td>
                <td>15.75</td>
                <td>34.00</td>
                <td>24.13</td>
                <td>55.62</td>
                <td>2.572</td>
              </tr>
              <tr>
                <td>GA 1001</td>
                <td colspan="2">20A - 1</td>
                <td>100</td>
                <td>1 1/4 x 3/4</td>
                <td>31.75 x 18.90</td>
                <td>31.75</td>
                <td>-</td>
                <td>19.05</td>
                <td>9.54</td>
                <td>18.90</td>
                <td>41.10</td>
                <td>30.18</td>
                <td>86.87</td>
                <td>3.993</td>
              </tr>
              <tr>
                <td>GA 1201</td>
                <td colspan="2">24A - 1</td>
                <td>120</td>
                <td>1 1/2 x 1</td>
                <td>38.10 x 25.22</td>
                <td>38.10</td>
                <td>-</td>
                <td>22.23</td>
                <td>11.11</td>
                <td>25.23</td>
                <td>50.80</td>
                <td>36.20</td>
                <td>126.99</td>
                <td>6.008</td>
              </tr>
              <tr>
                <td>GA 1401</td>
                <td colspan="2">28A - 1</td>
                <td>140</td>
                <td>1 3/4 x 1</td>
                <td>44.45 x 25.23</td>
                <td>44.45</td>
                <td>-</td>
                <td>25.40</td>
                <td>12.71</td>
                <td>25.23</td>
                <td>54.90</td>
                <td>42.24</td>
                <td>172.40</td>
                <td>7.623</td>
              </tr>
              <tr>
                <td>GA 1601</td>
                <td colspan="2">32A - 1</td>
                <td>160</td>
                <td>2 x 1 1/4</td>
                <td>50.80 x 31.55</td>
                <td>50.80</td>
                <td>-</td>
                <td>28.58</td>
                <td>14.29</td>
                <td>31.55</td>
                <td>65.50</td>
                <td>48.26</td>
                <td>226.82</td>
                <td>10.252</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Single_simplex_roller_american;
