import React from "react";
import "./Profile.css";
import { TopNav, SideNav } from "../../Components/Dashboard/Dashboard";
// import { Outlet } from "react-router-dom";
// import { Outlet } from "react-router-dom";

const Normal = () => {
  return (
    <div className="User">
      <TopNav />
      <SideNav />
      <div className="Body">
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

const Organisation = () => {
  return (
    <div className="Organisation">
      <h2>Company Profile Page</h2>
    </div>
  );
};
export { Normal, Organisation };
