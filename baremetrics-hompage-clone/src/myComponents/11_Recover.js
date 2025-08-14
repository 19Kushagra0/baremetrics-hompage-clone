import React from "react";
import "../style/11_Recover.css";
import user from "../images/11/user-tushar-statusbrew.png";
import homepage from "../images/11/homepage-features_recover.png";

export default function Recover() {
  return (
    <div className="cancellation recover">
      <div className="cancellation-left">
        <div className="cancellation-title recover-title">Recover</div>
        <div className="cancellation-heading-container">
          <div className="cancellation-heading">
            Get help with failing charges
          </div>
        </div>

        <div className="cancellation-text-container">
          <div className="cancellation-text">
            Your business is leaking money every month to failed payments and
            losing customers to delinquent churn. It's time to get it back.
          </div>
        </div>
        <div className="cancellation-button-container">
          <button className="cancellation-button1 recover-button1">
            Get Started
          </button>
          <button className="cancellation-button2 recover-button2">
            Learn More
          </button>
        </div>
        <div className="cancellation-text2-container">
          <div className="cancellation-text2">
            “Recover helped us reduce our churn and save over $10k+ in less than
            3 months.”
          </div>
        </div>
        <div className="cancellation-creator-container">
          <img className="cancellation-creator-image " src={user} alt="" />
          <div className="cancellation-creator-name">
            Tushar Mahajan, Statusbrew
          </div>
        </div>
      </div>
      <div className="cancellation-right">
        <img className="cancellation-right-image" src={homepage} alt="" />
      </div>
    </div>
  );
}
