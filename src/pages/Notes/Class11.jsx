import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class11 = () => {
  const topics = [
    { title: "Sets", description: "Learn about the concept of sets and their operations.", chapter: "sets" },
    { title: "Relations and Functions", description: "Explore the concepts of relations and functions.", chapter: "relations-and-functions" },
    { title: "Trigonometric Functions", description: "Understand the different trigonometric functions and their properties.", chapter: "trigonometric-functions" },
    { title: "Principle of Mathematical Induction", description: "Learn the principle of mathematical induction and its applications.", chapter: "principle-of-mathematical-induction" },
    { title: "Complex Numbers and Quadratic Equations", description: "Dive into complex numbers and solving quadratic equations.", chapter: "complex-numbers-and-quadratic-equations" },
    { title: "Linear Inequalities", description: "Learn about linear inequalities and how to solve them.", chapter: "linear-inequalities" },
    { title: "Permutations and Combinations", description: "Understand the concepts of permutations and combinations.", chapter: "permutations-and-combinations" },
    { title: "Binomial Theorem", description: "Explore the binomial theorem and its applications.", chapter: "binomial-theorem" },
    { title: "Sequences and Series", description: "Learn about sequences, series, and their sum.", chapter: "sequences-and-series" },
    { title: "Straight Lines", description: "Understand the equation and properties of straight lines.", chapter: "straight-lines" },
    { title: "Conic Sections", description: "Explore conic sections like circles, ellipses, parabolas, and hyperbolas.", chapter: "conic-sections" },
    { title: "Introduction to Three-Dimensional Geometry", description: "Learn the basics of three-dimensional geometry and coordinates.", chapter: "introduction-to-three-dimensional-geometry" },
    { title: "Limits and Derivatives", description: "An introduction to limits and derivatives in calculus.", chapter: "limits-and-derivatives" },
    { title: "Mathematical Reasoning", description: "Learn the fundamental principles of mathematical reasoning.", chapter: "mathematical-reasoning" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 11 Math Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-11/${topic.chapter}`}  // Updated route path with class name and chapter
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

export default Class11;
