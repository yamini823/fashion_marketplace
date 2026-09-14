import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PromoBar from '../components/PromoBar';
import Footer from '../components/Footer';

export const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-brand-light">
    <PromoBar />
    <Navbar />
    <main className="flex-grow flex items-center justify-center p-8">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-serif font-bold text-brand-900 mb-6">{title}</h1>
        <p className="text-brand-600 mb-8">This page is a placeholder for the future implementation.</p>
        <Link to="/" className="inline-block bg-brand-accent text-white px-6 py-3 rounded-full font-medium hover:bg-brand-800 transition-colors">
          Return to Home
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);
