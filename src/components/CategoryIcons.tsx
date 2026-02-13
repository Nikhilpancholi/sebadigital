import { Tv, Camera, Film, Home, Phone, Headphones, Plug, Disc } from 'lucide-react';

export function CategoryIcons() {
  const categories = [
    { icon: Tv, label: 'TVs', color: 'bg-blue-100 text-blue-600' },
    { icon: Camera, label: 'Cameras', color: 'bg-green-100 text-green-600' },
    { icon: Film, label: 'Entertainment', color: 'bg-red-100 text-red-600' },
    { icon: Home, label: 'Appliances', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Phone, label: 'Phones', color: 'bg-purple-100 text-purple-600' },
    { icon: Headphones, label: 'Headphones', color: 'bg-pink-100 text-pink-600' },
    { icon: Plug, label: 'Accessories', color: 'bg-orange-100 text-orange-600' },
    { icon: Disc, label: 'Media', color: 'bg-teal-100 text-teal-600' },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className={`w-14 h-14 rounded-full ${category.color} flex items-center justify-center`}>
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
