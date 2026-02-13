import { ArrowRight } from 'lucide-react';

export function FeaturedProducts() {
  const products = [
    {
      name: 'TDK NC150',
      description: 'On-Ear Headphones with Active Noise Cancellation',
      price: '£34.99',
      originalPrice: '£13.95',
      badge: 'Best Seller',
      badgeColor: 'bg-blue-600',
      image: 'https://images.unsplash.com/photo-1679533662345-b321cf2d8792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXMlMjBibGFja3xlbnwxfHx8fDE3NzA5MzY0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Verbatim BD-R SL 25GB',
      description: '6x speed, Jewel case Pack of 5',
      price: '£13.95',
      image: 'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFuayUyMGR2ZCUyMGRpc2NzJTIwbWVkaWF8ZW58MXx8fHwxNzcwOTk5NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Maxell CD-R Audio',
      description: 'CD-RXx 32x speed, 25 Pack Spindle',
      price: '£9.99',
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1618034100983-e1d78be0dc80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZCUyMGF1ZGlvJTIwZGlzYyUyMHNwaW5kbGV8ZW58MXx8fHwxNzcwOTk5NjI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Panasonic RP-HV41E-W',
      description: 'Headphones - White',
      price: '£8.99',
      image: 'https://images.unsplash.com/photo-1755182529034-189a6051faae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVhcmJ1ZHMlMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MDk5OTYyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Products</h2>
            <p className="text-gray-600">Handpicked electronics at unbeatable prices</p>
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
              <div className="relative bg-gray-50 p-6 aspect-square">
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
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
