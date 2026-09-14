import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Scissors, Users, Heart } from 'lucide-react';

const CustomizeSection = () => {
  const concepts = [
    { icon: <PenTool className="w-5 h-5" />, title: "Personalized Designs" },
    { icon: <Scissors className="w-5 h-5" />, title: "Choose Fabrics" },
    { icon: <Users className="w-5 h-5" />, title: "Work with Creators" },
    { icon: <Heart className="w-5 h-5" />, title: "Made Just for You" },
  ];

  return (
    <section className="bg-brand-100 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-900 mb-6">
              Customize Your Style
            </h2>
            <p className="text-lg md:text-xl text-brand-700 mb-10 max-w-lg">
              Have a design in mind? We'll bring it to life. Work directly with skilled artisans to create fashion that is truly yours.
            </p>
            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-12">
              {concepts.map((concept, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 border border-brand-accent/30 rounded-lg text-brand-accent bg-white/50">
                    {concept.icon}
                  </div>
                  <span className="font-medium text-brand-900">{concept.title}</span>
                </div>
              ))}
            </div>
            
            <Link to="/custom-order" className="inline-flex bg-brand-accent hover:bg-brand-800 text-white px-8 py-4 rounded-full font-medium transition-all shadow-md items-center gap-2">
              Start Customizing →
            </Link>
          </div>
          
          {/* Right Images */}
          <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px]">
            {/* Sketch Image */}
            <div className="absolute top-0 left-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-xl z-20 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1620794341491-a5bf124bbcc8?w=800&q=80" 
                alt="Fashion sketches" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Finished Product Image */}
            <div className="absolute bottom-0 right-0 w-2/3 h-4/5 rounded-2xl overflow-hidden shadow-2xl z-30 transform rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80" 
                alt="Custom dress" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Text */}
            <div className="absolute top-10 right-4 z-40 hidden sm:block">
              <p className="font-serif text-3xl text-brand-accent/90 italic text-right">
                Your Style<br/>
                Our Craft
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative background shapes */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-50 to-transparent"></div>
    </section>
  );
};

export default CustomizeSection;
