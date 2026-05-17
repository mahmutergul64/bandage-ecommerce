import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamHero() {
  return (
    <div className="w-full bg-white">
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center gap-4">
        <h5 className="text-[#737373] font-bold text-base tracking-widest uppercase">
          What we do
        </h5>
        
        <h1 className="text-[#252B42] text-4xl md:text-[58px] font-bold leading-tight mb-2">
          Innovation tailored for you
        </h1>
        
        <div className="flex items-center gap-3 font-bold text-sm mt-2">
          <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
            Home
          </Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#737373]">Team</span>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-2 pb-12 md:px-0">
        
        <div className="w-full md:w-1/2 h-[400px] md:h-[530px]">
          <img 
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Team Hero Model" 
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
        
        <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 h-[400px] md:h-[530px]">
          <img 
            src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600" 
            className="w-full h-full object-cover rounded-sm" 
            alt="Fashion 1" 
          />
          <img 
            src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600" 
            className="w-full h-full object-cover rounded-sm" 
            alt="Fashion 2" 
          />
          <img 
            src="https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600" 
            className="w-full h-full object-cover rounded-sm" 
            alt="Fashion 3" 
          />
          <img 
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600" 
            className="w-full h-full object-cover rounded-sm" 
            alt="Fashion 4" 
          />
        </div>

      </div>

    </div>
  );
}