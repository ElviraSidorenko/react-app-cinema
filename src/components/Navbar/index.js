import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/upcoming" activeStyle>
                        Coming Soon
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/cafe" activeStyle>
                        Cafe
                    </NavLink>
                    <NavLink to="/booking" activeStyle>
                        Bookings
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;