import React, { useState, useContext } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import './FNavbar.css';
import { IconContext } from 'react-icons';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import getUser from '../../firebase/authApi.js';

function FNavbar() {
  console.log(getUser);
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
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link className="navbar-link-text">Dashboard</Nav.Link>
          </LinkContainer>
          <p className="navbar-link-text my-2">Signed in </p>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FNavbar;
