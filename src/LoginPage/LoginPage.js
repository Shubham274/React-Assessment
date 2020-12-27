import React from "react";
import Axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import { ROUTE_ENDPOINTS } from "../utils/RouteEndpoints";

import "./LoginPage.css";
const LoginPage = (props) => {
  console.log(props);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username !== password) {
      alert("Please Enter Valid Credentials");
    } else if (username === null || username === "") {
      alert("Please enter a username");
      return false;
    } else if (password === null || password === "") {
      alert("Please enter a password");
      return false;
    } else {
      Axios.post("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login", {
        username: username,
        password: password,
      })
        .then((res) => {
          alert("Login Successful!");
          localStorage.setItem("loginStatus", true);
          history.push(ROUTE_ENDPOINTS.ORDER_LIST);
        })
        .catch((res) => {});
    }
  }

  return (
    <div>
      <form className="login_form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          className="login_input"
          type="text"
          name="username"
          placeholder="Enter Username"
        ></input>
        <input
          className="login_input"
          type="password"
          name="password"
          placeholder="Enter Password"
        ></input>
        <input type="submit" value="Login" className="login_btn"></input>
      </form>
    </div>
  );
};

export default LoginPage;
