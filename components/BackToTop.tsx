"use client"

import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="relative">
      {isVisible && (
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setShowTooltip(true)} 
            onMouseLeave={() => setShowTooltip(false)} 
            className="fixed bottom-8 right-8 bg-hoverColor text-white p-2 rounded-full shadow-gray-500 shadow-lg focus:outline-none"
          >
            <IoIosArrowUp className="text-2xl" />
          </button>

          {showTooltip && (
            <span className="fixed mb-3 bottom-16 right-2 bg-black text-white text-sm rounded px-2 py-1 transition-opacity duration-200">
              Back to Top
            </span>
          )}
        </div>
      )}
      
    </div>
  );
}
