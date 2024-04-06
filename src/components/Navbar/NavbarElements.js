import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`

  display: flex;
  padding: 1rem calc((100vw - 1000px) / 2);
  z-index: 12;
  justify-content: flex-end;
  background-color: #ffcd29;
  width: 100%;
  position: absolute;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column; // Stack links vertically on mobile
    width: 100%; // Take full width
    position: relative; // Position it on top of everything else
    top: 1rem;
    left: 0;
    background-color: #ffcd29;
    z-index: 10;

  }
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
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
