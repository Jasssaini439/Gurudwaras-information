import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [selectedGurudwara, setSelectedGurudwara] = useState(null);

  const gurudwaras = [
    {
      title: "Gurdwara Harmandir Sahib",
      location: "Amritsar, India",
      description: "The holiest Gurdwara in Sikhism",
      details: "Also known as the Golden Temple, it is a symbol of peace and spirituality...",
      image: "/gurudwaras/gurudwaraharmandirsahib.jpg"
    },
    {
      title: "Gurdwara Darbar Sahib Kartarpur",
      location: "Kartarpur, Pakistan",
      description: "Guru Nanak Dev settled after his journey",
      details: "This sacred site marks the place where Guru Nanak Dev Ji spent the last 18 years of his life...",
      image: "/gurudwaras/gurudwarakartarpursahib.jpg"
    },
        {
          title: "Gurdwara Panja Sahib",
          location: "Hasan Abdal, Pakistan",
          description: "Where Guru Nanak Dev met Baba Guru",
          image: "/gurudwaras/panja.jpg",
          details: "This Gurdwara is famous for the miraculous rock with Guru Nanak's handprint...",
        },
        {
          title: "Gurdwara Bangla Sahib",
          location: "Delhi, India",
          description: "Where Guru Har Krishan stayed during cholera outbreak",
          image: "/gurudwaras/banglasahib.jpg",
          details: "A prominent Sikh Gurdwara known for its beautiful architecture and the sacred Sarovar...",

        },
        {
          title: "Gurdwara Sis Ganj Sahib",
          location: "Delhi, India",
          description: "Where Guru Tegh Bahadur was martyred",
          image: "/gurudwaras/sisganj.jpg" ,
          details: "This Gurdwara commemorates the martyrdom of Guru Tegh Bahadur Ji, the ninth Sikh Guru...",
        },
        {
          title: "Gurdwara Nankana Sahib",
          location: "Nankana Sahib, Pakistan",
          description: "Birthplace of Guru Nanak Dev",
          image: "/gurudwaras/nankana.jpg",
          details: "Nankana Sahib is the birthplace of Guru Nanak Dev Ji, the founder of Sikhism. It is a major pilgrimage site for Sikhs...",
        },
        {
          title: "Gurdwara Takht Patna Sahib",
          location: "Patna, India",
          description: "Birthplace of Guru Gobind Singh Ji",
          image: "/takht1.jpg",
          details: "Takht Patna Sahib is one of the five Takhts of Sikhism, located in Patna, Bihar, India. It is the birthplace of Guru Gobind Singh Ji, the tenth Sikh Guru...",
        },
        {
          title: "Gurudwara shri Dukhniwaran Sahib",
          location: "Patiala, India",
          description: "Where Guru Nanak Dev Ji blessed the land",
          image: "/gurudwaras/dukhniwaransahib.jpg",
          details: "This Gurdwara is known for its historical significance and the blessings of Guru Nanak Dev Ji...",
        }
    
  ];

  return (
    <div className="my-12 px-4 relative">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">Historical Gurudwaras</h2>

      {/* Custom Arrows */}
      <div className="absolute top-1/2 -left-4 z-10">
        <button ref={prevRef} className="p-2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full shadow-md">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -right-4 z-10">
        <button ref={nextRef} className="p-2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full shadow-md">
          <ChevronRight size={24} />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {gurudwaras.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl shadow-md p-4 max-w-sm mx-auto text-center">
              <img src={item.image} alt={item.title} className="rounded-xl h-64 w-full object-cover mb-4" />
              <h3 className="text-orange-600 text-xl font-bold">{item.title}</h3>
              <ul className="text-sm text-gray-700 mt-2 list-disc list-inside">
                <li>{item.location}</li>
                <li>{item.description}</li>
              </ul>
              <button
                onClick={() => setSelectedGurudwara(item)}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full"
              >
                Learn More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedGurudwara && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedGurudwara(null)}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-600"
            >
              <X />
            </button>
            <img src={selectedGurudwara.image} className="w-full h-60 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold text-orange-600 mb-2">{selectedGurudwara.title}</h2>
            <p className="text-gray-700 mb-1"><strong>Location:</strong> {selectedGurudwara.location}</p>
            <p className="text-gray-600">{selectedGurudwara.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
