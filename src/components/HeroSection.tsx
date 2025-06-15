
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative text-white py-20 px-4 overflow-hidden min-h-[600px] flex items-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/d0cbcde5-f227-4e3c-809e-304942dc0255.png')`
        }}
      ></div>
      
      {/* Light overlay for text readability without being too dark */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Premium Electronics
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                & Tech Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-100 leading-relaxed max-w-lg drop-shadow-md">
              Discover the latest in computing, mobile devices, networking equipment and more. 
              Quality products with exceptional service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
                Shop Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg font-semibold rounded-md transition-all duration-300 shadow-lg backdrop-blur-sm">
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
