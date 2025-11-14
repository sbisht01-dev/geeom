// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
// Replace with your actual path
// import LogoImage from '../assets/finance-logo.png'; 

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const MAX_MOBILE_WIDTH = '768px';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  const handleBackdropClick = () => {
      setIsMenuOpen(false);
  };

  return (
    <Nav>
      {isMenuOpen && <Backdrop onClick={handleBackdropClick} />}
      
      <Brand>
        <StyledLink to="/">
          {/* <Logo src={LogoImage} alt="Finance Office Logo" /> */}
          <Title>GEEOM</Title>
        </StyledLink>
      </Brand>

      {/* 3. Desktop Menu */}
      <DesktopMenu>
        {NAV_LINKS.map((link) => (
          <NavLink key={link.name} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </DesktopMenu>
      
      {/* 4. Mobile Hamburger Button */}
      <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'} 
      </HamburgerButton>

      {/* 5. Mobile Menu */}
      <MobileMenu $isOpen={isMenuOpen}>
        {NAV_LINKS.map((link) => (
          <MobileLink 
            key={link.name} 
            to={link.path} 
            onClick={handleLinkClick}
          >
            {link.name}
          </MobileLink>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
box-sizing:border-box;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  padding: 10px 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  z-index: 101;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #0d131a;
`;

const Logo = styled.img`
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.span`
  font-family: 'Anek Latin', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  z-index: 1001;
  color: #0d131a;

`;

// Desktop Navigation
const DesktopMenu = styled.div`
  display: flex;
  gap: 25px;
  
  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Aileron', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 5px 0;
  transition: color 0.3s;

  &:hover {
    color: #FFC72C;
  }
`;

// Mobile Button
const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0d131a;
  z-index: 1001;

  @media (min-width: ${MAX_MOBILE_WIDTH}) {
    display: none;
  }
`;

// Backdrop for Click-Outside
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;

  @media (min-width: ${MAX_MOBILE_WIDTH}) {
    display: none;
  }
`;

// Mobile Menu
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -4px 0 8px rgba(0,0,0,0.1);
  padding-top: 60px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  z-index: 999; 

  transform: translateX(100%);
  ${(props) =>
    props.$isOpen &&
    css`
      transform: translateX(0);
    `}

  @media (min-width: ${MAX_MOBILE_WIDTH}) {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  font-family: 'Anek Latin', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f8f8;
  }
`;
