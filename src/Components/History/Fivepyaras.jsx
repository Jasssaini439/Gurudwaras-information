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
      <div className="flex flex-col items-center justify-center mt-20 ">
        <h1 className="text-8xl font-serif font-bold text-orange-500 mb-6 cursor-pointer">The Five Pyaras</h1>
        <p className="text-lg mt-14 bg-white dark:bg-black text-black dark:text-white max-w-2xl text-center">
          The Five Pyaras, also known as the Panj Pyare, are revered figures in Sikhism. They were the first five Sikhs who were initiated into the Khalsa by Guru Gobind Singh Ji on Baisakhi in 1699. Their names are Bhai Daya Singh, Bhai Dharam Singh, Bhai Himmat Singh, Bhai Mohkam Singh, and Bhai Sahib Singh. They symbolize the ideals of sacrifice, courage, and devotion to the Sikh faith.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <img src="/five1.jpg" alt="The Five Pyaras" className="w-full h-auto rounded-lg shadow-lg" />
        <p className="mt-4 text-lg bg-white dark:bg-black text-black dark:text-white">
          The Five Pyaras played a crucial role in the establishment of the Khalsa, which is the collective body of initiated Sikhs. They are celebrated for their unwavering commitment to Guru Gobind Singh Ji and their readiness to sacrifice their lives for the faith. Their legacy continues to inspire Sikhs around the world.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <img src="/five2.jpg" alt="The Five Pyaras" className="w-full h-auto rounded-lg shadow-lg" />
        <p className="mt-4 text-lg bg-white dark:bg-black text-black dark:text-white">
          The Five Pyaras are often depicted in Sikh art and literature, symbolizing the spirit of selfless service and bravery. They are also commemorated during various Sikh festivals, especially Baisakhi, which marks the formation of the Khalsa.
        </p>
      </div>
   

      <h1 className="text-4xl font-bold font-serif text-orange-500 text-center mt-20">Meet the Five Pyaras</h1>
      <div className="flex flex-wrap justify-center gap-10  items-center mt-20">
        {itemsinfo.map((item) => (
          <div
            key={item.id}
            className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg bg-orange-400 group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col justify-end absolute bottom-0 left-0 right-0 h-full bg-white bg-opacity-70 text-black px-4 py-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-orange-600 text-xl font-bold mb-1 text-center">{item.title}</h1>
              <p className="text-sm line-clamp-3">{item.description}</p>
              <button
                onClick={() => openModal(item)}
                className="mt-2 bg-orange-600 text-white rounded-lg p-2 text-sm"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedGuru && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl max-w-[800px] w-full p-6 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={selectedGuru.image}
                alt={selectedGuru.title}
                className="w-[250px] h-[250px] object-fill rounded-lg mb-4 md:mb-0"
              />
              <div className="flex flex-col md:ml-6">
                <h2 className="text-2xl font-bold text-orange-600 mb-2">{selectedGuru.title}</h2>
                <p className="text-lg text-gray-700">{selectedGuru.description}</p>
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
