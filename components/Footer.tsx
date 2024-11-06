import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsPinterest, BsFillPlayCircleFill } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';
import BackToTop from './BackToTop';

export default function Footer() {
  return (
    <div className="w-full">
        <BackToTop />
        <div className="w-full mb-10 border-b border-white pb-20 ">
            <div className="relative w-[90%] text-white mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-2 ">
                <div>
                    <Image src="/jhsereno-light.png" alt="logo" width={200} height={50} className='mr-4' />
                </div>
                <div className='flex justify-end space-x-2 pt-5 lg:pt-0'>
                    <h1 className='mt-2 font-bold'>Follow Us:</h1>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className='bg-white rounded-full p-2'>
                        <FaFacebookF className="text-black hover:text-hoverColor" size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className='bg-white rounded-full p-2'>
                        <FaLinkedinIn className="text-black hover:text-hoverColor" size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className='bg-white rounded-full p-2'>
                        <AiFillInstagram className="text-black hover:text-hoverColor" size={24} />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className='bg-white rounded-full p-2'>
                        <BsPinterest className="text-black hover:text-hoverColor" size={24} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className='bg-white rounded-full p-2'>
                        <BsFillPlayCircleFill className="text-black hover:text-hoverColor" size={24} />
                    </a>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className='bg-white rounded-full p-2'>
                        <FaTiktok className="text-black hover:text-hoverColor" size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X" className='bg-white rounded-full p-2'>
                        <FaXTwitter className="text-black hover:text-hoverColor" size={24} />
                    </a>
                </div>
            </div>
        </div>
        <div className="flex w-[90%] border-b border-white mx-auto items-center">
            <div className="relative w-full text-white  grid grid-cols-1 lg:grid-cols-3 gap-2 p-10">
                <div className='flex flex-col justify-center'>
                    <p className='text-xl '>Julie Hansen-Orvis | CA DRE# 00934447</p>
                    <p className='text-xl mt-5'>ADDRESS</p>
                    <p className='text-md mt-2'>4733 Chabot Drive #100</p>
                    <p className='text-md '>Pleasanton, CA 94588</p>
                </div>
                <div className='flex flex-col justify-center space-y-5 pt-5 lg:pt-0'>
                    <p className='text-xl'>Newsletter</p>
                    <p className='text-lg text-gray-500'>Your Weekly/Monthly Dose of Knowledge and Inspiration</p>
                    <div className='relative'>
                        <input 
                            type="email" 
                            placeholder="Enter email address" 
                            className='w-full py-2 px-4 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-hoverColor pr-10'
                        />
                        <button className='absolute inset-y-0 right-0 flex items-center pr-3' aria-label="Subscribe">
                            <FiSend className="text-blue-500 hover:text-hoverColor" size={20} />
                        </button>
                    </div>
                </div>
                <div className='pl-10 pt-5 lg:pt-0'>
                    <div className='flex flex-row space-x-6 h-full items-center'>
                        <Image 
                            src="/realtor.png" 
                            alt="partner1"
                            width={80} 
                            height={10} 
                            className="rounded-md" 
                        />
                        <Image 
                            src="/equal.png" 
                            alt="partner1"
                            width={80} 
                            height={150} 
                            className="rounded-md" 
                        />
                        <Image 
                            src="/sereno-footer.png" 
                            alt="partner1"
                            width={120} 
                            height={150} 
                            className="rounded-md" 
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex w-[90%] mx-auto items-center">
            <div className="relative w-full text-white  grid grid-cols-1 lg:grid-cols-2 gap-2 p-10">
                <div>
                    <p className='text-sm '>Website Designed & Developed by <u>Fernan Retardo</u></p>
                </div>
                <div className='pt-5 lg:pt-0'>
                    <p className='text-sm text-right'>Copyright 2024 | Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}
            
       
