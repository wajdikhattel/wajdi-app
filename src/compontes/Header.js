import React from 'react'
import {Nav,Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <div>
            <Navbar bg="light" style={{height: "123px"
}} expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <Nav.Link href="#home">News</Nav.Link> 
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
