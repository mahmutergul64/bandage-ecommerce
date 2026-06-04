import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  if (!product) return null;

  const placeholderImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600",
    "https://images.unsplash.com/photo-1434389670869-c6e460489e9a?q=80&w=600",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600",
    "https://images.unsplash.com/photo-1571513722275-4b41e4aee0ce?q=80&w=600",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600"
  ];
  const FINAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=600&auto=format&fit=crop";

  let safeIndex = 0;
  if (typeof product.id === 'number') {
    safeIndex = product.id % placeholderImages.length;
  } else if (product.id) {
    safeIndex = String(product.id).charCodeAt(0) % placeholderImages.length;
  }
  const variedPlaceholder = placeholderImages[safeIndex];
  const originalImg = product.image || (product.images?.length > 0 ? product.images[0].url : null) || variedPlaceholder;

  const oldPrice = (product.price * 1.25).toFixed(2);
  const currentPrice = product.price.toFixed(2);

  return (
    <div 
      onClick={() => navigate(`/product/${product.id}`)}
      className="flex flex-col items-center text-center w-full max-w-[238px] group cursor-pointer transition-all"
    >
      <div className="w-full h-[427px] overflow-hidden mb-6 bg-gray-50 rounded-md shadow-sm">
        <img 
          src={originalImg} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          onError={(e) => { 
            if (e.target.src !== variedPlaceholder && e.target.src !== FINAL_FALLBACK_IMAGE) {
              e.target.src = variedPlaceholder; 
            } else if (e.target.src === variedPlaceholder) {
              e.target.src = FINAL_FALLBACK_IMAGE;
            }
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2.5 pb-9 px-2 w-full min-w-0">
        <h5 className="font-bold text-[#252B42] text-base leading-6 w-full truncate">
          {product.name}
        </h5>
        
        <p className="font-bold text-[#737373] text-sm leading-6 w-full truncate">
          {product.description || "Bandage Official"}
        </p>
        
        <div className="flex justify-center items-center gap-2 py-1">
          <span className="text-[#BDBDBD] font-bold text-base line-through">
            ${oldPrice}
          </span>
          <span className="text-[#23856D] font-bold text-base">
            ${currentPrice}
          </span>
        </div>
      </div>
    </div>
  );
}