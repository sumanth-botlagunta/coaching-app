import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <Link to="/" class="navbar-brand">
            Medi-Max
          </Link>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">categories</a>
            </li>
            <li>
              <Link to="/">Browse Medicines</Link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <Link to="/signup">
                <span class="glyphicon glyphicon-user"></span> Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span class="glyphicon glyphicon-log-in"></span> Login
              </Link>
            </li>
            <li>
              <Link to="/login">
                <span class="glyphicon glyphicon-shopping-cart"></span> Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
