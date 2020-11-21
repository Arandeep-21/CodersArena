import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-brand">
            <Link to="/home">Chat</Link>
          </div>
          <div className="navbar-menu">
            <div className="home-link">
              <Link to="/home" className="navbar-menu-link btn-1">
                Home
              </Link>
            </div>
            <div>
              <a
                href="http://localhost:5000/api/logout"
                className="navbar-menu-link btn-1"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
