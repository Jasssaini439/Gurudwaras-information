import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
   const [darkmode , setdarkmode] = useState(() => {
       return localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) &&
       window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    
    useEffect(() => {
        const root = window.document.documentElement;
        const isDark = darkmode === true;
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    , [darkmode]);




  return (
   <>
   <button
      onClick={() => setdarkmode(!darkmode)}
      className="fixed top-5 right-5 z-50 p-3 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow-lg transition duration-300 ease-in-out"
      aria-label="Toggle Dark Mode"
    >
              <div className="transition-transform duration-300 transform hover:scale-110">
        {darkmode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </div>
    </button>
   </>
  )
}

export default DarkModeToggle