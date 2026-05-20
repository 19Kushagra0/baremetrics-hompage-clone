import React from "react";
import "../style/15_Started.css";
import homepage from "../images/10/homepage-features_cancellation-insights.png";

export default function Started() {
  return (
    <div className="cancellation started">
      <div className="cancellation-left">
        <div className="cancellation-heading-container">
          <div className="cancellation-heading started-heading">
            Get Baremetrics for your company
          </div>
        </div>

        <div className="cancellation-text-container">
          <div className="cancellation-text started-text">
            Metrics, dunning, and engagement tools for SaaS & subscription
            businesses.
          </div>
        </div>
        <div className="cancellation-button-container started-button-container">
          <button className="cancellation-button1 started-button1">
            Get Started
          </button>
        </div>
      </div>
      <div className="cancellation-right started-right">
        <img
          className="cancellation-right-image started-right-image"
          src={homepage}
          alt=""
        />
      </div>
    </div>
  );
}
