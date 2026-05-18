import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../store/actions/productActions';
import { ChevronRight } from 'lucide-react';

import CategoryCard from '../components/shop/CategoryCard';
import FilterBar from '../components/shop/FilterBar';
import Pagination from '../components/shop/Pagination';
import BrandLogos from '../components/shop/BrandLogos';

const enDictionary = {
  'Tişört': 'T-Shirt',
  'Ayakkabı': 'Shoes',
  'Ceket': 'Jacket',
  'Elbise': 'Dress',
  'Etek': 'Skirt',
  'Gömlek': 'Shirt',
  'Kazak': 'Sweater',
  'Pantalon': 'Pants',
  'Pantolon': 'Pants'
};

export default function ShopPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, productList, fetchState, total } = useSelector(state => state.product);

  const [filterText, setFilterText] = useState('');
  const [sortType, setSortType] = useState('');
  const [offset, setOffset] = useState(0);
  const limit = 16;

  const totalPages = Math.ceil(total / limit) || 1;
  const currentPage = Math.floor(offset / limit) + 1;

  const createSlug = (text) => {
    if (!text) return 'product';
    return text.toLowerCase()
      .replaceAll('ü', 'u').replaceAll('ö', 'o').replaceAll('ı', 'i')
      .replaceAll('ş', 's').replaceAll('ğ', 'g').replaceAll('ç', 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const fetchFilteredProducts = (currentOffset = offset) => {
    const params = { limit, offset: currentOffset };
    if (categoryId) params.category = categoryId;
    if (filterText) params.filter = filterText;
    if (sortType) params.sort = sortType;

    dispatch(fetchProducts(params));
  };

  useEffect(() => {
    if (categories.length === 0) dispatch(fetchCategories());
  }, [dispatch, categories.length]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [categoryId, sortType, offset]);

  const handleFilter = () => {
    setOffset(0);
    fetchFilteredProducts(0);
  };

  const handleProductClick = (product) => {
    const pCatId = product.category?.id || product.category_id;
    const category = categories.find(c => c.id === pCatId);
    const gender = category?.gender === 'k' ? 'kadin' : 'erkek';
    const catName = category ? category.code.split(':')[1] : 'urun';
    const slug = createSlug(product.name);
    
    navigate(`/shop/${gender}/${catName}/${pCatId}/${slug}/${product.id}`);
  };

  const handleFirstPage = () => { setOffset(0); window.scrollTo({ top: 400, behavior: 'smooth' }); };
  const handlePrevPage = () => { setOffset(offset - limit); window.scrollTo({ top: 400, behavior: 'smooth' }); };
  const handleNextPage = () => { setOffset(offset + limit); window.scrollTo({ top: 400, behavior: 'smooth' }); };
  const handleLastPage = () => { setOffset((totalPages - 1) * limit); window.scrollTo({ top: 400, behavior: 'smooth' }); };

  const topCategories = [...categories].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="w-full font-sans bg-[#FAFAFA] overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1050px] py-6 flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-[#252B42]">Shop</h2>
        <div className="flex items-center gap-3 font-bold text-sm">
          <Link to="/" className="text-[#252B42] hover:underline">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <span className="text-[#737373]">Shop</span>
        </div>
      </div>

          <div className="container mx-auto px-4 max-w-[1050px] pb-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {topCategories.map((cat) => (
                <CategoryCard 
                  key={cat.id} 
                  category={cat} 
                  onClick={() => navigate(`/shop/${cat.gender === 'k' ? 'kadin' : 'erkek'}/${cat.code.split(':')[1]}/${cat.id}`)} 
                />
              ))}
            </div>
          </div>

      <FilterBar 
        total={total}
        filterText={filterText}
        setFilterText={setFilterText}
        sortOption={sortType}
        setSortOption={setSortType}
        onFilter={handleFilter}
      />

      <div className="container mx-auto px-4 max-w-[1050px] py-12">
        {fetchState === 'FETCHING' ? (
          <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
              {productList.map((product) => (
                <div 
                  key={product.id} 
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="w-full h-[350px] mb-4 overflow-hidden bg-[#f3f3f3]">
                    <img 
                      src={product.image || product.images?.[0]?.url || "https://picsum.photos/500/500"} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <h5 className="font-bold text-[#252B42] text-base mb-2">{product.name}</h5>
                  <p className="text-sm font-bold text-[#737373] mb-3 text-center line-clamp-1">{product.description}</p>
                  <div className="flex justify-center gap-2 font-bold mb-4">
                    <span className="text-[#BDBDBD]">${product.price}</span>
                    <span className="text-[#23856D]">${(product.price * 0.8).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#23856D]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#E77C40]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#252B42]"></div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              handleFirstPage={handleFirstPage}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              handleLastPage={handleLastPage}
            />
          </>
        )}
      </div>
      <BrandLogos />
    </div>
  );
}