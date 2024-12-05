import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {/* About Section */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">About Me</h4>
            <p className="text-gray-400">
              I’m a passionate Frontend Developer and aspiring Software Engineer with a strong focus on creating interactive and user-friendly web experiences. I thrive on solving problems with JavaScript, designing with Tailwind CSS, and building full-stack projects with the MERN stack. Dedicated to continuous learning, I aim to master frontend development, data structures, and algorithms to create impactful projects.
              Currently, I’m working on enhancing my skills through hands-on projects, competitive challenges, and exploring UI/UX design to deliver seamless digital solutions.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#home" className="hover:text-white">Home</a></li>
              <li className="mb-2"><a href="#about" className="hover:text-white">About</a></li>
              <li className="mb-2"><a href="#services" className="hover:text-white">Services</a></li>
              <li className="mb-2"><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-6">
              <a href="https://github.com/shifaaosman" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-400 hover:text-white text-2xl" />
              </a>
              
              <a href="https://www.linkedin.com/in/shifa-osman" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
              </a>
              <a href="mailto:shifaosman264@gmail.com">
                <FaEnvelope className="text-gray-400 hover:text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
