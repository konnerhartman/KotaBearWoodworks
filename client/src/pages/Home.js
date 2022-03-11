import React from "react";
import { Link } from "react-router-dom";
// import Jumbotron from "../components/Jumbotron";


const Home = () => {
  return (
    <div className="jumbotron text-center p-5">
      <h1 className="display-4">Hello!</h1>
      <p className="lead">Welcome to Kota Bear's workshop.</p>
      <p>Take a look at my gallery to see a few items I have built.</p>
      <Link className="btn btn-secondary btn-lg" to="/gallery">
        Gallery
      </Link>
    </div>
  );
};

export default Home;
