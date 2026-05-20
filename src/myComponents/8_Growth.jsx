import React from "react";
import "../style/8_Growth.css";
import icon_control_center from "../images/7/icon-augmentation.svg";
import feature_image1 from "../images/7/thumbnail_augmentation.png";
import icon_smart_dashboards from "../images/7/icon-segmentation.svg";
import feature_image2 from "../images/7/thumbnail_segmentation.png";
import icon_forecasting from "../images/7/icon-people-insights.svg";
import feature_image3 from "../images/7/thumbnail_customers.png";

export default function Growth() {
  return (
    <div className="growth">
      <div className="feature-box-text-container">
        <div className="feature-box-title-container">
          <h1 className="feature-box-title">
            Make more by making data-driven decisions with confidence.
          </h1>
        </div>

        <div className="feature-box-description-container">
          <div className="feature-box-text">
            Finally, you can get the data you need to uncover growth
            opportunities, get answers to your questions, and run sophisticated
            analyses with ease. Being data-driven and customer-obsessed just
            became a reality.
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
            <span className="control-center-text control-center-text-color4">
              Augmentation
            </span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image1} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Merge external data to create rich customer profiles and precise
              segments.
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
            <span className="control-center-text2 control-center-text-color5 ">
              Segmentation
            </span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image2} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Discover and compare your most profitable customer segments and
              the attributes that make them an ideal fit.
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
            <span className="control-center-text3 control-center-text-color6 ">
              Customers
            </span>
          </div>
          <div className="feature-box-center">
            <img className="feature-center-image" src={feature_image3} alt="" />
          </div>
          <div className="feature-box-down">
            <span className="feature-down-text">
              Zoom in to each and every customer with a full history of
              payments, events, and changes.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
