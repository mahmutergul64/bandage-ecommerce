import React from 'react';
import { FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa';

export default function PricingClients() {
  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <h2 className="text-xl font-bold text-[#252B42] text-center mb-12">
          Trusted By Over 4000 Big Companies
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          <FaHooli className="text-[80px] text-[#737373] hover:text-[#252B42] transition-colors cursor-pointer" />
          <FaLyft className="text-[80px] text-[#737373] hover:text-[#252B42] transition-colors cursor-pointer" />
          <FaPiedPiperHat className="text-[80px] text-[#737373] hover:text-[#252B42] transition-colors cursor-pointer" />
          <FaStripe className="text-[80px] text-[#737373] hover:text-[#252B42] transition-colors cursor-pointer" />
          <FaAws className="text-[80px] text-[#737373] hover:text-[#252B42] transition-colors cursor-pointer" />
          <FaRedditAlien className="text-[80px] text-[#737373] hover:text-[#252B42] transition-colors cursor-pointer" />
        </div>
      </div>
    </div>
  );
}