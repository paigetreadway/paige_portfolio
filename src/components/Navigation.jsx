import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

function Navigation() {

  const resumeData = require('../assets/data.json');

  return (
    <div class="nav-container">
      <nav className="navbar" id = 'navbar'>
        <div class="navigation"> 
          <div className="header-name">
            <Link to={'/about'}>
            <h3> 
              <span class="owner-name withhover">{resumeData.name}</span> <span class="owner-name">Portfolio</span> 
            </h3>
            </Link>
          </div>
          <div className="header-menu">
            <ol className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" to="/art">
                  Art
                </NavLink>
              </li>
            </ol>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
