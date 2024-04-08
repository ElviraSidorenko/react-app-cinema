import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

  z-index: 12;
  background-color: #ffcd29;
  width: 100%;
  position: absolute;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; // Push links to the right
  gap: calc(5rem + 2vw); // Gap grows with the viewport
  padding: 2rem 5rem 0 0;
  // Set up the mobile menu
  @media screen and (max-width: 768px) {
    // Hide the menu links or show the mobile menu
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column; // Stack links vertically on mobile
    align-items: center; // Center links
    width: 100%; // Take full width
    height: 100vh; // Take full height
    background-color: #ffcd29;
    z-index: 10;
    padding: 0;
    gap: 0;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;  
color: #222222;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    font-weight: bold;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    z-index: 110;
  }
`;
