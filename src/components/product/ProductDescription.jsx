import React from 'react';

export default function ProductDescription({ product }) {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
          <img src={product?.images?.[0]?.url} className="w-full h-full object-cover" alt="desc" />
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