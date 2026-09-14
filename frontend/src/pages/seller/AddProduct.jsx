import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ArrowLeft, Bell } from 'lucide-react';
import SellerSidebar from '../../components/seller/SellerSidebar';
import ProductForm from '../../components/seller/ProductForm';

const AddProduct = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleCancel = () => {
    navigate('/seller/products');
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-50 flex flex-col md:flex-row">
        <SellerSidebar isMobileOpen={isMobileSidebarOpen} setIsMobileOpen={setIsMobileSidebarOpen} />
        <div className="flex-1 flex items-center justify-center p-4 lg:pl-64">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-lg w-full text-center border border-brand-200">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Product Submitted</h2>
            <p className="text-brand-600 mb-8 leading-relaxed">
              Product submitted for admin approval. It will appear in your store once reviewed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2.5 border border-brand-200 text-brand-700 rounded-md font-medium hover:bg-brand-50 transition-colors"
              >
                Add Another
              </button>
              <Link 
                to="/seller/products" 
                className="px-6 py-2.5 bg-brand-dark text-white rounded-md font-medium hover:bg-black transition-colors"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-50 flex">
      <SellerSidebar 
        isMobileOpen={isMobileSidebarOpen} 
        setIsMobileOpen={setIsMobileSidebarOpen} 
      />

      <div className="flex-1 flex flex-col lg:pl-64">
        <header className="sticky top-0 z-40 bg-white border-b border-brand-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center flex-1">
            <button 
              className="lg:hidden mr-4 text-brand-500 hover:text-brand-800"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <Link to="/seller/products" className="p-2 -ml-2 text-brand-500 hover:text-brand-dark rounded-full hover:bg-brand-50 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Add New Product</h1>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-brand-500 hover:text-brand-accent transition-colors rounded-full hover:bg-brand-50">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-brand-200">
              <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="mb-6">
            <p className="text-brand-600">Create a product listing for your YAMORA store.</p>
          </div>
          
          <ProductForm 
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            isSubmitting={isSubmitting}
          />
        </main>
      </div>
    </div>
  );
};

export default AddProduct;
