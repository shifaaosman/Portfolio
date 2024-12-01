import React from "react";
import imageSrc from '../personal-portfolio-with-profile-data-self-improvement-attract-clients-hand-drawn-illustration_2175-10432.avif';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(1.1)',  // Increased brightness for a lighter background
      }}
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
    >
      <div className="absolute inset-0 bg-black opacity-5"></div> 

      <div className="text-center z-10 px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 animate__animated animate__fadeIn">
          Hi, I'm [Your Name]
        </h1>
        <p className="mt-4 text-lg md:text-xl mb-6 text-gray-800">
          A passionate Motion Designer & Developer
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#about"
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-300 text-gray-900 rounded-full text-lg hover:bg-blue-200 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-300 text-gray-900 rounded-full text-lg hover:bg-blue-200 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-300 text-gray-900 rounded-full text-lg hover:bg-blue-200 transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
