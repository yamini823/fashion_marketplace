export const adminStats = {
  totalSellers: 48,
  pendingSellers: 7,
  totalProducts: 326,
  pendingProducts: 18,
  customers: 1284,
  orders: 542
};

export const recentActivity = [
  { id: 1, text: 'New seller application received', time: '10 mins ago', type: 'application' },
  { id: 2, text: 'New product submitted for approval', time: '1 hour ago', type: 'product' },
  { id: 3, text: 'Seller application approved', time: '3 hours ago', type: 'approval' },
  { id: 4, text: 'Product rejected', time: '5 hours ago', type: 'rejection' },
  { id: 5, text: 'New customer registered', time: '1 day ago', type: 'customer' }
];

export const sellerApplications = [
  {
    id: 'app_1',
    sellerName: 'Aanya Sharma',
    businessName: 'Aanya Creations',
    email: 'aanya@example.com',
    phone: '+91 9876543210',
    country: 'India',
    city: 'Hyderabad',
    category: 'Handmade',
    description: 'We specialize in handmade traditional crafts and decor items.',
    website: 'instagram.com/aanyacreations',
    submittedDate: '14 Sep 2026',
    status: 'Pending'
  },
  {
    id: 'app_2',
    sellerName: 'Rohan Gupta',
    businessName: 'RG Tailors',
    email: 'rohan.g@example.com',
    phone: '+91 9876543211',
    country: 'India',
    city: 'Delhi',
    category: 'Tailoring',
    description: 'Custom tailoring for men and women with over 10 years of experience.',
    website: '',
    submittedDate: '12 Sep 2026',
    status: 'Pending'
  }
];

export const approvedSellers = [
  {
    id: 'sel_1',
    sellerName: 'Meera Patel',
    storeName: 'Meera Jewels',
    category: 'Jewellery',
    products: 45,
    orders: 120,
    status: 'Active'
  },
  {
    id: 'sel_2',
    sellerName: 'Vikram Singh',
    storeName: 'VS Designs',
    category: 'Clothing',
    products: 12,
    orders: 34,
    status: 'Active'
  },
  {
    id: 'sel_3',
    sellerName: 'Priya Desai',
    storeName: 'Priya Custom Fits',
    category: 'Tailoring',
    products: 5,
    orders: 8,
    status: 'Suspended'
  }
];

export const pendingProducts = [
  {
    id: 'prod_pen_1',
    name: 'Custom Embroidered Blouse',
    seller: 'Aanya Creations',
    category: 'Embroidery',
    description: 'Made to order embroidered blouse with intricate thread work.',
    price: 1499,
    stock: 0,
    submittedDate: '13 Sep 2026',
    status: 'Pending',
    customizable: true,
    sizes: 'XS, S, M, L, XL',
    colors: 'Red, Blue, Green, Custom',
    materials: 'Cotton Silk, Silk Threads',
    images: ['https://images.unsplash.com/photo-1558769132-cb1fac08b042?q=80&w=200&auto=format&fit=crop']
  },
  {
    id: 'prod_pen_2',
    name: 'Designer Custom Bangles',
    seller: 'Meera Jewels',
    category: 'Bangles',
    description: 'Designer bangles with unique stone placement.',
    price: 1299,
    stock: 8,
    submittedDate: '12 Sep 2026',
    status: 'Pending',
    customizable: true,
    sizes: '2.2, 2.4, 2.6, 2.8',
    colors: 'Gold, Rose Gold',
    materials: 'Alloy, Artificial Stones',
    images: ['https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=200&auto=format&fit=crop']
  }
];

export const allProducts = [
  ...pendingProducts,
  {
    id: 'prod_1',
    name: 'Handmade Gold Bangles',
    seller: 'Meera Jewels',
    category: 'Bangles',
    price: 799,
    status: 'Approved',
  },
  {
    id: 'prod_3',
    name: 'Pearl Jewellery Set',
    seller: 'Meera Jewels',
    category: 'Jewellery',
    price: 999,
    status: 'Approved',
  }
];

export const adminCustomers = [
  { id: 'c_1', name: 'Arjun Kumar', email: 'arjun@example.com', orders: 12, joined: '1 Jan 2026', status: 'Active' },
  { id: 'c_2', name: 'Neha Sharma', email: 'neha@example.com', orders: 4, joined: '15 Mar 2026', status: 'Active' },
  { id: 'c_3', name: 'Ravi Verma', email: 'ravi@example.com', orders: 0, joined: '10 Sep 2026', status: 'Blocked' },
];

export const adminOrders = [
  { id: '#YM1024', customer: 'Arjun Kumar', seller: 'Meera Jewels', items: 2, amount: '₹1,299', status: 'Processing', date: '14 Sep 2026' },
  { id: '#YM1023', customer: 'Neha Sharma', seller: 'VS Designs', items: 1, amount: '₹799', status: 'Shipped', date: '13 Sep 2026' },
  { id: '#YM1022', customer: 'Pooja Singh', seller: 'Aanya Creations', items: 3, amount: '₹2,499', status: 'Delivered', date: '12 Sep 2026' },
];

export const adminCategories = [
  { id: 'cat_1', name: 'Clothing', count: 120 },
  { id: 'cat_2', name: 'Jewellery', count: 85 },
  { id: 'cat_3', name: 'Bangles', count: 42 },
  { id: 'cat_4', name: 'Embroidery', count: 30 },
  { id: 'cat_5', name: 'Handmade', count: 64 },
  { id: 'cat_6', name: 'Tailoring', count: 15 },
  { id: 'cat_7', name: 'Custom Fashion', count: 28 },
  { id: 'cat_8', name: 'Accessories', count: 50 },
];
