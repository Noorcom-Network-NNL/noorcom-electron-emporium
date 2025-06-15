import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative text-white py-20 px-4 overflow-hidden min-h-[600px] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/3a37ff4e-a058-4951-9883-cf01c86c2f33.png')`
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Premium Electronics
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                & Tech Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
              Discover the latest in computing, mobile devices, networking equipment and more. 
              Quality products with exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105">
                Shop Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300">
                View Deals
              </Button>
            </div>
          </div>

          {/* Right side - keep empty for better focus on the background image */}
          <div className="hidden lg:block">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
