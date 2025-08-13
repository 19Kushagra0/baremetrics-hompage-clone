import React from "react";
import "../style/7_Review.css";

import user_image from "../images/7/user-matt-later.png";
import white_9 from "../images/7/white-9.png";

export default function Review() {
  return (
    <div className="review">
      <div className="review-heading-container">
        <span className="review-heading">
          "Thanks to Baremetrics, we're able to know what's going on with our
          revenue and customers, in real-time. Absolutely invaluable and miles
          ahead of doing it in spreadsheets or coding your own."
        </span>
      </div>
      <img className="user-photo" src={user_image} alt="" />
      <div className="user-name">Matt Smith</div>
      <div className="user-position">COO and Founder at Later</div>

      <img className="review-image" src={white_9} alt="" />
    </div>
  );
}
