import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import manImg from '../../assets/vitagreenman1.png';

const slides = [
  {
    id: 1,
    season: "SUMMER 2020",
    title: "Vita Classic \n Product",
    desc: "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    img: manImg,
    bgColor: "bg-[#23856D]"
  },
  {
    id: 2,
    season: "WINTER 2020",
    title: "Vita Classic \n Product",
    desc: "We know how large objects will act, We know how are objects will act, We know",
    price: "$16.48",
    img: manImg,
    bgColor: "bg-[#23856D]"
  }
];

export default function VitaSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full text-white overflow-hidden font-sans min-h-[700px] lg:h-[682px] flex items-center">
      <div 
        className="flex w-full h-full transition-transform duration-500 ease-in-out absolute inset-0"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`w-full h-full flex-shrink-0 flex items-center ${slide.bgColor}`}>
            <div className="container mx-auto px-4 lg:px-0 max-w-[1050px] h-full flex flex-col lg:flex-row items-center relative z-10 pt-12 lg:pt-0">
              <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:gap-8 pb-4 lg:py-0">
                <h5 className="text-base font-bold tracking-widest uppercase">
                  {slide.season}
                </h5>
                <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black leading-[1.1] uppercase tracking-wider whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-sm lg:text-[16px] font-medium max-w-[340px] leading-relaxed text-white/90">
                  {slide.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
                  <span className="text-2xl font-bold tracking-wider">
                    {slide.price}
                  </span>
                  <button className="bg-[#2DC071] hover:bg-green-600 text-white font-bold py-3 px-8 lg:py-3.5 lg:px-10 rounded-[5px] uppercase text-sm tracking-wide transition-all shadow-lg active:scale-95">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full flex items-end justify-center lg:justify-end self-end relative z-10">
                <img 
                  src={slide.img} 
                  alt={slide.title} 
                  className="w-auto h-[400px] sm:h-[400px] lg:h-[600px] object-contain object-bottom"
                />
                
              </div>
            </div>

          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide}
        className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20"
      >
        <ChevronLeft size={40} strokeWidth={1.5} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20"
      >
        <ChevronRight size={40} strokeWidth={1.5} />
      </button>
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-12 lg:h-[8px] lg:w-16 rounded-full transition-all duration-300 ${
              current === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>
      
    </section>
  );}