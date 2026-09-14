import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.name.toLowerCase().replace(' ', '-')}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-brand-100">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>
      <h3 className="text-center font-serif text-lg text-brand-900 group-hover:text-brand-accent transition-colors">
        {category.name}
      </h3>
    </Link>
  );
};
export default CategoryCard;
