import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="Button">
      <Link className="BtnLink" to="/register">
        {props.Title}
      </Link>
    </div>
  );
};

export default Button;
