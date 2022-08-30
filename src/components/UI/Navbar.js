import React from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo_2.avif";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="page_container">
        <nav className="nav_section">
          <div className="nav_start">
            <img src={logo} alt="zomato logo" />
            <span>| Investor Relations</span>
          </div>
          <ul className="nav_end">
            <li>Financials</li>
            <li>New & Events</li>
            <li>Governance</li>
            <li>Esg initiatives</li>
            <li>resources</li>
          </ul>
        </nav>
        <nav className="nav_ham_section">
          <FiMenu size={"3rem"} color={"#1c1c1c"} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
