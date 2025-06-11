import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const [darkmode, setDarkmode] = useState(() => {
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = darkmode === true;
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [darkmode]);

  return (
    <button
      onClick={() => setDarkmode(!darkmode)}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full backdrop-blur-md bg-white/70 dark:bg-black/50 border border-gray-300 dark:border-gray-600 text-yellow-600 dark:text-yellow-600/70 shadow-xl transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"
      aria-label="Toggle Dark Mode"
    >
      <span className="flex items-center justify-center">
        {darkmode ? (
          <FaSun size={22} className="animate-spin-slow" />
        ) : (
          <FaMoon size={22} />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
