import React, { useState } from 'react';
import { Menu, Save } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import InputField from '../../components/InputField';

const AdminSettings = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Settings</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="max-w-3xl space-y-6">
            
            <div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-brand-dark mb-4">Platform Profile</h3>
              <div className="space-y-4">
                <InputField
                  label="Marketplace Name"
                  id="platformName"
                  defaultValue="YAMORA"
                />
                <InputField
                  label="Support Email"
                  id="supportEmail"
                  defaultValue="support@yamora.com"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-brand-dark mb-4">Admin Account</h3>
              <div className="space-y-4">
                <InputField
                  label="Admin Name"
                  id="adminName"
                  defaultValue="System Administrator"
                />
                <InputField
                  label="Email Address"
                  id="adminEmail"
                  defaultValue="admin@yamora.com"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-brand-100 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-brand-dark mb-4">Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-accent focus:ring-brand-accent rounded border-brand-300" defaultChecked />
                  <span className="text-sm text-brand-700">Email me when a new seller applies</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-brand-accent focus:ring-brand-accent rounded border-brand-300" defaultChecked />
                  <span className="text-sm text-brand-700">Email me when a product needs approval</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white rounded-md font-medium hover:bg-brand-800 transition-colors">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
