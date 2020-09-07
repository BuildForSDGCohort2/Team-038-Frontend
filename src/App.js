import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Wallet from "./Pages/Wallet/Wallet";
import Transactions from "./Pages/Transactions/Transactions";
import Beneficiaries from "./Pages/Beneficiaries/Beneficiaries";
import Benefactors from "./Pages/Benefactors/Benefactors";
import { Normal, Organisation } from "./Pages/Profile/Profile";
import NotFound from "./Pages/NotFound/NotFound";
import AboutServices from "./Pages/Help/AboutServices";
const App = () => {
  return (
    <div className="App">
      {/* setting up the routes */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/beneficiaries" exact component={Beneficiaries} />
          <Route path="/benefactors" component={Benefactors} />
          <Route path="/profile/normal" exact component={Normal} />
          <Route path="/profile/organisation" exact component={Organisation} />
          <Route path="/login" exact component={Home} />
          <Route path="/register" exact component={Home} />
          <Route path="/about" exact component={AboutServices} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
