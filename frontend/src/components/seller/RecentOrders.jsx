import React from 'react';

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Delivered</span>;
    case 'processing':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">Processing</span>;
    case 'shipped':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 border border-blue-200">Shipped</span>;
    case 'cancelled':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Cancelled</span>;
    default:
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 border border-gray-200">{status}</span>;
  }
};

const RecentOrders = ({ orders }) => {
  return (
    <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-brand-100">
        <h3 className="text-lg font-serif font-bold text-brand-dark">Recent Orders</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-50 border-b border-brand-100">
              <th className="px-6 py-3 text-xs font-medium text-brand-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-xs font-medium text-brand-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-xs font-medium text-brand-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-xs font-medium text-brand-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-xs font-medium text-brand-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-brand-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100">
            {orders.map((order, index) => (
              <tr key={index} className="hover:bg-brand-50/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-accent">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-dark">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-dark">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{getStatusBadge(order.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-500">{order.date}</td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-sm text-brand-500">
                  No recent orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
