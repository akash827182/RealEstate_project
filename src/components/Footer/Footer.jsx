import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left part  */}
        <div className="flexColStart f-left">
          <img src="./logo3.png" alt="logi" width={120} />
          <span className="secondaryText">
            Our vision is to provide every people with their dream house.
          </span>
        </div>
        {/* right part  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            MNIT Jaipur 302017, Jaipur, Rajasthan
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
