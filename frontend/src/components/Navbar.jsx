import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE } from '../config/constants';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-brand-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              {/* Simple floral/fashion symbol placeholder */}
              <div className="w-8 h-8 md:w-10 md:h-10 text-brand-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2C7.5 2 4 5.5 4 10c0 4.5 5 10 8 12 3-2 8-7.5 8-12 0-4.5-3.5-8-8-8zm0 18c-2.2-1.7-6-6-6-10 0-3.3 2.7-6 6-6s6 2.7 6 6c0 4-3.8 8.3-6 10z" opacity="0.3" />
                  <path d="M12 4C8.7 4 6 6.7 6 10c0 3.3 3.3 7.3 6 9.3 2.7-2 6-6 6-9.3 0-3.3-2.7-6-6-6zm0 13.5c-1.8-1.4-4-4.8-4-7.5 0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.7-2.2 6.1-4 7.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-brand-accent leading-none">{BRAND_NAME}</span>
                <span className="text-[0.6rem] uppercase tracking-[0.2em] text-brand-600 mt-1">{BRAND_TAGLINE}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            <Link to="/" className="text-brand-accent font-medium border-b-2 border-brand-accent pb-1">Home</Link>
            <Link to="/shop" className="text-brand-dark hover:text-brand-accent transition-colors font-medium">Categories</Link>
            <Link to="/custom-order" className="text-brand-dark hover:text-brand-accent transition-colors font-medium">Custom Order</Link>
            <Link to="/about" className="text-brand-dark hover:text-brand-accent transition-colors font-medium">About</Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md ml-8 relative">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Search for dresses, jewellery, handmade..." 
                className="w-full bg-brand-50 border border-brand-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-accent text-sm"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-500" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-6 ml-8">
            <Link to="/wishlist" className="text-brand-dark hover:text-brand-accent transition-colors">
              <Heart className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-brand-dark hover:text-brand-accent transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-2 bg-brand-accent text-white text-[0.65rem] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </Link>
            <Link to="/login" className="text-brand-dark hover:text-brand-accent transition-colors flex flex-col items-center group">
              <User className="h-5 w-5 mb-0.5" />
              <span className="text-[0.65rem] group-hover:text-brand-accent">Login / Signup</span>
            </Link>
            <Link to="/seller/register" className="bg-brand-accent text-white hover:bg-brand-800 transition-colors px-4 py-2 rounded-full text-sm font-medium">
              Become a Seller →
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="text-brand-dark hover:text-brand-accent focus:outline-none">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-brand-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <div className="mb-4 pt-2 relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-brand-50 border border-brand-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm"
              />
              <Search className="absolute left-3 top-4.5 h-4 w-4 text-brand-500" />
            </div>
            <Link to="/" className="block px-3 py-2 text-brand-accent font-medium bg-brand-50 rounded-md">Home</Link>
            <Link to="/shop" className="block px-3 py-2 text-brand-dark font-medium hover:bg-brand-50 rounded-md">Categories</Link>
            <Link to="/custom-order" className="block px-3 py-2 text-brand-dark font-medium hover:bg-brand-50 rounded-md">Custom Order</Link>
            <Link to="/about" className="block px-3 py-2 text-brand-dark font-medium hover:bg-brand-50 rounded-md">About</Link>
            
            <div className="border-t border-brand-100 mt-4 pt-4 flex justify-between px-3">
              <Link to="/wishlist" className="flex items-center gap-2 text-brand-dark">
                <Heart className="h-5 w-5" /> Wishlist
              </Link>
              <Link to="/cart" className="flex items-center gap-2 text-brand-dark">
                <ShoppingCart className="h-5 w-5" /> Cart (0)
              </Link>
            </div>
            
            <div className="mt-4 px-3 flex flex-col gap-3">
              <Link to="/login" className="w-full text-center border border-brand-accent text-brand-accent py-2 rounded-md font-medium">
                Login / Signup
              </Link>
              <Link to="/seller/register" className="w-full text-center bg-brand-accent text-white py-2 rounded-md font-medium">
                Become a Seller
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
