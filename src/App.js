import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Normal, Organisation } from "./Pages/Profile/Profile";
import { Login, SignUp } from "./Components/Login-SignUp/Login-SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import AboutServices from "./Pages/Help/AboutServices";
import Wallet from "./Pages/Wallet/Wallet";
import Transaction from "./Pages/Transactions/Transactions";
import Benefactors from "./Pages/Benefactors/Benefactors";
import Beneficiaries from "./Pages/Beneficiaries/Beneficiaries";
import Settings from "./Pages/Settings/Settings";
const App = () => {
  return (
    <div className="App">
      {/* setting up the routes */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/user" component={Normal} />
            <Route path="/dashboard/wallet" component={Wallet} />
            <Route path="/dashboard/transaction" component={Transaction} />
            <Route path="/dashboard/benefactors" component={Benefactors} />
            <Route path="/dashboard/beneficiaries" component={Beneficiaries} />
            <Route path="/dashboard/settings" component={Settings} />
          <Route
            path="/organisation/dashboard"
            exact
            component={Organisation}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={SignUp} />
          <Route path="/about" exact component={AboutServices} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
