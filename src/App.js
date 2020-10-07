import React  from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Organisation } from "./Pages/Dashboard/Dashboard";
import NotFound from "./Pages/NotFound/NotFound";
import AboutServices from "./Pages/Help/AboutServices";
import PrivateRoute from "./lib/privateRoute";

const App = () => {
  return (
    <div className="App">
      {/* setting up the routes */}
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard/user" component={PrivateRoute} />
          <Route path="/dashboard/organisation" exact component={Organisation} />
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
