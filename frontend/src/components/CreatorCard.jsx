import React from 'react';
import { Link } from 'react-router-dom';

const CreatorCard = ({ creator }) => {
  return (
    <div className="bg-white border border-brand-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:border-brand-200 group">
      <Link to={`/creator/${creator.id}`} className="block mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-brand-50 group-hover:border-brand-100 transition-colors">
          <img 
            src={creator.image} 
            alt={creator.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      
      <Link to={`/creator/${creator.id}`}>
        <h3 className="font-serif text-lg text-brand-900 font-medium mb-1 group-hover:text-brand-accent transition-colors">
          {creator.name}
        </h3>
      </Link>
      <p className="text-sm text-brand-500 mb-6">{creator.category}</p>
      
      <button className="w-full py-2 px-4 rounded-full border border-brand-300 text-brand-700 font-medium hover:border-brand-accent hover:bg-brand-accent hover:text-white transition-all text-sm mt-auto">
        Follow
      </button>
    </div>
  );
};

export default CreatorCard;
