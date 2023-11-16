import React from "react";

// import "./NavBar.css";
import {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
//   NavLink,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, 
  Button, 
  Carousel, 
  CarouselItem, 
  CarouselControl, 
  CarouselIndicators, 
  CarouselCaption

} from "reactstrap";


function NavBar({currentUser, logout, data}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const [collapsed, setCollapsed] = useState(true);
  
    const NotLoggedInNav = () => {
        return (
        <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Pamper Yourself
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{textAlign: "left"}}>
            <NavItem>
              <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
        )
    }

    const LoggedInNav = () => {
        return (
        <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Pamper Yourself
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar style={{textAlign: "left"}}>
            <NavItem>
              <NavLink to="/newsearch">Search New Videos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/historyform">Saved Videos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/" onClick={logout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
        )
    }

    return(
        <div>
           { currentUser ? LoggedInNav() : NotLoggedInNav() }
        </div>
    )
}

export default NavBar;
