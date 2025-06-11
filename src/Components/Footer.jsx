import React from "react";
import { FaFacebookSquare, FaGlassMartiniAlt, FaInstagram, FaMailBulk, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" p-6 bg-white dark:bg-black text-black dark:text-white">
            <div className="text-center">
                <p className="text-gray-400 mb-4 mt-14">
                    Serving the community with devotion and spreading the message of love and equality.
                </p>
            </div>
            <div className="flex flex-col md:flex justify-between items-center">
                <div className="text-gray-400">
                </div>
                <div className="footer-links flex space-x-4">
                    <a href="/" className="text-gray-400 hover:text-orange-600 transition">Home</a>
                    <a href="/Gurudwaras" className="text-gray-400 hover:text-orange-600 transition">Gurudwaras</a>
                    <a href="/Donate" className="text-gray-400 hover:text-orange-600 transition">Donate</a>
                    <a href="/About" className="text-gray-400 hover:text-orange-600 transition">About</a>
                    <a href="/Contact" className="text-gray-400 hover:text-orange-600 transition">Contact</a>
                </div>
                <div className="social-icons flex space-x-4 mt-4 md:mt-2">
                <a href="https://twitter.com" className="text-gray-400 hover:text-blue-900 transition">
                <FaTwitter size={24} /></a>
                    <a href="https://facebook.com" className="text-gray-400 hover:text-blue-900 transition">
                    <FaFacebookSquare size={24} /></a>
                    <a href="https://gmail.com">
                    <FaMailBulk size={24} className="text-gray-400 hover:text-orange-600 transition" />
                    </a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-orange-600 transition">
                    <FaInstagram size={24} /></a>
                    
                   
                    </div>

            </div>
        </footer>
    );
};

export default Footer;