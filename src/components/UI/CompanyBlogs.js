import React from "react";
import card_img_1 from "../../assets/card_img_1.png";
import card_img_2 from "../../assets/card_img_2.png";
import card_img_3 from "../../assets/card_img_3.png";
import "./CompanyBlogs.scss";

const CompanyBlogs = () => {
  return (
    <div className="company_blogs_bg">
      <div className="page_container company_blogs_container">
        <h4>From our blogs</h4>
        <div className="company_blogs_cards">
          <div className="company_blog_card">
            <div className="company_blog_img">
              <img src={card_img_1} alt="company card img" />
              <span>Company</span>
            </div>
            <span>Deepinder Goyal | 30 Aug 2022</span>
            <h6>The love for food knows...</h6>
            <p>Bringing India’s legendary eateries to your doorstep</p>
          </div>
          <div className="company_blog_card">
            <div className="company_blog_img">
              <img src={card_img_2} alt="company card img" />
              <span>Technology</span>
            </div>
            <span>Data Science Team | 25 Aug 2022</span>
            <h6>How we make our Search...</h6>
            <p>Understanding the science behind the Natural Language Search at Zomato</p>
          </div>
          <div className="company_blog_card">
            <div className="company_blog_img">
              <img src={card_img_3} alt="company card img" />
              <span>Technology</span>
            </div>
            <span>Machine Learning Team | 16 Aug 2022</span>
            <h6>Powering restaurant ads...</h6>
            <p>How we train our deep learning models to feature relevant ads to customers?</p>
          </div>
        </div>
        <button>Read our blogs</button>
      </div>
    </div>
  );
};

export default CompanyBlogs;
