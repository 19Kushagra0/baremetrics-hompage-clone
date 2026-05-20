import React from "react";
import "../style/12_Open_Startups.css";
import homepage from "../images/12/innovators.png";

export default function Open_Startups() {
  return (
    <div className="cancellation recover open-Startups">
      <div className="cancellation-left">
        <div className="cancellation-title recover-title open-Startups-title">
          Open Startups
        </div>
        <div className="cancellation-heading-container">
          <div className="cancellation-heading">
            Join the movement of transparency innovators
          </div>
        </div>

        <div className="cancellation-text-container">
          <div className="cancellation-text">
            Welcome to the land of the brave. These wonderful companies are
            embracing transparency and openness by sharing their metrics with
            everyone.
          </div>
        </div>
        <div className="cancellation-button-container">
          <button className="cancellation-button2 recover-button2 open-Startups-button2">
            View Open Startups
          </button>
        </div>
      </div>
      <div className="cancellation-right open-Startups-right">
        <img className="cancellation-right-image " src={homepage} alt="" />
      </div>
    </div>
  );
}
