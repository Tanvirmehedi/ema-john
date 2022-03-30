import React from "react";
import logo from "../../images/Logo.svg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="header">
        <CustomLink className="a" to="/shop">
          Shop
        </CustomLink>
        <CustomLink className="a" to="/orders">
          Orders
        </CustomLink>
        <CustomLink className="a" to="/inventory">
          Inventory
        </CustomLink>
        <CustomLink className="a" to="/about">
          About
        </CustomLink>
      </div>
    </nav>
  );
};

export default Header;
