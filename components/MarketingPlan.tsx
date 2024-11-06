'use client'
import { items } from '@/data/index';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function MarketingPlan() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='w-[90%] pt-20 md:pt-32'>
        <div className='flex flex-col items-center'>
            <h2 className='text-hoverColor'>WHAT WE DO?</h2>
            <h1 className='text-3xl md:text-4xl font-bold'>Comprehensive Marketing Plan</h1>
        </div>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-14 pb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
            {items.map((item, index) => (
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
                    <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
            ))}
        </motion.div>
    </div>
  )
}
