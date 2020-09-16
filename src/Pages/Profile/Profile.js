import React from "react";
import "./Profile.css";
import { TopNav, SideNav } from "../../Components/Dashboard/Dashboard";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

const Normal = () => {
  return (
    <div className="User">
      <TopNav />
      <div className="Dashboard">
        <SideNav />
        <div className="MainBody">
          {/* <Wallet /> */}
        </div>
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

/* 
<Router>
 <Switch>
    <Redirect exact from="/dashboard/user" to="/dashboard/wallet" />        
    <Route path="/dashboard/wallet" component={Wallet} /> 
    <Route path="/dashboard/transaction" component={Transaction} />
    <Route path="/dashboard/benefactors" component={Benefactors} />  
    <Route path="/dashboard/beneficiaries" component={Beneficiaries} />
   <Route path="/dashboard/settings" component={Settings} />
  </Switch> 
</Router> 
*/
