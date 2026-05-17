import React from 'react';

export default function AboutHero() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1050px] flex flex-col md:flex-row items-center justify-between gap-10 py-16 md:py-24">
        
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8 md:gap-8">
          <h5 className="hidden md:block text-[#252B42] font-bold text-base tracking-[0.1em]">
            ABOUT COMPANY
          </h5>
          
          <h1 className="text-[#252B42] text-[40px] md:text-[58px] font-bold leading-tight">
            ABOUT US
          </h1>
          
          <p className="text-[#737373] text-[20px] font-medium leading-relaxed max-w-[280px] md:max-w-[380px]">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          
          <button className="bg-[#23A6F0] hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-[5px] text-sm tracking-widest transition-all mt-2">
            Get Quote Now
          </button>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center items-center h-[400px] md:h-[600px]">
          
          <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] bg-[#FFEBEB] rounded-full z-0"></div>
          
          <div className="absolute w-12 h-12 md:w-20 md:h-20 bg-[#FFEBEB] rounded-full top-4 left-4 md:top-10 md:left-0 z-0"></div>
          
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-[#977DF4] rounded-full bottom-20 left-12 md:bottom-32 md:left-10 z-0"></div>
          
          <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-[#977DF4] rounded-full top-20 right-10 md:top-32 md:right-4 z-0"></div>
        
          <div className="absolute w-6 h-6 md:w-10 md:h-10 bg-[#FFEBEB] rounded-full top-1/2 right-2 md:top-1/2 md:-right-4 z-0"></div>

          <img 
            src="https://freepngimg.com/thumb/shopping/7-2-shopping-png-hd.png" 
            alt="About Us Model" 
            className="w-full max-w-[320px] md:max-w-[450px] h-auto object-contain relative z-10"
          />
          
        </div>

      </div>
    </div>
  );
}