import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Me</h4>
            <p className="text-gray-400">
              I’m a passionate Motion Designer and Developer. I love creating amazing experiences with design and code.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Feel free to reach out to me!</p>
            <a href="mailto:your-email@example.com" className="flex items-center text-gray-400 hover:text-white mt-2">
              <FaEnvelope className="mr-2" /> Email Me
            </a>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="text-center mt-10">
          <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/your-profile"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://twitter.com/your-profile"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
