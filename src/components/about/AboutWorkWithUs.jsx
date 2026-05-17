import React from 'react';

export default function AboutWorkWithUs() {
  return (
    <div className="w-full flex flex-col md:flex-row h-auto md:h-[636px]">
      
      <div className="w-full md:w-1/2 bg-[#2A7CC7] flex flex-col justify-center items-center px-8 py-20 md:py-0">
         
         <div className="w-full max-w-[440px] flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            
            <h5 className="text-white font-bold text-base tracking-widest uppercase">
              WORK WITH US
            </h5>
            
            <h2 className="text-white text-4xl md:text-[40px] font-bold leading-tight">
              Now Let’s grow Yours
            </h2>
            
            <p className="text-white text-sm md:text-base font-semibold leading-relaxed opacity-90">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
            </p>
            
            <button className="mt-4 px-10 py-4 border border-white text-white font-bold rounded-[5px] hover:bg-white hover:text-[#2A7CC7] transition-all tracking-widest text-sm">
              Button
            </button>

         </div>
      </div>

      <div className="w-full md:w-1/2 h-[400px] md:h-full">
        <img 
          src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Work With Us Model" 
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}