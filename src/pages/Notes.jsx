import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for navigation

const Notes = () => {
  return (
    <div>

      {/* Section Title */}
      <section className="relative py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Choose Your Class to Access Notes
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-tight">
            Select your class to begin accessing the study materials from Manas Maths.
          </p>
        </div>

        {/* Class Cards Section */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Class 6 */}
          <Link to="/class6">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-indigo-100 to-indigo-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 6</div>
              <div className="text-5xl font-bold text-indigo-600 mb-4">6</div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>

          {/* Class 7 */}
          <Link to="/class7">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-blue-100 to-blue-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 7</div>
              <div className="text-5xl font-bold text-blue-600 mb-4">7</div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>

          {/* Class 8 */}
          <Link to="/class8">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-teal-100 to-teal-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 8</div>
              <div className="text-5xl font-bold text-teal-600 mb-4">8</div>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>

          {/* Class 9 */}
          <Link to="/class9">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-yellow-100 to-yellow-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 9</div>
              <div className="text-5xl font-bold text-yellow-600 mb-4">9</div>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>

          {/* Class 10 */}
          <Link to="/class10">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-purple-100 to-purple-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 10</div>
              <div className="text-5xl font-bold text-purple-600 mb-4">10</div>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>

          {/* Class 11 */}
          <Link to="/class11">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-teal-100 to-teal-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 11</div>
              <div className="text-5xl font-bold text-teal-600 mb-4">11</div>
              <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>

          {/* Class 12 */}
          <Link to="/class12">
            <div className="flex flex-col items-center p-8 bg-gradient-to-tl from-indigo-100 to-indigo-200 text-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-sm font-semibold text-gray-600 mb-2">Class 12</div>
              <div className="text-5xl font-bold text-indigo-600 mb-4">12</div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                View Notes
              </button>
            </div>
          </Link>
        </div>
      </section>

     
    </div>
  );
};

export default Notes;
