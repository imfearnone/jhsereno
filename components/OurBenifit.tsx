'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OurBenefit() {
  return (
    <div className="w-[90%] mb-20">
        <div className="flex flex-col items-center pb-20">
            <h2 className="text-hoverColor">OUR BENEFIT</h2>
            <h1 className="text-3xl lg:text-4xl font-bold">Why Choose Pleasanton Real Estate</h1>
        </div>

        <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
            <div className="absolute bottom-0 inset-x-0 shadow-lg bg-white shadow-slate-400 rounded-2xl w-full h-full lg:h-[90%]"></div>
            <div className="relative flex flex-col justify-center mb-10 lg:mb-14 xl:h-[500px] 2xl:h-[550px] p-7">
                <h1 className='text-2xl font-bold pt-16 mb-4'>Over 33 Years of Real Estate Success</h1>
                <p className="text-gray-700">
                    We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. ​​​​​​
                    ​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.
                </p>
            </div>
            <div className='relative w-full h-96 md:h-[550px] lg:h-full'>
                <Image 
                    src="/choose1.png" 
                    alt="Decor Guidance 1" 
                    layout="fill" 
                    className="object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-br-2xl lg:rounded-t-2xl" 
                />
            </div>
        </motion.div>

        <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 pt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
        
            <div className="absolute bottom-0 inset-x-0 bg-white shadow-lg shadow-slate-400 rounded-2xl w-full h-[85%]"></div>
            <div className='relative w-full h-96 md:h-[550px] lg:h-full'>
                <Image 
                    src="/choose2.png" 
                    alt="Decor Guidance 1" 
                    layout="fill" 
                    className="object-cover rounded-t-2xl lg:rounded-bl-2xl" 
                />
            </div>
            <div className='relative flex flex-col justify-center mb-10 xl:h-[450px] 2xl:h-[580px] p-7'>
                <h1 className='text-2xl font-bold pt-16 mb-4'>We Want To Create An Unforgettable Experience For You...</h1>
                <p className="text-gray-700 ">
                    We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing 
                    plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, 
                    and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.
                </p>
            </div>
        </motion.div>
        
        <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
       
            <div className="absolute bottom-0 inset-x-0 shadow-lg bg-white shadow-slate-400 rounded-2xl w-full h-full lg:h-[90%]"></div>
            <div className="relative flex flex-col mb-10 p-7">
                <h1 className='text-2xl font-bold pt-16 mb-4'>The Hansen Partners Communications Tablet</h1>
                <p className="text-gray-700">
                    We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening 
                    with your home. We are available at the with a click of your tablet.
                </p>
                <h3 className=' text-gray-700 pt-3'>Benefits:</h3>
                <ul className="mt-4 list-disc pl-6 text-gray-700">
                    <li className='text-gray-700'>Review all documents and sign in the comfort of your home or anywhere.</li>
                    <li className='text-gray-700'>Stay up to date on all marketing activities, review materials, photos, etc. in real time.</li>
                    <li className='text-gray-700'>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
                    <li className='text-gray-700'>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a 
                        video message to us for fast communication using our Bomb bomb video messaging system.</li>
                </ul>
                <p className="text-gray-700 pt-2">
                    We believe that transparency and guiding you and your family through the process is key to having the best experience.  During these uncertain times. 
                    It is a good feeling to know you have some one with a proven track record you can count on.  We will be here to handle your needs during the Real Estate process.  
                    We think of it before a need even arises. Because, that is just what we do.  Who you work with does matter! 
                </p>
            </div>
            <div className='relative w-full h-56 md:h-80 lg:h-full'>
                <Image 
                    src="/choose3.png" 
                    alt="Decor Guidance 1" 
                    layout="fill" 
                    className="object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-br-2xl lg:rounded-t-2xl" 
                />
            </div>
        </motion.div>

    </div>
  );
}
