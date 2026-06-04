import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShopProductCard({ product }) {
  const placeholderImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600",
    "https://images.unsplash.com/photo-1434389670869-c6e460489e9a?q=80&w=600",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600",
    "https://images.unsplash.com/photo-1571513722275-4b41e4aee0ce?q=80&w=600",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600"
  ];

  const FINAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=600&auto=format&fit=crop";

  if (!product) return null;

  const randomImageIndex = product.id % placeholderImages.length;
  const variedPlaceholder = placeholderImages[randomImageIndex];

  const [imgSrc, setImgSrc] = useState(product.image || variedPlaceholder);

  return (
    <Link to={`/product/${product.id}`} className="flex flex-col items-center text-center w-full max-w-[238px] group cursor-pointer transition-all overflow-hidden mx-auto">
      <div className="w-full h-[427px] shrink-0 overflow-hidden mb-6 bg-gray-50 rounded-md shadow-sm flex items-center justify-center">
        <img 
          src={imgSrc} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          onError={() => {
            if (imgSrc !== variedPlaceholder && imgSrc !== FINAL_FALLBACK_IMAGE) {
              setImgSrc(variedPlaceholder);
            } else if (imgSrc === variedPlaceholder) {
              setImgSrc(FINAL_FALLBACK_IMAGE);
            }
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2.5 pb-9 px-1 w-full min-w-0">
        <h5 className="font-bold text-[#252B42] text-base leading-6 w-full whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {product.name}
        </h5>
        <p className="font-bold text-[#737373] text-sm leading-6 w-full whitespace-nowrap overflow-hidden text-ellipsis px-2">
          {product.description}
        </p>
        <div className="flex justify-center items-center gap-2 py-1">
          <span className="text-[#BDBDBD] font-bold text-base line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
          <span className="text-[#23856D] font-bold text-base">
            ${product.price}
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