import React from 'react';

const DonateForm = () => {
  return (
    <>
      {/* Embedded CSS for .input-style */}
      <style>{`
        .input-style {
          @apply border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full;
        }
      `}</style>

      <div className="relative min-h-screen bg-white dark:bg-black/20 text-gray-800 dark:text-orange-600 overflow-hidden">
        {/* Background Image */}
        <img
          src="/l2.jpg"
          alt="Gurudwara"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        />

        {/* Overlay form */}
        <div className="relative z-10 flex justify-center items-center min-h-screen px-4 py-10">
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center font-serif text-orange-600 mb-4">Donate Online</h2>
            <p className="text-center text-sm text-orange-500 mb-6">
              Following are the various Payment Options: UPI, NET BANKING, CARDS, FREECHARGE
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Devotee Name" className="input-style" />
              <input type="text" placeholder="Address" className="input-style" />
              <input type="text" placeholder="City" className="input-style" />
              <input type="text" placeholder="State" className="input-style" />
              <input type="text" placeholder="Country" className="input-style" />
              <input type="text" placeholder="PIN / Postal Code" className="input-style" />
              <input type="email" placeholder="Email" className="input-style" />
              <input type="text" placeholder="Phone Number" className="input-style" />

              <select className="input-style">
                <option>Karobar Tarakki (Business Growth)</option>
                <option>Health</option>
                <option>Education</option>
              </select>

              <select className="input-style">
                <option>GOLAK</option>
                <option>LANGAR</option>
                <option>SEWA</option>
              </select>

              <input
                type="number"
                placeholder="Amount"
                className="input-style col-span-1 md:col-span-2"
              />
            </form>

            <p className="text-red-600 text-sm mt-4">
              *Please note: Do not Refresh or use the back button while transaction is in process. Once successfully done, amount will not be refunded or transferred to another fund.
            </p>

            <div className="flex justify-center mt-6">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded">
                Pay Now
              </button>
            </div>

            <p className="text-center text-xs text-gray-600 mt-6">
              This website is SSL secured. Your financial and personal data is protected from interception or alteration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateForm;
