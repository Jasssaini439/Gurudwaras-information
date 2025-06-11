import React, { useState } from 'react';

const itemsinfo = [
  {
    id: 1,
    title: 'Shri Guru Nanak Dev Ji',
    description: 'Guru Nanak Dev Ji, the founder of Sikhism, emphasized equality, service, and devotion to God. He traveled extensively, spreading his teachings and promoting harmony among different faiths.',
    moreInfo: 'He was born in 1469 in Talwandi (now Nankana Sahib, Pakistan). Guru Nanak taught that there is only one God and that all human beings are equal. His teachings are preserved in the Guru Granth Sahib, the holy scripture of Sikhism.',
    image: '/tengurus/gurunanakdevji.jpg',
    dob: '15 April 1469',
    dod: '22 September 1539',
    pob: 'Talwandi, Punjab (now Nankana Sahib, Pakistan)',
    Guruship: '20 August 1539'
  },
  {
    id: 2,
    title: 'Second Guru - Shri Guru Angad Dev Ji',
    description: 'Guru Angad Dev Ji contributed the Gurmukhi script and promoted education. ',
    moreInfo: 'His humility and emphasis on selfless service greatly shaped Sikh values. He was born in 1504 in Matte-di-Sarai, Punjab. Guru Angad Ji was a devoted follower of Guru Nanak and continued his teachings, establishing the foundation for Sikh community life and the Gurdwara system.',
    image: '/tengurus/guruangaddevji.jpg',
    dob: '31 March 1504',
    dod: '28 March 1552',
    pob: 'Matte-di-Sarai, Punjab',
    Guruship: '22 September 1539'
  },
  {
    id: 3,
    title: 'Third Guru - Shri Guru Amar Das Ji',
    description: 'Guru Amar Das Ji established the Manji system and reinforced equality, particularly the importance of women and social justice in Sikh society.',
    image: '/tengurus/guruamardasji.jpg',
    moreInfo: 'He was born in 1479 in Basarke, Punjab. Guru Amar Das Ji emphasized the importance of community kitchens (Langar) and equality among all people, regardless of caste.',
    dob: '5 May 1479',
    dod: '1 September 1574',
    pob: 'Basarke, Punjab',
    Guruship: '26 March 1552'

  },
  {
    id: 4,
    title: 'Fourth Guru - Shri Guru Ram Das Ji',
    description: 'Guru Ram Das Ji founded the city of Amritsar and contributed greatly to Sikh liturgy. He emphasized community and spiritual growth.',
    image: '/tengurus/Gururamdasji.jpg',
    moreInfo: 'He was born in 1534 in Lahore. Guru Ram Das Ji composed hymns that are included in the Guru Granth Sahib and established the tradition of the Amrit ceremony, which is central to Sikh initiation.',
    dob: '24 September 1534',
    dod: '1 September 1581',
    pob: 'Lahore, Punjab',
    Guruship: '1 September 1574'

  },
  {
    id: 5,
    title: 'Fifth Guru - Shri Guru Arjan Dev Ji',
    description: 'Guru Arjan Dev Ji compiled the Adi Granth and built the Harmandir Sahib. He became the first Sikh martyr for refusing to compromise his faith.',
    image: '/tengurus/guruarjandevg.jpg',
    moreInfo: 'He was born in 1563 in Goindval, Punjab. Guru Arjan Dev Ji is known for his contributions to Sikh architecture and literature, as well as his efforts to promote peace and harmony among different communities.',
    dob: '15 April 1563',
    dod: '30 May 1606',
    pob: 'Goindval, Punjab',
    Guruship: '1 September 1581'
  },
  {
    id: 6,
    title: 'Sixth Guru - Shri Guru Hargobind Ji',
    description: 'Guru Hargobind Ji introduced the concept of Miri-Piri, symbolizing the balance of temporal and spiritual authority. He wore two swords representing both.',
    image: '/tengurus/guruhargobindsahibg.jpg',
    moreInfo: 'He was born in 1595 in Wadali, Punjab. Guru Hargobind Ji emphasized the importance of self-defense and the need for Sikhs to be both spiritual and temporal leaders.',
    dob: '26 June 1595',
    dod: '3 March 1644',
    pob: 'Wadali, Punjab',
    Guruship: '25 May 1606'

  },
  {
    id: 7,
    title: 'Seventh Guru - Shri Guru Har Rai Ji',
    description: 'Guru Har Rai Ji was known for his compassion and environmental consciousness. He continued to defend the faith while promoting non-violence.',
    image: '/tengurus/guruharraig.jpg',
    moreInfo: 'He was born in 1630 in Kiratpur, Punjab. Guru Har Rai Ji is remembered for his efforts to promote peace and harmony, as well as his dedication to the welfare of all living beings.',
    dob: '16 January 1630',
    dod: '6 October 1661',
    pob: 'Kiratpur, Punjab',
    Guruship: '3 March 1644'


  },
  {
    id: 8,
    title: 'Eighth Guru - Shri Guru Har Krishan Ji',
    description: 'Guru Har Krishan Ji, the youngest Guru, is remembered for his healing of the sick during a smallpox epidemic and his deep spiritual wisdom despite his young age.',
    image: '/tengurus/guruharkrishansahibg.jpg',
    moreInfo: 'He was born in 1656 in Kiratpur, Punjab. Guru Har Krishan Ji is revered for his compassion and dedication to serving humanity, even at a young age.',
    dob: '6 July 1656',
    dod: '30 March 1664',
    pob: 'Kiratpur, Punjab',
    Guruship: '6 October 1661'

  },
  {
    id: 9,
    title: 'Ninth Guru - Shri Guru Tegh Bahadur Ji',
    description: 'Guru Tegh Bahadur Ji is revered for his sacrifice to uphold religious freedom. He stood against forced conversions and gave his life for protecting human rights.',
    image: '/tengurus/gurutegbahadurg.jpg',
    moreInfo: 'He was born in 1621 in Amritsar, Punjab. Guru Tegh Bahadur Ji is known for his unwavering commitment to justice and equality, and his martyrdom is a significant event in Sikh history.',
    dob: '1 April 1621',
    dod: '24 November 1675',
    pob: 'Amritsar, Punjab',
    Guruship: '20 March 1664'

  },
  {
    id: 10,
    title: 'Tenth Guru - Shri Guru Gobind Singh Ji',
    description: 'Guru Gobind Singh Ji founded the Khalsa, formalizing Sikh identity. He was a warrior, poet, and spiritual leader who completed the Guru Granth Sahib as the eternal Guru.',
    image: '/tengurus/Gurugobindsinghg.jpg',
    moreInfo: 'He was born in 1666 in Patna, Bihar. Guru Gobind Singh Ji is celebrated for his bravery and leadership, as well as his contributions to Sikh literature and philosophy.',
    dob: '22 December 1666',
    dod: '7 October 1708',
    pob: 'Patna, Bihar',
    Guruship: '20 March 1675'

  },
  

];

