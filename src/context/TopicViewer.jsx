import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample data with class and chapter-level structure
const classData = {
  "class-6": {
    "knowing-our-numbers": [
      { title: "Introduction to Numbers", pdfUrl: "https://hcstovation.wordpress.com/wp-content/uploads/2025/06/harsh-raj.pdf" },
      { title: "Types of Numbers", pdfUrl: "https://example.com/class-6/knowing-our-numbers/types-of-numbers.pdf" },
      { title: "Place Value System", pdfUrl: "https://example.com/class-6/knowing-our-numbers/place-value-system.pdf" },
      { title: "Number Patterns", pdfUrl: "https://example.com/class-6/knowing-our-numbers/number-patterns.pdf" }
    ],
    "whole-numbers": [
      { title: "Whole Numbers and their Properties", pdfUrl: "https://example.com/class-6/whole-numbers/whole-numbers-properties.pdf" },
      { title: "Addition and Subtraction of Whole Numbers", pdfUrl: "https://example.com/class-6/whole-numbers/addition-subtraction-whole-numbers.pdf" }
    ],
  },
  // Add more classes and chapters as needed
};

const TopicViewer = () => {
  const { className, chapter } = useParams();
  const topics = classData[className]?.[chapter] || []; // If no topics, show empty

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
          Topics for {className.replace(/-/g, ' ')} - {chapter.replace(/-/g, ' ').toUpperCase()}
        </h1>
        {topics.length === 0 ? (
          <p className="text-center text-gray-600">No topics available for this chapter.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform"
              >
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7V3l4 4-4 4V8H3V7h13z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{topic.title}</h3>
                <p className="text-center text-white mb-4">Click to explore this topic further.</p>
                <Link
                  to={{
                    pathname: `/viewer/${className}/${chapter}/${encodeURIComponent(topic.title.toLowerCase().replace(/\s+/g, '-'))}`,
                    search: `?pdfUrl=${encodeURIComponent(topic.pdfUrl)}`  // Pass pdfUrl as query parameter
                  }}
                  className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition-all"
                >
                  View PDF
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicViewer;
