import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class6 = () => {
  const topics = [
    { title: "Knowing Our Numbers", description: "Explore the concept of numbers and their types.", chapter: "knowing-our-numbers" },
    { title: "Whole Numbers", description: "Learn about whole numbers and their properties.", chapter: "whole-numbers" },
    { title: "Playing with Numbers", description: "A fun way to interact with numbers and their patterns.", chapter: "playing-with-numbers" },
    { title: "Basic Geometrical Ideas", description: "Understanding basic geometry concepts like shapes and angles.", chapter: "basic-geometrical-ideas" },
    { title: "Understanding Elementary Shapes", description: "Learn about different elementary geometric shapes.", chapter: "understanding-elementary-shapes" },
    { title: "Integers", description: "Dive into the world of positive and negative numbers.", chapter: "integers" },
    { title: "Fractions", description: "An introduction to fractions and their applications.", chapter: "fractions" },
    { title: "Decimals", description: "Understanding decimal numbers and their conversions.", chapter: "decimals" },
    { title: "Data Handling", description: "Learn how to collect, organize, and interpret data.", chapter: "data-handling" },
    { title: "Mensuration", description: "Learn how to measure lengths, areas, and volumes of various shapes.", chapter: "mensuration" },
    { title: "Practical Geometry", description: "Hands-on activities to learn geometrical constructions.", chapter: "practical-geometry" },
    { title: "Introduction to Algebra", description: "The basics of algebra and solving simple equations.", chapter: "introduction-to-algebra" },
    { title: "Ratio and Proportion", description: "Learn how ratios and proportions are used in real life.", chapter: "ratio-and-proportion" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 6 Math Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-6/${topic.chapter}`}  // Updated route path with class name and chapter
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${background_colors[index % background_colors.length]}`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
              <p className="text-center text-gray-600 mb-4">{topic.description}</p>
              <span className="text-blue-500 font-medium">Click to explore</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class6;
