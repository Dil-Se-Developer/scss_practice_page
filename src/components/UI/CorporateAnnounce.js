import React from "react";
import './CorporateAnnounce.scss';

const CorporateAnnounce = () => {
  return (
    <div className="page_container corporate_announce_conatainer">
      <h4>Corporate announcements</h4>
      <div className="corporate_announce_txt">
        <hr />
        <p>24 June, 2022</p>
        <h6>Zomato - Outcome of the Board Meeting</h6>
        <button>
          Read more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#EF4F5F"
            width="12"
            height="12"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 ezrcri"
          >
            <title>right-triangle</title>
            <path d="M5 0.42l10 10-10 10v-20z"></path>
          </svg>
        </button>
      </div>
      <div className="corporate_announce_txt">
        <hr />
        <p>14 May, 2022</p>
        <h6>Zomato - Intimation of Board Meeting</h6>
        <button>
          Read more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#EF4F5F"
            width="12"
            height="12"
            viewBox="0 0 20 20"
            aria-labelledby="icon-svg-title- icon-svg-desc-"
            role="img"
            class="sc-rbbb40-0 ezrcri"
          >
            <title>right-triangle</title>
            <path d="M5 0.42l10 10-10 10v-20z"></path>
          </svg>
        </button>
      </div>
      <button className="corporate_announce_btn">See all announcements</button>
    </div>
  );
};

export default CorporateAnnounce;
