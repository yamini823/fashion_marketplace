import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SellerRegistration from './pages/SellerRegistration';
import SellerDashboard from './pages/SellerDashboard';
import { SellerPlaceholder } from './pages/SellerPlaceholders';
import { PlaceholderPage } from './pages/Placeholders';

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
        <Route path="/seller/products" element={<SellerPlaceholder title="Products Management" />} />
        <Route path="/seller/orders" element={<SellerPlaceholder title="Orders Management" />} />
        <Route path="/seller/inventory" element={<SellerPlaceholder title="Inventory" />} />
        <Route path="/seller/store" element={<SellerPlaceholder title="Storefront Settings" />} />
        <Route path="/seller/profile" element={<SellerPlaceholder title="Creator Profile" />} />
        <Route path="/seller/settings" element={<SellerPlaceholder title="Settings" />} />
        
        <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;