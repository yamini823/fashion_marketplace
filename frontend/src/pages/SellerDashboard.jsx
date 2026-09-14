import React, { useState } from 'react';
import { 
  Bell, 
  Menu, 
  Package, 
  CheckCircle, 
  Clock, 
  ShoppingCart, 
  DollarSign,
  Plus,
  List,
  Store,
  AlertCircle
} from 'lucide-react';
import SellerSidebar from '../components/seller/SellerSidebar';
import SellerStatCard from '../components/seller/SellerStatCard';
import RecentOrders from '../components/seller/RecentOrders';
import { sellerStats, recentOrders } from '../data/sellerDashboard';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-50 flex">
      {/* Sidebar */}
      <SellerSidebar 
        isMobileOpen={isMobileSidebarOpen} 
        setIsMobileOpen={setIsMobileSidebarOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-brand-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center flex-1">
            <button 
              className="lg:hidden mr-4 text-brand-500 hover:text-brand-800"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Welcome back, Creator</h1>
              <p className="hidden sm:block text-sm text-brand-500 mt-1">Here's what's happening with your store today.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-brand-500 hover:text-brand-accent transition-colors rounded-full hover:bg-brand-50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-brand-200">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-medium text-brand-dark">Your Store</span>
                <span className="text-xs text-brand-500">Creator Account</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-serif font-bold text-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          {/* Top Alerts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Store Status */}
            <div className="bg-white rounded-xl border border-green-200 shadow-sm p-5 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg text-green-600 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark">Store Active</h3>
                  <p className="text-sm text-brand-600 mt-1">Your storefront is visible to customers.</p>
                </div>
              </div>
              <Link to="/seller/store" className="hidden sm:block px-4 py-2 border border-brand-200 text-brand-dark text-sm font-medium rounded-md hover:bg-brand-50 transition-colors">
                View Storefront
              </Link>
            </div>
            
            {/* Approval Notice */}
            <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-5 flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600 mt-1">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark">Pending Approval</h3>
                  <p className="text-sm text-brand-600 mt-1">4 products are waiting for admin approval.</p>
                </div>
              </div>
              <Link to="/seller/products" className="hidden sm:block px-4 py-2 border border-brand-200 text-brand-dark text-sm font-medium rounded-md hover:bg-brand-50 transition-colors">
                View Pending Products
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            <SellerStatCard title="Total Products" value={sellerStats.totalProducts} icon={Package} />
            <SellerStatCard title="Active Products" value={sellerStats.activeProducts} icon={CheckCircle} />
            <SellerStatCard title="Pending Approval" value={sellerStats.pendingApproval} icon={Clock} />
            <SellerStatCard title="Total Orders" value={sellerStats.totalOrders} icon={ShoppingCart} />
            <SellerStatCard title="Revenue" value={sellerStats.revenue} icon={DollarSign} className="sm:col-span-2 lg:col-span-1 xl:col-span-1" />
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Orders - Takes up 2 columns on large screens */}
            <div className="lg:col-span-2">
              <RecentOrders orders={recentOrders} />
            </div>

            {/* Quick Actions - Takes up 1 column on large screens */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-brand-100 shadow-sm p-6">
                <h3 className="text-lg font-serif font-bold text-brand-dark mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-3">
                  <Link to="/seller/products" className="flex items-center justify-center gap-2 w-full bg-brand-accent text-white py-3 px-4 rounded-md font-medium hover:bg-brand-800 transition-colors shadow-sm">
                    <Plus className="w-5 h-5" /> Add Product
                  </Link>
                  <Link to="/seller/products" className="flex items-center gap-3 w-full bg-brand-50 text-brand-dark py-3 px-4 rounded-md font-medium hover:bg-brand-100 transition-colors border border-brand-100">
                    <List className="w-5 h-5 text-brand-500" /> Manage Products
                  </Link>
                  <Link to="/seller/orders" className="flex items-center gap-3 w-full bg-brand-50 text-brand-dark py-3 px-4 rounded-md font-medium hover:bg-brand-100 transition-colors border border-brand-100">
                    <ShoppingCart className="w-5 h-5 text-brand-500" /> View Orders
                  </Link>
                  <Link to="/seller/store" className="flex items-center gap-3 w-full bg-brand-50 text-brand-dark py-3 px-4 rounded-md font-medium hover:bg-brand-100 transition-colors border border-brand-100">
                    <Store className="w-5 h-5 text-brand-500" /> Edit Storefront
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
