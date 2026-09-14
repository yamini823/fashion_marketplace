import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full bg-[#fdfaf7] relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left mb-12 md:mb-0">
          <p className="text-brand-accent uppercase tracking-[0.2em] text-xs font-bold mb-4">
            Wear Your Story
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-900 mb-6 leading-tight">
            Fashion Beyond <span className="text-brand-accent italic font-light">Ordinary</span>
          </h1>
          <p className="text-lg text-brand-700 mb-8 max-w-lg mx-auto md:mx-0">
            Discover unique, handcrafted and customizable fashion from independent creators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/shop" className="bg-brand-accent hover:bg-brand-800 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md flex items-center justify-center gap-2 group">
              Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/custom-order" className="bg-white border border-brand-300 hover:border-brand-accent text-brand-800 hover:text-brand-accent px-8 py-3.5 rounded-full font-medium transition-all shadow-sm flex items-center justify-center">
              Customize Now
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1583391733958-d6961448b111?w=1200&q=80" 
              alt="Elegant fashion model wearing embroidered ethnic wear" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          
          {/* Decorative text element */}
          <div className="absolute -right-4 -top-8 md:-right-10 md:-top-4 lg:right-10 lg:top-10 rotate-12 hidden sm:block">
            <p className="font-serif text-3xl md:text-4xl text-brand-accent/80 italic transform -rotate-12">
              More Than Fashion,<br/>
              <span className="ml-8">A Feeling</span>
            </p>
            <svg className="w-8 h-8 text-brand-accent/60 ml-20 mt-2 transform -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
    </section>
  );
};

export default Hero;
