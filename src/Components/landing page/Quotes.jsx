import React from "react";

const Quotes = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* First Card */}
      <div className="absolute top-20 left-4 sm:left-10 md:left-48 z-10 w-[300px] sm:w-[400px] md:w-[550px] h-[220px] sm:h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
        <div className="w-full h-full bg-black/50 absolute z-10 rounded-3xl" />
        <img
          src="/h2.jpg"
          alt="quote1"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-3 pt-6 sm:pt-10 text-white font-bold text-[1.2rem] sm:text-[2rem] md:text-[3.5rem] text-center leading-tight">
          “Those who have loved are—
        </div>
      </div>

      {/* Second Card - overlapping the first */}
      <div className="absolute top-[15rem] sm:top-[22rem] md:top-[30rem] right-4 sm:right-10 md:right-56 z-20 w-[300px] sm:w-[400px] md:w-[550px] h-[220px] sm:h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
        <div className="w-full h-full bg-black/40 absolute z-10 rounded-3xl" />
        <img
          src="/h1.jpg"
          alt="quote2"
          className="w-full h-full object-cover brightness-90 opacity-75"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-3 text-white font-bold text-[1rem] sm:text-[2rem] md:text-[3.5rem] text-center leading-tight">
          —those that have found God”
        </div>
      </div>
    </div>
  );
};

export default Quotes;
