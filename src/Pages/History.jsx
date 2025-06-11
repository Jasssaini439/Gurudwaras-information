import React from 'react'
import Tengurus from '../Components/History/Tengurus'
import Fivepyaras from '../Components/History/Fivepyaras'

const History = () => {
    return (
        <>
            <div className="bg-white dark:bg-black text-black dark:text-white">
            <div className="relative w-full h-[650px]  overflow-hidden">
                <img
                    src="/bg2.jpg"
                    alt="Gurudwara"
                    className="w-full h-full object-fill"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6 ">
                    <h1 className=' text-white/25 hover:text-white/60 text-[5rem] font-serif text-center mt-80 capitalize'>History of sikhism</h1>
                </div>
            </div>
            <div className='w-[50rem]  mx-80 mt-14 text-center'>

                <h1 className='text-orange-500 font-bold font-serif text-[4rem] my-7'>HISTORY</h1>


                <p className=' text-xl font-semibold bg-white dark:bg-black text-black dark:text-white'>

                    Sikhism was founded by Guru Nanak Dev Ji and guided by nine successive Gurus, each contributing to the faith's spiritual and social principles. The ten Gurus are Guru Nanak Dev Ji, Guru Angad Dev Ji, Guru Amar Das Ji, Guru Ram Das Ji, Guru Arjan Dev Ji, Guru Hargobind Ji, Guru Har Rai Ji, Guru Har Krishan Ji, Guru Tegh Bahadur Ji, and Guru Gobind Singh Ji. Guru Gobind Singh Ji declared the Guru Granth Sahib, the holy scripture, as the eternal Guru, ending the line of human Gurus. They emphasized equality, service, devotion, and courage.

                </p>
            </div>
            <img
                src="/tengurus/gurunanakdevji.jpg"
                class="img-fluid rounded-top -mt-60 ml-10 rounded-lg h-80"
                alt=""
            />
            <div className=' ml-16 mt-4 w-[12rem] text-center'>
                <p className=" text-[2rem] bg-white dark:bg-black text-black dark:text-white">Shri Guru Nanak Dev ji</p>
            </div>


            <div className="flex justify-end items-center">

                <img
                    src="/tengurus/Gurugobindsinghg.jpg"
                    className="img-fluid rounded-top -mt-[540px] mr-10 rounded-lg h-80"
                    alt=""
                />
            </div>
            <div className="flex justify-end items-center">
                <p className="text-[2rem]  -mt-24 mr-14 w-[12rem] text-center bg-white dark:bg-black text-black dark:text-white">Shri Guru Gobing Singh ji</p>
            </div>


            <div className='w-[50rem]  mx-80 mt-14 text-center'>
                <h1 className='text-orange-500 font-bold font-serif text-[4rem] my-7'>TEN GURUS</h1>
                <p className='text-xl font-semibold bg-white dark:bg-black text-black dark:text-white'>
                    The Ten Gurus of Sikhism are revered spiritual leaders who shaped the faith's teachings and principles. Each Guru contributed to the development of Sikhism, emphasizing values such as equality, service, and devotion to God. Their teachings continue to guide Sikhs worldwide in their spiritual journey.
                </p>
            </div>

            <div className="flex flex-wrap justify-center md:flex-row gap-10  items-center mt-20">
                
                <Tengurus/>

            </div>


            <div className='w-[50rem]  mx-80 mt-24 text-center '>
                <Fivepyaras />
                </div>
            </div>
        </>
    )
}

export default History