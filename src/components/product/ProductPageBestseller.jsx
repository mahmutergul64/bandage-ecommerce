import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../store/actions/productActions';

export default function ProductPageBestseller() {
  const { productList } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productList.length]);

  const bestsellers = [...productList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  const handleProductClick = (product) => {
    const nameSlug = product.name.toLowerCase()
      .replaceAll('ü', 'u').replaceAll('ö', 'o').replaceAll('ı', 'i')
      .replaceAll('ş', 's').replaceAll('ğ', 'g').replaceAll('ç', 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    
    navigate(`/shop/product/${product.id}/${nameSlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FAFAFA] py-12">
      <div className="container mx-auto px-4 max-w-[1050px]">
        <h3 className="text-2xl font-bold text-[#252B42] mb-8 uppercase tracking-wide border-b pb-6">
          BESTSELLER PRODUCTS
        </h3>
        
        {productList.length === 0 ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#23A6F0]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {bestsellers.map((product) => (
              <div 
                key={product.id} 
                className="bg-white group cursor-pointer transition-all hover:shadow-lg border border-transparent hover:border-gray-100"
                onClick={() => handleProductClick(product)}
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                  <img 
                    src={product.images?.[0]?.url} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <h5 className="font-bold text-[#252B42] text-base mb-2 truncate w-full">{product.name}</h5>
                  <p className="text-sm font-bold text-[#737373] mb-3">English Department</p>
                  <div className="flex gap-2 font-bold">
                    <span className="text-[#BDBDBD]">${product.price}</span>
                    <span className="text-[#23856D]">${(product.price * 0.8).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}