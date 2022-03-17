import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/KBWW-white.png";

function Navi() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <>
          <Nav.Link className="text-white" href='/favorites'>Favorites</Nav.Link>
          <Nav.Link className="text-white" href='/' onClick={() => Auth.logout()}>Logout</Nav.Link>
          {/* <li className="nav-item">
            <Link className="nav-link text-white" to="/favorites">
            Favorites
            </Link>
          </li>
          <li className="nav-item"> */}
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            {/* <a className="nav-link text-white" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li> */}
        </>
      );
    } else {
      return (
        <Nav.Link className="text-white" href='/login'>Login</Nav.Link>
        // <li className="nav-item">
        //   <Link className="nav-link text-white" to="/login">
        //     Login
        //   </Link>
        // </li>
      );
    }
  }

  return (
    <nav className="navbar navbar-light bg-dark p-3 d-flex">
      <div className="h1">
        <Link className="text-decoration-none d-flex" to="/">
          <img className="justify-content-center" src={Logo} alt="Kota Bear Woodworks Logo" height="95px"></img>
          <div className="text-white pt-4 px-2 d-none d-sm-block">Kota Bear Woodworks</div>
        </Link>
      </div>

      <Navbar className="nav-links" collapseOnSelect fixed='' expand='lg' bg='dark' variant='dark'>
        <Container className="">
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link className="text-white" href='/about'>About</Nav.Link>
              <Nav.Link className="text-white" href='/gallery'>Gallery</Nav.Link>
              <Nav.Link className="text-white" href='/contact'>Contact</Nav.Link>
              {showNavigation()}
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
      
      {/* <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        
      </div> */}
    </nav>
  );
}

export default Navi;
