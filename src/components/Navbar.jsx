import js from '@eslint/js';
import React from 'react'
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', controlNavbar)

  return () => window.removeEventListener('scroll', controlNavbar);

  }
  , []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showNavbar = isVisible || isHovered;
return (
<>
  {/* --- OP TE LOSSEN BUG --- */}
  {/* <div
    className="fixed top-0 left-0 w-full h-4 z-[60]"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{ pointerEvents: 'auto' }}
  /> */}
  <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-12 py-4 bg-white/20 backdrop-blur-md rounded-full flex gap-12 text-white font-medium shadow-xl transition-transform duration-500 ${showNavbar ? 'translate-y-12' : '-translate-y-full'}`}>
    <button onClick={() => handleNavClick('home')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">Home</button>
    <button onClick={() => handleNavClick('about')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">About</button>
    <button onClick={() => handleNavClick('portfolio')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">Portfolio</button>
    <button onClick={() => handleNavClick('contact')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">Contact</button>
  </nav>
</>
  )
}

export default Navbar