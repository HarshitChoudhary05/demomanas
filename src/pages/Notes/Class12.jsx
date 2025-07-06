import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class12 = () => {
  const topics = [
    { title: "Relations and Functions", description: "Learn about relations and functions in mathematics.", chapter: "relations-and-functions" },
    { title: "Inverse Trigonometric Functions", description: "Understand inverse trigonometric functions and their properties.", chapter: "inverse-trigonometric-functions" },
    { title: "Matrices", description: "Explore matrices and their operations in linear algebra.", chapter: "matrices" },
    { title: "Determinants", description: "Learn about determinants and their properties.", chapter: "determinants" },
    { title: "Continuity and Differentiability", description: "Study the concepts of continuity and differentiability in calculus.", chapter: "continuity-and-differentiability" },
    { title: "Application of Derivatives", description: "Learn about the practical applications of derivatives.", chapter: "application-of-derivatives" },
    { title: "Integrals", description: "Introduction to integrals and their properties.", chapter: "integrals" },
    { title: "Application of Integrals", description: "Explore the applications of integrals in real-life problems.", chapter: "application-of-integrals" },
    { title: "Differential Equations", description: "Study differential equations and methods of solving them.", chapter: "differential-equations" },
    { title: "Vector Algebra", description: "Understand the concepts of vector algebra and its operations.", chapter: "vector-algebra" },
    { title: "Three-Dimensional Geometry", description: "Explore three-dimensional geometry and its coordinate system.", chapter: "three-dimensional-geometry" },
    { title: "Linear Programming", description: "Learn about linear programming and optimization problems.", chapter: "linear-programming" },
    { title: "Probability", description: "Study the theory of probability and its applications.", chapter: "probability" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 12 Math Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-12/${topic.chapter}`}  // Updated route path with class name and chapter
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

export default Class12;
