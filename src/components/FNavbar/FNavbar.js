import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../SidebarData';
import './FNavbar.css';
import { IconContext } from 'react-icons';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function FNavbar() {
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
          <LinkContainer to="#">
            <Nav.Link className="navbar-link-text">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="#">
            <Nav.Link className="navbar-link-text">Dashboard</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default FNavbar;
