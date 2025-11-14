import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './CSS/global.css';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
function App() {

  // code for changing title on tab switch
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
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
