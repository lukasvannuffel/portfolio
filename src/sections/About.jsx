import React from 'react'
import profileImg from '/img/ProfilePicture.jpeg';

const skills = [
  { src: "/svg/html5.svg", label: "HTML 5" },
  { src: "/svg/css3.svg", label: "CSS 3" },
  { src: "/svg/javascript.svg", label: "JavaScript" },
  { src: "/svg/react.svg", label: "React JS" },
  { src: "/svg/php.svg", label: "PHP" },
  { src: "/svg/mysql.svg", label: "MySQL", extra: "invert brightness-0" },
  { src: "/svg/laravel.svg", label: "Laravel" },
  { src: "/svg/craftcms.svg", label: "Craft CMS", size: "w-10 h-10" },
  { src: "/svg/docker.svg", label: "Docker" },
  { src: "/svg/photoshop.svg", label: "Photoshop" },
  { src: "/svg/illustrator.svg", label: "Illustrator" },
  { src: "/svg/indesign.svg", label: "Indesign" },
  { src: "/svg/figma.svg", label: "Figma" },
  { src: "/svg/blender.svg", label: "Blender" },
  { src: "/svg/microsoft.svg", label: "Microsoft 365" },
];

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
        <div className="text-xs md:text-lg -mb-2 leading-relaxed max-w-2xl w-full text-center md:text-left text-[#F5F5F5] flex flex-col justify-center md:justify-start mx-12 md:mx-0">
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
        <h2 className="text-4xl md:text-6xl font-[times] -mb-2 md:mb-8 mt-8 md:mt-12 text-[#F5F5F5] z-20 text-center md:text-left ml-0 ">
          Skills
        </h2>


        {/* Skills section */}
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-6 justify-items-center">
          {skills.map((skill, idx) => (
            <div
              key={skill.label}
              className="w-24 h-24 flex flex-col justify-center items-center group bg-white/10 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:bg-white/20"
            >
              <img
                src={skill.src}
                alt={skill.label}
                className={`w-8 h-8 md:w-10 md:h-10 ${skill.size || ""} ${skill.extra || ""}`}
              />
              <span className="mt-2 text-xs text-[#F5F5F5] font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-100 text-center">
                {skill.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About