import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/images/logo/login-icon.svg";
import LoginFormInput from "../LoginFormInput";
import LoginFormPassword from "../LoginFormPassword";
import { BASE_URL } from "../../constants";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onLogin = async (login, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        login,
        password,
      });
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      axios.interceptors.request.use(
        (config) => {
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      return navigate("/admin-table");
    } catch (error) {
      console.error(error);
      setError("Incorrect login and password");
    }
  };

  const Form = (
    <form className="login-form">
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
      <button type="submit" className="login-form-button">
        Login
      </button>
    </form>
  );

  return (
    <div
      className="login-form-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        onLogin(login, password);
      }}
    >
      {Form}
    </div>
  );
};

export default LoginForm;
