import React from 'react';

const PromoBar = () => {
  return (
    <div className="bg-brand-accent text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center w-full">
      <div className="hidden md:block w-1/3"></div>
      <div className="text-center w-full md:w-1/3 font-medium">
        🎁 Buy 1 Get 1 Free | Extra 10% Off on Your First Order | Limited Time Only!
      </div>
      <div className="hidden md:flex w-1/3 justify-end space-x-4 opacity-90">
        <a href="#" className="hover:underline">Track Order</a>
        <a href="#" className="hover:underline">Store Locator</a>
        <a href="#" className="hover:underline">Help</a>
      </div>
    </div>
  );
};

export default PromoBar;
