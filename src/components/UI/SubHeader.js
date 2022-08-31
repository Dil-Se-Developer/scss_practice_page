import React from "react";
import header_img from "../../assets/header_img.avif";
import "./SubHeder.scss";

const SubHeader = () => {
  return (
    <div className="subheader_section">
      <img src={header_img} alt="background img"/>
      <div className="subheader_txt">
        <div className="subheader_heading">
          <h2>535 million</h2>
          <p>Orders delivered*</p>
        </div>
        <div className="subheader_year">
          *FY 2022
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
