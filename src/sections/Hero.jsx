import React from 'react'
import heroImage from "/img/HeroBackground.png";
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Background image */}
        <img 
        src={heroImage} 
        alt="Hero image" 
        className="absolute inset-0 w-full h-full object-cover z-0"/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* importeer de NavBar */}
        <Navbar />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col flex-start px-18 py-48 text-white max-w-4xl ">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
            I am <span className="text-white/80">Lukas,</span>
            </h1>
            <p className="text-lg md:text-l">
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
        >
            View Portfolio
        </a>
        <a
            href="#contact"
            className="px-6 py-2 bg-transparent border border-[#D6CFC7] text-[#D6CFC7] rounded-full hover:bg-[#D6CFC7] hover:text-black transition ml-4"
        >
            Contact me
        </a>
        </div> 

    </section>
  )
}

export default Hero