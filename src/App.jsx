import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'; // 1. Import Lenis
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Components/Layout';
import './CSS/global.css';
import Services from './pages/Services';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
function App() {

  // --- Lenis Smooth Scroll Setup ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // How long the animation lasts (in seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smoothTouch: true, // Enable smooth scrolling for touch devices
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  //tab switch title change
  useEffect(() => {
    document.initialTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab is NOT visible (user switched away)
        document.title = "🥺 We miss you! Come back to your future.";
      } else {
        document.title = document.initialTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange, false);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap everything in the Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
