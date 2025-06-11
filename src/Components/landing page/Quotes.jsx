import React from 'react';

const Quotes = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* First Card */}
      <div className="absolute top-20 left-5 md:left-48 z-10 w-[350px] md:w-[550px] h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
        <div className="w-full h-full bg-black/50 absolute z-10 rounded-3xl" />
        <img
          src="/h2.jpg"
          alt="quote1"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 pt-14 text-white font-bold text-[3rem] md:text-[5rem] text-center">
          “Those who have loved are-
        </div>
      </div>

      {/* Second Card - overlapping the first */}
      <div className="absolute top-[12rem] md:right-56 md:top-[30rem] z-20 w-[350px] md:w-[550px] h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
        <div className="w-full h-full bg-black/40 absolute z-10 rounded-3xl" />
        <img
          src="/h1.jpg"
          alt="quote2"
          className="w-full h-full object-cover brightness-90 opacity-75"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-white font-bold text-[2rem] md:text-[5rem] text-center">
          -those that have found God”
        </div>
      </div>
    </div>
  );
};

export default Quotes;
