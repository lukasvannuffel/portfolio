import React from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    image: 'path/to/image1.jpg',
    link: 'https://example.com/project-one',

  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    image: 'path/to/image2.jpg',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    image: 'path/to/image3.jpg',
    link: 'https://example.com/project-three',
  },


];

const Portfolio = () => {
  return (
    <section id='portfolio' className='relative md:w-full md:h-screen overflow-hidden flex flex-col bg-[#3A332D]'>
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-[times] mb-4 md:mb-8 mt-8 md:mt-12 text-[#F5F5F5] z-20 text-center md:text-left ml-0 md:ml-18">
        My projects
      </h1>

      {/* Projects Grid */}
      <div className="flex flex-row justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-4 w-68 md:w-92 h-64 bg-[#EAE2DB] text-black rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-700 transform hover:scale-105 mx-auto"
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover bg-[#F2F2F2]'
            />
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={project.link}
                  className="inline-block border border-black text-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-300"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

  )
}

export default Portfolio