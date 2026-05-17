import React from 'react';
import { FaHooli, FaLyft, FaPiedPiperHat, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa';

const clientLogos = [
  { id: 1, Icon: FaHooli },
  { id: 2, Icon: FaLyft },
  { id: 3, Icon: FaPiedPiperHat },
  { id: 4, Icon: FaStripe },
  { id: 5, Icon: FaAws },
  { id: 6, Icon: FaRedditAlien },
];

export default function AboutClients() {
  return (
    <div className="w-full bg-[#FAFAFA] py-16 md:py-24 animate-fadeIn">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <div className="text-center flex flex-col items-center mb-16 md:mb-20">
          
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#252B42] mb-6 leading-tight max-w-[280px] md:max-w-none mx-auto">
            Big Companies Are Here
          </h2>
          
          <p className="text-[#737373] text-sm md:text-base font-semibold leading-relaxed max-w-[300px] md:max-w-none mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8 mt-16 md:mt-20">
          
          {clientLogos.map(({ id, Icon }) => (
            <Icon 
              key={id} 
              className="text-[90px] md:text-[100px] text-[#737373] hover:text-[#252B42] hover:scale-110 transition-all cursor-pointer" 
            />
          ))}
          
        </div>

      </div>
    </div>
  );
}