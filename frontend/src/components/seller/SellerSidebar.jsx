import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Archive, 
  Store, 
  User, 
  Settings, 
  LogOut,
  X
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BRAND_NAME } from '../../config/constants';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SellerSidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Overview', href: '/seller/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/seller/products', icon: Package },
    { name: 'Orders', href: '/seller/orders', icon: ShoppingCart },
    { name: 'Inventory', href: '/seller/inventory', icon: Archive },
    { name: 'Storefront', href: '/seller/store', icon: Store },
    { name: 'Profile', href: '/seller/profile', icon: User },
    { name: 'Settings', href: '/seller/settings', icon: Settings },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-brand-200">
      <div className="flex items-center justify-between h-20 px-6 border-b border-brand-100">
        <Link to="/seller/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 text-brand-accent flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2C7.5 2 4 5.5 4 10c0 4.5 5 10 8 12 3-2 8-7.5 8-12 0-4.5-3.5-8-8-8zm0 18c-2.2-1.7-6-6-6-10 0-3.3 2.7-6 6-6s6 2.7 6 6c0 4-3.8 8.3-6 10z" opacity="0.3" />
              <path d="M12 4C8.7 4 6 6.7 6 10c0 3.3 3.3 7.3 6 9.3 2.7-2 6-6 6-9.3 0-3.3-2.7-6-6-6zm0 13.5c-1.8-1.4-4-4.8-4-7.5 0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.7-2.2 6.1-4 7.5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wide text-brand-accent leading-none">{BRAND_NAME}</span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-brand-600 mt-1">Creator Panel</span>
          </div>
        </Link>
        <button 
          className="lg:hidden text-brand-500 hover:text-brand-800"
          onClick={() => setIsMobileOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                isActive 
                  ? "bg-brand-50 text-brand-accent" 
                  : "text-brand-700 hover:bg-brand-50 hover:text-brand-accent"
              )}
            >
              <item.icon 
                className={cn(
                  "mr-3 flex-shrink-0 h-5 w-5 transition-colors",
                  isActive ? "text-brand-accent" : "text-brand-500 group-hover:text-brand-accent"
                )} 
                aria-hidden="true" 
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-brand-100">
        <Link
          to="/"
          className="flex items-center px-3 py-2.5 text-sm font-medium text-brand-700 rounded-md hover:bg-red-50 hover:text-red-700 transition-colors"
        >
          <LogOut className="mr-3 flex-shrink-0 h-5 w-5 text-brand-500" aria-hidden="true" />
          Logout
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={() => setIsMobileOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-72 max-w-sm flex">
            <div className="w-full flex-1">
              {sidebarContent}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        {sidebarContent}
      </div>
    </>
  );
};

export default SellerSidebar;
