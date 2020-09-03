import React from "react";
import "./Home.css";
import HowWeWork from "./HowWeWork/HowWeWork";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
  return (
    <div className="HomePage">
      <Hero />
      <About /> 
      <HowWeWork />
      <Footer />
    </div>
  );
};

export default Home;
