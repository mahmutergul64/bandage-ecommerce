import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { API } from '../api/axiosInstance';
import HeroSlider from '../components/home/HeroSlider';
import EditorsPick from '../components/home/EditorsPick';
import ProductCard from '../components/home/ProductCard';
import VitaSection from '../components/home/VitaSection';
import NeuralSection from '../components/home/NeuralSection';
import BlogPostCard from '../components/home/BlogPostCard';
import blog1 from '../assets/blogcardpost1.jpg';
import blog2 from '../assets/blogcardpost2.jpg';
import blog3 from '../assets/blogcardpost3.jpg';

export default function HomePage() {
  const dispatch = useDispatch();
  
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  const blogPosts = [blog1, blog2, blog3];

  useEffect(() => {
    API.get('/products')
      .then((res) => {
        const products = Array.isArray(res.data) ? res.data : (res.data.products || []);
        setBestsellers(products.slice(0, 8));
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <main className="w-full overflow-x-hidden">
      <HeroSlider />
      <EditorsPick />
      
      <section className="py-20 bg-white font-sans">
        <div className="container mx-auto px-4 max-w-[1120px]">
          <div className="flex flex-col items-center text-center mb-16">
            <h4 className="text-xl text-[#737373] font-medium mb-2">Featured Products</h4>
            <h3 className="text-2xl font-bold text-[#252B42] mb-2 uppercase tracking-wider">
              BESTSELLER PRODUCTS
            </h3>
            <p className="text-sm text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#23A6F0]"></div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[40px]">
              {bestsellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <VitaSection />
      <NeuralSection />
      
      <section className="w-full bg-white py-24 font-sans">
        <div className="container mx-auto px-4 lg:px-0 max-w-[1120px]">
          <div className="flex flex-col items-center text-center gap-2.5 mb-20">
            <h6 className="text-[#23A6F0] font-bold text-sm tracking-wide">
              Practice Advice
            </h6>
            <h2 className="text-[40px] font-bold text-[#252B42] tracking-wide">
              Featured Posts
            </h2>
            <p className="text-[#737373] text-sm max-w-[460px] leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[30px]">
            {blogPosts.map((img, index) => (
              <BlogPostCard key={index} image={img} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}