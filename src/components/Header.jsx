import React from "react";
import { NavLink } from "react-router-dom";
import SignedInStatus from "./SignedInStatus";


const Header = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark unique-color-dark scrolling-navbar">
      <div className="container">
        <NavLink to="/home" className="navbar-brand">
          <strong>stackoverflowlite</strong>
        </NavLink>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <SignedInStatus />
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
export default Header;
