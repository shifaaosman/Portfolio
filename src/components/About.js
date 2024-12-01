import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-50 bg-gradient-to-r from-blue-50 to-blue-100"
      data-aos="fade-up"
      data-aos-duration="1200"  // Faster animation for a smoother feel
      data-aos-delay="200"  // Slight delay to sequence the animation
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Skills Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>HTML, Tailwind CSS (Intermediate)</li>
              <li>JavaScript (Intermediate)</li>
              <li>SQL (Intermediate)</li>
              <li>Basic understanding of Frontend frameworks (React)</li>
              <li>Basic understanding of Problem-solving</li>
              <li>Familiarity with Git and GitHub</li>
              <li>Problem-solving, teamwork, time management, and adaptability</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
            <p className="text-gray-700">
              <strong>Bachelor of Science in Computer Science</strong><br />
              University Name: Somali National University<br />
              Start Year: 2021 – Present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
