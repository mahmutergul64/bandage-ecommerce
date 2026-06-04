import React from 'react';

export default function ProductDescription({ product }) {
  if (!product) return null;

  const placeholderImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600",
    "https://images.unsplash.com/photo-1434389670869-c6e460489e9a?q=80&w=600",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600",
    "https://images.unsplash.com/photo-1571513722275-4b41e4aee0ce?q=80&w=600",
    "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600"
  ];

  const randomImageIndex = product.id % placeholderImages.length;
  const variedPlaceholder = placeholderImages[randomImageIndex];

  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row gap-12">
        
        <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
          <img 
            src={product?.image || variedPlaceholder} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            alt="Product Description" 
            onError={(e) => {
              e.target.src = variedPlaceholder;
            }}
          />
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-bold text-[#252B42] mb-6">the quick fox jumps over</h3>
          <p className="text-[#737373] text-sm leading-relaxed mb-6">{product?.description}</p>
          <p className="text-[#737373] text-sm leading-relaxed">{product?.description}</p>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-8">
           <div className="flex flex-col gap-4">
             <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
             {[1,2,3].map(i => <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#737373]"><span>{'>'}</span> the quick fox jumps over the lazy dog</div>)}
           </div>
           <div className="flex flex-col gap-4">
             <h3 className="text-2xl font-bold text-[#252B42]">the quick fox jumps over</h3>
             {[1,2,3].map(i => <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#737373]"><span>{'>'}</span> the quick fox jumps over the lazy dog</div>)}
           </div>
        </div>

      </div>
    </div>
  );
}