import React, { useState } from "react";
import "./style.css";
import { BsEyeSlashFill, BsEye } from "react-icons/bs";
import LoginFormInput from "../LoginFormInput";

const LoginFormPassword = ({ placeholder, onChange }) => {
  const [isPasswordOpen, setPasswordOpen] = useState(false);
  const togglePasswordOpen = () => setPasswordOpen(!isPasswordOpen);

  const FormPassword = (
    <div className="form-password-wrapper">
      <LoginFormInput
        classes="form-password"
        type={isPasswordOpen ? "text" : "password"}
        placeholder={placeholder}
        onChange={onChange}
      />
      {isPasswordOpen ? (
        <BsEye onClick={togglePasswordOpen} className="password-eye" />
      ) : (
        <BsEyeSlashFill onClick={togglePasswordOpen} className="password-eye" />
      )}
    </div>
  );

  return FormPassword;
};

export default LoginFormPassword;
