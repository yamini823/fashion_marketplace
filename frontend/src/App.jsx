import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
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
        <Route path="/login" element={<PlaceholderPage title="Login / Signup" />} />
        <Route path="/cart" element={<PlaceholderPage title="Shopping Cart" />} />
        <Route path="/wishlist" element={<PlaceholderPage title="Wishlist" />} />
        <Route path="/seller/register" element={<PlaceholderPage title="Become a Seller" />} />
        <Route path="*" element={<PlaceholderPage title="404 - Page Not Found" />} />
      </Routes>
    </Router>
  );
}

export default App;