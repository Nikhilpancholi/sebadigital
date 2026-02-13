import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const testimonials = [
    {
      name: 'John Mitchell',
      role: 'Verified Customer',
      rating: 5,
      text: 'Excellent service and competitive prices. Seba Digital is my go-to place for all my living-room tech. Highly recommend!',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    {
      name: 'Sarah Chen',
      role: 'Verified Customer',
      rating: 5,
      text: 'Fast delivery and great product quality. Seba Digital is now my go-to for all electronics purchases.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'David Thompson',
      role: 'Verified Customer',
      rating: 5,
      text: 'Professional advice, fair prices, and outstanding customer support. A truly excellent business.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 justify-center items-center overflow-hidden">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === activeIndex - 1;
              const isNext = index === activeIndex + 1;
              const isVisible = isActive || isPrev || isNext;

              return (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0 absolute'
                  } ${
                    isActive ? 'scale-100 z-10' : 'scale-90 z-0'
                  }`}
                  style={{
                    flex: isActive ? '0 0 40%' : '0 0 35%',
                    minWidth: '300px'
                  }}
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <Quote className="w-8 h-8 text-blue-600 mb-4" />
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
