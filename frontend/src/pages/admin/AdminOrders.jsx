import React, { useState } from 'react';
import { Menu, Search, Filter } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminOrders } from '../../data/adminData';

const AdminOrders = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = adminOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          order.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Orders</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white p-4 rounded-xl border border-brand-100 shadow-sm mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-brand-400" />
              <input 
                type="text" 
                placeholder="Search orders, customers..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-brand-50 border border-brand-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-accent transition-colors"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 bg-white border border-brand-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-200 focus:border-brand-accent transition-colors cursor-pointer"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-500">
                <Filter className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Order ID</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Customer</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Seller</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Items</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Amount</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Date</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-accent">{order.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{order.customer}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{order.seller}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{order.items}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{order.amount}</td>
                    <td className="px-6 py-4 text-sm text-brand-500">{order.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800 border-green-200' :
                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800 border-red-200' :
                        'bg-blue-100 text-blue-800 border-blue-200'
                      } border`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-brand-500">No orders found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminOrders;
