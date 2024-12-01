import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage visibility of the button

  // Check if the user has scrolled down past a certain distance
  const checkScrollPosition = () => {
    if (window.scrollY >= 200) { // Show button after scrolling down 200px
      setIsVisible(true); // Show button
    } else {
      setIsVisible(false); // Hide button when above 200px scroll
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  };

  return (
    isVisible && ( // Only show the button if `isVisible` is true
      <div
        className="fixed bottom-6 right-6 z-50"
        onClick={scrollToTop}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '50%',
          padding: '15px',
          cursor: 'pointer',
        }}
        title="Back to top"
      >
        <FaArrowUp className="text-white text-2xl" />
      </div>
    )
  );
};

export default ScrollToTopButton;
