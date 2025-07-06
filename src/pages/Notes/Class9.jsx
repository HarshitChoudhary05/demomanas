import React from 'react';
import { Link } from 'react-router-dom'; // To create links to navigate

const Class9 = () => {
  const topics = [
    { title: "Number Systems", description: "Explore the concept of number systems and their operations.", chapter: "number-systems" },
    { title: "Polynomials", description: "Learn about polynomials and their properties.", chapter: "polynomials" },
    { title: "Coordinate Geometry", description: "Understand coordinate geometry and plotting points on a graph.", chapter: "coordinate-geometry" },
    { title: "Linear Equations in Two Variables", description: "Learn about linear equations and solving them with two variables.", chapter: "linear-equations-in-two-variables" },
    { title: "Introduction to Euclid Geometry", description: "An introduction to Euclid's geometry and basic principles.", chapter: "introduction-to-euclid-geometry" },
    { title: "Lines and Angles", description: "Understand lines, angles, and their properties.", chapter: "lines-and-angles" },
    { title: "Triangles", description: "Learn about triangles and their properties.", chapter: "triangles" },
    { title: "Quadrilaterals", description: "Explore quadrilaterals and their properties.", chapter: "quadrilaterals" },
    { title: "Areas of Parallelograms and Triangles", description: "Learn to calculate areas of parallelograms and triangles.", chapter: "areas-of-parallelograms-and-triangles" },
    { title: "Circles", description: "Learn about circles and the properties related to them.", chapter: "circles" },
    { title: "Constructions", description: "Understand how to construct geometrical shapes and figures.", chapter: "constructions" },
    { title: "Surface Areas and Volumes", description: "Learn to calculate surface areas and volumes of 3D shapes.", chapter: "surface-areas-and-volumes" },
    { title: "Statistics", description: "Explore statistics and how to collect and analyze data.", chapter: "statistics" },
    { title: "Probability", description: "An introduction to probability and its applications.", chapter: "probability" }
  ];

  const background_colors = ['bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100', 'bg-purple-100'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Class 9 Math Topics
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Link
              key={index}
              to={`/topics/class-9/${topic.chapter}`}  // Updated route path with class name and chapter
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

export default Class9;
