import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            itaque voluptas amet at voluptatum! Voluptate sapiente
            accusantium molestiae placeat. dolor sit amet consectetur 
            itaque voluptas delectus amet at
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="social-icon" />
            <img src={assets.twitter_icon} alt="social-icon" />
            <img src={assets.linkedin_icon} alt="social-icon" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7892</li>
                <li>wuttiphong.santhalunai@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © WSKT2000 - All right Reserved</p>
    </div>
  );
};

export default Footer;
