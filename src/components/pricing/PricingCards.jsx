import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    { text: 'Unlimited product updates', active: true },
    { text: 'Unlimited product updates', active: true },
    { text: 'Unlimited product updates', active: true },
    { text: '1GB Cloud storage', active: false },
    { text: 'Email and community support', active: false },
  ];

  return (
    <div className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">Pricing</h2>
          <p className="text-[#737373] text-sm max-w-[450px] mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-20">
          <span className={`font-bold text-base ${!isYearly ? 'text-[#252B42]' : 'text-[#737373]'}`}>
            Monthly
          </span>
          <div 
            className="w-14 h-7 rounded-full border border-[#23A6F0] flex items-center px-1 cursor-pointer bg-white"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className={`w-5 h-5 rounded-full bg-[#D0D0D0] transition-transform duration-300 ${isYearly ? 'translate-x-7 bg-[#23A6F0]' : ''}`}></div>
          </div>
          <span className={`font-bold text-base ${isYearly ? 'text-[#252B42]' : 'text-[#737373]'}`}>
            Yearly
          </span>
          <span className="bg-[#B2E3FF] text-[#23A6F0] text-xs font-bold px-4 py-2 rounded-full ml-2">
            Save 25%
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-[950px] mx-auto">
          
          <div className="bg-white border border-[#23A6F0] rounded-xl md:rounded-r-none md:rounded-l-xl p-10 flex flex-col items-center w-full md:w-[320px]">
            <h3 className="text-2xl font-bold text-[#252B42] mb-8">FREE</h3>
            <p className="text-[#737373] font-bold text-sm text-center mb-8 max-w-[160px]">
              Organize across all apps by hand
            </p>
            <div className="flex items-start gap-2 mb-8 text-[#23A6F0]">
              <span className="text-[40px] font-bold leading-none">0</span>
              <div className="flex flex-col justify-start">
                <span className="text-2xl font-bold leading-none">$</span>
                <span className="text-sm font-bold text-[#8EC2F2] mt-1">Per Month</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${feature.active ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'}`}>
                    <Check size={16} strokeWidth={4} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#252B42]">{feature.text}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#252B42] text-white font-bold py-4 rounded-md hover:bg-gray-800 transition-colors">
              Try for free
            </button>
          </div>

          <div className="bg-[#252B42] rounded-xl p-14 flex flex-col items-center w-full md:w-[320px] transform scale-110 z-10 shadow-2xl my-8 md:my-0">
            <h3 className="text-2xl font-bold text-white mb-8">STANDARD</h3>
            <p className="text-white font-bold text-sm text-center mb-8 max-w-[160px]">
              Organize across all apps by hand
            </p>
            <div className="flex items-start gap-2 mb-8 text-[#23A6F0]">
              <span className="text-[40px] font-bold leading-none">{isYearly ? '7.99' : '9.99'}</span>
              <div className="flex flex-col justify-start">
                <span className="text-2xl font-bold leading-none">$</span>
                <span className="text-sm font-bold text-[#8EC2F2] mt-1">Per Month</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${feature.active ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'}`}>
                    <Check size={16} strokeWidth={4} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-white">{feature.text}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#23A6F0] text-white font-bold py-4 rounded-md hover:bg-blue-500 transition-colors">
              Try for free
            </button>
          </div>

          <div className="bg-white border border-[#23A6F0] rounded-xl md:rounded-l-none md:rounded-r-xl p-10 flex flex-col items-center w-full md:w-[320px]">
            <h3 className="text-2xl font-bold text-[#252B42] mb-8">PREMIUM</h3>
            <p className="text-[#737373] font-bold text-sm text-center mb-8 max-w-[160px]">
              Organize across all apps by hand
            </p>
            <div className="flex items-start gap-2 mb-8 text-[#23A6F0]">
              <span className="text-[40px] font-bold leading-none">{isYearly ? '15.99' : '19.99'}</span>
              <div className="flex flex-col justify-start">
                <span className="text-2xl font-bold leading-none">$</span>
                <span className="text-sm font-bold text-[#8EC2F2] mt-1">Per Month</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${feature.active ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'}`}>
                    <Check size={16} strokeWidth={4} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#252B42]">{feature.text}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-[#23A6F0] text-white font-bold py-4 rounded-md hover:bg-blue-500 transition-colors">
              Try for free
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}