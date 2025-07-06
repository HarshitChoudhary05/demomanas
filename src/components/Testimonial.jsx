import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Student, Class 10',
    image: '/test1.svg',
    quote: 'Manas Maths has helped me understand concepts clearly. The lessons are easy to follow and extremely helpful!',
  },
  {
    name: 'Jane Smith',
    title: 'Parent of Class 8 Student',
    image: '/test2.svg',
    quote: 'I’ve seen a huge improvement in my child’s confidence in maths. The personalized learning really makes a difference.',
  },
  {
    name: 'Michael Brown',
    title: 'Student, Class 12',
    image: '/test3.svg',
    quote: 'The 1:1 mentorship has been a game-changer. I now feel much more confident about my exams!',
  },
  {
    name: 'Sarah Johnson',
    title: 'Parent of Class 6 Student',
    image: '/test2.svg',
    quote: 'I highly recommend Manas Maths. It’s been a fantastic learning experience for my child!',
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonial-section"
      className="relative py-16 bg-gray-100"
    >
      <div className="text-center mb-12 text-gray-800">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
          What Our Students & Parents Say
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          Hear from the people who experienced the Manas Maths difference.
        </p>
      </div>

      {/* Testimonial Cards with Sliding Effect */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-3 flex overflow-x-auto scroll-smooth gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out ${
                index === currentTestimonial ? 'block' : 'hidden'
              }`}
            >
              <div className="relative mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-indigo-600 text-lg mb-2">{testimonial.name}</p>
                <p className="text-gray-600 text-sm mb-4">{testimonial.title}</p>
                <p className="text-gray-700 italic">{`"${testimonial.quote}"`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
