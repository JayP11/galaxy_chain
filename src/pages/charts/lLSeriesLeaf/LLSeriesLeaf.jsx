import React, { useEffect, useState } from "react";
import "./LLSeriesLeaf.css";
import { Helmet } from "react-helmet";

const LLSeriesLeaf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Galaxy Chain | Leaf Chains</title>
      </Helmet>
      <div className="ChartDemo_main">
        <div
          className="prodpage_thought_main"
          style={{ width: "100%", gap: "10px", padding: "2rem" }}>
          <h2 className="prodpage_thought_inner">Leaf Chains</h2>
          <span>
            LL Series
            {/* TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND */}
            &nbsp;&nbsp;&nbsp;&nbsp; [ As per IS: 1072, ISO 4347 ]
          </span>
        </div>

        {/*  */}
        <div className="table_main">
          <table width="571">
            <tbody>
              <tr>
                <th colspan="2" width="142">
                  Chain Number
                </th>
                <th rowspan="2" width="71">
                  Nominal Pitch 'P'
                </th>
                <th rowspan="3" width="71">
                  Lacing Pattern
                </th>
                <th rowspan="2" width="71">
                  Plate thickness 'T'
                </th>
                <th rowspan="2" width="71">
                  Pin Diameter 'D'
                </th>
                <th rowspan="2" width="71">
                  Width Over Bearing Pin 'B'
                </th>
                <th rowspan="2" width="71">
                  Tensile Strength (Min)
                </th>
              </tr>
              <tr>
                <th rowspan="2" width="71">
                  GALAXY No.
                </th>
                <th rowspan="2" width="71">
                  IS No.
                </th>
              </tr>
              <tr>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>mm</th>
                <th>KN</th>
              </tr>
              <tr>
                <td>GL 2208</td>
                <td>LL 0822</td>
                <td rowspan="3">12.70</td>
                <td>2 x 2</td>
                <td rowspan="3">1.55</td>
                <td rowspan="3">4.45</td>
                <td>8.50</td>
                <td>18.00</td>
              </tr>
              <tr>
                <td>GL 4408</td>
                <td>LL 0844</td>
                <td>4 x 4</td>
                <td>14.60</td>
                <td>36.00</td>
              </tr>
              <tr>
                <td>GL 6608</td>
                <td>LL 0866</td>
                <td>6 x 6</td>
                <td>20.70</td>
                <td>54.00</td>
              </tr>
              <tr>
                <td>GL 2210</td>
                <td>LL 1022</td>
                <td rowspan="3">15.88</td>
                <td>2 x 2</td>
                <td rowspan="3">1.65</td>
                <td rowspan="3">5.08</td>
                <td>9.30</td>
                <td>22.20</td>
              </tr>
              <tr>
                <td>GL 4410</td>
                <td>LL 1044</td>
                <td>4 x 4</td>
                <td>16.10</td>
                <td>44.50</td>
              </tr>
              <tr>
                <td>GL 6610</td>
                <td>LL 1066</td>
                <td>6 x 6</td>
                <td>22.90</td>
                <td>66.70</td>
              </tr>
              <tr>
                <td>GL 2212</td>
                <td>LL 1222</td>
                <td rowspan="3">19.05</td>
                <td>2 x 2</td>
                <td rowspan="3">1.90</td>
                <td rowspan="3">5.72</td>
                <td>10.70</td>
                <td>28.90</td>
              </tr>
              <tr>
                <td>GL 4412</td>
                <td>LL 1244</td>
                <td>4 x 4</td>
                <td>18.50</td>
                <td>57.80</td>
              </tr>
              <tr>
                <td>GL 6612</td>
                <td>LL 1266</td>
                <td>6 x 6</td>
                <td>26.30</td>
                <td>86.70</td>
              </tr>
              <tr>
                <td>GL 2216</td>
                <td>LL 1622</td>
                <td rowspan="3">25.40</td>
                <td>2 x 2</td>
                <td rowspan="3">3.20</td>
                <td rowspan="3">8.28</td>
                <td>17.20</td>
                <td>58.00</td>
              </tr>
              <tr>
                <td>GL 4416</td>
                <td>LL 1644</td>
                <td>4 x 4</td>
                <td>30.20</td>
                <td>116.00</td>
              </tr>
              <tr>
                <td>GL 6616</td>
                <td>LL 1666</td>
                <td>6 x 6</td>
                <td>43.20</td>
                <td>174.00</td>
              </tr>
              <tr>
                <td>GL 2220</td>
                <td>LL 2022</td>
                <td rowspan="3">31.75</td>
                <td>2 x 2</td>
                <td rowspan="3">3.70</td>
                <td rowspan="3">10.19</td>
                <td>20.10</td>
                <td>95.00</td>
              </tr>
              <tr>
                <td>GL 4420</td>
                <td>LL 2044</td>
                <td>4 x 4</td>
                <td>35.10</td>
                <td>190.00</td>
              </tr>
              <tr>
                <td>GL 6620</td>
                <td>LL 2066</td>
                <td>6 x 6</td>
                <td>50.10</td>
                <td>285.00</td>
              </tr>
              <tr>
                <td>GL 2224</td>
                <td>LL 2422</td>
                <td rowspan="3">38.10</td>
                <td>2 x 2</td>
                <td rowspan="3">5.20</td>
                <td rowspan="3">14.63</td>
                <td>28.40</td>
                <td>170.00</td>
              </tr>
              <tr>
                <td>GL 4424</td>
                <td>LL 2444</td>
                <td>4 x 4</td>
                <td>49.40</td>
                <td>340.00</td>
              </tr>
              <tr>
                <td>GL 6624</td>
                <td>LL 2466</td>
                <td>6 x 6</td>
                <td>70.40</td>
                <td>510.00</td>
              </tr>
              <tr>
                <td>GL 2228</td>
                <td>LL 2822</td>
                <td rowspan="3">44.45</td>
                <td>2 x 2</td>
                <td rowspan="3">6.45</td>
                <td rowspan="3">15.90</td>
                <td>34.00</td>
                <td>200.00</td>
              </tr>
              <tr>
                <td>GL 4428</td>
                <td>LL 2844</td>
                <td>4 x 4</td>
                <td>60.00</td>
                <td>400.00</td>
              </tr>
              <tr>
                <td>GL 6628</td>
                <td>LL 2866</td>
                <td>6 x 6</td>
                <td>86.00</td>
                <td>600.00</td>
              </tr>
              <tr>
                <td>GL 2232</td>
                <td>LL 3222</td>
                <td rowspan="3">50.80</td>
                <td>2 x 2</td>
                <td rowspan="3">6.45</td>
                <td rowspan="3">17.81</td>
                <td>35.00</td>
                <td>260.00</td>
              </tr>
              <tr>
                <td>GL 4432</td>
                <td>LL 3244</td>
                <td>4 x 4</td>
                <td>61.00</td>
                <td>520.00</td>
              </tr>
              <tr>
                <td>GL 6632</td>
                <td>LL 3266</td>
                <td>6 x 6</td>
                <td>87.00</td>
                <td>780.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LLSeriesLeaf;

