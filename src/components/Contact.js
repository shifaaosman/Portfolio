import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from 'react-icons/fa'; // Importing Font Awesome icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation (must not be empty)
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required.';
      isValid = false;
    }

    // Email validation (must be a valid email format)
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Message validation (must not be empty)
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-4 pl-12 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all w-full"
            />
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {errors.name && <span className="text-red-500 text-sm absolute bottom-0 left-0">{errors.name}</span>}
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-4 pl-12 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all w-full"
            />
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {errors.email && <span className="text-red-500 text-sm absolute bottom-0 left-0">{errors.email}</span>}
          </div>

          {/* Message Field */}
          <div className="relative col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-4 pl-12 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all w-full"
              rows="5"
            ></textarea>
            <FaComment className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {errors.message && <span className="text-red-500 text-sm absolute bottom-0 left-0">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all duration-300 col-span-2 flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Or connect with me on:</p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/shifaaosman"
              className="text-blue-500 hover:underline transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shifa-osman | "
              className="text-blue-500 hover:underline transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
