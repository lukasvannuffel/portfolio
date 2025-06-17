import React, { useEffect, useState } from 'react';
import heroImage from "/img/HeroBackground.png";

const Hero = () => {
  const [blur, setBlur] = useState(0);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxBlur = 16; 
      const scrollRange = 400; 
      const blurValue = Math.min((scrollY / scrollRange) * maxBlur, maxBlur);
      setBlur(blurValue);

      setParallax(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const handleBtnClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id='home' className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
      <img
        src={heroImage}
        alt="Hero image"
        className="absolute inset-0 w-full h-full object-cover z-0 scale-110"
        style={{
          filter: `blur(${blur}px)`,
          transform: `translateY(${parallax}px) scale(1.1)`,
          willChange: 'transform, filter'
        }}
      />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center md:flex-start mx-8 md:mx-0 md:mt-0 md:px-18 md:py-48 text-[#F5F5F5] text-shadow-lg max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-[times] mb-4">
            I am <span className="text-white/80">Lukas,</span>
            </h1>
            <p className="md:text-l text-l">
            New Media Development student at the Arteveldehogeschool in Ghent.
            </p>
            <p className="italic mt-2 text-sm md:text-l max-w-xl text-white/80">
            "I like to create functional & visually appealing websites with tools such as
            Javascript, PHP, CMS,..."
            </p>
        </div>
        {/* CTA Buttons */}
        <div className="relative z-20 flex justify-center mb-12">
        <a
            href="#portfolio"
            className="px-6 py-2 bg-[#D6CFC7] text-black rounded-full border border-transparent hover:bg-transparent hover:text-[#D6CFC7] hover:border-[#D6CFC7] transition"
              onClick={e => {
                e.preventDefault();
                handleBtnClick('portfolio');
              }}
        >
            View Portfolio
        </a>
        <a
            href="#contact"
            className="px-6 py-2 bg-transparent border border-[#D6CFC7] text-[#D6CFC7] rounded-full hover:bg-[#D6CFC7] hover:text-black transition ml-4"
              onClick={e => {
            e.preventDefault();
            handleBtnClick('contact');
          }}
        >
            Contact me
        </a>
        </div> 

    </section>
  )
}

export default Hero