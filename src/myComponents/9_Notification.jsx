import React from "react";
import "../style/9_Notification.css";
import image1 from "../images/9/logo-stripe.svg";
import image2 from "../images/9/logo-braintree.svg";
import image3 from "../images/9/logo-recurly.svg";
import image4 from "../images/9/logo-chargebee.svg";
import image5 from "../images/9/logo-google-play.svg";
import image6 from "../images/9/logo-app-store-connect.svg";

export default function Notification() {
  return (
    <div className="notification">
      <div className="notification-container">
        <div className="notification-left">
          <h2 className="notification-left-text">
            Take the work out of keeping tabs on your business with one-click
            integrations.
          </h2>
        </div>
        <div className="notification-right">
          <p className="notification-right-text">
            We strive to be the SaaS & subscription analytics solution you've
            always dreamed of. One click and you get hundreds of valuable
            metrics and business insights!
            <br />
            <br />
            Get notified on new integrations:
          </p>
          <br />
          <br />
          <div className="input-container-button">
            <input
              placeholder="Enter your email"
              className="input-container"
              type="text"
            />
            <button className="input-button">Notify Me</button>
          </div>
        </div>
      </div>
      <div className="sources-container">
        <img className="sources-image sources-image1" src={image1} alt="" />
        <img className="sources-image sources-image2" src={image2} alt="" />
        <img className="sources-image sources-image3" src={image3} alt="" />
        <img className="sources-image sources-image4" src={image4} alt="" />
        <img className="sources-image sources-image5" src={image5} alt="" />
        <img className="sources-image sources-image6" src={image6} alt="" />
      </div>
    </div>
  );
}
