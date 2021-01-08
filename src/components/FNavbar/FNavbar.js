import React from 'react';
import './FNavbar.css';

import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { auth } from '../../firebase/index';

function FNavbar() {
  const logOut = () => {
    auth()
      .signOut()
      .catch((error) => {
        alert(error.message);
      });
    window.location.reload(false);
  };
  var user = auth().currentUser;
  var renderNav;

  // Check if there is a user logged in
  if (user) {
    renderNav = (
      <>
        <LinkContainer to="/dashboard">
          <Nav.Link className="navbar-link-text">Dashboard</Nav.Link>
        </LinkContainer>
        <Nav.Link className="navbar-link-text" onClick={logOut}>
          Sign Out
        </Nav.Link>
        <p className="navbar-link-text my-2">{user.displayName}</p>
        <img src={user.photoURL} className="profile-pic ml-2 mt-1" alt="profile" />
      </>
    );
  } else {
    renderNav = (
      <LinkContainer to="/signin">
        <Nav.Link className="navbar-link-text bold ">Login / Sign Up</Nav.Link>
      </LinkContainer>
    );
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="none"
      variant="light"
      fixed="top"
      className="mynavbar py-md-3 px-md-5 px-3 py-2"
    >
      <LinkContainer to="/" className="navbar-brand-container">
        <Navbar.Brand className="navbar-brand">CompCash</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="mynavbar-toggle"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=""></Nav>
        <Nav className="ml-auto">{renderNav}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FNavbar;
