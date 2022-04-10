import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
const Login = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <div>{error ? error : ""}</div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={handelEmail}
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
              onChange={handelPassword}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Password"
            />
          </div>
          <button className="submit-btn" type="submit">
            Login
          </button>
        </form>
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
        <button onClick={handelGoogleSignIn} className="google-button">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
