import React from "react";
import "./Home.css";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
  return (
    <div className="HomePage">
      {/* <div className="Home"><Hero /></div> */}
      <About />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
