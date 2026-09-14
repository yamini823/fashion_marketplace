import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted);

  return (
    <div className="group flex flex-col">
      <div 
        className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 bg-brand-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${
            isWishlisted 
              ? 'bg-brand-accent/10 text-brand-accent' 
              : 'bg-white/70 text-brand-400 hover:bg-white hover:text-brand-accent'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add Button (Visible on Hover) */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button className="w-full bg-white/90 backdrop-blur-md text-brand-900 font-medium py-3 rounded-xl shadow-lg hover:bg-brand-accent hover:text-white transition-colors">
            Quick Add
          </button>
        </div>
      </div>
      
      <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
        <h3 className="font-medium text-brand-900 text-sm md:text-base mb-1 truncate group-hover:text-brand-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-auto">
          <span className="font-bold text-brand-900">₹{product.currentPrice.toLocaleString('en-IN')}</span>
          {product.originalPrice > product.currentPrice && (
            <span className="text-brand-400 text-sm line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
