import React from 'react';
import { Clock, BarChart2, ChevronRight } from 'lucide-react';

export default function BlogPostCard({ image }) {
  return (
    <div className="flex flex-col w-full max-w-[348px] bg-white shadow-md relative group">
      <div className="relative w-full h-[300px] overflow-hidden">
        <img 
          src={image} 
          alt="Blog post" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute top-5 left-5 bg-[#E74040] text-white text-[14px] font-bold px-3 py-1 rounded shadow">
          NEW
        </div>
      </div>
      <div className="flex flex-col p-6 gap-4 border border-t-0 border-gray-100">
        <div className="flex gap-4 text-[12px] mt-2 font-medium">
          <span className="text-[#8EC2F2] hover:text-[#23A6F0] cursor-pointer transition-colors">Google</span>
          <span className="text-[#737373] hover:text-[#252B42] cursor-pointer transition-colors">Trending</span>
          <span className="text-[#737373] hover:text-[#252B42] cursor-pointer transition-colors">New</span>
        </div>
        <h4 className="text-[20px] font-normal text-[#252B42] leading-snug">
          Loudest à la Madison #1 <br className="hidden sm:block" /> (L'integral)
        </h4>
        <p className="text-[14px] text-[#737373] leading-relaxed">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </p>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-[#23A6F0]" />
            <span className="text-[12px] text-[#737373]">22 April 2021</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart2 size={16} className="text-[#23856D]" />
            <span className="text-[12px] text-[#737373]">10 comments</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#737373] font-bold text-[14px] cursor-pointer hover:text-[#23A6F0] transition-colors mt-2">
          Learn More <ChevronRight size={20} className="text-[#23A6F0]" />
        </div>
      </div>
    </div>
  );
}