import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/KBWW-black.png"

const Home = () => {
  return (
    <div className="jumbotron p-5 row text-center">
      <div className="col-lg-1 d-none d-sm-block">
      </div>
      <div className="col-lg-5 col-sm-12 p-4">
        <img src={Logo} alt="KBWW Logo" className="home-logo" />
      </div>
      <div className="col-lg-5 col-sm-12 p-5">
        <div className="intro">
          <h2><span>Welcome,</span></h2>
          <p>To Kota Bear Woodworks.</p>
          <p className="m-0">Custom handmade goods created in DFW, Texas.</p>
          <p className="m-0">Take a look at my gallery to see a few items I have built.</p>
        </div>
        <Link className="btn btn-secondary btn-lg" to="/gallery">
          Gallery
        </Link>
      </div>
      <div className="col-lg-1 d-none d-sm-block">
      </div>
    </div>
  );
};

export default Home;
