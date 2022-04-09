import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Password"
            />
          </div>
        </form>
        <button className="submit-btn" type="submit">
          Login
        </button>
        <p style={{ textAlign: "center" }}>
          New to Ema-john?{" "}
          <Link
            style={{ textDecoration: "none", color: "#FF9900" }}
            to="/signup"
          >
            Create New Account
          </Link>
        </p>
        <div className="or-container">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <button className="google-button">Continue With Google</button>
      </div>
    </div>
  );
};

export default Login;
