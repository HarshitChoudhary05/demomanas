import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { toggleTheme } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownItems = [
    { label: 'Class 6', href: '#class6' },
    { label: 'Class 7', href: '#class7' },
    { label: 'Class 8', href: '#class8' },
    { label: 'Class 9', href: '#class9' },
    { label: 'Class 10', href: '#class10' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Notes', dropdown: dropdownItems },
    { label: 'Videos', dropdown: dropdownItems },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Brand with SVG from public folder */}
          <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition">
            <img src="/logo.svg" alt="Manas Maths Logo" className="w-8 h-8" />
            Manas Maths
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index} className="relative group">
                  <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 hidden group-hover:flex flex-col bg-white shadow-xl border rounded-lg w-48 py-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 z-50">
                    {link.dropdown.map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className="px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 rounded"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-indigo-500 after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Right: Login + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#login" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Login
            </a>
            <button
              onClick={toggleTheme}
              className="px-5 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Courses
            </button>
          </div>

          {/* Mobile Icon */}
          <button
            className="lg:hidden text-indigo-600"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white z-50 transform transition-transform duration-300 ease-in-out rounded-l-lg shadow-lg ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <h2 className="text-lg font-semibold text-indigo-600">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="text-red-500 text-xl">✕</button>
        </div>

        <nav className="flex flex-col gap-4 px-6 py-6 font-medium">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <details key={index}>
                <summary className="cursor-pointer text-gray-700 hover:text-indigo-600 transition">
                  {link.label}
                </summary>
                <div className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                  {link.dropdown.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.href}
                      className="text-gray-600 hover:text-indigo-600 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#login"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Login
          </a>
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="mt-3 px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-full shadow-md hover:shadow-lg transition"
          >
            Explore Courses
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
