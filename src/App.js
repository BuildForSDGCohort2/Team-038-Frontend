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
const App = () => {
  return (
    <div className="App">
      {/* setting up the routes */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/wallet" exact component={Normal} />
          <Route path="/organisation/dashboard" exact component={Organisation} />
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
