import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./fooer.css";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="first">
          <div className="footer-lcons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </div>
          <div>
            <ul>
              <li>Audio Discription</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="service-code">
            <p>service code</p>
            <div className="Copy-write">&copy;1997-2024 Netflix,inc.</div>
          </div>
        </div>
        <div className="second">
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Cookis Preferences</li>
            <li>Do not sell or share my personal </li>
          </ul>
        </div>
        <div className="thried">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className="fourth">
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
