import { motion } from 'framer-motion';

interface CategoryCardProps {
  category: {
    name: string;
    icon: string;
    link: string;
  };
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.a
      href={category.link}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer"
    >
      {/* Gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Content */}
      <div className="relative z-10 p-6 text-center">
        <motion.div
          className="text-5xl mb-3"
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          {category.icon}
        </motion.div>
        <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
          {category.name}
        </h3>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-500 rounded-xl opacity-0 group-hover:opacity-100"
        initial={{ scale: 1.1 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
