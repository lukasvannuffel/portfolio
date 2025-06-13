import js from '@eslint/js';
import React from 'react'
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
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

  return (
        <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-20 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full flex gap-6 text-white font-medium shadow-xl transition-transform duration-500 ${isVisible ? 'translate-y-6' : '-translate-y-full'}`}>
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#contact" className="hover:underline">Contact</a>
      </nav>
  )
}

export default Navbar