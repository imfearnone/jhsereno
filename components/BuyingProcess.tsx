'use client';
import React, { useState, useEffect } from 'react';
import { buys } from '@/data/index';
import { motion } from 'framer-motion';


export default function BuyingProcess() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < buys.length - 1 ? prev + 1 : 0)); 
    }, 2000);

    return () => clearInterval(interval); 
  }, []);
  return (
    <div className="w-auto p-10 mb-20">
        <div className='flex flex-col items-center pb-20'>
            <h2 className='text-hoverColor'>WHAT&apos;S THE PROCESS?</h2>
            <h1 className='text-3xl md:text-4xl font-bold'>The Buying Process</h1>
        </div>

        <motion.div
            className="flex flex-col relative md:flex-row"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
        
            {buys.map((step, index) => (
                <div key={index} className="flex md:flex-col items-center mb-6 relative">
                    <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 shadow-md transition duration-300 ease-in-out md:mb-6 ${
                            index <= currentStep ? 'bg-hoverColor text-white' : 'bg-white text-gray-500'
                        }`}
                        >
                        <span className="font-bold">{index + 1}</span>
                    </div>

                    <h3
                        className={`text-[15px] lg:text-lg font-semibold mx-4 transition duration-300 ease-in-out ${
                            index <= currentStep ? 'text-black' : 'text-gray-400 opacity-50'
                        }`}
                        >
                        {step.title}
                    </h3>

                    {index < buys.length - 1 && (
                        <div
                            className={`absolute md:hidden left-5 top-10 w-1 h-full transition-all duration-300 ${
                            index < currentStep ? 'bg-hoverColor' : 'bg-gray-200'
                            }`}
                        ></div>
                    )}
                </div>
            ))}
            <div className="absolute hidden md:flex inset-0 items-center justify-between mb-8 lg:mb-6 xl:mb-3">
                <div className="w-full h-1 bg-gray-200"></div>
                <div
                    className="absolute h-1 bg-hoverColor duration-300"
                    style={{
                    width: `${(currentStep / (buys.length - 1)) * 100}%`,
                    }}
                ></div>
            </div>
        </motion.div>
    </div>
  )
}
