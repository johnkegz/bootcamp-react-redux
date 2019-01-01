import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar">
      <div className="container">
        <NavLink to="/home" className="navbar-brand">
          <strong>stackoverflowlite</strong>
        </NavLink>
        <NavLink to="/postQuestion" className="navbar-brand">
          <strong>post question</strong>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink to={"/login"} className={"navbar-brand"}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={"/signup"} className={"navbar-brand"}>
                signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
