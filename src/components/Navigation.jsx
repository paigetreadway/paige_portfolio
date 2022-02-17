import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Navigation() {

  const resumeData = require('../assets/data.json');

  return (
    <div className="navigation">

      <nav className="navbar navbar-expand navbar-dark bg-dark">
      
        <div className="container" style={{flexFlow: "row wrap"}}>
          <div className="Name">
            <h3 class="owner-name" style={{ whiteSpace: "nowrap" }}> {resumeData.name} Portofolio </h3>
          </div>

          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/resume">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/art">
                  Art
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
