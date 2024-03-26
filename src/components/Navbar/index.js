import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
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