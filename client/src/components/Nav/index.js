import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      );
    } else {
      return (
        <li className="mx-1">
          <Link to="/login">
            Login
          </Link>
        </li>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        Kota Bear Woodworks
        </Link>
      </h1>
      
      <nav>
        <ul className="flex-row">
          <li className="mx-1">
              <Link to="/about">
                About
              </Link>
          </li>
          <li className="mx-1">
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/contact">
              Contact
            </Link>
          </li>
            {showNavigation()}
        </ul>
        
      </nav>
    </header>
  );
}

export default Nav;
