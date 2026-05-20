import React from "react";
import "../style/3_Payment_providers.css";
import images1 from "../images/1.svg";
import images2 from "../images/2.svg";
import images3 from "../images/3.svg";
import images4 from "../images/4.svg";
import images5 from "../images/5.svg";
import images6 from "../images/6.svg";
import images7 from "../images/7.svg";
import images8 from "../images/8.png";
import images9 from "../images/9.png";
import images10 from "../images/10.png";
import images11 from "../images/11.png";

export default function Payment_providers() {
  return (
    <div className="payment-providers">
      <div className="payment-providers-headline">
        Integrates with your favorite payment providers and platforms
      </div>
      <div className="payment-providers-images">
        <img
          className="payment-providers-image payment-providers-images1"
          src={images1}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images2"
          src={images2}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images3"
          src={images3}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images4"
          src={images4}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images5"
          src={images5}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images6"
          src={images6}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images7"
          src={images7}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images8"
          src={images8}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images9"
          src={images9}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images10"
          src={images10}
          alt=""
        />
        <img
          className="payment-providers-image payment-providers-images11"
          src={images11}
          alt=""
        />
      </div>
    </div>
  );
}
