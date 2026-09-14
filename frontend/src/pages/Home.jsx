import React from 'react';
import { Link } from 'react-router-dom';
import PromoBar from '../components/PromoBar';
import Navbar from '../components/Navbar';
import TrendingTicker from '../components/TrendingTicker';
import Hero from '../components/Hero';
import BenefitBar from '../components/BenefitBar';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import CreatorCard from '../components/CreatorCard';
import CustomizeSection from '../components/CustomizeSection';
import Footer from '../components/Footer';

import { categories } from '../data/categories';
import { products } from '../data/products';
import { creators } from '../data/creators';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-brand-light">
      <PromoBar />
      <Navbar />
      <TrendingTicker />
      
      <main className="flex-grow">
        <Hero />
        <BenefitBar />
        
        {/* Shop by Category Section */}
        <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10 border-b border-brand-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 flex items-center gap-4">
              Shop by Category
              <span className="h-px bg-brand-200 w-12 md:w-24 inline-block"></span>
            </h2>
            <Link to="/shop" className="text-brand-accent hover:text-brand-800 font-medium text-sm flex items-center gap-1 group">
              Explore All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10 border-b border-brand-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 flex items-center gap-4">
                Featured Products
                <span className="h-px bg-brand-200 w-12 md:w-24 inline-block"></span>
              </h2>
              <Link to="/shop" className="text-brand-accent hover:text-brand-800 font-medium text-sm flex items-center gap-1 group">
                View All <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Creators Section */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-end mb-12 border-b border-brand-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-900 flex items-center gap-4">
              Meet Our Creators
              <span className="h-px bg-brand-200 w-12 md:w-24 inline-block"></span>
            </h2>
            <Link to="/creators" className="text-brand-accent hover:text-brand-800 font-medium text-sm flex items-center gap-1 group">
              View All Creators <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {creators.map(creator => (
              <CreatorCard key={creator.id} creator={creator} />
            ))}
          </div>
        </section>

        <CustomizeSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
