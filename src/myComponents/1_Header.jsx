import React, { useState } from "react";
import "../style/1_Header.css";
import baremetricsLogo from "../images/baremetrics-logo.svg"; // import the image
import burgerListLogo from "../images/burger-list.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="icon-hamburger-container" onClick={() => setIsMenuOpen(true)}>
        <img className="icon-hamburger" src={burgerListLogo} alt="" />
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
          <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <div className="mobile-menu-items">
            <button className="mobile-menu-item">
              <span>Product</span>
            </button>
            
            <button className="mobile-menu-item">
              <span>Integrations</span>
            </button>
            
            <button className="mobile-menu-item">
              <span>Plans & Pricing</span>
            </button>
            
            <button className="mobile-menu-item">
              <span>Resources</span>
            </button>
            
            <button className="mobile-menu-item">
              <span>About</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

