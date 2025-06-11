import React, { useState } from 'react';
import { FaKhanda } from 'react-icons/fa';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 ${
        isHome ? 'bg-orange-400 bg-opacity-60' : 'bg-transparent'
      } text-white font-semibold p-4`}
    >
      <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[1.5rem]">
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/Gurudwaras" className="hover:text-orange-600">Gurudwaras</Link>
          <Link to="/history" className="hover:text-orange-600">History</Link>
          <Link to="/donate" className="hover:text-orange-600">Donate</Link>
          <Link to="/about" className="hover:text-orange-600">About</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
        </div>

        {/* CTA Button for Desktop */}
        {isHome ? (
          <button
            onClick={() => navigate('/donate')}
            className="hidden md:flex items-center text-[1.2rem] bg-blue-950 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200"
          >
            <FaKhanda className="mr-2" />
            <span>Find your spiritual peace</span>
          </button>
        ) : (
          <Link
            to="/donate"
            className="hidden md:flex text-[1.2rem] bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200"
          >
            Donate
          </Link>
        )}

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-white text-3xl">
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-500/60 z-50 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-xl`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white">
          <h2 className="text-2xl font-bold text-white">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-white text-3xl">
            <HiOutlineX />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 text-[1.2rem] text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Gurudwaras" onClick={() => setMenuOpen(false)}>Gurudwaras</Link>
          <Link to="/history" onClick={() => setMenuOpen(false)}>History</Link>
          <Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* Optional Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
