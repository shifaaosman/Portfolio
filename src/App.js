import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Add all sections here */}
      <Home />
      <About />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      {/* Footer will be at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
