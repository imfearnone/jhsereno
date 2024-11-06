'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Hero() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
      });
    } else {
      controls.start({
        x: -200,
        opacity: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
      });
    }
  }, [controls, inView]);

  return (
    <div className="flex w-full justify-center items-center pt-20 md:pt-32">
      <div className="w-72 h-44 md:w-96 md:h-52 flex items-center justify-center relative" ref={ref}>
        
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={controls}
          className="border-[8px] md:border-[8px] border-hoverColor w-64 h-32 md:w-80 md:h-40"
        ></motion.div>
        
        <div className="absolute w-64 h-32 md:w-80 md:h-40 bottom-0 left-0 bg-white flex items-center justify-center shadow-md">
          <h1 className="text-3xl md:text-5xl font-black">SERVICES</h1>
        </div>
      </div>
    </div>
  );
}
