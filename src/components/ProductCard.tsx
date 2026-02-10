import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice: number | null;
    image: string;
    badge: string | null;
  };
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Badge */}
      {product.badge && (
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-bold ${
            product.badge === 'SALE' 
              ? 'bg-red-500 text-white' 
              : 'bg-yellow-400 text-gray-900'
          }`}
        >
          {product.badge}
        </motion.div>
      )}

      {/* Discount Badge */}
      {discount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          className="absolute top-3 left-3 z-20 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold"
        >
          -{discount}%
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay with quick actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-red-500 hover:text-white transition-colors"
          >
            <Heart className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                £{product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-2xl font-bold text-blue-600">
              £{product.price.toFixed(2)}
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Add
          </motion.button>
        </div>
      </div>

      {/* Animated border on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
