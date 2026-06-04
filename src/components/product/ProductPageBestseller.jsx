import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
import ShopProductCard from '../shop/ShopProductCard';

export default function ProductPageBestseller() {
  const { productList } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, productList.length]);

  const bestsellers = [...productList]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

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
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}