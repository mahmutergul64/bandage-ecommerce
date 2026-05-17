import React from 'react';

export default function AboutContent() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1050px] flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24">
        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h4 className="text-[#E74040] text-sm font-bold tracking-wider">
            Problems trying
          </h4>
          <h2 className="text-[#252B42] text-[24px] md:text-[32px] font-bold leading-tight md:leading-snug max-w-[280px] md:max-w-none mx-auto md:mx-0">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left flex justify-center md:justify-start mt-2 md:mt-0">
          <p className="text-[#737373] text-sm md:text-base leading-relaxed max-w-[300px] md:max-w-none">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

      </div>
    </div>
  );
}