import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg from '../../assets/hero-fashion.jpg'; 

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      season: "SUMMER 2020",
      title: "NEW COLLECTION",
      desc: "We know how large objects will act, but things on a small scale.",
      btnText: "SHOP NOW",
      bg: heroImg
    },
    {
      id: 2,
      season: "WINTER 2020",
      title: "WINTER COLLECTION",
      desc: "We know how large objects will act, but things on a small scale.",
      btnText: "SHOP NOW",
      bg: heroImg 
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative w-full h-[550px] sm:h-[600px] lg:h-[716px] overflow-hidden bg-[#252B42]">
      
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative flex items-center">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-[80%_10%] lg:bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent lg:bg-black/10"></div>

            <div className="container mx-auto relative z-10 px-16 sm:px-20 lg:px-8 max-w-7xl h-full flex items-center justify-center lg:justify-start transition-all">
              
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-5 lg:gap-8 lg:ml-5">
                
                <h5 className="font-bold tracking-[0.1em] text-white uppercase text-sm lg:text-base drop-shadow-md">
                  {slide.season}
                </h5>
                <h1 className="text-[30px] sm:text-5xl lg:text-[58px] font-black text-white leading-tight uppercase tracking-wider drop-shadow-md">
                  {slide.title}
                </h1>
                
                <p className="text-[18px] sm:text-base lg:text-[20px] font-medium text-white max-w-[260px] sm:max-w-xs lg:max-w-[380px] leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]">
                  {slide.desc}
                </p>
                
                <div className="flex justify-center lg:justify-start mt-2 lg:mt-0">
                  <Link to="/shop" className="inline-block bg-[#2DC071] hover:bg-green-600 text-white font-bold py-3 px-8 lg:py-4 lg:px-10 rounded-[5px] text-[14px] lg:text-2xl uppercase transition-all shadow-xl">
                   {slide.btnText}
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      
      <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-2 sm:px-6 lg:px-12 z-20">
        <button onClick={prevSlide} className="pointer-events-auto text-white hover:text-gray-300 transition-colors drop-shadow-md">
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto text-white hover:text-gray-300 transition-colors drop-shadow-md">
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-12 lg:h-[8px] lg:w-16 rounded-full transition-all duration-500 shadow-sm ${
              current === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}