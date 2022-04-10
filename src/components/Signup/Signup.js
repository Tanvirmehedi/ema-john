import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [onError, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handler
  const handelEmail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  // On Submit Handler
  const handelOnSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didn't Match");
      return;
    } else if (password.length < 7) {
      setError("Password Must Be 7 or More");
      return;
    } else {
      createUserWithEmailAndPassword(email, password).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <div style={{ color: "red", textAlign: "center" }}>
        {onError ? onError : ""}
        {error ? error.message : ""}
      </div>
      <div>
        <form onSubmit={handelOnSubmit}>
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
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onChange={handelConfirmPassword}
              type="password"
              name="confirm-password"
              id="confirm-password"
              required
              placeholder="re-Enter Password"
            />
          </div>
          <button className="submit-btn" type="submit">
            Sign Up
          </button>
        </form>
        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            style={{ textDecoration: "none", color: "#FF9900" }}
            to="/login"
          >
            Log In Now
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
