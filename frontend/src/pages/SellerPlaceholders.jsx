import React, { useState } from 'react';
import { Menu, Bell } from 'lucide-react';
import SellerSidebar from '../components/seller/SellerSidebar';
import { Link } from 'react-router-dom';

export const SellerPlaceholder = ({ title }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-50 flex">
      <SellerSidebar 
        isMobileOpen={isMobileSidebarOpen} 
        setIsMobileOpen={setIsMobileSidebarOpen} 
      />

      <div className="flex-1 flex flex-col lg:pl-64">
        <header className="sticky top-0 z-40 bg-white border-b border-brand-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center flex-1">
            <button 
              className="lg:hidden mr-4 text-brand-500 hover:text-brand-800"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">{title}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-brand-500 hover:text-brand-accent transition-colors rounded-full hover:bg-brand-50">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-brand-200">
              <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-serif font-bold text-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
          <div className="text-center max-w-md bg-white p-10 rounded-xl border border-brand-100 shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">{title}</h2>
            <p className="text-brand-600 mb-8">This section will be implemented next.</p>
            <Link to="/seller/dashboard" className="inline-block bg-brand-accent text-white px-6 py-2.5 rounded-md font-medium hover:bg-brand-800 transition-colors">
              Back to Dashboard
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};
