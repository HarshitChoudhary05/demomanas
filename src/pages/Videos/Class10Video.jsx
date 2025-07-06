import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class10Video = () => {
  const topics = [
    { title: "Real Numbers", description: "Explore the concept of real numbers and their properties.", chapter: "real-numbers" },
    { title: "Polynomials", description: "Learn about polynomials, their degree, and operations.", chapter: "polynomials" },
    { title: "Pair of Linear Equations in Two Variables", description: "Learn how to solve pair of linear equations.", chapter: "pair-of-linear-equations-in-two-variables" },
    { title: "Quadratic Equations", description: "Understand quadratic equations and their solutions.", chapter: "quadratic-equations" },
    { title: "Arithmetic Progressions", description: "Explore the concept of arithmetic progressions and their properties.", chapter: "arithmetic-progressions" },
    { title: "Triangles", description: "Learn about the properties and theorems of triangles.", chapter: "triangles" },
    { title: "Coordinate Geometry", description: "Understand coordinate geometry and the distance formula.", chapter: "coordinate-geometry" },
    { title: "Introduction to Trigonometry", description: "An introduction to trigonometry and its ratios.", chapter: "introduction-to-trigonometry" },
    { title: "Some Applications of Trigonometry", description: "Learn how trigonometry is applied in real-world problems.", chapter: "some-applications-of-trigonometry" },
    { title: "Circles", description: "Learn about the properties of circles and their related theorems.", chapter: "circles" },
    { title: "Constructions", description: "Learn about geometric constructions and their methods.", chapter: "constructions" },
    { title: "Surface Areas and Volumes", description: "Learn to calculate surface areas and volumes of 3D objects.", chapter: "surface-areas-and-volumes" },
    { title: "Statistics", description: "Explore statistical methods for data analysis.", chapter: "statistics" },
    { title: "Probability", description: "Learn about probability and its real-world applications.", chapter: "probability" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 10 Math Video Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-10/${topic.chapter}`}  // Updated route path with class name and chapter
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

export default Class10Video;
