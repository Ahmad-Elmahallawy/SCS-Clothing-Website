import React from "react";
import "../Styles/FooterStyle.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer_links">
          <div className="sb_footer_links-div">
            <h4>Need Help?</h4>
            <a href="#">Email Us</a>
            <a href="">Contact Us on Social media</a>
          </div>
          <div className="sb_footer_links-div">
            <h4>About SCS</h4>
            <a href="">History</a>
            <a href="">What we do</a>
            <a href="">Team</a>
            <a href="">Our Website</a>
          </div>
          <div className="sb_footer_links-div">
            <h4>Accepted Payment Methods</h4>
            <a href="">
              <img src="Images/PaymentMethodsLogos/visa.svg" alt="" />
            </a>
            <a href="">
              <img src="Images/PaymentMethodsLogos/mastercard.svg" alt="" />
            </a>
            <a href="">
              <img src="Images/PaymentMethodsLogos/paypal.svg" alt="" />
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>&copy;{new Date().getFullYear()} SCS Concordia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
