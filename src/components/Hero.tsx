import { ArrowRight } from 'lucide-react';
import { Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-32">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-yellow-300 rounded-full blur-3xl opacity-30 translate-x-1/3"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Premium Electronics, Trusted Service
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Family-run since day one. Discover cutting-edge TVs, audio equipment, and accessories with expert guidance.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded font-medium">
                View Catalog
              </button>
            </div>

            {/* Experience badge */}
            <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-3 rounded-lg border border-blue-100">
              <Award className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-gray-900">30+ Years Experience</div>
                <div className="text-sm text-gray-600">Family-Run Business Since 1990</div>
              </div>
            </div>
          </div>

          {/* Right product card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                In Stock
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden w-80">
                <div className="bg-gray-100 p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1617853701628-bfcf8b81d13d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwaG90b2dyYXBoZXIlMjBjYW1lcmElMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MDk5OTYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Product"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="text-sm text-gray-500 mb-1">Starting from</div>
                  <div className="text-3xl font-bold text-blue-600">£8.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
