import React from "react";
import Slideshow from "./Slideshow";
import "../../Styles/HomePageStyles/HomeLandingPageStyle.css";
import OurProductsSection from "./OurProductsSection";
import { Link } from "react-router-dom";
import SocialMediaArray from "./SocialMediaArray";
import SignUpLandingPage from "../SignUpPage/SignUpLandingPage";

const HomeLandingPage = () => {
  return (
    <div>
      <div className="BannerAndTextContainer">
        <Slideshow />
        <div className="RightSection">
          <div className="RightTextSection">
            <h1>SCS Clothing Concordia</h1>
            <h3 className="glow">Check out our Hoodies and Sweaters!</h3>
            <h5>
              We sell clothes for different majors (Software Engineering,
              Computer Science and Computer Engineering)
            </h5>
          </div>
          <div className="RightSectionBtns">
            <button>
              <a>
                <Link to="/Clothing">Click Here to View Our Products</Link>
              </a>
            </button>
            <button>
              <a>
                <Link to="/Sign-Up">Sign Up</Link>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="HomePageSubtitle">
        <h1>Check Out Our Products</h1>
      </div>
      <div className="productsSection">
        <OurProductsSection
          photo="../Images/SOENHoodies/Hoodie Preview.jpg"
          title="HOODIES"
        />

        <OurProductsSection
          photo="../Images/SOENHoodies/Sweater Preview.jpg"
          title="SWEATERS"
        />
      </div>

      <div className="HomePageSubtitle">
        <h1>Follow Us On Social Media</h1>
      </div>
      <SocialMediaArray />
    </div>
  );
};

export default HomeLandingPage;
