import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Normal } from "../Pages/Dashboard/Dashboard";
import getTokenDetails from "../lib/jwt";

/**const PrivateRoute = () => {
    const token = localStorage.getItem("UserToken");
    const [tokenIsValid, settokenIsValid] = useState(true);

    const verifyToken = async () => {
        const result = await getTokenDetails(token);
        settokenIsValid(result);
    }

    if (token && tokenIsValid) {
        return (<Normal />);
    }

    // Redirect to homepage 

    return (<Redirect to={{ pathname: "/" }} />);

};*/

const PrivateRoute = () => {
    const token = localStorage.getItem("UserToken");

        if (token) {
            return (<Normal />);
        }
        
        // Redirect to homepage 
        return (<Redirect to={{ pathname: "/" }} />);
    }
    export default PrivateRoute;