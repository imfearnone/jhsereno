'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { marketData } from '@/data/index';

export default function Market() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="w-[90%] mb-20">
        <div className="flex flex-col items-center pb-5">
            <h2 className="text-hoverColor">OUR MARKET</h2>
            <h1 className="text-3xl lg:text-4xl font-bold">We Market Your Home to The World</h1>
        </div>
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold pb-2">Our Online Marketing Strategy</h2>
            <p className="text-gray-700">​​​​​​​The Bay Area remains one of the world's most sought-after regions to live in, 
                and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and 
                internationally.
            </p>
        </div>

        <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-2 pt-5 mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >

        
            {marketData.map((item, index) => (
                <div 
                    key={item.id}
                    className="flex flex-col items-center p-5 border border-gray-300 rounded-3xl hover:border-none hover:shadow-lg hover:shadow-slate-400"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="mb-2">
                        <motion.div 
                            animate={hoveredIndex === index ? { rotateY: 360 } : { rotateY: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-md"
                        >
                            <Image 
                            src={item.image} 
                            alt={item.title} 
                            width={200} 
                            height={150} 
                            className="rounded-md" 
                            />
                        </motion.div>
                    </div>
                    <h3 className="text-xl font-bold text-center">{item.title}</h3>
                    <p className="text-center text-gray-700 pt-5 pb-10">
                        {item.description}
                    </p>
                </div>
            ))}
        </motion.div>

        <motion.div
            className='flex justify-center pb-20'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
        
            <Image 
                src="/market.png" 
                alt="Virtual Tour" 
                width={350} 
                height={100} 
                className="rounded-md" 
            />
        </motion.div>
    </div>
  );
}
