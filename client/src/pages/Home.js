import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";


const Home = () => {
  return (
    <div className="container ">
      <Jumbotron>
        <button>
          <Link to="/gallery">
            Gallery
          </Link>
        </button>
      </Jumbotron>
    </div>
  );
};

export default Home;
