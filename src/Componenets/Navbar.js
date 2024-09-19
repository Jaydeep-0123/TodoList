import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const Logout = () => {
    cookies.remove("user");
    console.log("hello");
    window.location.href = "/";
    navigate("/Login");
  };

  useEffect(() => {
    if (cookies.get("user") === undefined) {
      navigate("/Login");
    }
  }, []);

  return (
    <div className="nav fixed-top">
      <li>
        <nav class="navbar navbar-dark bg-radial-gradient(black, transparent) ">
          <Link style={{ color: "white" }} className="nav-link ">
            <h3>Navbar</h3>
          </Link>
        </nav>
      </li>
      <nav class="navbar navbar-dark bg-radial-gradient(black, transparent) ">
        <li>
          {cookies.get("user") === undefined && (
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/Signup"
              classNsame="nav-link "
            >
              SignUp
            </Link>
          )}
        </li>
      </nav>
      <nav class="navbar navbar-dark bg-radial-gradient(black, transparent) ">
        <li>
          {cookies.get("user") === undefined && (
            <Link style={{ color: "white" }} to="/Login" className="nav-link ">
              Login
            </Link>
          )}
        </li>
      </nav>
      <nav class="navbar navbar-dark bg-radial-gradient(black, transparent) ">
        <li>
          {cookies.get("user") !== undefined && (
            <Link style={{ color: "white" }} to="/home" className="nav-link ">
              Home
            </Link>
          )}
        </li>
      </nav>
      <nav class="navbar navbar-dark bg-radial-gradient(black, transparent) ">
        <li>
          {cookies.get("user") !== undefined && (
            <Link
              style={{ color: "white" }}
              to="/todolist"
              className="nav-link "
            >
              Todolist
            </Link>
          )}
        </li>
      </nav>
      <nav class="navbar navbar-dark bg-radial-gradient(black, transparent) ">
        <li>
          {cookies.get("user") !== undefined && (
            <Link
              style={{ color: "white" }}
              onClick={() => Logout()}
              className="nav-link "
            >
              Logout
            </Link>
          )}
        </li>
      </nav>
    </div>
  );
}

export default Navbar;