import React from 'react';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function PricingCTA() {
  return (
    <div className="bg-white py-32">
      <div className="container mx-auto px-4 max-w-[1050px] flex flex-col items-center text-center">
        
        <h2 className="text-[40px] font-bold text-[#252B42] mb-6 tracking-tight">
          Start your 14 days free trial
        </h2>
        
        <p className="text-[#737373] text-sm max-w-[420px] mb-8 leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </p>
        
        <button className="bg-[#23A6F0] text-white font-bold px-10 py-4 rounded-md hover:bg-blue-600 transition-all shadow-md mb-20">
          Try it free now
        </button>
        
        <div className="flex items-center gap-8">
          <FaTwitter className="text-[30px] text-[#55ACEE] cursor-pointer hover:scale-110 transition-transform" />
          <FaFacebookSquare className="text-[30px] text-[#395185] cursor-pointer hover:scale-110 transition-transform" />
          <FaInstagram className="text-[30px] text-[#000000] cursor-pointer hover:scale-110 transition-transform" />
          <FaLinkedin className="text-[30px] text-[#0A66C2] cursor-pointer hover:scale-110 transition-transform" />
        </div>

      </div>
    </div>
  );
}