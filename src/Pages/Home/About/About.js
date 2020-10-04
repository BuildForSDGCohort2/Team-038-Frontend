import React from "react";
import "./About.css";
import AboutGif from "../Images/Payment.gif";
import Button from "../../../Components/Button/Button";
// import Header from "../../../Components/Header/Header";

const About = () => {
  return (
    <div id="About">
      {/* <Header /> */}
      <div className="AboutWrapper">
        <div className="AboutDes">
          <h2 className="SubHeading">About Repify</h2>
          <h1 className="Heading PColor">payments automatons</h1>
          <p className="AboutText">
            Imagine if you could <span className="PColor">Automate</span>  sending money to people you usually
            send money to on a regular basis. Say your mother, father, siblings
            or your girlfriend. This app saves you the stress of manually
            sending them money on a set basis and not forgetting to do so so
            everyone is happy.
          </p>
          <p className="AboutText Top">
            This feature is the main catch for the app. But it can also serve as
            an <span className="Bold">Automated Subscription</span>  service; for those of us that would like
            to subscribe to say Spectranet or data on a regs or even DSTV or
            Netflix.
          </p>
          <Button Title = "Ease The Stress" to="/login" />
        </div>
        <div className="AboutGif">
            <img src={AboutGif} className="PaymentGif" alt="ReplifyGif"/>
        </div>
      </div>
    </div>
  );
};

export default About;
