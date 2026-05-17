import React from 'react';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function TeamCTA() {
  return (
    <div className="w-full bg-white py-24">
      <div className="container mx-auto px-4 max-w-[600px] flex flex-col items-center text-center">
        
        <h2 className="text-[40px] font-bold text-[#252B42] leading-[50px] mb-6">
          Start your 14 days free trial
        </h2>
        
        <p className="text-sm sm:text-base text-[#737373] mb-10">
          Met minim Mollie non desert Alamo est sit cliquey dolor <br className="hidden sm:block" />
          do met sent. RELIT official consequent.
        </p>
        
        <button className="bg-[#23A6F0] hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-[5px] transition-colors mb-12">
          Try it free now
        </button>
        
        <div className="flex gap-8 text-[30px]">
          {/* Twitter */}
          <a href="#" className="text-[#55ACEF] hover:scale-110 transition-transform">
            <FaTwitter />
          </a>
          
          <a href="#" className="text-[#395185] hover:scale-110 transition-transform">
            <FaFacebookSquare />
          </a>
          
          <a href="#" className="text-black hover:scale-110 transition-transform">
            <FaInstagram />
          </a>
          
          <a href="#" className="text-[#0A66C2] hover:scale-110 transition-transform">
            <FaLinkedin />
          </a>
        </div>
        
      </div>
    </div>
  );
}