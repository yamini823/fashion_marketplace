import React, { useState } from 'react';
import { Menu, CheckCircle, XCircle } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { sellerApplications } from '../../data/adminData';
import TextAreaField from '../../components/TextAreaField';

const AdminSellerApplications = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [applications, setApplications] = useState(sellerApplications);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [rejectFeedback, setRejectFeedback] = useState('');
  const [isRejecting, setIsRejecting] = useState(false);

  const openReviewModal = (app) => {
    setSelectedApp(app);
    setIsReviewModalOpen(true);
    setIsRejecting(false);
    setRejectFeedback('');
  };

  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
    setTimeout(() => setSelectedApp(null), 200);
  };

  const handleApprove = () => {
    setApplications(applications.filter(a => a.id !== selectedApp.id));
    closeReviewModal();
  };

  const handleReject = () => {
    if (!rejectFeedback.trim()) return;
    setApplications(applications.filter(a => a.id !== selectedApp.id));
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
              <h1 className="text-xl md:text-2xl font-serif font-bold text-brand-dark">Seller Applications</h1>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          <div className="bg-white rounded-xl border border-brand-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-50 border-b border-brand-100">
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Seller</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Business</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Category</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Location</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Submitted</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-xs font-medium text-brand-500 uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-100">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-brand-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-brand-dark">{app.sellerName}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{app.businessName}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{app.category}</td>
                    <td className="px-6 py-4 text-sm text-brand-600">{app.city}, {app.country}</td>
                    <td className="px-6 py-4 text-sm text-brand-500">{app.submittedDate}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => openReviewModal(app)}
                        className="text-brand-accent hover:text-brand-800 text-sm font-medium"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
                {applications.length === 0 && (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-brand-500">No pending seller applications.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </main>
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60" onClick={closeReviewModal}></div>
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-brand-100 flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-brand-dark">Review Application</h2>
              <button onClick={closeReviewModal} className="text-brand-400 hover:text-brand-700">
                <Menu className="w-5 h-5 hidden" /> {/* Placeholder for X icon but Menu was imported instead of X, will use simple span */}
                <span className="text-xl">&times;</span>
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-6">
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Seller Name</p>
                  <p className="font-medium text-brand-dark">{selectedApp.sellerName}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Business Name</p>
                  <p className="font-medium text-brand-dark">{selectedApp.businessName}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="font-medium text-brand-dark">{selectedApp.email}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="font-medium text-brand-dark">{selectedApp.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="font-medium text-brand-dark">{selectedApp.city}, {selectedApp.country}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Category</p>
                  <p className="font-medium text-brand-dark">{selectedApp.category}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Application Date</p>
                  <p className="font-medium text-brand-dark">{selectedApp.submittedDate}</p>
                </div>
                <div>
                  <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Website/Social</p>
                  <p className="font-medium text-brand-accent">{selectedApp.website || 'N/A'}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-xs text-brand-500 uppercase tracking-wider mb-1">Description</p>
                <p className="text-sm text-brand-700 leading-relaxed bg-brand-50 p-4 rounded-lg">
                  {selectedApp.description}
                </p>
              </div>

              {isRejecting && (
                <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                  <TextAreaField
                    label="Rejection Feedback (Required)"
                    id="feedback"
                    value={rejectFeedback}
                    onChange={(e) => setRejectFeedback(e.target.value)}
                    placeholder="e.g. Please provide more information about your business."
                    rows={3}
                  />
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
                    className="px-5 py-2.5 border border-red-200 text-red-700 bg-white rounded-md font-medium hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <XCircle className="w-4 h-4" /> Reject
                  </button>
                  <button 
                    onClick={handleApprove}
                    className="px-5 py-2.5 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" /> Approve Application
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

export default AdminSellerApplications;
