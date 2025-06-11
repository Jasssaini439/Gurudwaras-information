import React, { useState } from 'react';

const itemsinfo = [
  {
    id: 1,
    title: "Bhai Daya Singh",
    description: "Bhai Daya Singh was one of the first five Sikhs initiated into the Khalsa by Guru Gobind Singh Ji. He is known for his compassion and selfless service.",
    image: "/Dayasinghg.jpg"
  },
  {
    id: 2,
    title: "Bhai Dharam Singh",
    description: "Bhai Dharam Singh was a devoted Sikh who exemplified the principles of justice and righteousness. He played a significant role in the early days of the Khalsa.",
    image: "/Dharamsinghg.jpg"
  },
  {
    id: 3,
    title: "Bhai Himmat Singh",
    description: "Bhai Himmat Singh is remembered for his bravery and unwavering faith. He was a key figure in the establishment of the Khalsa.",
    image: "/HimmatSinghg.jpg"
  },
  {
    id: 4,
    title: "Bhai Mohkam Singh",
    description: "Bhai Mohkam Singh was known for his dedication to Guru Gobind Singh Ji and his commitment to the Sikh faith.",
    image: "/Mohkamsinghg.png"
  },
  {
    id: 5,
    title: "Bhai Sahib Singh",
    description: "Bhai Sahib Singh was a symbol of sacrifice and devotion, embodying the spirit of the Khalsa.",
    image: "/sahibsinghg.jpg"
  }
];

const Fivepyaras = () => {
  const [selectedGuru, setSelectedGuru] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (guru) => {
    setSelectedGuru(guru);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGuru(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-center my-20 px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-orange-500 mb-6">
          The Five Pyaras
        </h1>
        <p className="text-base md:text-lg mt-6 text-black dark:text-white max-w-3xl mx-auto">
          The Five Pyaras, or Panj Pyare, were the first Sikhs initiated into the Khalsa by Guru Gobind Singh Ji in 1699. Their names—Bhai Daya Singh, Bhai Dharam Singh, Bhai Himmat Singh, Bhai Mohkam Singh, and Bhai Sahib Singh—stand for sacrifice, bravery, and complete devotion to the Sikh faith.
        </p>
      </div>

      {/* Intro Images */}
      {[{ src: "/five1.jpg" }, { src: "/five2.jpg" }].map((img, idx) => (
        <div key={idx} className="mt-10 max-w-4xl mx-auto px-4">
          <img src={img.src} alt={`The Five Pyaras ${idx + 1}`} className="w-full h-auto rounded-lg shadow-lg" />
          <p className="mt-4 text-base md:text-lg text-black dark:text-white">
            {idx === 0
              ? "They are celebrated for their unwavering commitment to Guru Gobind Singh Ji and their readiness to sacrifice their lives for the faith."
              : "Often depicted in art and commemorated in Sikh festivals like Baisakhi, they continue to symbolize courage and unity."}
          </p>
        </div>
      ))}

      {/* Grid of Pyaras */}
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-orange-500 text-center mt-20">
        Meet the Five Pyaras
      </h2>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center mt-10 px-4">
        {itemsinfo.map((item) => (
          <div
            key={item.id}
            className="relative w-72 h-96 rounded-lg shadow-lg bg-orange-400 group overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-white/70 text-black px-4 py-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-orange-600 text-xl font-bold text-center">{item.title}</h3>
              <p className="text-sm mt-1 line-clamp-3">{item.description}</p>
              <button
                onClick={() => openModal(item)}
                className="mt-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg p-2 text-sm transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedGuru && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 relative">
            <button
              className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={selectedGuru.image}
                alt={selectedGuru.title}
                className="w-52 h-52 object-fill rounded-lg mb-4 md:mb-0"
              />
              <div className="md:ml-6 text-center md:text-left">
                <h2 className="text-2xl font-bold text-orange-600 mb-2">{selectedGuru.title}</h2>
                <p className="text-gray-700 text-base">{selectedGuru.description}</p>
                <p className="text-sm text-gray-500 mt-2">More details coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fivepyaras;
