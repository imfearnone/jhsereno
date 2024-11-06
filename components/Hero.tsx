'use client'
import React, { useEffect } from 'react';
import { motion} from 'framer-motion';
import { slideInFromLeft } from '@/data/index';



export default function Hero() {
  return (
    <div className="flex w-full justify-center items-center pt-20 md:pt-32">
      <div className="w-72 h-44 md:w-96 md:h-52 flex items-center justify-center relative" >
        <motion.div 
          className="border-[8px] md:border-[8px] border-hoverColor w-64 h-32 md:w-80 md:h-40"
          initial="hidden"
          whileInView="visible" 
          viewport={{ amount: 0.3 }} 
          variants={slideInFromLeft} 
        ></motion.div>
        
        <div className="absolute w-64 h-32 md:w-80 md:h-40 bottom-0 left-0 bg-white flex items-center justify-center shadow-md">
          <h1 className="text-3xl md:text-5xl font-black">SERVICES</h1>
        </div>
      </div>
    </div>
  );
}
