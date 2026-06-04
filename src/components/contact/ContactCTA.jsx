import React from 'react';

export default function ContactCTA() {
  return (
    <div className="bg-white py-24 flex flex-col items-center justify-center text-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h6 className="text-[#252B42] font-bold text-sm md:text-base tracking-wide mb-4">
          WE Can't WAIT TO MEET YOU
        </h6>
        <h2 className="text-[40px] md:text-[58px] font-bold text-[#252B42] mb-8">
          Let’s Talk
        </h2>
        <button className="bg-[#23A6F0] text-white font-bold text-sm px-10 py-4 rounded-md hover:bg-blue-600 transition-all shadow-md hover:scale-105">
          Try it free now
        </button>
      </div>
    </div>
  );
}