import React from "react";
import "../style/1_Header.css";
import baremetricsLogo from "../images/baremetrics-logo.svg"; // import the image
import burgerListLogo from "../images/burger-list.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left-container">
        <img className="baremetrics-icon" src={baremetricsLogo} alt="" />
      </div>
      <div className="header-center-container">
        <button className="header-button">
          <span>Product</span>
          <span class="lower-icon material-symbols-outlined">stat_minus_1</span>
        </button>
        <button className="header-button">
          <span>Integrations</span>

          <span class="lower-icon material-symbols-outlined">stat_minus_1</span>
        </button>
        <button className="header-button">
          <span>Plans & Pricing</span>
          {/* <span class="lower-icon material-symbols-outlined">stat_minus_1</span> */}
        </button>
        <button className="header-button">
          <span>Resources</span>
          <span class="lower-icon material-symbols-outlined">stat_minus_1</span>
        </button>
        <button className="header-button">
          <span>About</span>
          <span class="lower-icon material-symbols-outlined">stat_minus_1</span>
        </button>
      </div>
      <div className="header-right-container">
        <span className="header-button3">(725) 217-4827</span>
        <button className="header-button3 ">Sign In</button>
        <button className="header-button2">Get Started</button>
      </div>
      <div className="icon-hamburger-container">
        <img className="icon-hamburger" src={burgerListLogo} alt="" />
      </div>
    </div>
  );
}
