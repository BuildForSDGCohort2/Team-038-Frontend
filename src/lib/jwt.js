const jwt = require("jsonwebtoken");
const config = require("./config");

const getTokenDetails = async(token) => {
    return await jwt.verify(token, config.authKey, (err, decoded) => {   
        if (err) {
            return false;
        } else {
            return decoded;
        }
    });     
};


export default getTokenDetails;