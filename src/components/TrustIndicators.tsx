
import React from 'react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery across Kenya with real-time tracking.',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
    },
    {
      icon: '🛡️',
      title: 'Quality Guarantee',
      description: 'All our products come with warranty and quality assurance.',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'Our customer support team is available to help you anytime.',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
    },
    {
      icon: '💳',
      title: 'Secure Payment',
      description: 'Multiple secure payment options including MPESA and bank transfers.',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Noorcom</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are committed to providing quality electronics products and exceptional customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`${indicator.bgColor} rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`${indicator.iconBg} w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                {indicator.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{indicator.title}</h3>
              <p className="text-gray-600 text-sm">{indicator.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
