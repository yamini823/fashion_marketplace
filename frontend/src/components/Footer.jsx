import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Heart, Camera, Video, MessageCircle, Users, Briefcase } from 'lucide-react';
import { BRAND_NAME } from '../config/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-50 pt-16 pb-8 border-t border-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 text-brand-accent flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2C7.5 2 4 5.5 4 10c0 4.5 5 10 8 12 3-2 8-7.5 8-12 0-4.5-3.5-8-8-8zm0 18c-2.2-1.7-6-6-6-10 0-3.3 2.7-6 6-6s6 2.7 6 6c0 4-3.8 8.3-6 10z" opacity="0.3" />
                  <path d="M12 4C8.7 4 6 6.7 6 10c0 3.3 3.3 7.3 6 9.3 2.7-2 6-6 6-9.3 0-3.3-2.7-6-6-6zm0 13.5c-1.8-1.4-4-4.8-4-7.5 0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.7-2.2 6.1-4 7.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-brand-900 leading-none">{BRAND_NAME}</span>
              </div>
            </Link>
            <p className="text-brand-600 mb-8 max-w-sm">
              A global fashion marketplace for independent creators, handmade products and customized fashion. Wear your story with {BRAND_NAME}.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-400 hover:text-brand-accent transition-colors"><Camera className="w-5 h-5" /></a>
              <a href="#" className="text-brand-400 hover:text-brand-accent transition-colors"><Video className="w-5 h-5" /></a>
              <a href="#" className="text-brand-400 hover:text-brand-accent transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="text-brand-400 hover:text-brand-accent transition-colors"><Users className="w-5 h-5" /></a>
              <a href="#" className="text-brand-400 hover:text-brand-accent transition-colors"><Briefcase className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-brand-900 mb-6">SHOP</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">All Products</Link></li>
              <li><Link to="/new-arrivals" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">New Arrivals</Link></li>
              <li><Link to="/offers" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Offers</Link></li>
              <li><Link to="/gift-cards" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Gift Cards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-900 mb-6">CUSTOMER SUPPORT</h4>
            <ul className="space-y-4">
              <li><Link to="/help" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Help Center</Link></li>
              <li><Link to="/track" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Track Order</Link></li>
              <li><Link to="/returns" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-900 mb-6">ABOUT</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/creators" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Meet the Creators</Link></li>
              <li><Link to="/careers" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Careers</Link></li>
              <li><Link to="/terms" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-brand-600 hover:text-brand-accent transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-200">
          <p className="text-brand-500 text-sm mb-4 md:mb-0">
            © 2026 {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-brand-500 text-sm">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-brand-accent fill-current" />
            <span>for creators everywhere.</span>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-brand-accent/90 hover:bg-brand-accent text-white rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
