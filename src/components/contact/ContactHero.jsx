import React from 'react';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import familyImage from '../../assets/family.png';

export default function ContactHero() {
  return (
    <div className="bg-white py-16 md:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-[1050px] flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h4 className="text-[#252B42] font-bold text-sm tracking-widest mb-6 uppercase">
            Contact Us
          </h4>
          <h1 className="text-4xl md:text-[58px] font-bold text-[#252B42] leading-tight mb-8">
            Get in touch <br className="hidden md:block" /> today!
          </h1>
          <p className="text-[#737373] text-base md:text-xl max-w-[400px] mb-12 leading-relaxed font-normal">
            We know how large objects will act, but things on a small scale
          </p>
          
          <div className="flex flex-col gap-6 mb-16">
            <h3 className="text-[#252B42] font-bold text-2xl">
              Phone : +451 215 215
            </h3>
            <h3 className="text-[#252B42] font-bold text-2xl">
              Fax : +451 215 215
            </h3>
          </div>

          <div className="flex items-center gap-6">
            <FaTwitter className="text-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <FaFacebookSquare className="text-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <FaInstagram className="text-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors" />
            <FaLinkedin className="text-[30px] text-[#252B42] cursor-pointer hover:text-[#23A6F0] transition-colors" />
          </div>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-12 md:mt-0 min-h-[600px] md:ml-20">
          
          <div className="absolute w-[350px] h-[350px] md:w-[484px] md:h-[484px] bg-[#FFE9EA] rounded-full -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="absolute w-[15px] h-[15px] bg-[#23A6F0] rounded-full top-[10%] left-[10%]"></div>
          <div className="absolute w-[40px] h-[40px] bg-[#977DF4] rounded-full top-[15%] right-[10%]"></div>
          <div className="absolute w-[15px] h-[15px] bg-[#23A6F0] rounded-full top-[35%] right-[-5%]"></div>
          <div className="absolute w-[20px] h-[20px] bg-[#977DF4] rounded-full top-[45%] left-[5%]"></div>
          <div className="absolute w-[15px] h-[15px] bg-[#23A6F0] rounded-full bottom-[20%] left-[15%]"></div>
          <div className="absolute w-[20px] h-[20px] bg-[#977DF4] rounded-full bottom-[25%] right-[5%]"></div>
          
          <img 
            src={familyImage} 
            alt="Family shopping" 
            className="z-10 drop-shadow-2xl relative w-full max-w-[450px] md:max-w-none md:w-[1000px] h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}