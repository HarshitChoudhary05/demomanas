import React from 'react';

const ChooseClass = () => {
  const classes = [
    { className: '6', colorFrom: 'from-indigo-100', colorTo: 'to-indigo-200', textColor: 'text-indigo-600', link: '#' },
    { className: '7', colorFrom: 'from-blue-100', colorTo: 'to-blue-200', textColor: 'text-blue-600', link: '#' },
    { className: '8', colorFrom: 'from-teal-100', colorTo: 'to-teal-200', textColor: 'text-teal-600', link: '#' },
    { className: '9', colorFrom: 'from-yellow-100', colorTo: 'to-yellow-200', textColor: 'text-yellow-600', link: '#' },
    { className: '10', colorFrom: 'from-purple-100', colorTo: 'to-purple-200', textColor: 'text-purple-600', link: '#' },
    { className: '11', colorFrom: 'from-teal-100', colorTo: 'to-teal-200', textColor: 'text-purple-600', link: '#' },
    { className: '12', colorFrom: 'from-indigo-100', colorTo: 'to-indigo-200', textColor: 'text-purple-600', link: '#' },
  ];

  return (
    <section id="choose-class-section" className="relative py-16 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12 text-gray-800" id="scroll-target">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          Choose Your Class to Begin Learning
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Select a class below to start your learning journey with Manas Maths.
        </p>
      </div>

      {/* Class Selection Section */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {classes.map((item, index) => (
          <a key={index} href={item.link}>
            <div
              className={`flex flex-col items-center p-8 bg-gradient-to-tl ${item.colorFrom} ${item.colorTo} text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-sm font-semibold text-gray-600 mb-2">Class</div>
              <div className={`${item.textColor} text-5xl font-bold mb-4`}>
                {item.className}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ChooseClass;
