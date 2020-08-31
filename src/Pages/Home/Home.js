import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

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
              <Link className="btnLink" to="/register">Lets take care of It</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
