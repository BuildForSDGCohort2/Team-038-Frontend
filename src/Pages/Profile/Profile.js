import React from "react";
import "./Profile.css";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wallet from "../Wallet/Wallet"
import Transaction from "../Transactions/Transactions";
import Benefactors from "../Benefactors/Benefactors";
import Beneficiaries from "../Beneficiaries/Beneficiaries";
import Settings from "../Settings/Settings";

const Normal = () => {
  return (
    <div className="User">
      {/* Setting Up Routes for Users Dashboard */}
      <Router>
        <Switch>
          <Route path='/' component={Wallet} />
          <Route path="/transaction" exact component={Transaction} />
          <Route path="/benefactors" exact component={Benefactors} />
          <Route path="/beneficiaries" exact component={Beneficiaries} />
          <Route path="/settings" exact component={Settings} />
          <Route />
        </Switch>
      </Router>
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
