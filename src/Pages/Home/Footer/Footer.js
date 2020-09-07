import React from "react";
import "./Footer.css";
import Andela from "../Images/andela.png";
import Facebook from "../Images/facebook.png";
import Paystack from "../Images/paystack.jpg";


const Footer = () => {
    return(
        <div id="footer">
            <h2 className="title">Our Partners</h2>
            <div className="icons">
                <img className="logos" id="fb" src={Facebook} alt="Facebook logo"/>
                <img className="logos" id="andela" src={Andela} alt="Andela logo"/>
                <img className="logos" src={Paystack} alt="Paystack logo"/>
            </div>
            <h3 className="subscribe-header">Stay updated and Connected with Us</h3>
            <div className="newsletter">
                <span>
                <input type="text" id="mail" placeholder="Enter Email Address"/>
                <input type="button" id="send" value="Subscribe"/>
                </span>
            </div>
            <div id="copyright">
                <p>Copyright &copy; Repify</p>  
                <span className="f-r"><span className="link" > Privacy Policy </span> |
                <span className="link">Terms and Conditions </span> |
                <span className="link">Partners</span></span>
            </div>
        </div>
    );
};

export default Footer;