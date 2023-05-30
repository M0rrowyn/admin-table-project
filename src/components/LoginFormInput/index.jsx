import React from "react";
import "./style.css";

const LoginFormInput = ({ classes, type = "text", placeholder = "default", onChange }) => {
  let className = "login-form-input";
  if (classes) {
    className += ` ${classes}`;
  }

  const Input = (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
    />
  );

  return Input;
};

export default LoginFormInput;
