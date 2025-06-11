import React, { useState } from 'react';
import { X } from 'lucide-react';

const itemsinfo = [

  {
    id: 1,
    title: 'Takht Patna Sahib',
    location: 'Patna, Bihar, India',
    description:
      'Takht Patna Sahib is one of the five Takhts of Sikhism, located in Patna, Bihar, India. It is the birthplace of Guru Gobind Singh Ji, the tenth Sikh Guru.',
    image: '/takht1.jpg',
    associatedGuru: 'Guru Gobind Singh Ji',
    significance: 'Birthplace of Guru Gobind Singh Ji, the tenth Sikh Guru.',
  },
  {
    id: 2,
    title: 'Takht Keshgarh Sahib',
    location: 'Anandpur Sahib, Punjab, India',
    description:
      'Takht Keshgarh Sahib is located in Anandpur Sahib, Punjab, India. It is the birthplace of the Khalsa and holds great significance in Sikh history.',
    image: '/takht2.jpg',
    associatedGuru: 'Guru Gobind Singh Ji',
    significance: 'Birthplace of the Khalsa, established by Guru Gobind Singh Ji.',
  },
  {
    id: 3,
    title: 'Takht Hazur Sahib',
    location: 'Nanded, Maharashtra, India',
    description:
      'Takht Hazur Sahib is located in Nanded, Maharashtra, India. It is the site where Guru Gobind Singh Ji passed away and is a major pilgrimage site for Sikhs.',
    image: '/takht3.jpg',
    associatedGuru: 'Guru Gobind Singh Ji',
    significance: 'Major pilgrimage site for Sikhs.',
  },
  {
    id: 4,
    title: 'Takht Damdama Sahib',
    location: 'Talwandi Sabo, Punjab, India',
    description:
      'Takht Damdama Sahib is located in Talwandi Sabo, Punjab, India. It is known for its historical significance and is associated with Guru Gobind Singh Ji.',
    image: '/takht4.jpg',
    associatedGuru: 'Guru Gobind Singh Ji',
    significance: 'Known for its historical significance and association with Guru Gobind Singh Ji.',
  },
  {
    id: 5,
    title: 'Akal Takht Sahib',
    location: 'Amritsar, Punjab, India',
    description:
      'Akal Takht Sahib is located in Amritsar, Punjab, India. It is the highest temporal seat of authority for Sikhs and is adjacent to the Golden Temple.',
    image: '/takht5.jpg',
    associatedGuru: 'Guru Hargobind Ji',
    significance: 'Highest temporal seat of authority for Sikhs.',
  },
];

const Ginfo = () => {


  const [selectedGurudwara, setSelectedGurudwara] = useState(null);

  return (
    <>

      <div className="flex flex-wrap justify-center md:flex-row gap-10  items-center mt-20">
        {itemsinfo.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedGurudwara(item)}
            className="relative w-[400px] h-[500px] overflow-hidden rounded-lg  group bg-orange-400"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-white bg-opacity-60 text-black px-4 py-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className=" text-orange-500 text-2xl font-extrabold mb-2 text-center">{item.title}</h1>
              <p className=" text-lg  ">{item.description}</p>
            </div>
          </div>
        ))}

        {/* modal */}

        {selectedGurudwara && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md sm:max-w-xl md:max-w-2xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
      <button
        onClick={() => setSelectedGurudwara(null)}
        className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
      >
        <X />
      </button>

      <img
        src={selectedGurudwara.image}
        className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain rounded-lg mb-4"
        alt={selectedGurudwara.title}
      />

      <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">{selectedGurudwara.title}</h2>
      <p className="text-gray-700 text-sm sm:text-base mb-1">
        <strong>Location:</strong> {selectedGurudwara.location}
      </p>
      <p className="text-gray-600 text-sm sm:text-base mt-4">
        <strong>Details:</strong> {selectedGurudwara.description}
      </p>
      <p className="text-gray-600 text-sm sm:text-base mt-2">
        <strong>Associated Guru:</strong> {selectedGurudwara.associatedGuru}
      </p>
      <p className="text-gray-600 text-sm sm:text-base mt-2">
        <strong>Significance:</strong> {selectedGurudwara.significance}
      </p>
    </div>
  </div>
)}


      </div>

    </>
  );
};

export default Ginfo;
