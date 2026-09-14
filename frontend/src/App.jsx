import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellerRegistration from './pages/SellerRegistration';
import SellerDashboard from './pages/SellerDashboard';
import SellerProducts from './pages/seller/SellerProducts';
import AddProduct from './pages/seller/AddProduct';
import EditProduct from './pages/seller/EditProduct';
import { SellerPlaceholder } from './pages/SellerPlaceholders';
import { PlaceholderPage } from './pages/Placeholders';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSellers from './pages/admin/AdminSellers';
import AdminSellerApplications from './pages/admin/AdminSellerApplications';
import AdminProducts from './pages/admin/AdminProducts';
import AdminProductApprovals from './pages/admin/AdminProductApprovals';
import AdminCustomers from './pages/admin/AdminCustomers';
import AdminOrders from './pages/admin/AdminOrders';
import AdminCategories from './pages/admin/AdminCategories';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<PlaceholderPage title="Shop All Products" />} />
        <Route path="/product/:id" element={<PlaceholderPage title="Product Details" />} />
        <Route path="/category/:category" element={<PlaceholderPage title="Category" />} />
        <Route path="/creators" element={<PlaceholderPage title="Meet Our Creators" />} />
        <Route path="/creator/:id" element={<PlaceholderPage title="Creator Profile" />} />
        <Route path="/custom-order" element={<PlaceholderPage title="Custom Order" />} />
        <Route path="/about" element={<PlaceholderPage title="About Us" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<PlaceholderPage title="Shopping Cart" />} />
        <Route path="/wishlist" element={<PlaceholderPage title="Wishlist" />} />
        
        {/* Seller Routes */}
        <Route path="/seller/register" element={<SellerRegistration />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/products/add" element={<AddProduct />} />
        <Route path="/seller/products/edit/:id" element={<EditProduct />} />
        <Route path="/seller/orders" element={<SellerPlaceholder title="Orders Management" />} />
        <Route path="/seller/inventory" element={<SellerPlaceholder title="Inventory" />} />
        <Route path="/seller/store" element={<SellerPlaceholder title="Storefront Settings" />} />
        <Route path="/seller/profile" element={<SellerPlaceholder title="Creator Profile" />} />
        <Route path="/seller/settings" element={<SellerPlaceholder title="Settings" />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/sellers" element={<AdminSellers />} />
        <Route path="/admin/sellers/applications" element={<AdminSellerApplications />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/products/pending" element={<AdminProductApprovals />} />
        <Route path="/admin/customers" element={<AdminCustomers />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/categories" element={<AdminCategories />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        
        <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;