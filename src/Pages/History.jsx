import React from 'react'
import Tengurus from '../Components/History/Tengurus'
import Fivepyaras from '../Components/History/Fivepyaras'

const History = () => {
    return (
        <>
            <div className="bg-white dark:bg-black text-black dark:text-white">
                {/* Hero Section */}
                <div className="relative w-full h-96 md:h-[650px] overflow-hidden">
        <img
          src="/bg2.jpg"
          alt="Gurudwara"
          className="w-full  h-96   md:h-full object-cover md:object-fill   "
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
        <div className="absolute top-[40%] md:top-[40%] left-4 md:left-24 text-left">
  <h1 className="text-white/80 text-3xl md:text-6xl font-serif font-semibold leading-tight">
    History
  </h1>
  <h2 className="text-white/60 text-2xl md:text-4xl font-serif pt-1">
    of Sikhism
  </h2>
</div>

        </div>
      </div>

                {/* Intro Paragraph */}
                <div className='w-[90%] md:w-[50rem] mx-auto mt-14 text-center px-4'>
                    <h1 className='text-orange-500 font-bold font-serif text-[2.5rem] sm:text-[3rem] md:text-[4rem] my-7'>HISTORY</h1>
                    <p className='text-base sm:text-lg md:text-xl font-semibold'>
                        Sikhism was founded by Guru Nanak Dev Ji and guided by nine successive Gurus, each contributing to the faith's spiritual and social principles. The ten Gurus are Guru Nanak Dev Ji, Guru Angad Dev Ji, Guru Amar Das Ji, Guru Ram Das Ji, Guru Arjan Dev Ji, Guru Hargobind Ji, Guru Har Rai Ji, Guru Har Krishan Ji, Guru Tegh Bahadur Ji, and Guru Gobind Singh Ji. Guru Gobind Singh Ji declared the Guru Granth Sahib, the holy scripture, as the eternal Guru, ending the line of human Gurus. They emphasized equality, service, devotion, and courage.
                    </p>
                </div>

              {/* Guru Nanak Dev Ji */}
<img
  src="/tengurus/gurunanakdevji.jpg"
  className="img-fluid rounded-top ml-4 md:ml-10 rounded-lg h-60 md:h-80 mt-7 md:-mt-60"
  alt=""
/>
<div className="ml-4 md:ml-16 mt-2 md:mt-4 w-[10rem] md:w-[12rem] text-center">
  <p className="text-xl md:text-[2rem] bg-white dark:bg-black text-black dark:text-white">
    Shri Guru Nanak Dev ji
  </p>
</div>

{/* Guru Gobind Singh Ji */}
<div className="flex justify-end items-center">
  <img
    src="/tengurus/Gurugobindsinghg.jpg"
    className="img-fluid rounded-top mr-4 md:mr-10 rounded-lg h-60 md:h-80 -mt-2 md:-mt-[540px]"
    alt=""
  />
</div>
<div className="flex justify-end items-center">
  <p className="text-xl md:text-[2rem] mr-8 md:mr-14 mt-6 md:-mt-24 w-[10rem] md:w-[12rem] text-center bg-white dark:bg-black text-black dark:text-white">
    Shri Guru Gobind Singh ji
  </p>
</div>


                {/* TEN GURUS Section */}
                <div className='w-[90%] md:w-[50rem] mx-auto mt-14 text-center px-4'>
                    <h1 className='text-orange-500 font-bold font-serif text-[2.5rem] sm:text-[3rem] md:text-[4rem] my-7'>TEN GURUS</h1>
                    <p className='text-base sm:text-lg md:text-xl font-semibold'>
                        The Ten Gurus of Sikhism are revered spiritual leaders who shaped the faith's teachings and principles. Each Guru contributed to the development of Sikhism, emphasizing values such as equality, service, and devotion to God. Their teachings continue to guide Sikhs worldwide in their spiritual journey.
                    </p>
                </div>

                {/* Gurus Cards */}
                <div className="flex flex-wrap justify-center items-center gap-10 mt-20 px-4">
                    <Tengurus />
                </div>

                {/* Five Pyaras */}
                <div className='w-[90%] md:w-[50rem] mx-auto mt-24 text-center px-4'>
                    <Fivepyaras />
                </div>
            </div>
        </>
    )
}

export default History
