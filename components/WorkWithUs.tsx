'use client'
import { slideInFromLeft } from '@/data/index';
import { motion } from 'framer-motion';
import React from 'react'

export default function WorkWithUs() {
  return (
    <div 
        className="w-full h-auto bg-cover bg-center pb-32" 
        style={{ 
            backgroundImage: "url('/work-img2.jpg')", 
          }}
        >
        <div className="flex flex-col w-full justify-center items-center pt-20 md:pt-32">
            <div className=' w-72 h-44 md:w-96 md:h-52 flex items-center justify-center relative '>
                <motion.div 
                    className="border-[8px] md:border-[8px] border-hoverColor w-64 h-32 md:w-80 md:h-40"
                    initial="hidden"
                    whileInView="visible" 
                    viewport={{ amount: 0.3 }} 
                    variants={slideInFromLeft} 
                ></motion.div>

                <div className="absolute w-64 h-32 md:w-80 md:h-40 bottom-0 left-0 bg-white flex items-center justify-center shadow-md">
                    <h1 className="text-3xl md:text-3xl font-black">Work With Us</h1>
                </div>
            </div>
            <div>
                <p className='flex text-white text-lg text-center w-[50%] mx-auto mt-16'>
                    With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams are a reality. Let us guide you through your home buying journey, contact us today!
                </p>
                <div className='text-center mt-16'>
                    <button className='text-hoverColor text-lg font-bold border-2 border-hoverColor p-5 pl-16 pr-16 hover:bg-hoverColor hover:text-white'>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}
