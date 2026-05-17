import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/actions/productActions';
import { ChevronRight } from 'lucide-react';

import ProductDetailSummary from '../components/product/ProductDetailSummary';
import ProductDescription from '../components/product/ProductDescription';
import ProductPageBestseller from '../components/product/ProductPageBestseller';
import BrandLogos from '../components/shop/BrandLogos';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('description');
  
  const { currentProduct, currentProductFetchState } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProductById(productId));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [dispatch, productId]);

  if (currentProductFetchState === 'FETCHING' || !currentProduct) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-sans">
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4 max-w-[1050px] flex items-center gap-3 font-bold text-sm">
           <span className="text-[#252B42] cursor-pointer hover:text-[#23A6F0]" onClick={() => navigate('/')}>Home</span>
           <ChevronRight size={16} className="text-[#BDBDBD]" />
           <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      <ProductDetailSummary product={currentProduct} />

      <div className="w-full border-b border-[#ECECEC] my-8">
        <div className="container mx-auto px-4 max-w-[1050px] flex justify-center gap-8 text-sm font-bold text-[#737373]">
          <button 
            onClick={() => setActiveTab('description')}
            className={`pb-6 border-b-2 transition-all ${activeTab === 'description' ? 'border-[#23A6F0] text-[#252B42]' : 'border-transparent'}`}
          >
            Description
          </button>
          <button 
            onClick={() => setActiveTab('additional')}
            className={`pb-6 border-b-2 transition-all ${activeTab === 'additional' ? 'border-[#23A6F0] text-[#252B42]' : 'border-transparent'}`}
          >
            Additional Information
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-6 border-b-2 transition-all ${activeTab === 'reviews' ? 'border-[#23A6F0] text-[#252B42]' : 'border-transparent'}`}
          >
            Reviews ({currentProduct.sell_count})
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1050px] mb-12">
        {activeTab === 'description' && (
          <ProductDescription product={currentProduct} />
        )}
        {activeTab === 'additional' && (
          <div className="py-12 text-[#737373] text-center font-medium">
            <p>Additional details about materials, weight, and dimensions go here.</p>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="py-12 text-[#737373] text-center font-medium">
            <p>No reviews yet for this product. Be the first to review!</p>
          </div>
        )}
      </div>

      <ProductPageBestseller />
      <BrandLogos />
    </div>
  );
}