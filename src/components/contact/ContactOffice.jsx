import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export default function ContactOffice() {
  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <h6 className="text-[#252B42] font-bold text-sm tracking-widest mb-4 uppercase">
            VISIT OUR OFFICE
          </h6>
          <h2 className="text-[40px] font-bold text-[#252B42] max-w-[500px] leading-tight">
            We help small businesses with big ideas
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center">
          
          <div className="bg-white px-10 py-16 flex flex-col items-center w-full md:w-[330px]">
            <Phone className="text-[#23A6F0] mb-6" size={72} strokeWidth={1} />
            <p className="text-[#252B42] font-bold text-sm mb-1">georgia.young@example.com</p>
            <p className="text-[#252B42] font-bold text-sm mb-4">georgia.young@ple.com</p>
            <h5 className="text-[#252B42] font-bold text-base mb-6">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] font-bold px-6 py-3 rounded-full hover:bg-[#23A6F0] hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

          <div className="bg-[#252B42] px-10 py-20 flex flex-col items-center w-full md:w-[330px] shadow-2xl transform md:scale-110 z-10 my-8 md:my-0">
            <MapPin className="text-[#23A6F0] mb-6" size={72} strokeWidth={1} />
            <p className="text-white font-bold text-sm mb-1">georgia.young@example.com</p>
            <p className="text-white font-bold text-sm mb-4">georgia.young@ple.com</p>
            <h5 className="text-white font-bold text-base mb-6">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] font-bold px-6 py-3 rounded-full hover:bg-[#23A6F0] hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

          <div className="bg-white px-10 py-16 flex flex-col items-center w-full md:w-[330px]">
            <Mail className="text-[#23A6F0] mb-6" size={72} strokeWidth={1} />
            <p className="text-[#252B42] font-bold text-sm mb-1">georgia.young@example.com</p>
            <p className="text-[#252B42] font-bold text-sm mb-4">georgia.young@ple.com</p>
            <h5 className="text-[#252B42] font-bold text-base mb-6">Get Support</h5>
            <button className="border border-[#23A6F0] text-[#23A6F0] font-bold px-6 py-3 rounded-full hover:bg-[#23A6F0] hover:text-white transition-colors">
              Submit Request
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}