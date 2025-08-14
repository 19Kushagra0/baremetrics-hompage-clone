import React from "react";
import "../style/5_Companies_using.css";
import image1 from "../images/5/1.svg";
import image2 from "../images/5/2.svg";
import image3 from "../images/5/3.svg";
import image4 from "../images/5/4.svg";
import image5 from "../images/5/5.svg";
import image6 from "../images/5/6.svg";
import image7 from "../images/5/7.svg";
import image8 from "../images/5/8.svg";

export default function Companies_using() {
  return (
    <div className="companies-using ">
      <div className="companies-using-title">
        +900 companies using Baremetrics for growth
      </div>
      <div className="companies-images-container">
        <img
          className="companies-images companies-images1"
          src={image1}
          alt=""
        />
        <img
          className="companies-images companies-images2"
          src={image2}
          alt=""
        />
        <img
          className="companies-images companies-images3"
          src={image3}
          alt=""
        />
        <img
          className="companies-images companies-images4"
          src={image4}
          alt=""
        />
        <img
          className="companies-images companies-images5"
          src={image5}
          alt=""
        />
        <img
          className="companies-images companies-images6"
          src={image6}
          alt=""
        />
        <img
          className="companies-images companies-images7"
          src={image7}
          alt=""
        />
        <img
          className="companies-images companies-images8"
          src={image8}
          alt=""
        />
      </div>
    </div>
  );
}
