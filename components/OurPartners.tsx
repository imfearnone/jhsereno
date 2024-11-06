'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { itemsCopy } from '@/data/index'
import { motion } from 'framer-motion'

export default function OurPartners() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="w-[90%] mb-20">
        <div className="flex flex-col items-center pb-20">
            <h2 className="text-hoverColor">OUR PARTNERS</h2>
            <h1 className="text-3xl lg:text-4xl font-bold">Let's Meet Our Partners</h1>
        </div>


        <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
            <div className="absolute bottom-0 inset-x-0 shadow-lg bg-white shadow-slate-400 rounded-2xl w-full h-full lg:h-[90%]"></div>
            <div className="relative flex flex-col items-center justify-center mb-10 lg:mb-14 xl:h-[500px] 2xl:h-[550px] p-7">
                <div className="relative grid grid-cols-1 items-center md:grid-cols-3 gap-2 pt-16 mb-10">
                    <div>
                        <Image 
                            src="/partner1.png" 
                            alt="partner1"
                            width={150} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/partner2.png" 
                            alt="partner2"
                            width={190} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/partner3.png" 
                            alt="partner3"
                            width={210} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>

                </div>
                <p className="text-gray-700 p-4">
                    Leading Real Estate Companies of The World® & Luxury Portfolio International
                </p>
                <p className="text-gray-700 p-4">
                    JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more 
                    than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.
                </p>
                <p className="text-gray-700 p-4">
                    Who's Who in Luxury Real Estate
                </p>
                <p className="text-gray-700 p-4">
                    Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.
                </p>
            </div>

            <div className='relative w-full h-96 md:h-[550px] lg:h-full'>
                <Image 
                    src="/partner-img1.png" 
                    alt="Decor Guidance 1" 
                    layout="fill" 
                    className="object-cover rounded-b-2xl lg:rounded-b-none lg:rounded-br-2xl lg:rounded-t-2xl" 
                />
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
            <div className='relative w-full h-96 md:h-[550px] lg:h-full'>
                <Image 
                    src="/partner-img2.png" 
                    alt="Decor Guidance 1" 
                    layout="fill" 
                    className="object-cover rounded-t-2xl lg:rounded-b-none lg:rounded-bl-2xl lg:rounded-t-2xl" 
                />
            </div>
            <div className="relative flex flex-col items-center justify-center mb-10 lg:mb-14 xl:h-[500px] 2xl:h-[550px] p-7">
                <p className="text-gray-700 p-4">
                    Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
                </p>

                <div className="relative grid grid-cols-1 items-center md:grid-cols-3 gap-2 pt-16 mb-10">
                    <div>
                        <Image 
                            src="/partner1.png" 
                            alt="partner1"
                            width={150} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/partner2.png" 
                            alt="partner2"
                            width={190} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>
                    <div>
                        <Image 
                            src="/partner3.png" 
                            alt="partner3"
                            width={210} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>

                </div>
                
                <p className="text-gray-700 p-4">
                    We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing. 
                </p>
            </div>
        </motion.div>

        <div className="flex flex-col w-full lg:w-[50%] justify-center items-center mx-auto bg-white mt-10 rounded-2xl shadow-lg shadow-slate-400">
            <p className="text-gray-700 p-6">
                Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
            </p>
        </div>
        
        <motion.div
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
            <div className="absolute bottom-0 inset-x-0 shadow-lg bg-white shadow-slate-400 rounded-2xl w-full h-full lg:h-[90%]"></div>
            <div className="relative flex flex-col items-center justify-center mb-10 lg:mb-14 xl:h-[900px] 2xl:h-[900px] p-7">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-32">
                    {itemsCopy.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center border border-gray-300 rounded-3xl pb-10 hover:border-none hover:shadow-lg hover:shadow-slate-400"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                animate={hoveredIndex === index ? { rotateY: 360 } : { rotateY: 0 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-md"
                            >
                                <Image src={item.imgSrc} alt={item.title} width={200} height={150} className="rounded-md" />
                            </motion.div>
                            
                            <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                            <p className="mt-2 p-2 text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-full h-96 md:h-[550px] lg:h-full">
                <div className="relative w-full h-full lg:w-full 2xl:w-[80%] 2xl:ml-auto">
                    <Image 
                    src="/phone-img.png" 
                    alt="phone" 
                    layout="fill" 
                    className="object-contain lg:object-cover rounded-t-2xl lg:rounded-b-none lg:rounded-br-[50px] lg:rounded-t-[50px]" 
                    />
                </div>
            </div>
        </motion.div>
    </div>
  )
}
