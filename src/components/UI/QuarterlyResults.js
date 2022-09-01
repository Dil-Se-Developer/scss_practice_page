import React from "react";
import "./QuarterlyResults.scss";

const QuarterlyResults = () => {
  return (
    <div className="page_container quarterly_container">
      <h4>Quarterly results</h4>
      <h6>Q1 FY23</h6>
      <div className="quarterly_btn_section">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iRDDBk"
          >
            <title>download</title>
            <path d="M9.72 14.86c-0.1-0.040-0.18-0.1-0.24-0.16l-5-5c-0.3-0.3-0.3-0.78 0-1.060s0.76-0.3 1.060 0l3.72 3.72v-11.2c0-0.4 0.32-0.74 0.74-0.74s0.76 0.34 0.76 0.74v11.2l3.72-3.72c0.28-0.3 0.76-0.3 1.060 0s0.28 0.76 0 1.060l-5 5c-0.080 0.060-0.16 0.12-0.26 0.16-0.080 0.040-0.18 0.060-0.28 0.060s-0.2-0.020-0.28-0.060zM18.5 13.16c0-0.4 0.34-0.74 0.76-0.74s0.74 0.34 0.74 0.74v4.5c0 1.52-1.26 2.76-2.8 2.76h-14.4c-1.54 0-2.8-1.24-2.8-2.76v-4.5c0-0.4 0.34-0.74 0.76-0.74s0.74 0.34 0.74 0.74v4.5c0 0.7 0.58 1.26 1.3 1.26h14.4c0.72 0 1.3-0.56 1.3-1.26v-4.5z"></path>
          </svg>
          Shareholders'Letter
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iRDDBk"
          >
            <title>download</title>
            <path d="M9.72 14.86c-0.1-0.040-0.18-0.1-0.24-0.16l-5-5c-0.3-0.3-0.3-0.78 0-1.060s0.76-0.3 1.060 0l3.72 3.72v-11.2c0-0.4 0.32-0.74 0.74-0.74s0.76 0.34 0.76 0.74v11.2l3.72-3.72c0.28-0.3 0.76-0.3 1.060 0s0.28 0.76 0 1.060l-5 5c-0.080 0.060-0.16 0.12-0.26 0.16-0.080 0.040-0.18 0.060-0.28 0.060s-0.2-0.020-0.28-0.060zM18.5 13.16c0-0.4 0.34-0.74 0.76-0.74s0.74 0.34 0.74 0.74v4.5c0 1.52-1.26 2.76-2.8 2.76h-14.4c-1.54 0-2.8-1.24-2.8-2.76v-4.5c0-0.4 0.34-0.74 0.76-0.74s0.74 0.34 0.74 0.74v4.5c0 0.7 0.58 1.26 1.3 1.26h14.4c0.72 0 1.3-0.56 1.3-1.26v-4.5z"></path>
          </svg>
          Earnings Call Replay
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1C1C1C"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 iRDDBk"
          >
            <title>download</title>
            <path d="M9.72 14.86c-0.1-0.040-0.18-0.1-0.24-0.16l-5-5c-0.3-0.3-0.3-0.78 0-1.060s0.76-0.3 1.060 0l3.72 3.72v-11.2c0-0.4 0.32-0.74 0.74-0.74s0.76 0.34 0.76 0.74v11.2l3.72-3.72c0.28-0.3 0.76-0.3 1.060 0s0.28 0.76 0 1.060l-5 5c-0.080 0.060-0.16 0.12-0.26 0.16-0.080 0.040-0.18 0.060-0.28 0.060s-0.2-0.020-0.28-0.060zM18.5 13.16c0-0.4 0.34-0.74 0.76-0.74s0.74 0.34 0.74 0.74v4.5c0 1.52-1.26 2.76-2.8 2.76h-14.4c-1.54 0-2.8-1.24-2.8-2.76v-4.5c0-0.4 0.34-0.74 0.76-0.74s0.74 0.34 0.74 0.74v4.5c0 0.7 0.58 1.26 1.3 1.26h14.4c0.72 0 1.3-0.56 1.3-1.26v-4.5z"></path>
          </svg>
          Earnings Call Transcript
        </button>
      </div>
      <button className="quarterly_other_btn">See all quarterly results</button>
      <hr/>
    </div>
  );
};

export default QuarterlyResults;
