import React from "react";
import "./SideLinks.css";
import arrow from "./arrow.png";
import facebook from "./facebook-logo.png";
import instagram from "./instagram.png";
import linkedIn from "./linkedin.png";
import twitter from "./twitter.png";


const SideLinks = () => {
  return (
    <div className="SideLinks">
      <aside className="sideLinkIcons">
        <img className="icon" src={facebook} alt="facebook"/>
        <img className="icon" src={twitter} alt="twitter"/>
        <img className="icon" src={instagram} alt="instagram"/>
        <img className="icon" src={linkedIn} alt="linkedin"/>
      </aside>
      <div className="sideLinkArrow"><img id="cusor" src={arrow} alt="arrow"/></div> 
    </div>
  );
};

export default SideLinks;
