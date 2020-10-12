import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container d-flex align-center space-between h-100">
        <div className="logo-container d-flex align-center">
          <img src={logo} alt="" />
          <h1>Board Gaming</h1>
        </div>
        <div className="btn primary">Borrow a Game!</div>
      </div>
    </div>
  );
}

export default NavBar;
