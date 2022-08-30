import React from "react";
import header_img from "../../assets/header_img.avif";
import "./SubHeder.scss";

const SubHeader = () => {
  return (
    <div className="subheader_section">
      <img className="subheader_logo" src={header_img} alt="background img"/>
    </div>
  );
};

export default SubHeader;
