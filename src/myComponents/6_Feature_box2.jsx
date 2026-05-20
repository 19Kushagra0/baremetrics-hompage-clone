import React from "react";
import "../style/6_Feature_box2.css";
import icon_control_center from "../images/5/icon-benchmarks.svg";
import feature_image1 from "../images/5/thumbnail_benchmarks.png";
import icon_smart_dashboards from "../images/icon-smart-dashboards.svg";
import feature_image2 from "../images/5/thumbnail_goals.png";
import icon_forecasting from "../images/5/icon-trial-insights.svg";
import feature_image3 from "../images/5/thumbnail_trial-insights.png";

export default function Feature_box2() {
  return (
    <div className="feature-box2">
      <div className="feature-box-text-container">
        <div className="feature-box-title-container">
          <h1 className="feature-box-title">
            Make more by knowing what drives growth of your business.
          </h1>
        </div>

        <div className="feature-box-description-container">
          <div className="feature-box-text">
            We're sick of the seemingly endless number of stale charts and
            graphs, so we work to make our design and interface lively and
            inspiring. Every feature is as useful as it is pleasing to the eye.
          </div>
        </div>
      </div>
      <div className="feature-container2">
        <div className="feature-box">
          <div className="feature-box-top">
            <img
              className="control-center-image"
              src={icon_control_center}
              alt=""
            />
            <span className="control-center-text control-center-text-color1">
              Benchmarks
            </span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image1} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Get your metrics in the right context by looking at how you
              compare to other companies like you.
            </span>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-box-top">
            <img
              className="control-center-image"
              src={icon_smart_dashboards}
              alt=""
            />
            <span className="control-center-text2 control-center-text-color2 ">
              Goals
            </span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image2} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Track progress towards goals and rally the team to meet them.
            </span>
          </div>
        </div>
        <div className="feature-box">
          <div className="feature-box-top">
            <img
              className="control-center-image"
              src={icon_forecasting}
              alt=""
            />
            <span className="control-center-text3 control-center-text-color3 ">
              Trial Insights
            </span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image3} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Add notes to determine how well new campaigns, experiments, and
              enhancements improve key metrics.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
