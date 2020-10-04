import React, {useState} from "react";
import "./Login-SignUp.css";
import { Link} from "react-router-dom";
import {useForm, } from "react-hook-form";
import Axios from "../../lib/client";


const Login = ({ close, handleSignup }) => {
  const {register, handleSubmit,} = useForm();

  const onSubmit = (data) => {
    return Axios.post("/user/login", data)
      .then(async(res) => {
        const data = await res.data;
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        if(err.response.data.hasOwnProperty("message")) {
          return window.alert(err.response.data.message);
        }
        return window.alert("An error occured, please try again later");
      });
  };
  
  return (
    <div className="modal login">
      <form 
        className="loginForm"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="username" ref={register} required/>
        <label htmlFor="password">Password </label>
        <input type="password" name="password" placeholder="password" ref={register} required/>
        <span className="linkWrap">Don't have an Account? <Link className="link" onClick={handleSignup} to="/register">SignUp</Link></span>
        <button
          id="signupBtn"
          type="submit"
        >
          Login
        </button>
        <span className="policy">Terms Policy</span>
      </form> 
      <Link className="btnClose" onClick={close} to="/" >Close</Link>
    </div>
  );
};

const SignUp = ({close, handleLogin}) => {
  const [password, setPassword] = useState("");
  const [unmatched, setUnmatched] = useState(false);

  const onSubmit = (data) => {
    if((data.user_type == "Select Account Type")) {
      return window.alert("Please select an Account type");
    }
    delete data.confirmpassword;

    return Axios.post("/user/create", data)
      .then(async(res) => {
        const data = await res.data;
        if(data.message == "user created") {
          window.alert("Registration successful");
          window.location("/");
        }
      })
      .catch((err) => {
        if(err.response.data.hasOwnProperty("message")) {
          return window.alert(err.response.data.message);
        }
        return window.alert(
          "An error occured, please try again later"
        );
      });
  };

  const watcher = (e) => {
    if((e.target.value.length >= password.length)) {
      if((e.target.value === password)){
        setUnmatched(false);
      }
      else {
        setUnmatched(true);
      }
    }
  };
  
  const {register, handleSubmit,} = useForm();
  return (
    <div className="signup modal">
      <form 
        className="signupForm"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="fName">First Name</label><br/>
          <input type="text" name="firstName" placeholder="First Name" ref={register} required/>
        </div>
        <div>
          <label htmlFor="lName">Last Name</label><br/>
          <input type="text" name="lastName" placeholder="Last Name" ref={register} required/>
        </div>
        <div>
          <label htmlFor="phone_number">Phone No.</label><br/>
          <input type="text" name="phone_number" placeholder="Phone Number" ref={register} required/>
        </div>
        <div>
          <label htmlFor="email">Email</label><br/>
          <input type="email" name="email" placeholder="Email" ref={register} required/>
        </div>
        <div>
          <label htmlFor="username">Username</label><br/>
          <input type="text" name="username" placeholder="UserName" ref={register} required/>
        </div>
        <div>
          <label htmlFor="user_type">Account Type:</label><br/>
          <select 
            name="user_type"
            ref={register}
            required
          >
            <option>Select Account Type</option>
            <option>Individual</option>
            <option>Organization</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">Password</label><br/>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            ref={register} 
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmpassword">Password</label><br/>
          <input 
            type="password" 
            name="confirmpassword" 
            placeholder="ConfirmPassword" 
            ref={register} 
            required
            onChange={watcher}
          />
        </div>
        <p 
          className={!(unmatched) ? "password_error_none" : "password_error_show"}
        >
          password does not match
        </p>
        <span>Got an Account? <Link className="link" onClick={handleLogin} to="/login">SignIn</Link></span><br/>
        <button 
          id="signupBtn" 
          type="submit"
          disabled={(unmatched) ? true : false}
        >
          Create Account
        </button>
        <br/>
        <div></div><span id="sPolicy" className="policy">Terms Policy</span>
      </form> 
      <Link className="btnClose" onClick={close} to="/">Close</Link>
    </div>
  );
};

export { Login, SignUp };
