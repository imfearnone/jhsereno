'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function About() {
  return (
    <div className="w-[90%] mb-20">
        <motion.div
            className="relative text-black grid grid-cols-1 lg:grid-cols-2 gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }} 
        >
            <div className='flex flex-col h-96 justify-center '>
                <h1 className='text-2xl font-bold mb-5'>Julie Hansen Partnership</h1>
                <p className='text-gray-700'>
                    An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and 
                    sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. 
                    In a word, more of everything people should expect when they buy or sell their homes.
                </p>
            </div>
            <div className='w-full rounded-2xl'>
                <h1 className='text-2xl font-bold'>We are located here:</h1>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.9343871652284!2d-121.9011939874779!3d37.69712620167191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe955ecb36ad3%3A0xf7f1bc0d44227acd!2s4733%20Chabot%20Dr%20STE%20100%2C%20Pleasanton%2C%20CA%2094588%2C%20USA!5e1!3m2!1sen!2sph!4v1730830066064!5m2!1sen!2sph" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: 'inherit'}} 
                    loading="lazy"
                ></iframe>
            </div>
        </motion.div>
    </div>
  )
}
