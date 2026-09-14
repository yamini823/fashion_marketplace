import React from 'react';

const TrendingTicker = () => {
  const items = [
    { text: "Festive Collection – Up to 50% Off", img: "https://images.unsplash.com/photo-1583391733958-d6961448b111?w=50&q=80" },
    { text: "Handmade with Love", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=50&q=80" },
    { text: "Trending Now", img: "https://images.unsplash.com/photo-1610189013233-0c4a45749fbb?w=50&q=80" },
    { text: "Custom Orders Available", img: "https://images.unsplash.com/photo-1558769132-cb1fac08b042?w=50&q=80" },
    { text: "Support Small Creators", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&q=80" },
  ];

  // Duplicate items to create a seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="w-full bg-brand-50 border-b border-brand-100 overflow-hidden py-2 relative flex items-center">
      <div className="flex w-max animate-ticker hover:pause-animation">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-6 gap-3 shrink-0">
            <img 
              src={item.img} 
              alt="" 
              className="w-8 h-8 rounded-full object-cover border border-brand-200"
            />
            <span className="text-sm font-medium text-brand-800 whitespace-nowrap">
              {item.text}
            </span>
            <span className="text-brand-300 mx-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTicker;
