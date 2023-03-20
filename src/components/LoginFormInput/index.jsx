import React from "react";
import "./style.css";

const LoginFormInput = ({ classes, type = "text", placeholder = "default" }) => {
  let className = "login-form-input";
  if (classes) {
    className += ` ${classes}`;
  }

  const Input = (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
    />
  );

  return Input;
};

export default LoginFormInput;
