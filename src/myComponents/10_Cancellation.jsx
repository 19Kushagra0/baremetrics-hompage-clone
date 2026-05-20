import React from "react";
import "../style/10_Cancellation.css";
import user from "../images/10/user-ben-zoomshift.jpg";
import homepage from "../images/10/homepage-features_cancellation-insights.png";

export default function Cancellation() {
  return (
    <div className="cancellation">
      <div className="cancellation-left">
        <div className="cancellation-title">Cancellation Insights</div>
        <div className="cancellation-heading-container">
          <div className="cancellation-heading">
            Learn why your customers cancel
          </div>
        </div>

        <div className="cancellation-text-container">
          <div className="cancellation-text">
            Start collecting valuable feedback in minutes, learn how much
            revenue you're losing to each reason, then automatically send
            personalized emails to bring them back.
          </div>
        </div>
        <div className="cancellation-button-container">
          <button className="cancellation-button1">Get Started</button>
          <button className="cancellation-button2">Learn More</button>
        </div>
        <div className="cancellation-text2-container">
          <div className="cancellation-text2">
            “The Cancellation Insights feature is a no-brainer. It replaced our
            in-house solution in less than an hour, and it provides exactly the
            insights we need.”
          </div>
        </div>
        <div className="cancellation-creator-container">
          <img className="cancellation-creator-image" src={user} alt="" />
          <div className="cancellation-creator-name">
            Ben Bartling, Zoomshift
          </div>
        </div>
      </div>
      <div className="cancellation-right">
        <img className="cancellation-right-image" src={homepage} alt="" />
      </div>
    </div>
  );
}
