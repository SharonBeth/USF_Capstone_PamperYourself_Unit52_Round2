import React from "react";

// import "./NavBar.css";
import {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";


function NavBar({currentUser, logout, data}) {
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [collapsed, setCollapsed] = useState(true);
  
  const NotLoggedInNav = () => {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="me-auto">Pamper Yourself</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar style={{textAlign: "left"}}>
              <NavItem>
                <NavLink id="noshadow3" to="/signup">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="noshadow4" to="/login">Login</NavLink>
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
          <NavbarBrand id="noshadow8" href="/" className="me-auto">Pamper Yourself</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar style={{textAlign: "left"}}>
              <NavItem>
                <NavLink id="noshadow5" to="/newsearch">Search New Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="noshadow6" to="/historyform">Saved Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="noshadow7" to="/" onClick={logout}>Logout</NavLink>
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