const Tengurus = () => {
  const [selectedGuru, setSelectedGuru] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGranthModalOpen, setIsGranthModalOpen] = useState(false); 

  const openModal = (guru) => {
    setSelectedGuru(guru);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGuru(null);
    setIsModalOpen(false);
  };
 
  const openGranthModal = () => {
    setIsGranthModalOpen(true);
  }
  const closeGranthModal = () => {
    setIsGranthModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 items-center mt-20">
        {itemsinfo.map((item) => (
          <div
            key={item.id}
            className="relative w-[300px] h-[400px] overflow-hidden rounded-lg group shadow-lg bg-orange-400"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className=" flex flex-col justify-center absolute bottom-0 left-0 right-0 h-[100%] bg-white bg-opacity-70 text-black px-4 py-2 opacity-0 group-hover:opacity-100 transition duration-300">
              <h1 className="text-orange-600 text-xl font-bold mb-1 text-center">{item.title}</h1>
              <p className="text-sm line-clamp-3">{item.description}</p>
              <button
                onClick={() => openModal(item)}
                className="mt-2 bg-orange-600 rounded-lg p-2 text-sm"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedGuru && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
    role="dialog"
    aria-modal="true"
  >
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[850px] relative animate-fadeIn">
      {/* Close Button */}
      <button
        aria-label="Close Modal"
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black transition"
        onClick={closeModal}
      >
        &times;
      </button>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        {/* Image */}
        <img
          src={selectedGuru.image}
          alt={`Portrait of ${selectedGuru.title}`}
          className="w-[250px] h-[250px] object-cover rounded-xl shadow-md"
        />

        {/* Details */}
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl font-extrabold text-orange-600 mb-2">
            {selectedGuru.title}
          </h2>

          <ul className="text-gray-700 space-y-1 text-sm">
            <li><strong>Date of Birth:</strong> {selectedGuru.dob}</li>
            <li><strong>Date of Joti Jot:</strong> {selectedGuru.dod}</li>
            <li><strong>Place of Birth:</strong> {selectedGuru.pob}</li>
            <li><strong>Date of Guruship:</strong> {selectedGuru.Guruship}</li>
          </ul>

          <p className="text-gray-700 mt-4 text-sm">{selectedGuru.description}</p>
          <p className="text-gray-600 mt-2 text-xs leading-relaxed">{selectedGuru.moreInfo}</p>
        </div>
      </div>
    </div>
  </div>
)}






<div className="flex flex-col items-center justify-center mt-10 px-4">
<h2 className=" text-5xl text-center font-extrabold mb-14 mt-16 text-yellow-600 relative">
The Eternal Guru 
</h2>
<div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg group shadow-lg bg-orange-400">
  <img
    src="/tengurus/gurugranthsahibg.jpeg"
    alt="Guru Granth Sahib Ji"
    className="w-[300px] h-[400px] object-cover rounded-lg shadow-xl"
  />
 <div className="  flex flex-col justify-center text-center absolute bottom-0 left-0 right-0 h-[100%] bg-white bg-opacity-70 text-black px-4 py-2 opacity-0 group-hover:opacity-100 transition duration-300">
  <h2 className="text-2xl font-bold text-orange-600 mt-6">
    Shri Guru Granth Sahib Ji
  </h2>
  <p className="text-gray-700 mt-2 max-w-xl text-center">
    Guru Granth Sahib Ji is the eternal Guru of the Sikhs, formally established as the 11th and final Guru by Guru Gobind Singh Ji. It contains the spiritual teachings of Sikh Gurus and saints, guiding Sikhs in their spiritual and daily lives.
  </p>
</div>
</div>

{isGranthModalOpen && (
  <div
    className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4"
    role="dialog"
    aria-modal="true"
  >
    <div className="bg-white rounded-2xl shadow-2xl max-w-[800px] w-full p-6 relative animate-fadeIn">
      {/* Close Button */}
      <button
        aria-label="Close Modal"
        className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black transition"
        onClick={closeGranthModal}
      >
        &times;
      </button>

      {/* Modal Content */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/tengurus/gurugranthsahibg.jpeg"
          alt="Guru Granth Sahib Ji"
          className="w-[250px] h-[250px] object-cover rounded-xl shadow-md mb-4"
        />
        <h2 className="text-3xl font-extrabold text-orange-600 mb-1">
          Shri Guru Granth Sahib Ji
        </h2>
        <p className="text-gray-800 text-sm font-medium">
          The Eternal Guru of the Sikhs
        </p>
        <p className="text-gray-600 text-sm mt-4 leading-relaxed max-w-xl">
          Guru Granth Sahib Ji is revered as the eternal Guru of the Sikhs, 
          containing the divine teachings of Sikh Gurus and other enlightened saints. 
          It is not just a scripture but a living spiritual guide that shapes the lives 
          and values of Sikhs around the world.
        </p>
      </div>
    </div>
  </div>
)}

{/* Read More Button */}
<button
  onClick={openGranthModal}
  className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-200"
>
  Read More
</button>

</div>
    </>
  );
}

export default Tengurus;
