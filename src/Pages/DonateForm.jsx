import React from 'react';

const DonateForm = () => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black/20 text-gray-800 dark:text-orange-600 overflow-hidden">
      {/* Background Image */}
      <img
        src="/l2.jpg"
        alt="Gurudwara"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      {/* Overlay form */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 py-20">
        <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center font-serif text-orange-600 mb-4">Donate Online</h2>
          <p className="text-center text-sm text-orange-500 mb-6">
            Payment Options: UPI, NET BANKING, CARDS, FREECHARGE
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Devotee Name" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="City" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="State" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Country" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="PIN / Postal Code" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="text" placeholder="Phone Number" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />

            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Karobar Tarakki (Business Growth)</option>
              <option>Health</option>
              <option>Education</option>
            </select>

            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>GOLAK</option>
              <option>LANGAR</option>
              <option>SEWA</option>
            </select>

            <input
              type="number"
              placeholder="Amount"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2"
            />
          </form>

          <p className="text-red-600 text-xs mt-4">
            *Do not refresh or go back during transaction. Payments are non-refundable and non-transferable.
          </p>

          <div className="flex justify-center mt-6">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded w-full sm:w-auto">
              Pay Now
            </button>
          </div>

          <p className="text-center text-xs text-gray-600 mt-6">
            This website is SSL secured. Your financial and personal data is protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
