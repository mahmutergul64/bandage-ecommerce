import React from 'react';
import manImg from '../../assets/man1.jpg';
import womanImg from '../../assets/woman1.jpg';
import accessoriesImg from '../../assets/accessories1.jpg';
import kidsImg from '../../assets/kids1.jpg';

export default function EditorsPick() {
  return (
    <section className="w-full bg-[#FAFAFA] py-20 font-sans">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl font-bold text-[#252B42] mb-2 uppercase">
            EDITOR'S PICK
          </h2>
          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[30px] h-auto md:h-[500px]">
          <div className="relative flex-1 group overflow-hidden h-[500px] md:h-full">
            <img 
              src={manImg} 
              alt="Men" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute bottom-8 left-8">
              <button className="bg-white hover:bg-gray-100 text-[#252B42] font-bold py-3 px-10 min-w-[170px] uppercase text-sm tracking-wide transition-all shadow-md">
                MEN
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-[240px] group overflow-hidden h-[500px] md:h-full">
            <img 
              src={womanImg} 
              alt="Women" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute bottom-8 left-8">
              <button className="bg-white hover:bg-gray-100 text-[#252B42] font-bold py-3 px-6 min-w-[136px] uppercase text-sm tracking-wide transition-all shadow-md">
                WOMEN
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] w-full md:w-[240px]">
            <div className="relative flex-1 group overflow-hidden h-[240px]">
              <img 
                src={accessoriesImg} 
                alt="Accessories" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute bottom-8 left-8">
                <button className="bg-white hover:bg-gray-100 text-[#252B42] font-bold py-3 px-4 min-w-[170px] uppercase text-sm tracking-wide transition-all shadow-md">
                  ACCESSORIES
                </button>
              </div>
            </div>
            <div className="relative flex-1 group overflow-hidden h-[242px]">
              <img 
                src={kidsImg} 
                alt="Kids" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute bottom-8 left-8">
                <button className="bg-white hover:bg-gray-100 text-[#252B42] font-bold py-3 px-6 min-w-[120px] uppercase text-sm tracking-wide transition-all shadow-md">
                  KIDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}