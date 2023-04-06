import React from "react";
import "../../Styles/HomePageStyles/OurProductsSectionStyle.css";

const OurProductsSection = ({ photo, title }) => {
  return (
    <div className="OurProductsSectionContainer">
      <div className="container">
        <div className="ProductsSectionImage">
          <img src={photo} />
        </div>
        <div class="overlay">
          <div class="text">Click to View More</div>
        </div>
      </div>
      <div className="ProductsSectionTitle">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default OurProductsSection;
