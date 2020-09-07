import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Header from "../../../Components/Header/Header";
import SideLink from "../../../Components/SideLinks/SideLinks";
import { Login, SignUp } from "../../../Components/Login-SignUp/Login-SignUp";

class Hero extends React.Component {
  constructor(){
    super();
    this.state = {
      login: false,
      signup: false
    };
  }

  handleLogin = () => {
    this.setState({login: true});
  }
  closeLogin = () => {
    this.setState({login: false});
  }
  
  handleSignup = () => {
    this.setState({signup: true});
  }
  closeSignup = () => {
    this.setState({signup: false});
  }
 
  render = () => {
    
    return (
      <div className="Home">
        <div className="overLay">
          <Header
            handleLogin={this.handleLogin} handleSignup={this.handleSignup}
          />
          <SideLink/>
          <div className="Hero">
            <div className="HeroContent">
              <h1 className="HeroHeading"> Automate your payments </h1>
              <p className="heroDes">
                Repify automate sending money to people you usually send money to
                on a regular basis. Lets saves you the stress of manually sending
                them money.
              </p>
              <Link className="btnLink" to="/register">
                Lets take care of It
              </Link>
              {this.state.login === true ? <Login close={this.closeLogin}/>: null}
              {this.state.signup === true ? <SignUp close={this.closeSignup}/> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Hero;
