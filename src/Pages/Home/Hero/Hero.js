import React from "react";
import "./Hero.css";
import Header from "../../../Components/Header/Header";
import SideLink from "../../../Components/SideLinks/SideLinks";
import Button from "../../../Components/Button/Button";

const Hero = () => {
  return (
    <div className="Home">
      <div className="overLay">
        <Header />
        <SideLink/>
        <div className="Hero">
          <div className="HeroContent">
            <h1 className="HeroHeading"> Automate your payments </h1>
            <p className="heroDes">
              Repify automate sending money to people you usually send money to
              on a regular basis. Lets saves you the stress of manually sending
              them money.
            </p>
            <Button Title=" Get Started " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
