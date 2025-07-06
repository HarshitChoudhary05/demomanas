import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class8 = () => {
  const topics = [
    { title: "Rational Numbers", description: "Explore rational numbers and their properties.", chapter: "rational-numbers" },
    { title: "Linear Equations in One Variable", description: "Learn about solving linear equations in one variable.", chapter: "linear-equations-in-one-variable" },
    { title: "Understanding Quadrilaterals", description: "Learn about different types of quadrilaterals and their properties.", chapter: "understanding-quadrilaterals" },
    { title: "Data Handling", description: "Learn how to collect, organize, and interpret data.", chapter: "data-handling" },
    { title: "Squares and Square Roots", description: "Understand squares, square roots, and their applications.", chapter: "squares-and-square-roots" },
    { title: "Cubes and Cube Roots", description: "Learn about cubes, cube roots, and their properties.", chapter: "cubes-and-cube-roots" },
    { title: "Comparison of Quantities", description: "Learn how to compare quantities using ratios and percentages.", chapter: "comparison-of-quantities" },
    { title: "Algebraic Expressions and Identities", description: "Understand algebraic expressions and their identities.", chapter: "algebraic-expressions-and-identities" },
    { title: "Rational Numbers", description: "Dive deeper into the understanding of rational numbers.", chapter: "rational-numbers" },
    { title: "Mensuration", description: "Learn how to calculate areas and volumes of different shapes.", chapter: "mensuration-class8" },
    { title: "Introduction to Graphs", description: "Introduction to graphing techniques and their applications.", chapter: "introduction-to-graphs" },
    { title: "Area of Trapezium and Polygon", description: "Learn how to calculate the area of trapezium and polygons.", chapter: "area-of-trapezium-and-polygon" },
    { title: "Surface Area and Volume", description: "Learn about surface area and volume of 3D objects.", chapter: "surface-area-and-volume" },
    { title: "Time and Work", description: "Learn about time, work, and their relationship.", chapter: "time-and-work" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 8 Math Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-8/${topic.chapter}`}  // Updated route path with class name and chapter
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

export default Class8;
