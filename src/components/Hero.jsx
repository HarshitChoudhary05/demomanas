import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const Hero = () => {
  // Hardcoded data (simulating what you would have in PHP)
  const heroData = {
    heading: 'Unlock Your Potential with Manas Maths',
    image: '/hero.png', // Desktop image
    image_mobile: '/hero-mobile.png', // Mobile image
  };

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end"
      style={{
        backgroundImage: `url(${isMobile ? heroData.image_mobile : heroData.image})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 sm:px-12 md:px-24 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight mt-8">
          {heroData.heading}
        </h1>
        <button
          onClick={() => {
            document.getElementById('scroll-target').scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-[45px] px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-full text-lg font-semibold text-white transition-transform transform hover:scale-105 shadow-lg"
        >
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default Hero;
