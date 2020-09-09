import React from "react";
import "./Profile.css";
import { TopNav, SideNav } from "../../Components/Dashboard/Dashboard";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import Wallet from "../Wallet/Wallet";
// import Transaction from "../Transactions/Transactions";
// import Benefactors from "../Benefactors/Benefactors";
// import Beneficiaries from "../Beneficiaries/Beneficiaries";
// import Settings from "../Settings/Settings";

const Normal = () => {
  return (
    <div className="User">
    <TopNav />
    <SideNav />
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
