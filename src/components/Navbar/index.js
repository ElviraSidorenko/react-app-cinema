import React from "react";
import { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, MobileIcon } from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to change the state of isOpen
  const toggle = () => setIsOpen(!isOpen);
  const history = useNavigate();

  // Manage body's overflow property based on isOpen (so menu on mobile opens on the whole screen and doesn't scroll)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    // Cleanup function to reset overflow property when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Function to handle NavLink click (close the menu and navigate to the specified route)
  const handleNavLinkClick = (to) => {
    toggle(); // Close the menu
    history(to); // Navigate to the specified route
  };

  return (
    <>
      <Nav>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavLink to="/" onClick={() => handleNavLinkClick("/")} activeStyle>
            Movies
          </NavLink>
          <NavLink
            to="/upcoming"
            onClick={() => handleNavLinkClick("/")}
            activeStyle
          >
            Coming Soon
          </NavLink>
          <NavLink
            to="/booking"
            onClick={() => handleNavLinkClick("/")}
            activeStyle
          >
            Bookings
          </NavLink>
          <NavLink
            to="/cafe"
            onClick={() => handleNavLinkClick("/")}
            activeStyle
          >
            Cafe
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => handleNavLinkClick("/")}
            activeStyle
          >
            Contact Us
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
