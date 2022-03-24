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
        </>
      );
    } else {
      return (
        <Nav.Link className="text-white" href='/login'>Login</Nav.Link>
      );
    }
  }

  return (
    <nav className="navbar navbar-light bg-dark p-3 d-flex">
      <div className="h1">
        <Link className="text-decoration-none d-flex" to="/">
          <img className="justify-content-center align-self-center" src={Logo} alt="Kota Bear Woodworks Logo" height="125px"></img>
          <h1 className="text-white pt-4 px-3 d-none d-sm-block"><span>KOTA BEAR WOODWORKS</span></h1>
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
    </nav>
  );
}

export default Navi;
