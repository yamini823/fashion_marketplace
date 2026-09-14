import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import PasswordField from '../components/PasswordField';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

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
    setSuccessMessage('');
    
    let newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms & Conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Account created successfully! Redirecting to login...');
      // Future backend logic:
      // POST /api/auth/register with formData
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-50 flex flex-col md:flex-row">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 bg-white shadow-xl md:shadow-none z-10 overflow-y-auto">
        <div className="w-full max-w-md mx-auto">
          
          <div className="text-center md:text-left mb-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-2">
              Join Yamora
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-brand-dark mb-3">
              Create Your Account
            </h1>
            <p className="text-brand-600 text-sm">
              Discover unique fashion and connect with independent creators.
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center font-medium">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <InputField
                label="First Name"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
                className="mb-4 sm:mb-0"
              />
              <InputField
                label="Last Name"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
              />
            </div>

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

            <PasswordField
              label="Password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            
            <PasswordField
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />

            <div className="pt-2">
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
                <div className="ml-2 text-sm">
                  <label htmlFor="agreeTerms" className="font-medium text-brand-700 cursor-pointer">
                    I agree to the <a href="#" className="text-brand-accent hover:underline">Terms & Conditions</a> and <a href="#" className="text-brand-accent hover:underline">Privacy Policy</a>
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
                className="w-full bg-brand-dark text-white py-3 px-4 rounded-md font-medium hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-brand-500 font-medium">OR</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-brand-200 shadow-sm text-sm font-medium rounded-md text-brand-dark bg-white hover:bg-brand-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Continue with Google
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-brand-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-accent hover:text-brand-800 transition-colors">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Column - Image (Desktop Only) */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5 relative">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop" 
          alt="Fashion models showcasing unique styles" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Brand messaging overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-24 text-white">
          <div className="max-w-lg">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 drop-shadow-md">
              Elevate Your Wardrobe
            </h2>
            <p className="text-lg text-white/90 drop-shadow-md">
              Join thousands of fashion enthusiasts exploring unique, sustainable, and custom-made pieces from independent designers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
