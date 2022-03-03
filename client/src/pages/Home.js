import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container">
      <div>
        <button>
          <Link to="/gallery">
            Gallery
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
