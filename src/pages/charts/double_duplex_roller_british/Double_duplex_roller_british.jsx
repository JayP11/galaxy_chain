import React, { useEffect, useState } from "react";
import "./Double_duplex_roller_british.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";
import images from "../../../constants/images";

const Double_duplex_roller_british = () => {
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
            DOUBLE STRAND - DUPLEX&nbsp;&nbsp;&nbsp;&nbsp; BRITISH STANDARD
            &nbsp;&nbsp;&nbsp;&nbsp; [As per BS 228 / DIN 8187 / IS 2403 / ISO
            606]
          </span>
        </div>
        <div className="chart_chainGraph_imgs_main">
          <div>
            <img
              src={images.RollerChainDuplexImage}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
          <div>
            <img
              src={images.RollerChainDuplexGraph}
              alt=""
              className="chart_chainGraph_imgs_inner"
            />
          </div>
        </div>
        {/*  */}
        <div className="table_main">
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
                <th colspan="2" rowspan="2" width="115">
                  GALAXY&nbsp; No.
                </th>
                <th colspan="2" rowspan="2" width="115">
                  ISO No.
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
                <td colspan="2">GB 082</td>
                <td colspan="2">08B - 2</td>
                <td>1/2 x 5/16</td>
                <td>12.70 x 7.75</td>
                <td>12.70</td>
                <td>13.92</td>
                <td>8.51</td>
                <td>4.45</td>
                <td>7.75</td>
                <td>31.00</td>
                <td>11.81</td>
                <td>31.10</td>
                <td>1.300</td>
              </tr>
              <tr>
                <td colspan="2">GB 102</td>
                <td colspan="2">10B - 2</td>
                <td>5/8 x 3/8</td>
                <td>15.875 x 9.65</td>
                <td>15.875</td>
                <td>16.59</td>
                <td>10.16</td>
                <td>5.08</td>
                <td>9.65</td>
                <td>36.20</td>
                <td>14.73</td>
                <td>44.54</td>
                <td>1.856</td>
              </tr>
              <tr>
                <td colspan="2">GB 122</td>
                <td colspan="2">12B - 2</td>
                <td>3/4 x 7/16</td>
                <td>19.05 x 11.68</td>
                <td>19.05</td>
                <td>19.46</td>
                <td>12.07</td>
                <td>5.72</td>
                <td>11.68</td>
                <td>42.20</td>
                <td>16.13</td>
                <td>57.88</td>
                <td>2.487</td>
              </tr>
              <tr>
                <td colspan="2">GB 162</td>
                <td colspan="2">16B - 2</td>
                <td>1 x 11/16</td>
                <td>25.40 x 17.02</td>
                <td>25.40</td>
                <td>31.88</td>
                <td>15.88</td>
                <td>8.28</td>
                <td>17.02</td>
                <td>68.00</td>
                <td>21.08</td>
                <td>106.14</td>
                <td>5.213</td>
              </tr>
              <tr>
                <td colspan="2">GB 202</td>
                <td colspan="2">20B - 2</td>
                <td>1 1/4 x 0.77</td>
                <td>31.75 x 19.56</td>
                <td>31.75</td>
                <td>36.45</td>
                <td>19.05</td>
                <td>10.19</td>
                <td>19.56</td>
                <td>79.70</td>
                <td>26.42</td>
                <td>170.05</td>
                <td>7.605</td>
              </tr>
              <tr>
                <td colspan="2">GB 242</td>
                <td colspan="2">24B - 2</td>
                <td>1 1/2 x 1</td>
                <td>38.10 x 25.40</td>
                <td>38.10</td>
                <td>48.36</td>
                <td>25.40</td>
                <td>14.63</td>
                <td>25.40</td>
                <td>101.80</td>
                <td>33.40</td>
                <td>280.07</td>
                <td>14.278</td>
              </tr>
              <tr>
                <td colspan="2">GB 282</td>
                <td colspan="2">28B - 2</td>
                <td>1 3/4 x 1.22</td>
                <td>44.45 x 30.99</td>
                <td>44.45</td>
                <td>59.56</td>
                <td>27.94</td>
                <td>15.90</td>
                <td>30.99</td>
                <td>124.70</td>
                <td>37.08</td>
                <td>359.90</td>
                <td>17.909</td>
              </tr>
              <tr>
                <td colspan="2">GB 322</td>
                <td colspan="2">32B - 2</td>
                <td>2 x 1.22</td>
                <td>50.80 x 30.99</td>
                <td>50.80</td>
                <td>58.55</td>
                <td>29.21</td>
                <td>17.81</td>
                <td>30.99</td>
                <td>126.00</td>
                <td>42.29</td>
                <td>449.92</td>
                <td>19.391</td>
              </tr>
              <tr>
                <td colspan="2">GB 402</td>
                <td colspan="2">40B - 2</td>
                <td>2 1/2 x 1 1/2</td>
                <td>63.50 x 38.10</td>
                <td>63.50</td>
                <td>72.29</td>
                <td>39.37</td>
                <td>22.88</td>
                <td>38.10</td>
                <td>154.90</td>
                <td>52.56</td>
                <td>617.81</td>
                <td>31.734</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Double_duplex_roller_british;
