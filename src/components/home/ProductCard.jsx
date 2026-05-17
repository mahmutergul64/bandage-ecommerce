import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ image }) {
  return (
    <Link to="/product" className="flex flex-col items-center text-center w-full max-w-[238px] group cursor-pointer transition-all">
      <div className="w-full h-[427px] overflow-hidden mb-6">
        <img 
          src={image} 
          alt="Product" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col items-center gap-2.5 pb-9 px-1">
        <h5 className="font-bold text-[#252B42] text-base leading-6">
          Graphic Design
        </h5>
        
        <p className="font-bold text-[#737373] text-sm leading-6">
          English Department
        </p>
        
        <div className="flex justify-center items-center gap-2 py-1">
          <span className="text-[#BDBDBD] font-bold text-base tracking-wide">
            $16.48
          </span>
          <span className="text-[#23856D] font-bold text-base tracking-wide">
            $6.48
          </span>
        </div>
        
        <div className="flex justify-center items-center gap-1.5 mt-2">
          <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
        </div>
      </div>
    </Link>
  );
}