// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const MAX_MOBILE_WIDTH = '768px';

const Navbar = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  
   const itemsRef = useRef([]);

  useEffect(() => {
    // 1. Find the index of the current active page in our list
    const activeIndex = NAV_LINKS.findIndex(link => link.name === activePage);
    
    const currentTab = itemsRef.current[activeIndex];

    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activePage]); 

  return (
    <Nav>
      <Brand>
        <StyledLink to="/">
          <Title>GEEOM</Title>
        </StyledLink>
      </Brand>

      {/* DESKTOP MENU */}
      <DesktopMenu>
     <SlidingIndicator 
          style={{ 
            left: `${indicatorStyle.left}px`, 
            width: `${indicatorStyle.width}px` 
          }} 
        />

        {NAV_LINKS.map((link, index) => (
          <NavLink 
            key={link.name} 
            to={link.path}
            ref={el => itemsRef.current[index] = el}
            $isActive={activePage === link.name}
          >
            {link.name}
          </NavLink>
        ))}
      </DesktopMenu>
      
      <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? '✕' : '☰'} 
      </HamburgerButton>

      <MobileMenu $isOpen={isMenuOpen}>
        {NAV_LINKS.map((link) => (
          <MobileLink 
            key={link.name} 
            to={link.path} 
            onClick={() => setIsMenuOpen(false)}
            $isActive={activePage === link.name}
          >
            {link.name}
          </MobileLink>
        ))}
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;

// --- STYLES ---

const Nav = styled.nav`
  box-sizing: border-box;
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

const Title = styled.span`
  font-family: 'Anek Latin', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  z-index: 1001;
  color: #0d131a;
`;

// --- DESKTOP MENU & SLIDING LOGIC ---

const DesktopMenu = styled.div`
  display: flex;
  position: relative; /* Needed so the absolute pill positions relative to this container */
  gap: 5px;
  align-items: center;

  @media (max-width: ${MAX_MOBILE_WIDTH}) {
    display: none;
  }
`;

// This is the yellow background that slides
const SlidingIndicator = styled.div`
  position: absolute;
  height: 100%; /* Match height of links */
  top: 0;
  background-color: #FFC72C;
  border-radius: 50px;
  z-index: 0; /* Sit BEHIND the text */
  
  /* THE MAGIC: Animate the Left and Width properties */
  transition: left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavLink = styled(Link)`
  position: relative;
  z-index: 1; /* Sit ON TOP of the yellow pill */
  font-family: 'Aileron', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 8px 20px;
  transition: color 0.3s ease;
  border-radius: 50px;
  background-color: transparent; /* Important: must be transparent to see pill behind it */

  &:hover {
    color: #0A0A0A; /* Slightly darker on hover */
  }

  /* If active, turn text bold/dark, but DO NOT set background here (the pill does that) */
  ${(props) =>
    props.$isActive &&
    css`
      color: #0A0A0A !important;
      font-weight: 600;
    `}
`;

// --- MOBILE STYLES (Unchanged) ---

const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0d131a;
  z-index: 1001;
  @media (min-width: ${MAX_MOBILE_WIDTH}) { display: none; }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0; right: 0; width: 250px; height: 100vh;
  background-color: #fff;
  box-shadow: -4px 0 8px rgba(0,0,0,0.1);
  padding-top: 60px; padding-left: 20px;
  display: flex; flex-direction: column;
  transition: transform 0.3s ease-in-out;
  z-index: 999; 
  transform: translateX(100%);
  ${(props) => props.$isOpen && css` transform: translateX(0); `}
  @media (min-width: ${MAX_MOBILE_WIDTH}) { display: none; }
`;

const MobileLink = styled(Link)`
  font-family: 'Anek Latin', sans-serif;
  font-size: 18px; font-weight: 600; color: #0A0A0A;
  text-decoration: none; padding: 12px 15px;
  margin-right: 20px; border-radius: 8px; margin-bottom: 10px;
  transition: background-color 0.2s;
  ${(props) => props.$isActive && css` background-color: #FFC72C; color: #0A0A0A; `}
  &:hover { background-color: ${(props) => (props.$isActive ? '#FFC72C' : '#f8f8f8')}; }
`;