import { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCart, Phone, Search, Menu, X, ChevronDown, 
  Heart, User, MapPin, Clock, Mail, Eye, Star,
  TrendingUp, Zap, Package, Truck, Shield, Gift
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import sebaLogo from './assets/logo.jpg';
import heroImage from './assets/hero.jpg';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showNotification, setShowNotification] = useState(true);
  const { scrollY } = useScroll();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Show welcome popup after 1 second
    const welcomeTimer = setTimeout(() => setShowWelcomePopup(true), 1000);
    
    // Show newsletter popup after 15 seconds
    const newsletterTimer = setTimeout(() => setShowNewsletterPopup(true), 15000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(welcomeTimer);
      clearTimeout(newsletterTimer);
    };
  }, []);

  const megaMenuContent = {
    'Entertainment': {
      categories: [
        {
          title: 'Audio Systems',
          items: ['Digital Radio', 'HDD Recorders', 'Hi-Fi Micro-system', 'Home Cinema System', 'Sound Bar', 'All Play/Wireless Speakers', 'Blu-ray and DVD Players']
        },
        {
          title: 'Popular Brands',
          items: ['Panasonic', 'JVC', 'Maxell', 'Memorex']
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1546552335-c55e837b266b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        title: 'Home Cinema Systems',
        description: 'Premium audio experience'
      }
    },
    'TVs': {
      categories: [
        {
          title: 'TV Categories',
          items: ['4K Ultra HD TVs', 'Smart TVs', 'LED TVs', 'TV Brackets', 'TV Cabinets', 'TV Cables']
        },
        {
          title: 'Screen Sizes',
          items: ['32" TVs', '43" TVs', '55" TVs', '65" TVs']
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1692731974074-03e7ef257a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        title: '4K Ultra HD',
        description: 'Crystal clear picture'
      }
    },
    'Cameras & Camcorders': {
      categories: [
        {
          title: 'Cameras',
          items: ['Digital Cameras', 'Action Cameras', 'Camcorders', 'Camera Accessories']
        },
        {
          title: 'Video Equipment',
          items: ['Tripods', 'Memory Cards', 'Camera Bags', 'Lenses']
        }
      ],
      featured: {
        image: 'https://images.unsplash.com/photo-1769699167687-540cce99f744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        title: 'Professional Cameras',
        description: 'Capture every moment'
      }
    }
  };

  const products = [
    {
      id: 1,
      name: 'Premium Noise-Cancelling Headphones',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.unsplash.com/photo-1741770067276-a10e15ff5197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'SALE',
      rating: 4.9,
      reviews: 234,
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: '65" 4K Ultra HD Smart TV',
      price: 599.99,
      originalPrice: 799.99,
      image: 'https://images.unsplash.com/photo-1692731974074-03e7ef257a79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'HOT',
      rating: 4.8,
      reviews: 189,
      tag: 'Trending'
    },
    {
      id: 3,
      name: 'Professional Video Camera 4K',
      price: 449.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1769699167687-540cce99f744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'NEW',
      rating: 5.0,
      reviews: 67,
      tag: 'New Arrival'
    },
    {
      id: 4,
      name: 'Home Cinema Speaker System',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1546552335-c55e837b266b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'DEAL',
      rating: 4.7,
      reviews: 156,
      tag: 'Limited Offer'
    },
    {
      id: 5,
      name: 'Verbatim DVD-R Premium 50 Pack',
      price: 19.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1760302318644-40cb22d44a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: null,
      rating: 4.6,
      reviews: 423,
      tag: 'Popular'
    },
    {
      id: 6,
      name: 'Modern Kitchen Appliance Set',
      price: 179.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1642979427252-13d5fd18bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      badge: 'SALE',
      rating: 4.5,
      reviews: 98,
      tag: 'Save 28%'
    },
    {
  id: 7,
  name: 'Wireless Gaming Mouse RGB',
  price: 39.99,
  originalPrice: 59.99,
  image: 'https://i.pinimg.com/736x/18/ae/74/18ae7490351fd8ba1ea5ddedb2e41996.jpg',
  badge: 'SALE',
  rating: 4.7,
  reviews: 312,
  tag: 'Gamer Choice'
},
{
  id: 8,
  name: 'Bluetooth Portable Speaker',
  price: 49.99,
  originalPrice: 79.99,
  image: 'https://i.pinimg.com/736x/a8/f5/52/a8f552b7e7d20f399f1f280344da2cfa.jpg',
  badge: 'HOT',
  rating: 4.8,
  reviews: 421,
  tag: 'Top Rated'
},
{
  id: 9,
  name: 'Smart Fitness Watch',
  price: 69.99,
  originalPrice: 99.99,
  image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  badge: 'DEAL',
  rating: 4.6,
  reviews: 287,
  tag: 'Best Value'
},
{
  id: 10,
  name: 'Noise-Isolating Earbuds',
  price: 29.99,
  originalPrice: null,
  image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  badge: null,
  rating: 4.5,
  reviews: 518,
  tag: 'Popular'
},
{
  id: 11,
  name: 'Ergonomic Office Chair',
  price: 199.99,
  originalPrice: 279.99,
  image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  badge: 'SALE',
  rating: 4.8,
  reviews: 142,
  tag: 'Work From Home'
},
{
  id: 12,
  name: 'Mechanical Gaming Keyboard',
  price: 89.99,
  originalPrice: 119.99,
  image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  badge: 'NEW',
  rating: 4.9,
  reviews: 203,
  tag: 'New Arrival'
},
{
  id: 13,
  name: 'DSLR Camera Tripod Stand',
  price: 24.99,
  originalPrice: 39.99,
  image: 'https://i.pinimg.com/736x/ac/88/6c/ac886cfd8cbf732b813e4a946f9d29c9.jpg',
  badge: 'DEAL',
  rating: 4.6,
  reviews: 356,
  tag: 'Best Seller'
},
{
  id: 14,
  name: 'Smart Home Security Camera',
  price: 89.99,
  originalPrice: 129.99,
  image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  badge: 'HOT',
  rating: 4.7,
  reviews: 174,
  tag: 'Trending'
},
{
  id: 15,
  name: 'USB-C Fast Charging Hub',
  price: 34.99,
  originalPrice: null,
  image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  badge: null,
  rating: 4.5,
  reviews: 289,
  tag: 'Essential'
},
  ];

  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Notification Bar */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between relative z-10">
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="font-medium">Limited Time Offer: Up to 40% OFF on selected items | Free UK Delivery on orders over £50</span>
              </div>
              <button onClick={() => setShowNotification(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
            : 'bg-white'
        }`}
      >
        {/* Top Bar */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12 text-sm">
              <div className="flex items-center space-x-6">
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-slate-900 transition-colors group">
                  <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">West Ealing, London</span>
                </a>
                <a href="tel:02086578550" className="flex items-center space-x-2 text-gray-600 hover:text-slate-900 transition-colors group">
                  <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">020 8567 8550</span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 9AM - 6PM</span>
                </div>
                <a href="#" className="text-gray-600 hover:text-slate-900 transition-colors font-medium">Track Order</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              className="flex items-center"
            >
              <img src={sebaLogo} alt="Seba Digital" className="h-14 w-auto" />
            </motion.a>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full pl-6 pr-12 py-3.5 rounded-full border-2 border-gray-200 focus:border-slate-900 focus:outline-none transition-all bg-gray-50 focus:bg-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center space-x-2 px-4 py-2.5 rounded-full hover:bg-gray-100 transition-colors group"
              >
                <User className="w-5 h-5 text-gray-700 group-hover:text-slate-900 transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-slate-900 transition-colors">Account</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart className="w-5 h-5 text-gray-700" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
                  3
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 rounded-full text-white text-xs flex items-center justify-center font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center space-x-1 h-14">
              {['TVs', 'Cameras & Camcorders', 'Entertainment', 'Home Appliances', 'Home Phones', 'Headphones', 'Accessories', 'Blank Media'].map((item) => (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="px-4 py-4 text-sm font-medium text-gray-700 hover:text-slate-900 transition-colors flex items-center space-x-1 group">
                    <span>{item}</span>
                    {megaMenuContent[item as keyof typeof megaMenuContent] && (
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>

                  {/* Mega Menu */}
                  {megaMenuContent[item as keyof typeof megaMenuContent] && activeMenu === item && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] mt-0"
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 mt-2">
                        <div className="grid grid-cols-3 gap-8">
                          {megaMenuContent[item as keyof typeof megaMenuContent].categories.map((category: any, idx: number) => (
                            <div key={idx}>
                              <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">{category.title}</h3>
                              <ul className="space-y-2.5">
                                {category.items.map((subItem: string) => (
                                  <li key={subItem}>
                                    <a href="#" className="text-sm text-gray-600 hover:text-slate-900 hover:translate-x-1 inline-block transition-all">
                                      {subItem}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          
                          {/* Featured Product */}
                          <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl p-6 text-white">
                            <img 
                              src={megaMenuContent[item as keyof typeof megaMenuContent].featured.image} 
                              alt="" 
                              className="w-full h-32 object-cover rounded-lg mb-4"
                            />
                            <h4 className="font-bold mb-2">{megaMenuContent[item as keyof typeof megaMenuContent].featured.title}</h4>
                            <p className="text-sm text-white/80 mb-4">{megaMenuContent[item as keyof typeof megaMenuContent].featured.description}</p>
                            <button className="text-sm font-medium hover:underline">Shop Now →</button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 mb-8"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Trusted Family Business Since 1995</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Premium Electronics
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Exceptional Value
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 mb-10 leading-relaxed"
              >
                Your trusted electronics destination in West Ealing. Experience personalized service, quality brands, and unbeatable prices.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 group"
                >
                  <span>Explore Products</span>
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-all border border-gray-200"
                >
                  Our Services
                </motion.button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                {[
                  { icon: Shield, text: 'Quality Guaranteed', color: 'text-blue-600' },
                  { icon: Truck, text: 'Fast Delivery', color: 'text-purple-600' },
                  { icon: Gift, text: 'Best Prices', color: 'text-pink-600' }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                      <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative">
                <motion.div
                  style={{ y: y2 }}
                  className="relative z-10"
                >
                  <img
                    src={heroImage}
                    alt="Seba Digital Store"
                    className="w-full h-auto rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 z-20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900">1000+</div>
                      <div className="text-sm text-gray-600">Products Available</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                  className="absolute -top-8 -right-8 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl shadow-2xl p-6 text-white z-20"
                >
                  <div className="text-sm mb-1 opacity-90">Special Offer</div>
                  <div className="text-3xl font-bold mb-1">40% OFF</div>
                  <div className="text-xs opacity-75">Limited Time Only</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-5 py-2.5 rounded-full mb-6">
              <Zap className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-medium text-slate-900">Featured Products</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Trending Now
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium electronics at unbeatable prices
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-50 aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white ${
                        product.badge === 'SALE' ? 'bg-red-500' :
                        product.badge === 'HOT' ? 'bg-orange-500' :
                        product.badge === 'NEW' ? 'bg-blue-500' :
                        'bg-purple-500'
                      }`}>
                        {product.badge}
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Heart className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedProduct(product)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75"
                      >
                        <Eye className="w-5 h-5 text-gray-700" />
                      </motion.button>
                    </div>

                    {/* Add to Cart Overlay */}
                    <motion.button
                      whileHover={{ y: 0 }}
                      onClick={() => setCartCount(cartCount + 1)}
                      className="absolute bottom-0 left-0 right-0 bg-slate-900 text-white py-4 font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    {/* Tag */}
                    <div className="text-xs font-medium text-blue-600 mb-2">{product.tag}</div>
                    
                    {/* Name */}
                    <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-slate-900">£{product.price}</span>
                      {product.originalPrice && (
                        <>
                          <span className="text-lg text-gray-400 line-through">£{product.originalPrice}</span>
                          <span className="text-sm font-bold text-red-500">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Product Popup */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative bg-gray-50 aspect-square md:aspect-auto">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.badge && (
                    <div className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-bold text-white ${
                      selectedProduct.badge === 'SALE' ? 'bg-red-500' :
                      selectedProduct.badge === 'HOT' ? 'bg-orange-500' :
                      selectedProduct.badge === 'NEW' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`}>
                      {selectedProduct.badge}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-8 relative">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="text-sm font-medium text-blue-600 mb-2">{selectedProduct.tag}</div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{selectedProduct.name}</h2>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline space-x-3 mb-2">
                      <span className="text-4xl font-bold text-slate-900">£{selectedProduct.price}</span>
                      {selectedProduct.originalPrice && (
                        <span className="text-xl text-gray-400 line-through">£{selectedProduct.originalPrice}</span>
                      )}
                    </div>
                    {selectedProduct.originalPrice && (
                      <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-sm font-medium">
                        <span>Save £{(selectedProduct.originalPrice - selectedProduct.price).toFixed(2)} ({Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}% OFF)</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span>1 Year Warranty Included</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Truck className="w-5 h-5 text-blue-500" />
                      <span>Free Delivery on orders over £50</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Package className="w-5 h-5 text-purple-500" />
                      <span>In Stock - Ships Today</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setCartCount(cartCount + 1);
                        setSelectedProduct(null);
                      }}
                      className="flex-1 bg-slate-900 text-white py-4 rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-50 transition-colors group"
                    >
                      <Heart className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Popup */}
      <AnimatePresence>
        {showWelcomePopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowWelcomePopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
            >
              <button
                onClick={() => setShowWelcomePopup(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Welcome Offer!</h3>
                  <p className="text-white/90">Get 10% off your first purchase</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Join our family and enjoy exclusive deals, early access to sales, and personalized recommendations.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-slate-900 focus:outline-none transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-slate-900 text-white py-3 rounded-full font-medium hover:bg-slate-800 transition-colors"
                  >
                    Claim Your 10% Off
                  </motion.button>
                  <button
                    onClick={() => setShowWelcomePopup(false)}
                    className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    No thanks, I'll pay full price
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Popup */}
      <AnimatePresence>
        {showNewsletterPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-4"
            onClick={() => setShowNewsletterPopup(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-8 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                  <div className="relative z-10">
                    <Mail className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                    <p className="text-white/90 text-sm">Exclusive deals & news</p>
                  </div>
                </div>

                <div className="md:col-span-3 p-8 relative">
                  <button
                    onClick={() => setShowNewsletterPopup(false)}
                    className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <h4 className="font-bold text-slate-900 mb-2">Newsletter</h4>
                  <p className="text-sm text-gray-600 mb-6">
                    Subscribe to get special offers, free giveaways, and updates.
                  </p>

                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-slate-900 focus:outline-none transition-all text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors text-sm"
                    >
                      Subscribe Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img src={sebaLogo} alt="Seba Digital" className="h-12 w-auto mb-6 " />
              <p className="text-white/70 mb-6 leading-relaxed">
                Your trusted family-run electronics store in West Ealing, London. Quality products, exceptional service, unbeatable prices.
              </p>
              <div className="flex items-center space-x-4">
                <a href="tel:02086578550" className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">020 8567 8550</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-6 text-lg">Shop</h3>
              <ul className="space-y-3">
                {['TVs', 'Headphones', 'Cameras', 'Accessories', 'Blank Media'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold mb-6 text-lg">Services</h3>
              <ul className="space-y-3">
                {['Video Conversion', 'Copying Services', 'Installation', 'Repairs', 'Trade-In'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'Visit Store', 'Privacy Policy', 'Terms'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-white transition-colors text-sm hover:translate-x-1 inline-block duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2026 Seba Digital. All rights reserved. Family business since 1995.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-xs text-white/60">We Accept:</div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs font-bold">VISA</div>
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs font-bold">MC</div>
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs font-bold">AMEX</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
