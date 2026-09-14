import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';

const CATEGORY_OPTIONS = [
  { value: 'clothing', label: 'Clothing' },
  { value: 'jewellery', label: 'Jewellery' },
  { value: 'bangles', label: 'Bangles' },
  { value: 'embroidery', label: 'Embroidery' },
  { value: 'handmade', label: 'Handmade' },
  { value: 'tailoring', label: 'Tailoring' },
  { value: 'custom_fashion', label: 'Custom Fashion' },
  { value: 'accessories', label: 'Accessories' },
  { value: 'other', label: 'Other' },
];

const SellerRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    category: '',
    productsDescription: '',
    businessDescription: '',
    website: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.businessName.trim()) newErrors.businessName = 'Brand/Business name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.category) newErrors.category = 'Primary category is required';
    if (!formData.productsDescription.trim()) newErrors.productsDescription = 'Please describe your products';
    if (!formData.businessDescription.trim()) newErrors.businessDescription = 'Business description is required';
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Seller Terms and Privacy Policy';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to top to see errors if any
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Future backend logic would submit payload here:
      // { ...formData, status: 'PENDING' }
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm max-w-lg w-full text-center border border-brand-200">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Application Submitted</h2>
          <p className="text-brand-600 mb-8 leading-relaxed">
            Thank you for applying to become a YAMORA creator. Our team will review your application and get back to you shortly.
          </p>
          <Link 
            to="/" 
            className="inline-block w-full bg-brand-dark text-white py-3 px-6 rounded-md font-medium hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col py-12 px-6 sm:px-12 lg:px-20 bg-white shadow-xl md:shadow-none z-10 overflow-y-auto">
        <div className="w-full max-w-2xl mx-auto">
          
          <div className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-2">
              Creator Application
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark mb-4">
              Become a YAMORA Creator
            </h1>
            <p className="text-brand-600 text-base md:text-lg">
              Turn your creativity into a business and reach customers who love unique fashion.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-6">
              <h3 className="text-lg font-serif font-semibold text-brand-dark border-b border-brand-100 pb-2">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                  required
                />
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-lg font-serif font-semibold text-brand-dark border-b border-brand-100 pb-2">
                Business Details
              </h3>
              
              <InputField
                label="Brand / Business Name"
                id="businessName"
                name="businessName"
                placeholder="Enter your brand or business name"
                value={formData.businessName}
                onChange={handleChange}
                error={errors.businessName}
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Country"
                  id="country"
                  name="country"
                  placeholder="E.g. United States"
                  value={formData.country}
                  onChange={handleChange}
                  error={errors.country}
                  required
                />
                <InputField
                  label="City"
                  id="city"
                  name="city"
                  placeholder="E.g. New York"
                  value={formData.city}
                  onChange={handleChange}
                  error={errors.city}
                  required
                />
              </div>

              <SelectField
                label="Primary Category"
                id="category"
                name="category"
                options={CATEGORY_OPTIONS}
                value={formData.category}
                onChange={handleChange}
                error={errors.category}
                required
              />

              <TextAreaField
                label="What do you sell?"
                id="productsDescription"
                name="productsDescription"
                placeholder="Tell customers about the products or services you create..."
                value={formData.productsDescription}
                onChange={handleChange}
                error={errors.productsDescription}
                required
                rows={3}
              />

              <TextAreaField
                label="Business / Creator Description"
                id="businessDescription"
                name="businessDescription"
                placeholder="Share your story, your process, and what makes your brand unique..."
                value={formData.businessDescription}
                onChange={handleChange}
                error={errors.businessDescription}
                required
                rows={4}
              />

              <InputField
                label="Instagram / Website (Optional)"
                id="website"
                name="website"
                placeholder="Instagram profile or website URL"
                value={formData.website}
                onChange={handleChange}
                error={errors.website}
              />
            </div>

            <div className="pt-6 pb-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-brand-accent focus:ring-brand-accent border-brand-200 rounded cursor-pointer"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="font-medium text-brand-700 cursor-pointer">
                    I agree to the <a href="#" className="text-brand-accent hover:underline">YAMORA Seller Terms</a> and <a href="#" className="text-brand-accent hover:underline">Privacy Policy</a>.
                  </label>
                  {errors.agreeTerms && (
                    <p className="mt-1 text-xs text-red-500">{errors.agreeTerms}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-accent text-white py-4 px-6 rounded-md font-medium text-lg hover:bg-brand-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Seller Application'} 
                {!isSubmitting && <span>&rarr;</span>}
              </button>
            </div>
            
            <p className="text-center text-sm text-brand-500 mt-4">
              Already a seller? <Link to="/login" className="text-brand-accent hover:underline font-medium">Login to your dashboard</Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Column - Image (Desktop Only) */}
      <div className="hidden md:block md:w-1/2 lg:w-2/5 relative">
        <img 
          src="https://images.unsplash.com/photo-1558769132-cb1fac08b042?q=80&w=1470&auto=format&fit=crop" 
          alt="Creator in workshop" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/20 to-transparent"></div>
        
        {/* Brand messaging overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
          <div className="max-w-md">
            <h2 className="font-serif text-3xl font-bold mb-4 drop-shadow-md">
              Join Our Global Artisan Community
            </h2>
            <p className="text-base text-white/90 drop-shadow-md">
              YAMORA connects independent creators, tailors, and designers with shoppers looking for unique, ethical, and customized fashion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration;
