import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 px-6 bg-gradient-to-r bg-white"
      data-aos="fade-up"
      data-aos-duration="1500"  // Animation duration of 1.5 seconds
      data-aos-delay="200"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div 
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Bank System Project
            </h3>
            <p className="text-gray-600 mb-4">
              A web-based banking system built with React and Node.js.
            </p>
            <div className="flex justify-center mt-auto">
              <a 
                href="https://github.com/your-username/bank-system" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Portfolio Website
            </h3>
            <p className="text-gray-600 mb-4">
              A fully responsive portfolio website created using React and Tailwind CSS.
            </p>
            <div className="flex justify-center mt-auto">
              <a 
                href="https://github.com/shifaaosman/Portfolio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col justify-between"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Quiz App
            </h3>
            <p className="text-gray-600 mb-4">
              Quiz App built with React.
            </p>
            <div className="flex justify-center mt-auto">
              <a 
                href="https://github.com/shifaaosman/Quiz-App" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline flex items-center gap-2"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
