import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class7 = () => {
  const topics = [
    { title: "Integers", description: "Learn about integers and their operations.", chapter: "integers" },
    { title: "Fractions and Decimals", description: "Explore fractions and decimals and their operations.", chapter: "fractions-and-decimals" },
    { title: "Data Handling", description: "Learn how to collect, organize, and interpret data.", chapter: "data-handling" },
    { title: "Simple Equations", description: "Understand how to solve simple algebraic equations.", chapter: "simple-equations" },
    { title: "Lines and Angles", description: "Learn about lines, angles, and their properties.", chapter: "lines-and-angles" },
    { title: "Triangles and Properties", description: "Explore the properties of triangles and different types.", chapter: "triangles-and-properties" },
    { title: "Congruence of Triangles", description: "Understand the concept of congruence in triangles.", chapter: "congruence-of-triangles" },
    { title: "Comparing Quantities", description: "Learn how to compare quantities using ratios, percentages, etc.", chapter: "comparing-quantities" },
    { title: "Rational Numbers", description: "Dive into the world of rational numbers and their operations.", chapter: "rational-numbers" },
    { title: "Perimeter and Area", description: "Learn how to calculate the perimeter and area of shapes.", chapter: "perimeter-and-area" },
    { title: "Algebraic Expressions", description: "An introduction to algebraic expressions and their evaluation.", chapter: "algebraic-expressions" },
    { title: "Exponents and Powers", description: "Learn about exponents, powers, and their applications.", chapter: "exponents-and-powers" },
    { title: "Symmetry", description: "Understand the concept of symmetry and its different types.", chapter: "symmetry" },
    { title: "Visualising Solid Shapes", description: "Learn how to visualize and understand solid shapes and their properties.", chapter: "visualising-solid-shapes" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 7 Math Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-7/${topic.chapter}`}  // Updated route path with class name and chapter
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

export default Class7;
