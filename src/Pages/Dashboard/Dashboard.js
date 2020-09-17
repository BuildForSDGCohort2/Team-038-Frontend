import React from "react";
import "./Dashboard.css";
import { TopNav, SideNav } from "./DashboardNavBars";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Wallet from "../Wallet/Wallet";
import Profile from "../Propfile/Profile";
import Transaction from "../Transactions/Transactions";
import Benefactors from "../Benefactors/Benefactors";
import Beneficiaries from "../Beneficiaries/Beneficiaries";
import Settings from "../Settings/Settings";

const Normal = () => {
  return (
    <div className="User">
      <TopNav />
      <div className="Dashboard">
        <HashRouter>
          <SideNav />
          <div className="MainBody">
            <Route path="/wallet" exact component={Wallet} />
            <Route path="/profile" component={Profile} />
            <Route path="/transaction" component={Transaction} />
            <Route path="/benefactor" component={Benefactors} />
            <Route path="/beneficiaries" component={Beneficiaries} />
            <Route path="/settings" component={Settings} />
          </div>
        </HashRouter>
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


