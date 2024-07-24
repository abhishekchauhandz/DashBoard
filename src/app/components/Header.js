'use client';

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap';
import { FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg="transparent" className=" d-flex justify-content-between">
      <Container fluid>
        <Form className="d-flex mx-auto w-30">
          <FormControl
            type="search"
            placeholder="Search anything..."
            className="me-2 search"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#notifications">
            <FaBell size={20} />
          </Nav.Link>
          <NavDropdown title={<img src="/image/profile.JPEG" alt="Avatar" className="rounded-circle" width="30" height="30" />} id="basic-nav-dropdown">
            <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
