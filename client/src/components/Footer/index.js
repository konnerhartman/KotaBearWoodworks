import React from "react";
import { Link } from "react-router-dom";

function Footer() {
return (
  <div>
    <footer className="text-white sticky-bottom bg-dark">
      <div className="row px-2 pt-3">
        <p className="col-6 text-start p-2">© 2022 Copyright</p>
        <p className="col-6 text-end p-2">Website built by:
          <a className="text-decoration-none" href="https://github.com/konnerhartman">Konner Hartman</a>
        </p>
      </div>
      <div className="text-end">
        
      </div>
    </footer>
  </div>
  
)
};

export default Footer;