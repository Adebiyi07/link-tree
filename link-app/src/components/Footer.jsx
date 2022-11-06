import React from "react";
import ZuriLogo from "../SVG/zuri-logo.svg";
import IngressiveLogo from "../SVG/I4G.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="zuri-cont">
        <img src={ZuriLogo} alt="Zuri Internship Logo" className="zuri" />
      </div>
      <p className="footer-text">HNG Internship 9 Frontend Task</p>
      <div className="ing-cont">
        <img
          src={IngressiveLogo}
          alt="Ingressive for Good Logo"
          className="zuri"
        />
      </div>
    </footer>
  );
};

export default Footer;
