import React from "react";
import { useState } from "react";
import { Nav, NavLink, NavMenu, MobileIcon } from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa"; 



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Nav >
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink to="/" activeStyle>
            Movies
          </NavLink>
          <NavLink to="/upcoming" activeStyle>
            Coming Soon
          </NavLink>
          <NavLink to="/booking" activeStyle>
            Bookings
          </NavLink>
          <NavLink to="/cafe" activeStyle>
            Cafe
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
