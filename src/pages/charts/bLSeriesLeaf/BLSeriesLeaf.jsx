import React, { useEffect, useState } from "react";
import "./BLSeriesLeaf.css";
import { Helmet } from "react-helmet";

const BLSeriesLeaf = () => {
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
            BL Series
            {/* TRIPLE STRAND - TRIPLEX&nbsp;&nbsp;&nbsp;&nbsp; */}
            {/* BRITISH STANDARD &nbsp;- &nbsp;SINGLE STRAND */}
            &nbsp;&nbsp;&nbsp;&nbsp; [ As per IS: 1072, &nbsp;ISO 4347, &nbsp;
            ASME B29.8 ]
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
                <td>BL 422</td>
                <td rowspan="6">12.70</td>
                <td>2 x 2</td>
                <td rowspan="6">2.08</td>
                <td rowspan="6">5.09</td>
                <td>11.10</td>
                <td>22.20</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 423</td>
                <td>2 x 3</td>
                <td>13.20</td>
                <td>22.20</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 434</td>
                <td>3 x 4</td>
                <td>17.40</td>
                <td>33.40</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 444</td>
                <td>4 x 4</td>
                <td>19.60</td>
                <td>44.50</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 446</td>
                <td>4 x 6</td>
                <td>23.80</td>
                <td>44.50</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 466</td>
                <td>6 x 6</td>
                <td>28.00</td>
                <td>66.70</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 522</td>
                <td rowspan="6">15.875</td>
                <td>2 x 2</td>
                <td rowspan="6">2.48</td>
                <td rowspan="6">5.98</td>
                <td>12.90</td>
                <td>33.40</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 523</td>
                <td>2 x 3</td>
                <td>15.40</td>
                <td>33.40</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 534</td>
                <td>3 x 4</td>
                <td>20.40</td>
                <td>48.90</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 544</td>
                <td>4 x 4</td>
                <td>22.80</td>
                <td>66.70</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 546</td>
                <td>4 x 6</td>
                <td>27.70</td>
                <td>66.70</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 566</td>
                <td>6 x 6</td>
                <td>32.70</td>
                <td>100.10</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 622</td>
                <td rowspan="6">19.05</td>
                <td>2 x 2</td>
                <td rowspan="6">3.30</td>
                <td rowspan="6">7.96</td>
                <td>17.40</td>
                <td>48.90</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 623</td>
                <td>2 x 3</td>
                <td>20.80</td>
                <td>48.90</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 634</td>
                <td>3 x 4</td>
                <td>27.50</td>
                <td>75.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 644</td>
                <td>4 x 4</td>
                <td>30.80</td>
                <td>97.90</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 646</td>
                <td>4 x 6</td>
                <td>37.50</td>
                <td>97.90</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 666</td>
                <td>6 x 6</td>
                <td>44.20</td>
                <td>146.80</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 822</td>
                <td rowspan="6">25.40</td>
                <td>2 x 2</td>
                <td rowspan="6">4.09</td>
                <td rowspan="6">9.56</td>
                <td>21.40</td>
                <td>84.50</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 823</td>
                <td>2 x 3</td>
                <td>25.50</td>
                <td>84.50</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 834</td>
                <td>3 x 4</td>
                <td>33.80</td>
                <td>129.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 844</td>
                <td>4 x 4</td>
                <td>37.90</td>
                <td>169.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 846</td>
                <td>4 x 6</td>
                <td>46.20</td>
                <td>169.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 866</td>
                <td>6 x 6</td>
                <td>54.50</td>
                <td>253.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1022</td>
                <td rowspan="6">31.75</td>
                <td>2 x 2</td>
                <td rowspan="6">4.90</td>
                <td rowspan="6">11.14</td>
                <td>25.40</td>
                <td>115.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1023</td>
                <td>2 x 3</td>
                <td>30.40</td>
                <td>115.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1034</td>
                <td>3 x 4</td>
                <td>40.30</td>
                <td>182.40</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1044</td>
                <td>4 x 4</td>
                <td>45.20</td>
                <td>231.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1046</td>
                <td>4 x 6</td>
                <td>55.10</td>
                <td>231.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1066</td>
                <td>6 x 6</td>
                <td>65.00</td>
                <td>347.00</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1222</td>
                <td rowspan="6">38.10</td>
                <td>2 x 2</td>
                <td rowspan="6">5.77</td>
                <td rowspan="6">12.74</td>
                <td>29.70</td>
                <td>151.20</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1223</td>
                <td>2 x 3</td>
                <td>35.50</td>
                <td>151.20</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1234</td>
                <td>3 x 4</td>
                <td>47.10</td>
                <td>244.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1244</td>
                <td>4 x 4</td>
                <td>52.90</td>
                <td>302.50</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1246</td>
                <td>4 x 6</td>
                <td>64.60</td>
                <td>302.50</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1266</td>
                <td>6 x 6</td>
                <td>76.20</td>
                <td>453.70</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1422</td>
                <td rowspan="6">44.45</td>
                <td>2 x 2</td>
                <td rowspan="6">6.60</td>
                <td rowspan="6">14.31</td>
                <td>33.60</td>
                <td>191.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1423</td>
                <td>2 x 3</td>
                <td>40.20</td>
                <td>191.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1434</td>
                <td>3 x 4</td>
                <td>53.40</td>
                <td>315.80</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1444</td>
                <td>4 x 4</td>
                <td>60.00</td>
                <td>382.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1446</td>
                <td>4 x 6</td>
                <td>73.20</td>
                <td>382.60</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1466</td>
                <td>6 x 6</td>
                <td>86.40</td>
                <td>578.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1622</td>
                <td rowspan="6">50.80</td>
                <td>2 x 2</td>
                <td rowspan="6">7.52</td>
                <td rowspan="6">17.49</td>
                <td>40.00</td>
                <td>289.10</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1623</td>
                <td>2 x 3</td>
                <td>46.60</td>
                <td>289.10</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1634</td>
                <td>3 x 4</td>
                <td>61.80</td>
                <td>440.40</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1644</td>
                <td>4 x 4</td>
                <td>69.30</td>
                <td>578.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1646</td>
                <td>4 x 6</td>
                <td>84.50</td>
                <td>578.30</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>BL 1666</td>
                <td>6 x 6</td>
                <td>100.00</td>
                <td>867.40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BLSeriesLeaf;
