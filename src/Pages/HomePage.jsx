import React from 'react'
import { Link } from 'react-router-dom'
import Ginfo from '../Components/landing page/Ginfo'
import Services from '../Components/landing page/Services'
import Hero from '../Components/landing page/Hero'
import Quotes from '../Components/landing page/Quotes'


const HomePage = () => {
  return (
   <>
   <div className='bg-white dark:bg-black text-black dark:text-white'>
   <Hero />
   <div className=" min-h-screen -my-3.5 mb-40  p-4 bg-white dark:bg-black text-black dark:text-white">
  
  
  <Services />
  <h1 className="text-[4rem] font-bold uppercase text-center mt-40 font-serif">
        five <span className="text-orange-600">takhts</span> of sikhism
      </h1>
  <Ginfo />
  <div className='flex justify-center items-center mt-20'>
     <Link to="/gurudwaras" className="bg-orange-400 text-[2rem] p-4 rounded-xl hover:bg-orange-500 hover:scale-110 transition-transform duration-300">View history</Link>
      </div>
  <Quotes />
    </div>
    </div>
   </>
  )
}

export default HomePage