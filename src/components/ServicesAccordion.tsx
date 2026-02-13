import { useState } from 'react';
import { ChevronDown, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const services = [
    {
      icon: CreditCard,
      title: 'Ordering & Payments',
      content: [
        'All prices are shown in GBP (£) and include 20% VAT',
        'Prices are correct at the time of publication and may change without notice',
        'Payments are accepted via PayPal using Credit or Debit Cards',
        'Orders are subject to availability and acceptance',
        'Goods are dispatched once full payment has cleared'
      ]
    },
    {
      icon: Truck,
      title: 'Delivery',
      content: [
        'Free delivery on orders over £50',
        'Standard delivery takes 3-5 working days',
        'Express delivery available for an additional fee',
        'We ship to UK mainland addresses',
        'You will receive tracking information via email'
      ]
    },
    {
      icon: RotateCcw,
      title: 'Returns, Refunds & Cancellations',
      content: [
        '14-day returns policy on most items',
        'Items must be in original packaging and unused',
        'Refunds processed within 5-7 working days',
        'Customer responsible for return postage unless item is faulty',
        'Certain items may be non-refundable'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Payments & Privacy',
      content: [
        'All transactions are secure and encrypted',
        'We never store your card details',
        'Your personal information is kept confidential',
        'We comply with GDPR regulations',
        'See our full privacy policy for more details'
      ]
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services & Policies
          </h2>
          <p className="text-gray-600">
            Everything you need to know about ordering from Seba Digital
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-semibold text-gray-900">{service.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 bg-gray-50">
                    <ul className="space-y-2">
                      {service.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
