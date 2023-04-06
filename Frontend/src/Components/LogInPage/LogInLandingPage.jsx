import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/RegistrationStyles/RegistrationStyle.css";
import { useState } from "react";
import axios from "axios";

const LogInLandingPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reg = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4000/api/login", reg, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className="container">
      <div className="form-and-title-container">
        <h2>Login to your Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button type="submit">Submit</button>
          <span>
            Don't have an account ?<Link to="/Sign-Up"> Register </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogInLandingPage;
