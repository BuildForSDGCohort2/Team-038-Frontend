import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header-Footer/Header-Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="overLay">
        <Header />
        <div className="Hero">
          <div className="HeroContent">
            <h1 className="HeroHeading">Automate your payments</h1>
            <p className="heroDes">
              repify automate sending money to people you usually send money to
              on a regular basis. Lets saves you the stress of manually sending
              them money.
            </p>
            <a className="btn">
              <Link className="btnLink" to="/register">Lets take care of It</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
