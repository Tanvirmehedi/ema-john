import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav className="header">
      <Link to="/">
        {" "}
        <img src={logo} alt="" />
      </Link>
      <div className="header">
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/inventory">Inventory</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {user ? (
          <CustomLink onClick={logout} to="/">
            Logout
          </CustomLink>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
