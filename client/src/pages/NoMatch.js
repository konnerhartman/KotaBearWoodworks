import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="noMatch text-center">
      <div className="noMatch-bg">
        <div className="p-5">
        <h2 className="not-found"><span>404: PAGE NOT FOUND</span></h2>
          <Link to="/">
            <button className="btn btn-dark m-2">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
