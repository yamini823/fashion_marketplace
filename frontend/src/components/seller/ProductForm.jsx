import React, { useState, useRef } from 'react';
import { Upload, X, AlertCircle } from 'lucide-react';
import InputField from '../InputField';
import SelectField from '../SelectField';
import TextAreaField from '../TextAreaField';
import { CATEGORY_OPTIONS } from '../../data/sellerProducts';

const ProductForm = ({ initialData, onSubmit, onCancel, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    price: '',
    discountPrice: '',
    stockQuantity: '',
    customizable: false,
    customizationDescription: '',
    sizes: '',
    colors: '',
    materials: '',
    shippingInformation: '',
    images: [],
    ...initialData
  });

  const [errors, setErrors] = useState({});
  const [imagePreviews, setImagePreviews] = useState(initialData?.images || []);
  const fileInputRef = useRef(null);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    let newValue = value;
    if (type === 'checkbox') {
      newValue = checked;
    } else if (type === 'radio' && name === 'customizable') {
      newValue = value === 'true';
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Create object URLs for previews
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...newPreviews] }));
    
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: '' }));
    }
  };

  const removeImage = (index) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (Number(formData.price) <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    
    if (formData.stockQuantity === '') {
      newErrors.stockQuantity = 'Stock quantity is required';
    } else if (Number(formData.stockQuantity) < 0) {
      newErrors.stockQuantity = 'Stock cannot be negative';
    }
    
    if (imagePreviews.length === 0) {
      newErrors.images = 'At least one product image is required';
    }
    
    if (formData.customizable && !formData.customizationDescription.trim()) {
      newErrors.customizationDescription = 'Customization description is required when customizable is enabled';
    }

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e, status) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ ...formData, status });
    }
  };

  return (
    <form className="space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-brand-100 shadow-sm max-w-4xl mx-auto">
      
      {initialData?.status === 'Rejected' && initialData?.adminFeedback && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-5 flex items-start gap-4">
          <div className="p-2 bg-red-100 rounded-full text-red-600 mt-0.5">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-red-800">Admin Feedback</h3>
            <p className="text-sm text-red-700 mt-1">{initialData.adminFeedback}</p>
          </div>
        </div>
      )}

      {/* Basic Info */}
      <div className="space-y-6">
        <h3 className="text-lg font-serif font-bold text-brand-dark border-b border-brand-100 pb-2">Basic Information</h3>
        
        <InputField
          label="Product Name"
          id="name"
          name="name"
          placeholder="e.g. Handmade Gold Bangles"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        
        <SelectField
          label="Category"
          id="category"
          name="category"
          options={CATEGORY_OPTIONS}
          value={formData.category}
          onChange={handleChange}
          error={errors.category}
          required
        />
        
        <TextAreaField
          label="Description"
          id="description"
          name="description"
          placeholder="Describe your product in detail..."
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
          required
          rows={5}
        />
      </div>

      {/* Pricing & Inventory */}
      <div className="space-y-6">
        <h3 className="text-lg font-serif font-bold text-brand-dark border-b border-brand-100 pb-2">Pricing & Inventory</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <InputField
            label="Price (₹)"
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={formData.price}
            onChange={handleChange}
            error={errors.price}
            required
          />
          <InputField
            label="Discount Price (₹)"
            id="discountPrice"
            name="discountPrice"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00 (Optional)"
            value={formData.discountPrice}
            onChange={handleChange}
            error={errors.discountPrice}
          />
          <InputField
            label="Stock Quantity"
            id="stockQuantity"
            name="stockQuantity"
            type="number"
            min="0"
            placeholder="0"
            value={formData.stockQuantity}
            onChange={handleChange}
            error={errors.stockQuantity}
            required
          />
        </div>
      </div>

      {/* Product Images */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-brand-dark border-b border-brand-100 pb-2">
          Product Images <span className="text-brand-accent">*</span>
        </h3>
        
        <div className="flex flex-wrap gap-4 mb-4">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg border border-brand-200 overflow-hidden group">
              <img src={preview} alt={`Preview ${index}`} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-1 bg-white/90 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg border-2 border-dashed border-brand-200 flex flex-col items-center justify-center text-brand-500 hover:text-brand-accent hover:border-brand-accent transition-colors bg-brand-50 hover:bg-brand-100/50"
          >
            <Upload className="w-6 h-6 mb-2" />
            <span className="text-xs font-medium px-2 text-center">Add Image</span>
          </button>
        </div>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleImageChange} 
          accept="image/png, image/jpeg, image/webp" 
          multiple 
          className="hidden" 
        />
        
        <div className="text-sm text-brand-500 mt-2">
          <p>Upload Product Images</p>
          <p className="text-xs">PNG, JPG or WEBP. At least one image is required.</p>
        </div>
        {errors.images && <p className="mt-1 text-xs text-red-500">{errors.images}</p>}
      </div>

      {/* Customization */}
      <div className="space-y-6">
        <h3 className="text-lg font-serif font-bold text-brand-dark border-b border-brand-100 pb-2">Customization</h3>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-brand-dark mb-3">Is this product customizable?</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="customizable" 
                value="true"
                checked={formData.customizable === true}
                onChange={handleChange}
                className="w-4 h-4 text-brand-accent focus:ring-brand-accent border-brand-200"
              />
              <span className="text-sm text-brand-700">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="customizable" 
                value="false"
                checked={formData.customizable === false}
                onChange={handleChange}
                className="w-4 h-4 text-brand-accent focus:ring-brand-accent border-brand-200"
              />
              <span className="text-sm text-brand-700">No</span>
            </label>
          </div>
        </div>

        {formData.customizable && (
          <div className="bg-brand-50/50 p-4 sm:p-6 rounded-lg border border-brand-100 space-y-4">
            <div className="mb-2 flex items-center gap-2 text-brand-accent">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Customization Available</span>
            </div>
            
            <TextAreaField
              label="Customization Description"
              id="customizationDescription"
              name="customizationDescription"
              placeholder="e.g. Customers can choose colors, sizes and personalized design details."
              value={formData.customizationDescription}
              onChange={handleChange}
              error={errors.customizationDescription}
              required
              rows={2}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Available Sizes"
                id="sizes"
                name="sizes"
                placeholder="e.g. XS, S, M, L, XL or Custom"
                value={formData.sizes}
                onChange={handleChange}
              />
              <InputField
                label="Available Colors"
                id="colors"
                name="colors"
                placeholder="e.g. Red, Blue, Gold"
                value={formData.colors}
                onChange={handleChange}
              />
              <InputField
                label="Materials"
                id="materials"
                name="materials"
                placeholder="e.g. Cotton Silk, Brass"
                value={formData.materials}
                onChange={handleChange}
              />
              <InputField
                label="Shipping Information"
                id="shippingInformation"
                name="shippingInformation"
                placeholder="e.g. Ships within 7-10 days after customization"
                value={formData.shippingInformation}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-6 border-t border-brand-100 flex flex-col-reverse sm:flex-row justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="px-6 py-3 border border-brand-200 text-brand-700 rounded-md font-medium hover:bg-brand-50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, 'Draft')}
          disabled={isSubmitting}
          className="px-6 py-3 border border-brand-200 bg-brand-50 text-brand-700 rounded-md font-medium hover:bg-brand-100 transition-colors disabled:opacity-50"
        >
          Save Draft
        </button>
        <button
          type="button"
          onClick={(e) => handleSubmit(e, 'Pending Approval')}
          disabled={isSubmitting}
          className="px-6 py-3 bg-brand-accent text-white rounded-md font-medium hover:bg-brand-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Submitting...' : 'Submit for Approval'}
          {!isSubmitting && <span>&rarr;</span>}
        </button>
      </div>

    </form>
  );
};

export default ProductForm;
