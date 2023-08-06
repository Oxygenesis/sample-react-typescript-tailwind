import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
      <header className="bg-gray-800 text-white shadow-lg">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                    to="/"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                    to="/about"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                    to="/contact"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                    to="/articles"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  );
};

export default Header;
