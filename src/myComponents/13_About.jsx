import React from "react";
import "../style/13_About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-left">
        <h1 className="about-title">Learn about Business</h1>
        <div className="about-heading">Our Publications</div>
        <h2 className="about-text-container">
          <div className="about-text">
            Join the thousands of subscribers learning about how we’re helping
            startups grow.
          </div>
        </h2>
      </div>

      <div className="about-right">
        <div className="about-right-text">
          Industry insights delivered right to your inbox
        </div>
        <div className="about-right-input-container">
          <input
            className="about-right-input"
            placeholder="Enter your email"
            type="text"
          />
          <button className="about-right-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
