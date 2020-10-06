import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Normal } from "../Pages/Dashboard/Dashboard";
import getTokenDetails from "../lib/jwt";

const PrivateRoute = () => {
    if (localStorage.UserToken) {
        return (<Normal />);
    } else {
        return (<Redirect to={{ pathname: '/' }} />);
    }
}
export default PrivateRoute;