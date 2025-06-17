import React, { useState, useEffect } from 'react';
import HamburgerIcon from '/svg/hamburger.svg';

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
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showNavbar = isVisible || isHovered;

  return (
    <>
      {/* Hover-zone voor desktop scroll effect */}
      <div
        className="fixed top-0 left-0 w-full h-4 z-[60] hidden md:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {/* Desktop navbar */}
      <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 bg-white/20 backdrop-blur-md rounded-full shadow-xl transition-transform duration-500
        hidden md:flex gap-12 text-[#F5F5F5] font-medium ${showNavbar ? 'translate-y-12' : '-translate-y-full'}`}>
        <button onClick={() => handleNavClick('home')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">Home</button>
        <button onClick={() => handleNavClick('about')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">About</button>
        <button onClick={() => handleNavClick('portfolio')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">Portfolio</button>
        <button onClick={() => handleNavClick('contact')} className="hover:underline bg-transparent border-none outline-none cursor-pointer">Contact</button>
      </nav>
      {/* Hamburger button (mobile only) */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-white/20 backdrop-blur-md rounded-full p-2 shadow-xl"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Open navigation"
      >
        <img
          src={HamburgerIcon}
          alt="Menu"
          className="w-8 h-8 invert brightness-0"
          style={{ filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(110%) contrast(100%)' }}
        />
      </button>
      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/30 backdrop-blur-md">
          <button
            onClick={() => handleNavClick('home')}
            className="text-3xl text-[#F5F5F5] text-shadow-lg font-semibold mb-8"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="text-3xl text-[#F5F5F5] text-shadow-lg font-semibold mb-8"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('portfolio')}
            className="text-3xl text-[#F5F5F5] text-shadow-lg font-semibold mb-8"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="text-3xl text-[#F5F5F5] text-shadow-lg font-semibold"
          >
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;