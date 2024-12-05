import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 text-white relative"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="300"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100"></div>

      {/* Optional Illustration Shape */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-48 opacity-20"
        >
          <path d="M0,50 Q50,80 100,50 T200,50" fill="transparent" stroke="white" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center z-10 px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 animate__animated animate__fadeIn">
          Hi, I'm Shifa
        </h1>
        <p className="mt-4 text-lg md:text-xl mb-6 text-gray-800">
          A passionate Web Developer
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg md:text-xl transition duration-300"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg md:text-xl transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg md:text-xl transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
