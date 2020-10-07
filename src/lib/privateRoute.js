import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Normal } from "../Pages/Dashboard/Dashboard";
import getTokenDetails from "../lib/jwt";

const PrivateRoute = () => {
    if (localStorage.UserToken) {
        return (<Normal />);
    } else {
        return (<Redirect to={{ pathname: "/" }} />);
    }
};

/**let tokenValue = await getTokenDetails(localStorage.getItem("UserToken"))
if(localStorage.UserToken && tokenValue) {};*/
export default PrivateRoute;