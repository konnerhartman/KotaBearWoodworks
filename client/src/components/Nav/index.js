import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../assets/KBWW-white.png";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <li className="nav-item">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a className="nav-link text-white" href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">
            Login
          </Link>
        </li>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark px-3 py-4">
      <div className="p-2 justify-content-center">
        <img src={Logo} alt="Kota Bear Woodworks Logo" height="85px"></img>
      </div>

      <div className="h1 nav-item p-2">
        <Link className="text-decoration-none text-white" to="/">
        Kota Bear Woodworks
        </Link>
      </div>
      
      <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">
              Contact
            </Link>
          </li>
          {showNavigation()}
        </ul>
        
      </div>
    </nav>
  );
}

export default Nav;
