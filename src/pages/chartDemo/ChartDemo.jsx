import React, { useEffect, useState } from "react";
import "./ChartDemo.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { IoChevronBackCircle } from "react-icons/io5";

const ChartDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Chart</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="chart_head_main"
          style={{ letterSpacing: "1px", lineHeight: "1.4" }}>
          <div style={{ cursor: "pointer" }}>
            <div className="chart_name_head_main">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                {" "}
                <IoChevronBackCircle
                  style={{ fontSize: "24px", color: "var(--color-white)" }}
                />
                <h1>Roller Chains</h1>
              </div>
            </div>
          </div>
          <h3>BRITISH STANDARD</h3>
          <span>[As per BS 228 / DIN 8187 / IS 2403 / ISO 606]</span>
        </div>

        {/*  */}
        <div className="table_main">
          {/* <table>
            <tr>
              <td>Chain Number</td>
              <td></td>
              <td>Description</td>
              <td></td>
              <td>Pitch &#39;P&#39;</td>
              <td>Transverse Pitch &#39;Pt&#39; </td>
              <td>Roller Diameter &#39;D&#39; (Max)</td>
              <td>Bearing Pin Diameter &#39;d&#39; (Max)</td>
              <td>Width Between Inner Plate &#39;W&#39; (Min)</td>
              <td>Width Over Bearing Pin &#39;B&#39; (Max)</td>
              <td>Plate Height (Max)</td>
              <td>Tensile Strength (Min)</td>
              <td>Average Weight Per Meter</td>
            </tr>
            <tr>
              <td>GALAXY No.</td>
              <td>ISO No.</td>
              <td>Pitch x WIP</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>inch</td>
              <td>mm</td>
              <td>mm</td>
              <td>mm</td>
              <td>mm</td>
              <td>mm</td>
              <td>mm</td>
              <td>mm</td>
              <td>mm</td>
              <td>KN</td>
              <td>Kg.</td>
            </tr>
            <tr>
              <td>SINGLE STRAND - SIMPLEX</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>GB 081</td>
              <td>08B - 1</td>
              <td>1/2 x 5/16</td>
              <td>12.70 x 7.75</td>
              <td>12.70</td>
              <td>-</td>
              <td>8.51</td>
              <td>4.45</td>
              <td>7.75</td>
              <td>17.00</td>
              <td>11.81</td>
              <td>17.80</td>
              <td>0.650</td>
            </tr>
            <tr>
              <td>GB 101</td>
              <td>10B - 1</td>
              <td>5/8 x 3/8</td>
              <td>15.875 x 9.65</td>
              <td>15.875</td>
              <td>-</td>
              <td>10.16</td>
              <td>5.08</td>
              <td>9.65</td>
              <td>19.60</td>
              <td>14.73</td>
              <td>22.27</td>
              <td>0.928</td>
            </tr>
            <tr>
              <td>GB 121</td>
              <td>12B - 1</td>
              <td>3/4 x 7/16</td>
              <td>19.05 x 11.68</td>
              <td>19.05</td>
              <td>-</td>
              <td>12.07</td>
              <td>5.72</td>
              <td>11.68</td>
              <td>22.70</td>
              <td>16.13</td>
              <td>28.94</td>
              <td>1.244</td>
            </tr>
            <tr>
              <td>GB 161</td>
              <td>16B - 1</td>
              <td>1 x 11/16</td>
              <td>25.40 x 17.02</td>
              <td>25.40</td>
              <td>-</td>
              <td>15.88</td>
              <td>8.28</td>
              <td>17.02</td>
              <td>36.10</td>
              <td>21.08</td>
              <td>60.92</td>
              <td>2.612</td>
            </tr>
            <tr>
              <td>GB 201</td>
              <td>20B - 1</td>
              <td>1 1/4 x 0.77</td>
              <td>31.75 x 19.56</td>
              <td>31.75</td>
              <td>-</td>
              <td>19.05</td>
              <td>10.19</td>
              <td>19.56</td>
              <td>43.20</td>
              <td>26.42</td>
              <td>95.16</td>
              <td>3.802</td>
            </tr>
            <tr>
              <td>GB 241</td>
              <td>24B - 1</td>
              <td>1 1/2 x 1</td>
              <td>38.10 x 25.40</td>
              <td>38.10</td>
              <td>-</td>
              <td>25.40</td>
              <td>14.63</td>
              <td>25.40</td>
              <td>53.40</td>
              <td>33.40</td>
              <td>160.04</td>
              <td>7.138</td>
            </tr>
            <tr>
              <td>GB 281</td>
              <td>28B - 1</td>
              <td>1 3/4 x 1.22</td>
              <td>44.45 x 30.99</td>
              <td>44.45</td>
              <td>-</td>
              <td>27.94</td>
              <td>15.90</td>
              <td>30.99</td>
              <td>65.10</td>
              <td>37.08</td>
              <td>200.05</td>
              <td>8.955</td>
            </tr>
            <tr>
              <td>GB 321</td>
              <td>32B - 1</td>
              <td>2 x 1.22</td>
              <td>50.80 x 30.99</td>
              <td>50.80</td>
              <td>-</td>
              <td>29.21</td>
              <td>17.81</td>
              <td>30.99</td>
              <td>67.40</td>
              <td>42.29</td>
              <td>250.60</td>
              <td>9.695</td>
            </tr>
            <tr>
              <td>GB 401</td>
              <td>40B - 1</td>
              <td>2 1/2 x 1 1/2</td>
              <td>63.50 x 38.10</td>
              <td>63.50</td>
              <td>-</td>
              <td>39.37</td>
              <td>22.88</td>
              <td>38.10</td>
              <td>82.60</td>
              <td>52.56</td>
              <td>355.00</td>
              <td>16.019</td>
            </tr>
          </table> */}
          {/* <table width="418">
            <tbody>
              <tr>
                <td rowspan="3" width="26">
                  CHAIN NO.
                </td>
                <td rowspan="2" width="22">
                  PITCH
                </td>
                <td rowspan="2" width="26">
                  ROLLER
                </td>
                <td rowspan="2" width="22">
                  WIDTH
                </td>
                <td colspan="13" width="275">
                  ATTACHMENT&nbsp;&nbsp; DIMENSION
                </td>
                <td rowspan="2" width="45">
                  BREAKING LOAD
                </td>
              </tr>
              <tr>
                <td rowspan="2">S</td>
                <td rowspan="2">Wp</td>
                <td rowspan="2">N</td>
                <td rowspan="2">O</td>
                <td rowspan="2">Ti</td>
                <td rowspan="2">T</td>
                <td rowspan="2">C</td>
                <td rowspan="2">X</td>
                <td rowspan="2">Dp</td>
                <td rowspan="2">Lp</td>
                <td rowspan="2">C1</td>
                <td rowspan="2">Xs</td>
                <td rowspan="2">L1</td>
              </tr>
              <tr>
                <td>P</td>
                <td>Dr</td>
                <td>W</td>
                <td>KN.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MIN.</td>
              </tr>
              <tr>
                <td>10B-1</td>
                <td>15.88</td>
                <td>10.16</td>
                <td>9.65</td>
                <td>10.31</td>
                <td>14.60</td>
                <td>14.10</td>
                <td>5.30</td>
                <td>1.65</td>
                <td>1.65</td>
                <td>15.90</td>
                <td>23.80</td>
                <td>5.08</td>
                <td>21.20</td>
                <td>15.90</td>
                <td>23.70</td>
                <td>11.88</td>
                <td>22.27</td>
              </tr>
              <tr>
                <td>12B-1</td>
                <td>19.05</td>
                <td>12.07</td>
                <td>11.68</td>
                <td>13.46</td>
                <td>16.00</td>
                <td>16.00</td>
                <td>6.40</td>
                <td>1.80</td>
                <td>1.80</td>
                <td>19.05</td>
                <td>25.80</td>
                <td>5.72</td>
                <td>24.18</td>
                <td>17.90</td>
                <td>26.20</td>
                <td>14.28</td>
                <td>28.94</td>
              </tr>
              <tr>
                <td>16B-1</td>
                <td>25.40</td>
                <td>15.88</td>
                <td>17.02</td>
                <td>15.90</td>
                <td>19.70</td>
                <td>19.00</td>
                <td>6.40</td>
                <td>3.90</td>
                <td>3.10</td>
                <td>25.40</td>
                <td>37.40</td>
                <td>8.28</td>
                <td>38.00</td>
                <td>26.00</td>
                <td>35.00</td>
                <td>19.08</td>
                <td>60.04</td>
              </tr>
              <tr>
                <td>20B-1</td>
                <td>31.75</td>
                <td>19.05</td>
                <td>19.56</td>
                <td>19.85</td>
                <td>25.80</td>
                <td>25.25</td>
                <td>8.40</td>
                <td>4.50</td>
                <td>3.50</td>
                <td>31.75</td>
                <td>42.85</td>
                <td>10.19</td>
                <td>44.00</td>
                <td>37.75</td>
                <td>42.00</td>
                <td>23.81</td>
                <td>95.16</td>
              </tr>
              <tr>
                <td>24B-1</td>
                <td>38.10</td>
                <td>25.40</td>
                <td>25.40</td>
                <td>26.70</td>
                <td>33.00</td>
                <td>28.00</td>
                <td>10.50</td>
                <td>6.15</td>
                <td>4.90</td>
                <td>38.10</td>
                <td>51.85</td>
                <td>14.62</td>
                <td>57.30</td>
                <td>38.00</td>
                <td>60.00</td>
                <td>28.58</td>
                <td>160.10</td>
              </tr>
              <tr>
                <td>28B-1</td>
                <td>44.45</td>
                <td>27.94</td>
                <td>30.99</td>
                <td>28.58</td>
                <td>36.20</td>
                <td>38.00</td>
                <td>13.10</td>
                <td>6.60</td>
                <td>6.00</td>
                <td>44.45</td>
                <td>57.10</td>
                <td>15.89</td>
                <td>68.90</td>
                <td>45.00</td>
                <td>65.00</td>
                <td>33.33</td>
                <td>200.12</td>
              </tr>
              <tr>
                <td>32B-1</td>
                <td>50.80</td>
                <td>29.21</td>
                <td>30.99</td>
                <td>31.75</td>
                <td>41.00</td>
                <td>44.50</td>
                <td>13.10</td>
                <td>6.60</td>
                <td>6.00</td>
                <td>50.80</td>
                <td>68.50</td>
                <td>17.80</td>
                <td>70.50</td>
                <td>50.80</td>
                <td>77.00</td>
                <td>38.10</td>
                <td>250.16</td>
              </tr>
            </tbody>
          </table> */}
        </div>
        {/*  */}
      </div>
      {/* <div className="ChartDemo_main">
        <div style={{ letterSpacing: "1px", lineHeight: "1.4" }}>
          <Link to="/ProductPage">
            <h1>Roller Chains</h1>
          </Link>
          <h3>BRITISH STANDARD</h3>
          <span>[As per BS 228 / DIN 8187 / IS 2403 / ISO 606]</span>
        </div>
        <div class="divTable">
          <div class="row">
            <div class="cell thead">GALAXY No.</div>
            <div class="cell thead">ISO No</div>
            <div class="cell thead">inch</div>
            <div class="cell thead">mm</div>
            <div class="cell thead">kg</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row">
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
          <div class="row" style={{ borderBottom: "4px  solid" }}>
            <div class="cell">GB 081</div>
            <div class="cell">08B-1</div>
            <div class="cell">5/8 x 3/8</div>
            <div class="cell">12.70 x 7.75</div>
            <div class="cell">0.650</div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ChartDemo;
