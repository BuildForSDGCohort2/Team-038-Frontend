import React from "react";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import HowWeWork from "../../Components/HowWeWork/HowWeWork";


const Home = () => {
  return (
    <div className="Home">
      <HowWeWork />
      <Footer />
    </div>
  );
};

export default Home;
