import { ArrowRight, Check, Sparkles } from 'lucide-react';

export function TVSpecialists() {
  const features = [
    'Panasonic OLED 4K HDR PRO TVs',
    '4K Ultra HD TVs',
    'Smart LED TVs',
    'TV Brackets & Cabinets',
    'TV Cables & Accessories',
    'Expert Installation Advice',
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold uppercase">TV Experts</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your Local TV Specialists
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              For many years, we've proudly served our local community with expert electronic service and excellent value on the latest television technology and accessories.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium flex items-center gap-2">
              View TV Collection
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right promo card */}
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-yellow-300 mb-4" />
                <h3 className="text-3xl font-bold mb-3">Special Promotions</h3>
                <p className="text-blue-100">
                  Check out our latest deals on Panasonic TVs and accessories. Limited time offers available!
                </p>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded font-semibold flex items-center gap-2">
                View Promotions
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
