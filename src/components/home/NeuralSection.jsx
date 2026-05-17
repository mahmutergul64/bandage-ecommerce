import React from 'react';
import neuralImg from "../../assets/neural-universe.png";

export default function NeuralSection() {
  return (
    <section className="w-full bg-white overflow-hidden font-sans">
      <div className="container mx-auto lg:px-8 max-w-[1440px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:h-[682px] pt-16 lg:pt-0">
        <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:gap-8 order-1 lg:order-2 px-4 lg:px-0 lg:pl-10">
          <h5 className="text-[#BDBDBD] font-bold text-base tracking-widest uppercase">
            SUMMER 2020
          </h5>
          <h2 className="text-[40px] lg:text-[50px] font-bold text-[#252B42] leading-[1.2] max-w-[420px]">
            Part of the Neural Universe
          </h2>
          
          <p className="text-[#737373] text-[20px] leading-relaxed max-w-[375px]">
            We know how large objects will act, but things on a small scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button className="bg-[#23A6F0] lg:bg-[#2DC071] hover:bg-blue-500 lg:hover:bg-green-600 text-white font-bold py-3.5 px-10 rounded-[5px] uppercase text-sm tracking-wide transition-all shadow-md active:scale-95 w-full sm:w-auto">
              BUY NOW
            </button>
            <button className="bg-white border border-[#23A6F0] lg:border-[#2DC071] text-[#23A6F0] lg:text-[#2DC071] hover:bg-[#23A6F0] lg:hover:bg-[#2DC071] hover:text-white font-bold py-3.5 px-10 rounded-[5px] text-sm tracking-wide transition-all active:scale-95 w-full sm:w-auto">
              <span className="lg:hidden">Learn More</span>
              <span className="hidden lg:inline uppercase">READ MORE</span>
            </button>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center lg:justify-start items-end order-2 lg:order-1 mt-8 lg:mt-0">
          <img 
            src={neuralImg} 
            alt="Couple in neural universe fashion" 
            className="w-full h-[450px] lg:h-[682px] object-cover object-top lg:object-center"
          />
        </div>

      </div>
    </section>
  );
}