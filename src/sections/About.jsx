import React from 'react'
import profileImg from '/img/ProfilePicture.jpeg';

const About = () => {
  return (
    <section id='about' className='relative w-full h-screen overflow-hidden flex flex-col bg-[#2A2621]'>
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-[times] mb-0 md:mb-8 mt-8 md:mt-12 text-[#F5F5F5] z-20 text-center md:text-left ml-0 md:ml-18">
        About me
      </h1>

      {/* Profile section */}
      <div className="mt-4 md:mt-12 flex flex-col md:flex-row items-center md:items-start justify-center max-w-5xl w-full gap-12 mx-auto">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img
            src={profileImg}
            alt="Lukas"
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          />
        </div>

        {/* Description */}
        <div className="text-xs md:text-lg leading-relaxed max-w-2xl w-full text-center md:text-left text-[#F5F5F5] flex flex-col justify-center md:justify-start mx-12 md:mx-0">
          <p className='mx-8 md:mx-0'>
            Hi, I’m Lukas — a 23-year-old New Media Development student from Ghent, passionate about building creative digital solutions. I love working where design meets development, and I’m always eager to learn in this fast-moving industry.
          </p>
          <p className="mt-2 md:mt-4 mx-8 md:mx-0">
            I’m calm, curious, and a true team player. My goal? Becoming a fully independent web designer/developer — whether freelance or at a creative agency.
          </p>
          <p className="mt-2 md:mt-4 mx-8 md:mx-0">
            When I’m not working, you’ll find me running, skateboarding, or producing Drum & Bass music.
          </p>
        </div>
      </div>

      {/* Skills section */}
      <div className="mt-4 md:mt-12 px-4 md:px-18">
        <h2 className="text-4xl md:text-6xl font-[times] mb-0 md:mb-8 mt-8 md:mt-12 text-[#F5F5F5] z-20 text-center md:text-left ml-0 ">
          Skills
        </h2>
      <div>
          <img src="/svg/html5.svg" alt="HTML5" />
          <img src="/svg/css3.svg" alt="CSS3" />
          <img src="/svg/javascript.svg" alt="JavaScript" />
          <img src="/svg/react.svg" alt="React" />
          <img src="/svg/php.svg" alt="PHP" />
          <img src="/svg/laravel.svg" alt="Laravel" />
          
      </div>

      </div>


    </section>
  )
}

export default About