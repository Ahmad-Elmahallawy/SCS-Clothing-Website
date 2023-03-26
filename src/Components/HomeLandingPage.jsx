import React from "react";
import Slideshow from "./Slideshow";
import "../Styles/HomeLandingPageStyle.css";
import { Link } from "react-router-dom";

const HomeLandingPage = () => {
  return (
    <div className="BannerAndTextContainer">
      <Slideshow />
      <div className="RightSection">
        <div className="RightTextSection">
          <h1>SCS Clothing Concordia</h1>
          <h3 className="glow">Check out our Hoodies and Sweaters!</h3>
          <h5>
            We sell clothes for different majors (Software Engineering, Computer
            Science and Computer Engineering)
          </h5>
        </div>
        <div className="RightSectionBtns">
          <button>
            <a><Link to="/Clothing">Click Here to View Our Products</Link></a>
          </button>
          <button>
            <a><Link to="/Sign-Up">Sign Up</Link></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLandingPage;
