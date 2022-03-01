import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Kota Bear Woodworks
        </Link>
      </h1>

      <nav>
      <Link to="/about">
        About
      </Link>
      <Link to="/gallery">
        Gallery
      </Link>
      <Link to="/contact">
        Contact
      </Link>
      </nav>
    </header>
  );
}

export default Nav;
