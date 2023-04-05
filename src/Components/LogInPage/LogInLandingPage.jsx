import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "../../Styles/RegistrationStyles/RegistrationStyle.css";

const LogInLandingPage = () => {
  return (
    <div className="container">
      <div className="form-and-title-container">
        <h2>Login to your Account</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              // onChange={(e) =>
              //   setValues({ ...values, [e.target.name]: e.target.value })
              // }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              // onChange={(e) =>
              //   setValues({ ...values, [e.target.name]: e.target.value })
              // }
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
