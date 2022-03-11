import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className="noMatch text-center">
      <Link to="/">
        <button className="btn btn-dark">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default NoMatch;
