import React, { useState } from 'react';
import { Menu, Ban, Eye } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminCustomers } from '../../data/adminData';

const AdminCustomers = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [customers, setCustomers] = useState(adminCustomers);

  const toggleBlock = (customerId) => {
    setCustomers(customers.map(customer => {
      if (customer.id === customerId) {
        return {
          ...customer,
          status: customer.status === 'Active' ? 'Blocked' : 'Active'
        };
      }
      return customer;
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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Customers</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Customer</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Email</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Orders</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Joined</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{customer.name}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{customer.email}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{customer.orders}</td>
                    <td className="px-6 py-4 text-sm text-brand-500">{customer.joined}</td>
                    <td className="px-6 py-4">
                      {customer.status === 'Active' ? (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">
                          Active
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">
                          Blocked
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-brand-accent hover:text-brand-800 text-sm font-medium flex items-center gap-1">
                          <Eye className="w-4 h-4" /> View
                        </button>
                        <button 
                          onClick={() => toggleBlock(customer.id)}
                          className={`${customer.status === 'Active' ? 'text-red-600 hover:text-red-800' : 'text-green-600 hover:text-green-800'} text-sm font-medium flex items-center gap-1`}
                        >
                          <Ban className="w-4 h-4" /> 
                          {customer.status === 'Active' ? 'Block' : 'Unblock'}
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

export default AdminCustomers;
