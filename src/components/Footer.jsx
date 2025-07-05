import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          {/* Footer Content */}
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <img
                        src="/logo.svg"
                        alt="Manas Maths Logo"
                        width="64"
                        height="64"
                        className="w-16"
                      />
                    </span>
                    <span className="text-white">Manas Maths</span>
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">
                Empowering students to understand mathematics with personalized tools and guidance.
              </div>
              {/* Social Media Links */}
              <div className="flex space-x-6 justify-center lg:justify-start">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-50"
                >
                  <span className="sr-only">Facebook</span>
                  <i className="fa fa-facebook-f text-2xl hover:text-indigo-300 transition duration-300"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-50"
                >
                  <span className="sr-only">Twitter</span>
                  <i className="fa fa-twitter text-2xl hover:text-indigo-300 transition duration-300"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-50"
                >
                  <span className="sr-only">LinkedIn</span>
                  <i className="fa fa-linkedin text-2xl hover:text-indigo-300 transition duration-300"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-gray-50"
                >
                  <span className="sr-only">YouTube</span>
                  <i className="fa fa-youtube text-2xl hover:text-indigo-300 transition duration-300"></i>
                </a>
              </div>
            </div>

            {/* Quick Links, Resources, and Use Cases */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              {/* Quick Links */}
              <div>
                <h3 className="text-md font-semibold leading-6 text-white">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#home"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#courses"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#pricing"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#casestudies"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy"
                      className="text-md leading-6 text-gray-300 hover:text-gray-50"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-md text-center text-white">
            Copyright © 2025 . Crafted with by Developer Team.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
