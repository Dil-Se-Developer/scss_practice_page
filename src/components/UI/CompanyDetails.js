import React from "react";
import company_detail_bg from "../../assets/company_detail_bg.avif";
import "./CompanyDetails.scss";

const CompanyDetails = () => {
  return (
    <div className="company_details_bg">
      <div className="page_container company_details_container">
        <div className="company_details_txt">
          <h4>Who we are</h4>
          <p>
            Zomato’s mission is better food for more people. Started in 2010,
            Zomato offers services like restaurant search & discovery, reviews,
            home delivery of food, online table reservation, and digital
            payments when dining out. It also works with restaurant partners to
            provide tools that enable them to engage and acquire more customers
            while empowering them with a last-mile delivery service and a
            one-stop procurement solution - Hyperpure, for ingredients and
            kitchen products. Apart from this, Zomato has been focusing on
            providing transparent and flexible earning opportunities to its
            delivery fleet, and contributing towards a more sustainable society
            through its non-profit entity Feeding India.
          </p>
        </div>
        <div className="company_details_img">
          <img src={company_detail_bg} alt="Company Detail Background" />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
