// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-black/30 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-400">
              A modern UI component library built with React and Tailwind CSS.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink to="/docs" className="text-gray-400 hover:text-white">Documentation</NavLink></li>
              <li><NavLink to="/components" className="text-gray-400 hover:text-white">Components</NavLink></li>
              <li><NavLink to="/ui-kit" className="text-gray-400 hover:text-white">UI Kit</NavLink></li>
              <li><NavLink to="/icons" className="text-gray-400 hover:text-white">Icons</NavLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link to="https://github.com/dopemukesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">GitHub</Link></li>
              <li><Link to="https://instagram.com/curiousdevx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</Link></li>
              <li><Link to="https://linkedin.com/in/curious-mukesh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
