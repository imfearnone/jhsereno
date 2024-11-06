'use client'
import React from 'react'
import Image from 'next/image'
import {sections} from '@/data/index'
import { motion } from 'framer-motion'


export default function OurService() {
  return (
    <div className='w-[90%] mb-20'>
        <div className='flex flex-col items-center pb-20'>
            <h2 className='text-hoverColor'>WHAT WE OFFER?</h2>
            <h1 className='text-3xl md:text-4xl font-bold'>Our Services</h1>
        </div>
        
        
        {sections.map((section, index) => (
            <motion.div
            key={index} className="relative grid grid-cols-1 md:grid-cols-3 gap-2 pt-5 mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
             {/* <div key={index} className="relative grid grid-cols-1 md:grid-cols-3 gap-2 pt-5 mb-10"> */}

                <div className="absolute bottom-0 inset-x-0 bg-white shadow-lg shadow-slate-400 rounded-2xl w-full h-full md:h-[85%]"></div>

                {index % 2 === 0 ? (
                    <>
                        <div className="relative flex flex-col items-center mb-10">
                            {section.title && <h1 className="text-2xl font-bold pt-16 mb-4">{section.title}</h1>}
                            {section.subtitle && <h2 className="text-2xl font-semibold mb-2">{section.subtitle}</h2>}
                            {section.points && (
                                <ul className="text-gray-700 list-disc pl-10">
                                    {section.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {section.images.map((imageSrc, i) => (
                            <div key={i} className="relative w-full h-80 md:h-full">
                                <Image 
                                    src={imageSrc} 
                                    alt={`${section.title} ${i + 1}`} 
                                    layout="fill" 
                                    className="object-cover md:rounded-t-2xl" 
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {section.images.map((imageSrc, i) => (
                            <div key={i} className="relative w-full h-80 md:h-full">
                                <Image 
                                    src={imageSrc} 
                                    alt={`${section.title} ${i + 1}`} 
                                    layout="fill" 
                                    className="object-cover md:rounded-t-2xl" 
                                />
                            </div>
                        ))}

                        <div className="relative flex flex-col items-center mb-10">
                            {section.title && <h1 className="text-2xl font-bold pt-16 mb-4">{section.title}</h1>}
                            {section.subtitle && <h2 className="text-2xl font-semibold mb-2">{section.subtitle}</h2>}
                            {section.points && (
                                <ul className="text-gray-700 list-disc pl-10">
                                    {section.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </>
                )}
            </motion.div>
        ))}
        
    </div>
  )
}