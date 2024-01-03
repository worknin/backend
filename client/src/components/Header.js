import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../assets/css/Header.css";

export default function Top() {
  return (
    <div className="nav">
      <img
        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
        alt="Logo"
      />
      <ul>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/bms">
            Projects
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="/editor">
            Editor
          </Link>
        </li>
      </ul>
    </div>
  );
}
