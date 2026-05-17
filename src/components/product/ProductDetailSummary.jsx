import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Star, Heart, ShoppingCart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { addToCart } from '../../store/actions/shoppingCartActions';
import { toggleWishlist } from '../../store/actions/wishlistActions';
import { toast } from 'react-toastify';

export default function ProductDetailSummary({ product }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  
  const dispatch = useDispatch();
  
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const isFavorite = wishlist.some(item => item.id === product.id);

  const images = product?.images || [];

  const handleNext = () => setActiveImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActiveImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart.`);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleWishlist(product));
    if (!isFavorite) {
      toast.success(`${product.name} added to wishlist.`);
    } else {
      toast.info(`${product.name} removed from wishlist.`);
    }
  };

  if (!product) return null;

  return (
    <div className="container mx-auto px-4 max-w-[1050px] py-8">
      <div className="flex flex-col md:flex-row gap-12">
        
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[#f3f3f3]">
            <img 
              src={images[activeImgIndex]?.url} 
              alt={product.name}
              className="h-full w-full object-cover transition-opacity duration-300"
            />
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors">
              <ChevronLeft size={48} strokeWidth={1.5} />
            </button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors">
              <ChevronRight size={48} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex gap-4">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveImgIndex(idx)}
                className={`w-24 h-24 cursor-pointer rounded-md overflow-hidden border-2 transition-all ${activeImgIndex === idx ? 'border-[#23A6F0]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img.url} className="w-full h-full object-cover" alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-4">
          <h2 className="text-xl font-bold text-[#252B42] mb-3">{product.name}</h2>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#F3CD03]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} size={18} />
              ))}
            </div>
            <span className="font-bold text-sm text-[#737373]">{product.sell_count} Reviews</span>
          </div>

          <h3 className="text-2xl font-bold text-[#252B42] mb-2">${product.price}</h3>
          
          <div className="font-bold text-sm mb-8 flex gap-2">
            <span className="text-[#737373]">Availability :</span>
            <span className="text-[#23A6F0]">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </div>

          <p className="text-[#858585] text-sm leading-relaxed mb-8 border-b pb-8">
            {product.description}
          </p>

          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 rounded-full bg-[#2EBB77] cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer hover:scale-110 transition-transform"></div>
          </div>

          <div className="flex items-center gap-3">
            <button className="bg-[#23A6F0] text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-blue-600 transition-colors shadow-md">
              Select Options
            </button>
            <div className="flex gap-2">
              <button 
                onClick={handleToggleFavorite}
                className={`p-3 bg-white border border-[#E8E8E8] rounded-full transition-colors ${isFavorite ? 'text-red-500 hover:bg-red-50' : 'text-[#252B42] hover:bg-gray-50'}`}
              >
                <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
              </button>
              
              <button 
                onClick={handleAddToCart}
                className="p-3 bg-white border border-[#E8E8E8] rounded-full text-[#252B42] hover:bg-gray-50 hover:text-[#23A6F0] transition-colors"
              >
                <ShoppingCart size={20} />
              </button>
              
              <button className="p-3 bg-white border border-[#E8E8E8] rounded-full text-[#252B42] hover:bg-gray-50 transition-colors">
                <Eye size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}