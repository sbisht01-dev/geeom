// src/components/Layout.jsx
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust path if needed

function Layout() {
  const location = useLocation();
  const [activePage, setActivePage] = useState('Home');

  // Automatically update the active page based on the URL path
  useEffect(() => {
    const path = location.pathname;
    
    if (path === '/') setActivePage('Home');
    else if (path === '/services') setActivePage('Services');
    else if (path === '/about') setActivePage('About Us');
    else if (path === '/contact') setActivePage('Contact');
    // Add more mappings as needed
    
  }, [location]);

  return (
    <>
      {/* Navbar stays here permanently */}
      <Navbar activePage={activePage} />
      
      {/* The 'Outlet' is where Home, Services, etc. will be swapped in */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;