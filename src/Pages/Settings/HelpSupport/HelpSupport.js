import React from "react";
import "./HelpSupport.css";
import {Link} from "react-router-dom";
import mail from "./envelop.png";
import facebook from "../../../Components/SideLinks/facebook.png";
import instagram from "../../../Components/SideLinks/instagram.png";
import twitter from "../../../Components/SideLinks/twitter.png";



const HelpSupport = () => {
  
  return(
    <div>
      <h4>Need Help?</h4>
        <p>Feel free to reach out to Us.</p>
        <form className="s">
          <div className="formItem">
            <div className="msg">
              <input className="inputData" type="text" name="fullName" placeholder="Full Name" required/>
              <input className="inputData" type="text" name="subject" placeholder="Subject" required/>
              <textarea className="inputData" placeholder="Message"/>
            </div>
            <div className="support-link-items">
              <Link className="support-link" to="/">
                <p><img className="sicon" src={mail} alt="email"/> support@replify.com</p>
              </Link>
              <Link className="support-link" to="/">
                <p><img className="sicon" src={facebook} alt="email"/>facebook.com/@replify</p>
              </Link>
              <Link className="support-link" to="/">
                <p><img className="sicon" src={instagram} alt="email"/>@replify</p>
              </Link>
              <Link className="support-link" to="/">
                <p><img className="sicon" src={twitter} alt="email"/>@replify</p>
              </Link>
            </div>
          </div>
        </form>
        <button className="setBtn">Submit</button>
    </div>
  );
};

export default HelpSupport;