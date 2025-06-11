import React from 'react'
import AboutGurudwaras from '../Components/Gurudwaras/AboutGurdwaras'
import Ginfo from '../Components/landing page/Ginfo'
import Slider from '../Components/Gurudwaras/Slider'

const Gurudwaras = () => {
  const [showSlider, setShowSlider] = React.useState(false);

  return (
   <>
  <div className="relative w-full h-[650px]  overflow-hidden">
  <img
    src="/p1.jpg"
    alt="Gurudwara"
    className="w-full h-full object-cover"
  />
 <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 pb-28">
  <div className="backdrop-blur-sm bg-white/10 p-8 rounded-xl shadow-lg ml-12 max-w-3xl">
    <h1 className="text-5xl font-bold text-orange-400 tracking-wide mb-4 uppercase">
      Gurudwaras
    </h1>
    <p className="text-white text-xl leading-relaxed ">
      A Gurudwara is a sacred place of peace, devotion, and selfless service,
      where everyone is welcomed with love and equality.
    </p>
  </div>
</div>


</div>
<div className='bg-white dark:bg-black text-black dark:text-white'>
<AboutGurudwaras/>
<h1 className="text-[4rem] font-bold capitalize text-center text-orange-500 mt-20">some main Gurudwaras
       </h1>
<Ginfo/>
<div className="my-12 px-4">
      {!showSlider && (
        <div className="flex justify-center items-center mt-20">
          <button
            className="bg-orange-400 hover:bg-orange-600 text-[2rem] p-4 rounded-xl"
            onClick={() => setShowSlider(true)}
          >
            VIEW MORE
          </button>

         
        </div>
      )}

      {showSlider &&(
        <>        
        <Slider />
      

      <div className="flex justify-center mt-10">
              <button
                className="bg-orange-500 hover:bg-gray-500 text-black hover:text-white font-semibold px-8 py-4 rounded-lg transition duration-300"
                onClick={() => setShowSlider(false)}
              >
                Show Less
              </button>
            </div>
            </>
      )}
    </div>
    </div>
   </>
  )
}

export default Gurudwaras