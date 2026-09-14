import React, { useState } from 'react';
import { Menu, Ban, Eye } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { approvedSellers } from '../../data/adminData';

const AdminSellers = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [sellers, setSellers] = useState(approvedSellers);

  const toggleSuspend = (sellerId) => {
    setSellers(sellers.map(seller => {
      if (seller.id === sellerId) {
        return {
          ...seller,
          status: seller.status === 'Active' ? 'Suspended' : 'Active'
        };
      }
      return seller;
    }));
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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Sellers</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Seller</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Store</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Category</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Products</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Orders</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {sellers.map((seller) => (
                  <tr key={seller.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{seller.sellerName}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{seller.storeName}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{seller.category}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{seller.products}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{seller.orders}</td>
                    <td className="px-6 py-4">
                      {seller.status === 'Active' ? (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">
                          Active
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">
                          Suspended
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-brand-accent hover:text-brand-800 text-sm font-medium flex items-center gap-1">
                          <Eye className="w-4 h-4" /> View
                        </button>
                        <button 
                          onClick={() => toggleSuspend(seller.id)}
                          className={`${seller.status === 'Active' ? 'text-orange-600 hover:text-orange-800' : 'text-green-600 hover:text-green-800'} text-sm font-medium flex items-center gap-1`}
                        >
                          <Ban className="w-4 h-4" /> 
                          {seller.status === 'Active' ? 'Suspend' : 'Unsuspend'}
                        </button>
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

export default AdminSellers;
