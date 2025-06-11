import React from 'react'
import { useNavigate } from 'react-router-dom'

const Servicesitem = [
  {
    id: 1,
    title: 'Gurudwaras',
    description: 'Free food for all',
    image: '/icons/gurudwara.jpg',
    bgColor: 'bg-orange-800',
    route: "/Gurudwaras"
  },  
    {
        id: 2,
        title: 'Sewa',
        description: 'Selfless service to the communityy',
        image: '/icons/donation.jpg',
        bgColor: 'bg-blue-900',
        route:""
    },
    {
        id: 3,
        title: 'About Us',
        description: 'Learn about our mission and values',
        image: '/icons/about.jpg',
        bgColor: 'bg-orange-800',
        route:"/about"
    },
    {
        id: 4,
        title: 'History',
        description: 'Spiritual and moral education',
        image: '/icons/history.jpg',
        bgColor: 'bg-blue-900',
        route:"/history"
    },
    {
        id: 5,
        title: 'Contact',
        description: 'Free medical services and check-ups',
        image: '/icons/contacts.png',
        bgColor: 'bg-orange-800',
        route:""
    }
]


const Services =() => {
  const navigate = useNavigate()
  return (
    <>
<h1 className="text-orange-500 text-[4.6rem] text-center mt-20 font-bold font-serif">Our Services</h1>
<div className="flex flex-col md:flex-row flex-wrap  cursor-pointer gap-16 mt-7 justify-center items-center bg-white dark:bg-black text-black dark:text-white">
  {Servicesitem.map((service) => (
    <div key={service.id} className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
    onClick={() => navigate(service.route)}
    >
     
      <div
        className={`${service.bgColor} w-[230px] h-[230px] rounded-full flex justify-center items-center transition-transform duration-300 hover:shadow-[0_0_75px_white]`}
      >
        <img src={service.image} alt={service.title} className="w-36 h-36" />
      </div>
      <p className=" text-[2rem] mt-4">{service.title}</p>
    </div>
  ))}
</div>
    </>
  )

}
export default Services