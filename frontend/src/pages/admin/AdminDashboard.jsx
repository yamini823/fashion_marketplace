import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  UserCheck, 
  PackageSearch,
  Package,
  ShoppingBag,
  Bell,
  Menu,
  AlertCircle,
  FileCheck,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminStatCard from '../../components/admin/AdminStatCard';
import { adminStats, recentActivity } from '../../data/adminData';

const getActivityIcon = (type) => {
  switch (type) {
    case 'application': return <FileCheck className="w-5 h-5 text-blue-500" />;
    case 'product': return <PackageSearch className="w-5 h-5 text-purple-500" />;
    case 'approval': return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'rejection': return <XCircle className="w-5 h-5 text-red-500" />;
    case 'customer': return <UserCheck className="w-5 h-5 text-indigo-500" />;
    default: return <Clock className="w-5 h-5 text-gray-500" />;
  }
};

const AdminDashboard = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-50 flex">
      {/* Sidebar */}
      <AdminSidebar 
        isMobileOpen={isMobileSidebarOpen} 
        setIsMobileOpen={setIsMobileSidebarOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-brand-200 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center flex-1">
            <button 
              className="lg:hidden mr-4 text-brand-500 hover:text-brand-800"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Admin Dashboard</h1>
              <p className="hidden sm:block text-sm text-brand-500 mt-1">Manage your marketplace and keep YAMORA running smoothly.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-brand-500 hover:text-brand-accent transition-colors rounded-full hover:bg-brand-50">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-accent rounded-full border border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-brand-200">
              <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-serif font-bold text-lg overflow-hidden">
                <span className="text-sm font-bold">AD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          {/* Needs Your Attention */}
          <div className="mb-8">
            <h2 className="text-lg font-serif font-bold text-brand-dark mb-4">Needs Your Attention</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="bg-white rounded-xl border border-yellow-200 shadow-sm p-5 flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-yellow-100 rounded-lg text-yellow-600 mt-1">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-dark">{adminStats.pendingSellers} Seller Applications Awaiting Review</h3>
                    <p className="text-sm text-brand-600 mt-1">Review new creator applications.</p>
                  </div>
                </div>
                <Link to="/admin/sellers/applications" className="hidden sm:block px-4 py-2 bg-brand-accent text-white text-sm font-medium rounded-md hover:bg-brand-800 transition-colors shrink-0">
                  Review Sellers &rarr;
                </Link>
              </div>
              
              <div className="bg-white rounded-xl border border-orange-200 shadow-sm p-5 flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600 mt-1">
                    <PackageSearch className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-brand-dark">{adminStats.pendingProducts} Products Awaiting Approval</h3>
                    <p className="text-sm text-brand-600 mt-1">Review products before they go live.</p>
                  </div>
                </div>
                <Link to="/admin/products/pending" className="hidden sm:block px-4 py-2 bg-brand-accent text-white text-sm font-medium rounded-md hover:bg-brand-800 transition-colors shrink-0">
                  Review Products &rarr;
                </Link>
              </div>

            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <AdminStatCard title="Total Sellers" value={adminStats.totalSellers} icon={UserCheck} />
            <AdminStatCard title="Total Products" value={adminStats.totalProducts} icon={Package} />
            <AdminStatCard title="Customers" value={adminStats.customers} icon={Users} />
            <AdminStatCard title="Orders" value={adminStats.orders} icon={ShoppingBag} />
            <AdminStatCard title="Pending Sellers" value={adminStats.pendingSellers} icon={FileCheck} />
            <AdminStatCard title="Pending Products" value={adminStats.pendingProducts} icon={PackageSearch} />
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-brand-100 flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-brand-dark">Recent Activity</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {recentActivity.map((activity, index) => (
                    <div key={activity.id} className="relative flex gap-4">
                      {index !== recentActivity.length - 1 && (
                        <div className="absolute left-[1.125rem] top-8 bottom-[-1.5rem] w-px bg-brand-100"></div>
                      )}
                      <div className="relative z-10 w-9 h-9 rounded-full bg-brand-50 flex items-center justify-center border border-brand-100 flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 pt-1.5">
                        <p className="text-sm font-medium text-brand-dark">{activity.text}</p>
                        <p className="text-xs text-brand-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Summary or Placeholder for more */}
            <div className="space-y-6">
              <div className="bg-brand-dark rounded-xl shadow-sm p-6 text-white text-center flex flex-col justify-center items-center h-full min-h-[300px]">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle className="w-8 h-8 text-brand-100" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Platform Status</h3>
                <p className="text-brand-200 mb-6 max-w-sm">
                  All systems are running smoothly. The approval workflow is crucial for maintaining YAMORA's quality standards.
                </p>
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-2xl font-bold">{adminStats.customers}</p>
                    <p className="text-xs text-brand-200 uppercase tracking-wider">Active Users</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <p className="text-2xl font-bold">{adminStats.totalProducts}</p>
                    <p className="text-xs text-brand-200 uppercase tracking-wider">Live Items</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
