import React from "react";
import "./Login-SignUp.css";
import { Link } from "react-router-dom";

const Login = ({ close }) => {
  // const showLogin = 'modal display-block';
  return (
    <div className="modal login">
      <form className="loginForm">
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" placeholder="username" required/>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" placeholder="password" required/>
        <p>Got an Account? <span><a className="link" href="/login">SignUp</a></span></p>
        <button id="loginBtn" type="submit">Login</button>
        <span className="policy">Terms Policy</span>
      </form> 
      <Link className="btnClose" onClick={close} to="/" >Close</Link>
    </div>
  );
};

const SignUp = ({close}) => {
  return (
    <div className="signup modal">
      <form className="signupForm">
        <div>
          <label for="fName">First Name</label><br/>
          <input type="text" name="firstName" placeholder="First Name" required/>
        </div>
        <div>
          <label for="lName">Last Name</label><br/>
          <input type="text" name="lastName" placeholder="Last Name" required/>
        </div>
        <div>
          <label for="phone">Phone No.</label><br/>
          <input type="text" name="phone" placeholder="Phone Number" required/>
        </div>
        <div>
          <label for="email">Email</label><br/>
          <input type="email" name="email" placeholder="Email" required/>
        </div>
        <div>
          <label for="username">Username</label><br/>
          <input type="text" name="username" placeholder="UserName" required/>
        </div>
        <div>
          <label for="password">Password</label><br/>
          <input type="password" name="password" placeholder="Password" required/>
        </div>
        <span>Got an Account? <Link className="link" to="/signin">SignIn</Link></span><br/>
        <button id="signupBtn" type="submit">Create Account</button>
        <span className="policy">Terms Policy</span>
      </form> 
      <Link className="btnClose" onClick={close} to="/">Close</Link>
    </div>
  );
};

export { Login, SignUp };
