import { Award, Users, Clock, Heart } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About Seba Digital</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted electronics partner in West Ealing, London since 1990. Over 30 years of expertise in delivering quality products and exceptional service.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1990, Seba Digital has been serving the West Ealing community for over three decades. What started as a small electronics shop has grown into a trusted destination for the latest in technology and entertainment.
            </p>
            <p className="text-gray-600 mb-4">
              We pride ourselves on offering expert advice, competitive prices, and a carefully curated selection of products from the world's leading brands. Whether you're looking for the latest 4K TV, a professional camera, or kitchen appliances, we've got you covered.
            </p>
            <p className="text-gray-600">
              Our commitment to customer satisfaction and our passion for technology have made us a cornerstone of the local community. We're not just a shop—we're your technology partners.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Seba Digital Store"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We only stock products from trusted brands that meet our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expertise</h3>
              <p className="text-gray-600 text-sm">
                Our knowledgeable team is always ready to help you make the right choice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Experience</h3>
              <p className="text-gray-600 text-sm">
                Over 30 years of experience in the electronics industry.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We're proud to serve our local West Ealing community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Products Available</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Store Today</h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the Seba Digital difference in person. Our friendly team is ready to help you find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Get Directions
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
