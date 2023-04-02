import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../../Styles/SignUpStyles/SignUp.css'

const SignUpLandingPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reg = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    axios
      .post("http://localhost:4000/api/register", reg)
      .then((response) => console.log(response))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="signup_container">
      <div className="signup_form_container">
        <div className="left">
          <h1>Welcome Back</h1>
          <Link to="/Log-In">
            <button type="button" className="white_btn">
              Sing in
            </button>
          </Link>
        </div>
        <div className="right">
          <form
            className="form_container"
            action="/register"
            method="post"
            onSubmit={handleSubmit}
          >
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />

            <button type="submit" className="green_btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpLandingPage;
