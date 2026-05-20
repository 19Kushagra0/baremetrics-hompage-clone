import React from "react";
import "../style/4_Feature_box1.css";
import icon_control_center from "../images/icon-control-center.svg";
import feature_image1 from "../images/feature-image1.png";
import icon_smart_dashboards from "../images/icon-smart-dashboards.svg";
import feature_image2 from "../images/feature-image2.png";
import icon_forecasting from "../images/icon-forecasting.svg";
import feature_image3 from "../images/feature-image3.png";
export default function Feature_box1() {
  return (
    <div className="feature-box1">
      <div className="feature-container">
        <div className="feature-box">
          <div className="feature-box-top">
            <img
              className="control-center-image"
              src={icon_control_center}
              alt=""
            />
            <span className="control-center-text">Control Center</span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image1} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              The lifeblood of your business — both visible at a glance and
              thoroughly detailed.
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
            <span className="control-center-text2">Dashboard</span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image2} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Dig deep into the details of what's driving growth and how it
              compares to previous months.
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
            <span className="control-center-text3">Forecast</span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image3} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Make well-informed projections for hiring, expansion, and
              departmental budgets.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
