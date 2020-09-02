import React from "react";
import "./Home.css";
import HowWeWork from "./HowWeWork/HowWeWork";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <HowWeWork />
      <Footer />
    </div>
  );
};

export default Home;
