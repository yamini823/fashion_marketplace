import React from 'react';
import { Truck, ShieldCheck, HeartHandshake } from 'lucide-react';

const BenefitBar = () => {
  const benefits = [
    {
      icon: <Truck className="w-6 h-6 text-brand-600" />,
      title: "Free Shipping",
      desc: "on orders above ₹999"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
      title: "Secure Payment",
      desc: "100% safe & secure"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-600" />,
      title: "Support Creators",
      desc: "Shop small, make big impact"
    }
  ];

return (
    <div className="bg-white py-6 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
              <div className="p-3 bg-brand-50 rounded-full">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 text-sm">{benefit.title}</h3>
                <p className="text-xs text-brand-500">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BenefitBar;
