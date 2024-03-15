import React, { useEffect } from "react";
import "./ChartDemo.css";

const ChartDemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ChartDemo_main">
      <div style={{ letterSpacing: "1px", lineHeight: "1.4" }}>
        <h1>Roller Chains</h1>
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
    </div>
  );
};

export default ChartDemo;
