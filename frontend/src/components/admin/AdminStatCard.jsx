import React from 'react';

const AdminStatCard = ({ title, value, icon: Icon, className }) => {
  return (
    <div className={`bg-white p-6 rounded-xl border border-brand-100 shadow-sm flex items-center ${className || ''}`}>
      <div className="p-3 bg-brand-50 rounded-lg mr-4">
        <Icon className="w-6 h-6 text-brand-accent" />
      </div>
      <div>
        <p className="text-sm font-medium text-brand-500 mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-brand-dark">{value}</h4>
      </div>
    </div>
  );
};

export default AdminStatCard;
