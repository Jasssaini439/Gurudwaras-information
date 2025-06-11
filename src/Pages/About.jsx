import React from 'react';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center bg-fixed flex items-center justify-start p-6 ">

    <div className="relative bg-white/50 backdrop-blur-md shadow-lg p-10 max-w-4xl w-full rounded-[50px] transform -skew-y-3">
        <div className="skew-y-3">
          <h1 className="text-7xl font-bold mb-6 text-black">About Us</h1>
          <p className="text-xl text-gray-800 mb-4">
            Welcome to <strong>[Your Website Name]</strong>, your ultimate destination for exploring the rich history
            and profound significance of Gurudwaras around the world. Discover the stories behind these sacred
            places, learn about their cultural and spiritual importance, and immerse yourself in the inspiring
            legacy they hold.
          </p>
          <p className="text-xl text-gray-800 mb-6">
            Whether you're looking to deepen your understanding or support these holy sites through donations,
            we’re here to guide you on your journey. Join us in preserving and celebrating the heritage of Gurudwaras
            while contributing to their upkeep and community support. <br />
            <strong>Explore, learn, and make a difference with [Website Name] today!</strong>
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold shadow">
              <Link to="/donate">Contribute</Link>
              
            </button>
            <button className="border-2 border-black hover:bg-black hover:text-white px-6 py-2 rounded-full text-lg font-semibold transition">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
