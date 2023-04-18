import React from "react";

//Custom stylesheet(s) & Assets
import HydrowareLogo from "../../assets/hydroware_logo.png";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="footerInformation">
          <img
            src={HydrowareLogo}
            alt="HydrowareLogo"
            style={{ width: "20px", height: "17px", objectFit: "contain" }}
          />
          <p>
            <a href="https://apps.hydroware.com/">Hydroware</a>
          </p>
          <MdEmail style={{ color: "#c50068" }} />
          <p>
            <a href="mailto:support@hydroware.se"> support@hydroware.se</a>
          </p>
          <BsFillTelephoneFill style={{ color: "#c50068" }} />
          <p>
            <a href="tel:+46 (0)472-451 56">+46 (0)472-451 56</a>
          </p>
        </div>
        <div className="footerCopyRight">
          <p>Copyright © {currentYear} - Hydroware AB</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
