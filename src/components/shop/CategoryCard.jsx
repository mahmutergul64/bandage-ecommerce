import React from 'react';

export default function CategoryCard({ category, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="relative w-full h-[223px] cursor-pointer group overflow-hidden rounded-md"
    >
      <img
        src={category.img}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-2">
        <h3 className="font-bold text-base tracking-wider">{category.title}</h3>
        <p className="text-sm font-normal">Rating: {category.rating}</p>
      </div>
    </div>
  );
}