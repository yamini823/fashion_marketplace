import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Filter, Menu } from 'lucide-react';
import SellerSidebar from '../../components/seller/SellerSidebar';
import ProductTable from '../../components/seller/ProductTable';
import { sellerProducts, CATEGORY_OPTIONS } from '../../data/sellerProducts';

const SellerProducts = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [products, setProducts] = useState(sellerProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleDelete = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All Categories' || product.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchesStatus = statusFilter === 'All' || product.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">My Products</h1>
              <p className="hidden sm:block text-sm text-brand-500 mt-1">Manage the products in your YAMORA store.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/seller/products/add" 
              className="hidden sm:flex items-center gap-2 bg-brand-accent text-white px-4 py-2 rounded-md font-medium hover:bg-brand-800 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Product
            </Link>
            <Link 
              to="/seller/products/add" 
              className="sm:hidden p-2 bg-brand-accent text-white rounded-md hover:bg-brand-800 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3 pl-4 border-l border-brand-200">
              <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-400" />
              <input 
                type="text" 
                placeholder="Search your products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-brand-50 border border-brand-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-accent transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
              <div className="relative">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 bg-white border border-brand-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-accent transition-colors cursor-pointer"
                >
                  <option value="All Categories">All Categories</option>
                  {CATEGORY_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-500">
                  <Filter className="h-4 w-4" />
                </div>
              </div>

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 bg-white border border-brand-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-accent transition-colors cursor-pointer"
                >
                  <option value="All">All Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending Approval">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-500">
                  <Filter className="h-4 w-4" />
                </div>
              </div>
            </div>
            
          </div>

          {/* Product Table */}
          <ProductTable products={filteredProducts} onDelete={handleDelete} />
          
        </main>
      </div>
    </div>
  );
};

export default SellerProducts;
