import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../../Styles/RegistrationStyles/RegistrationStyle.css";
import { ToastContainer, toast } from "react-toastify";

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
    <div className="container">
      <div className="form-and-title-container">
        <h2>Create Account</h2>
        <form
          className="form_container"
          action="/register"
          method="post"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="input"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="input"
            />
          </div>
          <div>
            {" "}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="input"
            />
          </div>
          <div>
            {" "}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="input"
            />
          </div>

          <button type="submit" className="green_btn">
            Sign Up
          </button>
          <span>
            Already have an account ?<Link to="/Log-In"> Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUpLandingPage;
