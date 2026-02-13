import { ShoppingCart, Phone } from 'lucide-react';
import logo from "../assets/logo.jpg";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Seba Digital Logo" className="w-24" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">TVs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Cameras</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Entertainment</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Appliances</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Phones</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Headphones</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">Accessories</a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="text-sm hidden lg:inline">0208 567 8550</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded text-sm font-medium flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
