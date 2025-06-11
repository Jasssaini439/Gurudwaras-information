import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMailBulk,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 mb-6 mt-10 text-sm md:text-base">
          Serving the community with devotion and spreading the message of love and equality.
        </p>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm md:text-base">
          <a href="/" className="text-gray-500 hover:text-orange-600 transition">Home</a>
          <a href="/Gurudwaras" className="text-gray-500 hover:text-orange-600 transition">Gurudwaras</a>
          <a href="/history" className="text-gray-500 hover:text-orange-600 transition">History</a>
          <a href="/donate" className="text-gray-500 hover:text-orange-600 transition">Donate</a>
          <a href="/about" className="text-gray-500 hover:text-orange-600 transition">About</a>
          <a href="/contact" className="text-gray-500 hover:text-orange-600 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-500 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <FaFacebookSquare size={24} />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-orange-600 transition">
            <FaMailBulk size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-4">
          © {new Date().getFullYear()} Gurudwaras Information. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
