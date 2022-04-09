import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
const Signup = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
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
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
              placeholder="re-Enter Password"
            />
          </div>
        </form>
        <button className="submit-btn" type="submit">
          Sign Up
        </button>
        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "#FF9900" }}
            to="/login"
          >
            Create New Account
          </Link>
        </p>
        <div className="or-container">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <button onClick={() => signInWithGoogle()} className="google-button">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
