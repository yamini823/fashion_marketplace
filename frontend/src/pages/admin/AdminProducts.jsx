import React, { useState } from 'react';
import { Menu, Filter, Search, Edit, Trash2, Eye } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { allProducts } from '../../data/adminData';
// wait, CATEGORY_OPTIONS wasn't added to adminData. I'll just use a set.

const AdminProducts = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [products, setProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || product.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to remove this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 flex">
      <AdminSidebar isMobileOpen={isMobileSidebarOpen} setIsMobileOpen={setIsMobileSidebarOpen} />

      <div className="flex-1 flex flex-col lg:pl-64">
        <header className="sticky top-0 z-40 bg-white border-b border-brand-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center flex-1">
            <button className="lg:hidden mr-4 text-brand-500" onClick={() => setIsMobileSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Products</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-400" />
              <input 
                type="text" 
                placeholder="Search products or sellers..." 
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
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
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
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-500">
                  <Filter className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Product</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Seller</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Category</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Price</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{product.seller}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{product.category}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">₹{product.price}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        product.status === 'Approved' ? 'bg-green-100 text-green-800 border-green-200' :
                        product.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                        'bg-red-100 text-red-800 border-red-200'
                      } border`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3 text-brand-500">
                        <button className="hover:text-brand-accent transition-colors"><Eye className="w-4 h-4" /></button>
                        <button className="hover:text-brand-accent transition-colors"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(product.id)} className="hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminProducts;
