import React from 'react'
import profileImg from '/img/ProfilePicture.jpeg';

const About = () => {
  return (
<section id='about' className='relative w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-[#2A2621]'>
  {/* Title */}
  <h1 className="text-5xl md:text-6xl font-[times] mb-8 text-white z-20">
    About me
  </h1>

  {/* Profile section */}
  <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full gap-12 mx-auto">
    {/* Image */}
    <div className="flex-shrink-0">
      <img
        src={profileImg}
        alt="Lukas"
        className="w-48 h-48 rounded-full object-cover border-4 border-white"
      />
    </div>

    {/* Description */}
    <div className="text-lg leading-relaxed max-w-2xl text-center md:text-left text-white">
      <p>
        Hi, I’m Lukas — a 23-year-old New Media Development student from Ghent, passionate about building creative digital solutions. I love working where design meets development, and I’m always eager to learn in this fast-moving industry.
      </p>
      <p className="mt-4">
        I’m calm, curious, and a true team player. My goal? Becoming a fully independent web designer/developer — whether freelance or at a creative agency.
      </p>
      <p className="mt-4">
        When I’m not working, you’ll find me running, skateboarding, or producing Drum & Bass music.
      </p>
        </div>
      </div>
    </section>
  )
}

export default About