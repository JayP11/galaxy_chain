import React, { useEffect, useState } from "react";
import "./ALSeriesLeaf.css";
import { Helmet } from "react-helmet";

const ALSeriesLeaf = () => {
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
            AL Series
            {/* TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp;
            BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND
            &nbsp;&nbsp;&nbsp;&nbsp; [ As per IS: 1072, &nbsp;ISO 4347, &nbsp;
            ASME B29.8 ] */}
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
                <td>&nbsp;</td>
                <td>AL 522</td>
                <td rowspan="3">15.88</td>
                <td>2 x 2</td>
                <td rowspan="3">2.00</td>
                <td rowspan="3">5.09</td>
                <td>11.00</td>
                <td>21.80</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 544</td>
                <td>4 x 4</td>
                <td>19.60</td>
                <td>43.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 566</td>
                <td>6 x 6</td>
                <td>28.30</td>
                <td>65.40</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 622</td>
                <td rowspan="3">19.05</td>
                <td>2 x 2</td>
                <td rowspan="3">2.40</td>
                <td rowspan="3">5.96</td>
                <td>12.90</td>
                <td>31.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 644</td>
                <td>4 x 4</td>
                <td>23.10</td>
                <td>62.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 666</td>
                <td>6 x 6</td>
                <td>33.30</td>
                <td>93.90</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 822</td>
                <td rowspan="3">25.40</td>
                <td>2 x 2</td>
                <td rowspan="3">3.15</td>
                <td rowspan="3">7.94</td>
                <td>16.30</td>
                <td>55.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 844</td>
                <td>4 x 4</td>
                <td>29.50</td>
                <td>111.20</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 866</td>
                <td>6 x 6</td>
                <td>42.70</td>
                <td>166.80</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1022</td>
                <td rowspan="3">31.75</td>
                <td>2 x 2</td>
                <td rowspan="3">4.00</td>
                <td rowspan="3">9.54</td>
                <td>21.30</td>
                <td>87.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1044</td>
                <td>4 x 4</td>
                <td>38.00</td>
                <td>174.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1066</td>
                <td>6 x 6</td>
                <td>54.50</td>
                <td>261.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1222</td>
                <td rowspan="3">38.10</td>
                <td>2 x 2</td>
                <td rowspan="3">4.75</td>
                <td rowspan="3">11.11</td>
                <td>24.90</td>
                <td>125.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1244</td>
                <td>4 x 4</td>
                <td>44.50</td>
                <td>250.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1266</td>
                <td>6 x 6</td>
                <td>64.10</td>
                <td>375.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1422</td>
                <td rowspan="3">44.45</td>
                <td>2 x 2</td>
                <td rowspan="3">5.60</td>
                <td rowspan="3">12.71</td>
                <td>28.70</td>
                <td>170.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1444</td>
                <td>4 x 4</td>
                <td>51.70</td>
                <td>340.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1466</td>
                <td>6 x 6</td>
                <td>74.70</td>
                <td>510.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1622</td>
                <td rowspan="3">50.80</td>
                <td>2 x 2</td>
                <td rowspan="3">6.35</td>
                <td rowspan="3">14.29</td>
                <td>32.70</td>
                <td>223.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1644</td>
                <td>4 x 4</td>
                <td>58.70</td>
                <td>446.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>AL 1666</td>
                <td>6 x 6</td>
                <td>84.70</td>
                <td>669.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ALSeriesLeaf;
