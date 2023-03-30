import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/images/logo/login-icon.svg";
import LoginFormInput from "../LoginFormInput";
import LoginFormPassword from "../LoginFormPassword";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onClick = async (login, password) => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        login,
        password,
      });
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return navigate("/admin-table");
    } catch (error) {
      console.error(error);
      setError("Incorrect login and password")
    }
  };

  const Form = (
    <form className="login-form" onSubmit={(event) => event.preventDefault()}>
      <img src={LogoIcon} className="login-form-logo" alt="Logo"></img>
      <LoginFormInput
        placeholder="User Name"
        onChange={(event) => setLogin(event.target.value)}
      />
      <LoginFormPassword
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        className="login-form-button"
        onClick={() => onClick(login, password)}
      >
        Login
      </button>
    </form>
  );

  return <div className="login-form-wrapper">{Form}</div>;
};

export default LoginForm;
