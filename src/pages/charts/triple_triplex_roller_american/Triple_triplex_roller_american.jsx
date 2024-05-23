import React, { useEffect, useState } from "react";
import "./Triple_triplex_roller_american.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Triple_triplex_roller_american = () => {
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
            TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp; AMERICAN STANDARD
            &nbsp;&nbsp;&nbsp;&nbsp;[As per ANSI B-29.1 / DIN 8188 / IS 2403 /
            ISO 606]
          </span>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.RollerChainTriplex}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.RollerChainTriplexGraph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main  ChartDemo_main_roller_american">
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
                <td>GH 503</td>
                <td colspan="2">10A - 3</td>
                <td>50H - 3</td>
                <td>5/8 x 3/8</td>
                <td>15.88 x 9.53</td>
                <td>15.88</td>
                <td>18.11</td>
                <td>10.16</td>
                <td>5.08</td>
                <td>9.53</td>
                <td>57.90</td>
                <td>15.09</td>
                <td>80.93</td>
                <td>3.247</td>
              </tr>
              <tr>
                <td>GA 603</td>
                <td colspan="2">12A - 3</td>
                <td>60 - 3</td>
                <td>3/4 x 1/2</td>
                <td>19.05 x 12.58</td>
                <td>19.05</td>
                <td>22.78</td>
                <td>11.91</td>
                <td>5.96</td>
                <td>12.58</td>
                <td>72.40</td>
                <td>18.08</td>
                <td>93.85</td>
                <td>4.516</td>
              </tr>
              <tr>
                <td>GA 803</td>
                <td colspan="2">16A - 3</td>
                <td>80 - 3</td>
                <td>1 x 5/8</td>
                <td>25.40 x 15.75</td>
                <td>25.40</td>
                <td>29.29</td>
                <td>15.88</td>
                <td>7.94</td>
                <td>15.75</td>
                <td>92.60</td>
                <td>24.13</td>
                <td>166.87</td>
                <td>7.715</td>
              </tr>
              <tr>
                <td>GA 1003</td>
                <td colspan="2">20A - 3</td>
                <td>100 - 3</td>
                <td>1 1/4 x 3/4</td>
                <td>31.75 x 18.90</td>
                <td>31.75</td>
                <td>35.76</td>
                <td>19.05</td>
                <td>9.54</td>
                <td>18.90</td>
                <td>112.70</td>
                <td>30.18</td>
                <td>260.31</td>
                <td>11.804</td>
              </tr>
              <tr>
                <td>GA 1203</td>
                <td colspan="2">24A - 3</td>
                <td>120 - 3</td>
                <td>1 1/2 x 1</td>
                <td>38.10 x 25.23</td>
                <td>38.10</td>
                <td>45.44</td>
                <td>22.23</td>
                <td>11.11</td>
                <td>25.23</td>
                <td>141.70</td>
                <td>36.20</td>
                <td>380.98</td>
                <td>17.994</td>
              </tr>
              <tr>
                <td>GA 1403</td>
                <td colspan="2">28A - 3</td>
                <td>140 - 3</td>
                <td>1 3/4 x 1</td>
                <td>44.45 x 25.23</td>
                <td>44.45</td>
                <td>48.87</td>
                <td>25.40</td>
                <td>12.71</td>
                <td>25.23</td>
                <td>152.40</td>
                <td>42.24</td>
                <td>517.20</td>
                <td>22.869</td>
              </tr>
              <tr>
                <td>GA 1603</td>
                <td colspan="2">32A - 3</td>
                <td>160 - 3</td>
                <td>2 x 1 1/4</td>
                <td>50.80 x 31.55</td>
                <td>50.80</td>
                <td>58.55</td>
                <td>28.58</td>
                <td>14.29</td>
                <td>31.55</td>
                <td>183.10</td>
                <td>48.26</td>
                <td>680.28</td>
                <td>30.600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Triple_triplex_roller_american;
