import React from 'react';
import { FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa';

export default function BrandLogos() {
  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 text-[#737373]">
          <FaHooli className="text-[150px] sm:text-[100px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
          
          <FaLyft className="text-[150px] sm:text-[100px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
          
          <FaPiedPiperHat className="text-[150px] sm:text-[100px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
          
          <FaStripe className="text-[150px] sm:text-[100px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
          
          <FaAws className="text-[150px] sm:text-[100px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />
          
          <FaRedditAlien className="text-[150px] sm:text-[100px] opacity-90 hover:opacity-100 transition-opacity cursor-pointer" />

        </div>

      </div>
    </div>
  );
}