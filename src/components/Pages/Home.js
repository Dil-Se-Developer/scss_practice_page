import React from "react";
import Header from "../UI/Header";
import QuarterlyResults from "../UI/QuarterlyResults";
import CompanyAnnounce from "../UI/CompanyAnnounce";
import CompanyDetails from "../UI/CompanyDetails";
import CorporateAnnounce from "../UI/CorporateAnnounce";
import CompanyBlogs from "../UI/CompanyBlogs";
import Footer from "../UI/Footer";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <QuarterlyResults />
      <CompanyAnnounce />
      <CompanyDetails />
      <CorporateAnnounce />
      <CompanyBlogs />
      <Footer/>
    </>
  );
};

export default Home;
