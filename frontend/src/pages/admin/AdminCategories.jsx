import React, { useState } from 'react';
import { Menu, Plus, Edit, Trash2 } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { adminCategories } from '../../data/adminData';
import InputField from '../../components/InputField';

const AdminCategories = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [categories, setCategories] = useState(adminCategories);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      setCategories([...categories, {
        id: `cat_${Date.now()}`,
        name: newCategoryName,
        count: 0
      }]);
      setNewCategoryName('');
      setIsAddModalOpen(false);
    }
  };

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(c => c.id !== id));
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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Categories</h1>
            </div>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-brand-accent text-white px-4 py-2 rounded-md font-medium hover:bg-brand-800 transition-colors"
          >
            <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Add Category</span>
          </button>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-hidden max-w-4xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Category Name</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Products Count</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{category.name}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{category.count} items</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3 text-brand-500">
                        <button className="hover:text-brand-accent transition-colors"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => handleDelete(category.id)} className="hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>

      {/* Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsAddModalOpen(false)}></div>
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-xl font-serif font-bold text-brand-dark mb-4">Add New Category</h2>
            <InputField
              label="Category Name"
              id="categoryName"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              placeholder="e.g. Vintage"
            />
            <div className="mt-6 flex justify-end gap-3">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="px-4 py-2 border border-brand-200 text-brand-700 rounded-md font-medium hover:bg-brand-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddCategory}
                disabled={!newCategoryName.trim()}
                className="px-4 py-2 bg-brand-accent text-white rounded-md font-medium hover:bg-brand-800 transition-colors disabled:opacity-50"
              >
                Save Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCategories;
