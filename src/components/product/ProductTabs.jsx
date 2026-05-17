import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState('description');
  const { currentProduct } = useSelector(state => state.product);

  return (
    <div className="w-full border-b border-[#ECECEC] mt-12 mb-12">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <div className="flex justify-center gap-4 sm:gap-8 text-sm font-bold text-[#737373]">
          <button 
            onClick={() => setActiveTab('description')}
            className={`pb-6 border-b-2 transition-all whitespace-nowrap ${activeTab === 'description' ? 'border-[#23A6F0] text-[#252B42]' : 'border-transparent'}`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('additional')}
            className={`pb-6 border-b-2 transition-all whitespace-nowrap ${activeTab === 'additional' ? 'border-[#23A6F0] text-[#252B42]' : 'border-transparent'}`}
          >
            Additional Information
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-6 border-b-2 transition-all whitespace-nowrap ${activeTab === 'reviews' ? 'border-[#23A6F0] text-[#252B42]' : 'border-transparent'}`}
          >
            Reviews ({currentProduct?.sell_count || 0})
          </button>
        </div>
      </div>
    </div>
  );
}