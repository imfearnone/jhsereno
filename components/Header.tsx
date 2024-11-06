'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.4, duration: 0.5, ease: 'easeOut' }
    })
  };

  return (
    <motion.nav
      className="flex bg-white p-5 shadow-lg shadow-slate-400"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='container mx-auto flex items-center justify-between'>
        <motion.div
          className='flex items-center'
          variants={navVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <Image src="/jhsereno-dark.png" alt="logo" width={125} height={50} className='mr-4' />
        </motion.div>

        <div className='hidden xl:flex text-xs font-black 2xl:text-md space-x-2'>
          {['MEET THE TEAM', 'SEARCH FOR HOMES', 'OUR COMMUNITIES', 'HOME VALUATION', 'SERVICES', 'HOMES ACROSS AMERICA', 'TESTIMONIALS', 'CONTACT US'].map((text, index) => (
            <motion.a
              key={index}
              href="#"
              className='text-black px-3 py-2 rounded-md relative group whitespace-nowrap'
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {text}
              <span className="block h-[2px] bg-hoverColor w-0 transition-all duration-700 group-hover:w-full absolute bottom-0 left-0" />
            </motion.a>
          ))}
        </div>

        <div className='xl:hidden'>
          <button onClick={toggleMenu} className='text-black focus:outline-none hover:text-hoverColor'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='xl:hidden fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg transition-transform duration-300'>
          <div className='flex flex-col h-full p-4'>
            <button onClick={toggleMenu} className='absolute top-4 right-4 text-black focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className='flex flex-col items-center justify-center flex-grow'>
              <h2 className='text-xl font-bold mb-4'>MENU</h2>
              <div className='flex flex-col items-center'>
                {['MEET THE TEAM', 'SEARCH FOR HOMES', 'OUR COMMUNITIES', 'HOME VALUATION', 'SERVICES', 'HOMES ACROSS AMERICA', 'TESTIMONIALS', 'CONTACT US'].map((text, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className='block py-2 text-center relative group'
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index} 
                  >
                    {text}
                    <span className="block h-[2px] bg-hoverColor w-0 transition-all duration-700 group-hover:w-full absolute bottom-0 left-0" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
