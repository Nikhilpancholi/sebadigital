import { ArrowRight } from 'lucide-react';
import productdvdrw from '../assets/product-dvd-rw.jpg';
import producttape from '../assets/product-tape.jpg';
import productdvd from '../assets/product-dvd.jpg';
import productwall from '../assets/product-bracket.jpg';

export function LatestArrivals() {
  const products = [
    {
      name: 'Memorex DVD-RW',
      description: '24 speed, 4.7GB, 120 min, Spindle',
      price: '£12.99',
      badge: 'New',
      badgeColor: 'bg-green-500',
      image: productdvdrw
    },
    {
      name: 'Maxell LR03 AAA Triple A Tape',
      description: 'AAA Batteries x10 Pack',
      price: '£2.99',
      image: producttape,
    },
    {
      name: 'TDK DVD-R 25 Pack',
      description: '16x speed, Recordable Media',
      price: '£14.99',
      image: productdvd,
    },
    {
      name: 'Wall Bracket 22"-55"',
      description: 'Universal TV Wall Bracket',
      price: '£19.99',
      badge: 'Popular',
      badgeColor: 'bg-yellow-500',
      image: productwall, 
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Latest Arrivals</h2>
            <p className="text-gray-600">New products just added to our collection</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative bg-gray-50 ">
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
