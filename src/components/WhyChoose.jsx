import React from 'react';
import { Link } from 'react-router-dom';

const WhyChoose = () => {
  const whyChooseData = {
    video_icon: '/video.png',
    notes_icon: '/notes.png',
    doubts_icon: '/doubts.png',
    mentorship_icon: '/mentorship.png',

    video_description: 'Get access to high-quality video tutorials covering all major topics in mathematics.',
    notes_description: 'Download comprehensive study notes for each topic to aid in your learning process.',
    doubts_description: 'Get your doubts clarified by expert instructors through live sessions or chat.',
    mentorship_description: 'Receive personalized mentorship to guide you through tough concepts and exams.',
  };

  const items = [
    {
      title: 'Video Lessons',
      icon: whyChooseData.video_icon,
      description: whyChooseData.video_description,
      bgColor: 'bg-blue-500',
      link: '/videos',
    },
    {
      title: 'Study Notes',
      icon: whyChooseData.notes_icon,
      description: whyChooseData.notes_description,
      bgColor: 'bg-green-500',
      link: '/notes',
    },
    {
      title: 'Doubt Clarifications',
      icon: whyChooseData.doubts_icon,
      description: whyChooseData.doubts_description,
      bgColor: 'bg-yellow-500',
      link: '/doubts',
    },
    {
      title: '1:1 Mentorship',
      icon: whyChooseData.mentorship_icon,
      description: whyChooseData.mentorship_description,
      bgColor: 'bg-purple-500',
      link: '/mentorship',
    },
  ];

  return (
    <section id="whychoose-section" className="relative py-16 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Why Choose Manas Maths?
        </h2>
        <p className="text-lg text-gray-600">
          The best way to learn maths with personalized tools and guidance.
        </p>
      </div>

      {/* Boxes Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <Link key={index} to={item.link}> {/* Link wrapping each div */}
            <div
              className={`flex flex-col items-center p-8 text-white rounded-xl shadow-lg transition-all transform bg-opacity-90 ${item.bgColor} hover:bg-opacity-100`}
            >
              {/* Icon Container */}
              <div className="text-4xl mb-6">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16" // No background applied to icon, keeping it transparent
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-center text-lg">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
