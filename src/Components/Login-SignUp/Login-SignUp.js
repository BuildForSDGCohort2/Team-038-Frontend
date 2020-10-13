import React, { useState } from "react";
import "./Login-SignUp.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "../../lib/client";
import getTokenDetails from "../../lib/jwt";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    return Axios.post("/user/login", data)
      .then(async (res) => {
        const data = await res.data;
        localStorage.setItem("UserToken", data.token);
        // redirects the user to the dashboard
        window.location.href = "/dashboard/user#/wallet";
      })
      .catch((err) => {
        //This ERROR CHECK IS FAILING
        /*if (err.response.data.hasOwnProperty("message")) {
          return window.alert(err.response.data.message);
        }*/
        return window.alert("ERROR: " + err);
      });
  };

  return (
    <div className="Login">
      <div className="LoginHero">
        <img
          src="https://res.cloudinary.com/repify/image/upload/v1602121150/RepifyLogo.png"
          alt="Repify"
          className="LoginLogo"
        />
        <p className="HeroSmallText">Welcome, Login to your Repify Account</p>
      </div>
      <div className="FormWrapper">
        <form
          className="LoginForm"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email" className="LoginLabel">
            Email Address:
            <input
              className="LoginInputs"
              type="email"
              name="email"
              placeholder="Username"
              ref={register}
              required
            />
          </label>
          <label htmlFor="password" className="LoginLabel">
            Your Password:
            <input
              className="LoginInputs"
              type="password"
              name="password"
              placeholder="Password"
              ref={register}
              required
            />
          </label>
          <p className="LoginLabel">
            <Link className="LoginLabelLink" to="/register">
              Forgot Password?
            </Link>
          </p>
          <button className="RegBtn" type="submit">
            Login
          </button>
          <p className="ForgetLink">
            Don't have an Account ?
            <Link className="LoginLink" to="/register">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [unmatched, setUnmatched] = useState(false);

  const onSubmit = (data) => {
    if (data.user_type === "Select Account Type") {
      return window.alert("Please select an Account type");
    }
    delete data.confirmpassword;

    return Axios.post("/user/create", data)
      .then(async (res) => {
        const data = await res.data;
        //data to send to dashboard component
        const payload = await getTokenDetails(data["data"].token);
        if (data.message === "user created") {
          window.alert("Registration successful");
          window.location.href = "/";
        }
      })
      .catch((err) => {
        // if(err.hasOwnProperty("response")) {
        //   if(err.response.hasOwnProperty("data")) {
        //     if(err.response.data.hasOwnProperty("message")) {
        //       return window.alert(err.response.data.message);
        //     }
        //   }
        // }
        console.log(err);
        return window.alert("An error occured, please try again later");
      });
  };

  const watcher = (e) => {
    if (e.target.value.length >= password.length) {
      if (e.target.value === password) {
        setUnmatched(false);
      } else {
        setUnmatched(true);
      }
    }
  };

  const { register, handleSubmit } = useForm();
  return (
    <div className="SignUP">
      <div className="LoginHero">
        <img
          src="https://res.cloudinary.com/repify/image/upload/v1602121150/RepifyLogo.png"
          alt="Repify"
          className="LoginLogo"
        />
        <p className="HeroSmallText">
          Welcome, Lets get you started with your Repify Account
        </p>
      </div>
      <div className="FormWrapper">
        <form
          className="signupForm"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="FormGroup">
            <label className="LoginLabel" htmlFor="fName">
              First Name
              <input
                className="LoginInputs"
                type="text"
                name="firstName"
                placeholder="First Name"
                ref={register}
                required
              />
            </label>
            <div className="FloatRight">
              <label className="LoginLabel" htmlFor="lName">
                Last Name
                <input
                  className="LoginInputs"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  ref={register}
                  required
                />
              </label>
            </div>
          </div>
          <div className="FormGroup">
            <label className="LoginLabel" htmlFor="phone_number">
              Phone No.
              <input
                className="LoginInputs"
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                ref={register}
                required
              />
            </label>
            <div className="FloatRight">
              <label className="LoginLabel" htmlFor="email">
                Email
                <input
                  className="LoginInputs"
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={register}
                  required
                />
              </label>
            </div>
          </div>
          <div className="FormGroup">
            <label className="LoginLabel" htmlFor="username">
              Username
              <input
                className="LoginInputs"
                type="text"
                name="username"
                placeholder="UserName"
                ref={register}
                required
              />
            </label>
            <div className="FloatRight">
              <label className="LoginLabel" htmlFor="user_type">
                Account Type:
                <select
                  name="user_type"
                  className="LoginSelect"
                  ref={register}
                  required
                >
                  <option>Select Account Type... </option>
                  <option>Individual</option>
                  <option>Organization</option>
                </select>
              </label>
            </div>
          </div>
          <div className="FormGroup">
            <label className="LoginLabel" htmlFor="password">
              Password
              <input
                className="LoginInputs"
                type="password"
                name="password"
                placeholder="Password"
                ref={register}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <div className="FloatRight">
              <label className="LoginLabel" htmlFor="confirmpassword">
                Confirm Password
                <input
                  className="LoginInputs"
                  type="password"
                  name="confirmpassword"
                  placeholder="ConfirmPassword"
                  ref={register}
                  required
                  onChange={watcher}
                />
              </label>
            </div>
          </div>
          <div className="FormGroup">
            <label className="LoginLabel" htmlFor="location">
              Location
              <input
                className="LoginInputs"
                type="text"
                name="location"
                placeholder="Lagos, Nigeria"
                ref={register}
                required
              />
            </label>
            <div className="FloatRight">
              <label className="LoginLabel" htmlFor="referal">
                Referral Code
                <input
                  className="LoginInputs"
                  type="text"
                  name="referral"
                  placeholder="Coming Soon"
                  disabled
                />
              </label>
            </div>
          </div>
          <p className={!unmatched ? "PasswordNone" : "PasswordShow"}>
            password does not match
          </p>
          <button className="RegBtn" type="submit">
            Sign Up
          </button>
          <p className="ForgetLink">
            Got an Account ?
            <Link className="LoginLink" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login, SignUp };
