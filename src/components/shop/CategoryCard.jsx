import React from 'react';

export default function CategoryCard({ category, onClick }) {
  if (!category) return null;

  const placeholderCategories = [
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop"
  ];

  const randomImageIndex = category.id % placeholderCategories.length;
  const variedPlaceholder = placeholderCategories[randomImageIndex];

  const imageUrl = category.img;

  return (
    <div
      onClick={onClick}
      className="relative w-full h-[223px] cursor-pointer group overflow-hidden rounded-md bg-gray-200 shrink-0"
    >
      <img
        src={imageUrl}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          e.target.src = variedPlaceholder;
        }}
      />
      <div className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-2 z-10">
        <h3 className="font-bold text-base tracking-wider uppercase">{category.title}</h3>
        <p className="text-sm font-normal">Rating: {category.rating}</p>
      </div>
    </div>
  );
}