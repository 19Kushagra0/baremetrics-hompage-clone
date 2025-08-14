import React from "react";
import "../style/2_Title.css";
import baremetricsVideo from "../video/baremetrics-video.mp4";

export default function Title() {
  return (
    <div className="title">
      <div className="title-left-container">
        <div className="heading">
          Superior Dashboards and Analytics for Stripe
        </div>
        <div className="description">
          <span>
            Stripe alone or Stripe with friends, Baremetrics subscription
            analytics software is the easiest way to get the insights you need
            to understand your performance and where to focus next.
          </span>
        </div>
        <div className="title-button-container">
          <button className="title-button1">
            <span className="cursor">Free Metrics</span>
          </button>
          <button className="title-button2">
            <span className="cursor">Live Demo</span>
          </button>
        </div>
      </div>
      <div className="title-right-container">
        <div className="title-video-container">
          <video
            className="title-video"
            src={baremetricsVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}
