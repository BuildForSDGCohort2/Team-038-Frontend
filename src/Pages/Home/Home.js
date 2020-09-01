import React from "react";
import "./Home.css";
import Footer from "../../Components/Footer/Footer";
import HowWeWork from "../../Components/How_we_work_home_section/How_we_work.js"


const Home = () => {
  return (
    <div className="Home">
      <HowWeWork />
      <Footer />
    </div>
  );
};

export default Home;
