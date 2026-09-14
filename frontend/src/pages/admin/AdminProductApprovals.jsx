import React, { useState } from 'react';
import { Menu, CheckCircle, XCircle } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { pendingProducts } from '../../data/adminData';
import TextAreaField from '../../components/TextAreaField';

const AdminProductApprovals = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [products, setProducts] = useState(pendingProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [rejectFeedback, setRejectFeedback] = useState('');
  const [isRejecting, setIsRejecting] = useState(false);

  const openReviewModal = (product) => {
    setSelectedProduct(product);
    setIsReviewModalOpen(true);
    setIsRejecting(false);
    setRejectFeedback('');
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  const handleApprove = () => {
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    closeReviewModal();
  };

  const handleReject = () => {
    if (!rejectFeedback.trim()) return;
    setProducts(products.filter(p => p.id !== selectedProduct.id));
    closeReviewModal();
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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Product Approvals</h1>
              <p className="hidden sm:block text-sm text-brand-500 mt-1">Review products submitted by creators before they become visible to customers.</p>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Product</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Seller</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Category</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Price</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Submitted</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-md bg-brand-100 flex-shrink-0 overflow-hidden">
                          {product.images && product.images[0] ? (
                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-brand-400">No img</div>
                          )}
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-brand-dark">{product.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-brand-600">{product.seller}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{product.category}</td>
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">₹{product.price}</td>
                    <td className="px-6 py-4 text-sm text-brand-500">{product.submittedDate}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => openReviewModal(product)}
                        className="text-brand-accent hover:text-brand-800 text-sm font-medium"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-brand-500">No products awaiting approval.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </main>
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60" onClick={closeReviewModal}></div>
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-brand-100 flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-brand-dark">Review Product</h2>
              <button onClick={closeReviewModal} className="text-brand-400 hover:text-brand-700">
                <span className="text-xl">&times;</span>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                
                {/* Images */}
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-lg bg-brand-50 border border-brand-100 overflow-hidden mb-2">
                    {selectedProduct.images && selectedProduct.images[0] ? (
                      <img src={selectedProduct.images[0]} alt="Product" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-400">No Image</div>
                    )}
                  </div>
                  <p className="text-xs text-brand-500 text-center">Product Image 1 of {selectedProduct.images?.length || 0}</p>
                </div>

                {/* Details */}
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-serif font-bold text-brand-dark mb-1">{selectedProduct.name}</h3>
                  <p className="text-brand-600 mb-4">By <span className="font-medium text-brand-dark">{selectedProduct.seller}</span></p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Price</p>
                      <p className="font-medium text-brand-dark">₹{selectedProduct.price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Category</p>
                      <p className="font-medium text-brand-dark">{selectedProduct.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Stock</p>
                      <p className="font-medium text-brand-dark">{selectedProduct.stock}</p>
                    </div>
                    <div>
                      <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Customizable</p>
                      <p className="font-medium text-brand-dark">{selectedProduct.customizable ? 'Yes' : 'No'}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Description</p>
                    <p className="text-sm text-brand-700 bg-brand-50 p-3 rounded-lg">{selectedProduct.description}</p>
                  </div>

                  {selectedProduct.customizable && (
                    <div className="bg-brand-50 p-3 rounded-lg grid grid-cols-2 gap-3 text-sm">
                      {selectedProduct.sizes && (
                        <div><span className="font-medium text-brand-dark">Sizes:</span> <span className="text-brand-600">{selectedProduct.sizes}</span></div>
                      )}
                      {selectedProduct.colors && (
                        <div><span className="font-medium text-brand-dark">Colors:</span> <span className="text-brand-600">{selectedProduct.colors}</span></div>
                      )}
                      {selectedProduct.materials && (
                        <div className="col-span-2"><span className="font-medium text-brand-dark">Materials:</span> <span className="text-brand-600">{selectedProduct.materials}</span></div>
                      )}
                    </div>
                  )}

                </div>
              </div>

              {isRejecting && (
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <TextAreaField
                    label="Rejection Feedback (Required)"
                    id="feedback"
                    value={rejectFeedback}
                    onChange={(e) => setRejectFeedback(e.target.value)}
                    placeholder="e.g. Please upload clearer product images."
                    rows={3}
                  />
                  <p className="text-xs text-red-600 mt-2">The seller will be able to edit and resubmit this product after rejection.</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-brand-100 flex flex-col sm:flex-row justify-end gap-3 bg-gray-50 rounded-b-xl">
              <button 
                onClick={closeReviewModal}
                className="px-5 py-2.5 border border-brand-200 text-brand-700 rounded-md font-medium hover:bg-white transition-colors"
              >
                Cancel
              </button>
              
              {!isRejecting ? (
                <>
                  <button 
                    onClick={() => setIsRejecting(true)}
                    className="px-5 py-2.5 border border-red-200 text-red-700 bg-white rounded-md font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-4 h-4" /> Reject Product
                  </button>
                  <button 
                    onClick={handleApprove}
                    className="px-5 py-2.5 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" /> Approve Product
                  </button>
                </>
              ) : (
                <button 
                  onClick={handleReject}
                  disabled={!rejectFeedback.trim()}
                  className="px-5 py-2.5 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  Confirm Rejection
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductApprovals;
