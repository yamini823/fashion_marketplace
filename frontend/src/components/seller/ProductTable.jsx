import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, AlertCircle } from 'lucide-react';

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case 'approved':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 border border-green-200">Approved</span>;
    case 'pending':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">Pending Approval</span>;
    case 'rejected':
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 border border-red-200">Rejected</span>;
    default:
      return <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 border border-gray-200">{status}</span>;
  }
};

const ProductTable = ({ products, onDelete }) => {
  const [productToDelete, setProductToDelete] = useState(null);

  const confirmDelete = () => {
    if (productToDelete) {
      onDelete(productToDelete);
      setProductToDelete(null);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-brand-50 border-b border-brand-100">
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-brand-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-brand-100 flex-shrink-0 flex items-center justify-center text-brand-400 overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs">No img</span>
                      )}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-brand-dark">{product.name}</p>
                      {product.customizable && <p className="text-xs text-brand-500 mt-0.5">Customizable</p>}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-brand-dark">₹{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-600">
                  {product.stock === 0 && product.customizable ? 'Custom' : product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(product.status)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-brand-500">{product.lastUpdated}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-3">
                    {product.status.toLowerCase() === 'rejected' ? (
                      <Link 
                        to={`/seller/products/edit/${product.id}`} 
                        className="text-red-600 hover:text-red-800 flex items-center gap-1 bg-red-50 px-3 py-1.5 rounded-md transition-colors"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Edit & Resubmit
                      </Link>
                    ) : (
                      <Link 
                        to={`/seller/products/edit/${product.id}`} 
                        className="text-brand-accent hover:text-brand-800 flex items-center gap-1 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Link>
                    )}
                    <button 
                      onClick={() => setProductToDelete(product.id)}
                      className="text-brand-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="7" className="px-6 py-12 text-center text-brand-500">
                  <p className="text-base">No products found.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
            <h3 className="text-xl font-serif font-bold text-brand-dark mb-2">Delete Product</h3>
            <p className="text-brand-600 mb-6">Are you sure you want to delete this product? This action cannot be undone.</p>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setProductToDelete(null)}
                className="px-4 py-2 border border-brand-200 text-brand-700 rounded-md font-medium hover:bg-brand-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductTable;
