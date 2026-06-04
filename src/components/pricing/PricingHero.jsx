import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PricingHero() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-[1050px] flex flex-col items-center justify-center text-center">
      <h4 className="text-[#737373] font-bold text-sm tracking-widest mb-4">
        PRICING
      </h4>
      
      <h1 className="text-4xl md:text-[58px] font-bold text-[#252B42] mb-6 tracking-tight">
        Simple Pricing
      </h1>
      
      <div className="flex items-center gap-3 text-sm font-bold">
        <Link to="/" className="text-[#252B42] hover:text-[#23A6F0] transition-colors">
          Home
        </Link>
        <ChevronRight size={16} className="text-[#BDBDBD]" />
        <span className="text-[#737373]">Pricing</span>
      </div>
    </div>
  );
}