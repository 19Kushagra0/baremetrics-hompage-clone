import React from "react";
import "../style/16_Fotter.css";
import stripe from "../images/16/stripe-verified.svg";
import dribble from "../images/16/dribble.svg";
import instagram from "../images/16/instagram.svg";
import twitter from "../images/16/twitter.svg";
import facebook from "../images/16/facebook.svg";

export default function Fotter() {
  return (
    <div className="fotter">
      <div className="fotter-top">
        <div className="fotter-container">
          <div className="fotter-box">
            <div className="fotter-title">FEATURES</div>
            <div className="fotter-text-container">
              <div className="fotter-text">Control Center</div>
              <div className="fotter-text">People Insights</div>
              <div className="fotter-text">Smart Dashboards</div>
              <div className="fotter-text">Recover</div>
              <div className="fotter-text">Cancellation Insights</div>
              <div className="fotter-text">Email Reports</div>
              <div className="fotter-text">Trial Insights</div>
              <div className="fotter-text">Segmentation</div>
              <div className="fotter-text">Augmentation</div>
              <div className="fotter-text">Benchmarks</div>
              <div className="fotter-text">Slack Tools</div>
              <div className="fotter-text">Analytics API</div>
            </div>
          </div>
        </div>
        <div className="fotter-container">
          <div className="fotter-box">
            <div className="fotter-title">COMPARE</div>
            <div className="fotter-text-container">
              <div className="fotter-text">ProfitWell</div>
              <div className="fotter-text">ChartMogul</div>
              <div className="fotter-text">FirstOfficer</div>
              <div className="fotter-text">SaaSOptics</div>
              <div className="fotter-text">MRR.io</div>
              <div className="fotter-text">Stripe Analytics &amp; Dunning</div>
            </div>
          </div>
        </div>
        <div className="fotter-container">
          <div className="fotter-box">
            <div className="fotter-title">COMPANY</div>
            <div className="fotter-text-container">
              <div className="fotter-text">About</div>
              <div className="fotter-text">Careers</div>
              <div className="fotter-text">Customers</div>
              <div className="fotter-text">Plans &amp; Pricing</div>
              <div className="fotter-text">Wall of Love</div>
              <div className="fotter-text">Experts</div>
              <div className="fotter-text">Affiliate Partners</div>
              <div className="fotter-text">Contact</div>
            </div>
          </div>
        </div>
        <div className="fotter-container">
          <div className="fotter-box">
            <div className="fotter-title">PUBLICATIONS</div>
            <div className="fotter-text-container">
              <div className="fotter-text">Blog</div>
              <div className="fotter-text">Academy</div>
              <div className="fotter-text">Founder Chats</div>
            </div>
          </div>
        </div>
        <div className="fotter-container">
          <div className="fotter-box">
            <div className="fotter-title">OPEN PROJECT</div>
            <div className="fotter-text-container">
              <div className="fotter-text">Startups</div>
              <div className="fotter-text">Benchmarks</div>
              <div className="fotter-text">Build vs Buy</div>
            </div>
          </div>
        </div>
        <div className="fotter-container">
          <div className="fotter-box">
            <div className="fotter-title">SUPPORT</div>
            <div className="fotter-text-container">
              <div className="fotter-text">Developers</div>
              <div className="fotter-text">Help Center</div>
              <div className="fotter-text">Status</div>
            </div>
          </div>
          <div className="fotter-box">
            <div className="fotter-title">LEGEL</div>
            <div className="fotter-text-container">
              <div className="fotter-text">Privacy</div>
              <div className="fotter-text">Security</div>
              <div className="fotter-text">Terms of Use</div>
              <div className="fotter-text">GDPR</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fotter-buttom">
        <div className="fotter-buttom-left">
          <img className="fotter-icon-image" src={dribble} alt="" />
          <img className="fotter-icon-image" src={instagram} alt="" />
          <img className="fotter-icon-image" src={twitter} alt="" />
          <img className="fotter-icon-image" src={facebook} alt="" />
        </div>
        <div className="fotter-buttom-right">
          <img className="stripe-image" src={stripe} alt="" />
        </div>
      </div>
      <div className="fotter-center">
        <span>English</span>
        <span>日本語</span>
      </div>
    </div>
  );
}
