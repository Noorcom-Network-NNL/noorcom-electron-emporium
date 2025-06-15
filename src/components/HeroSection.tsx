
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPHBhdGggZD0iTTM2IDM0djItaC0ydjJoLTJ2MmgtMnYyaC0ydjJIMjR2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJ2LTJoMnYtMmgydi0yaDJWMTZoMnYtMmgyVjEwaDJWOGgyVjZoMlY0aDJWMmgyVjBoNHYyaDJWNGgyVjZoMlY4aDJWMTBoMlYxNGgyVjE2aDJWMjBoMlYyMmgyVjI0aDJWMjZoMlYyOGgyVjMwaDJWMzJoMlYzNGgyVjM2aDJWMzhoMlY0MGgyVjQyaDJWNDRoMlY0NmgyVjQ4aDJWNTBoMlY1MmgyVjU0aDJWNTZoMlY1OGgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMnYtMmgtMlYzNnoiLz4KPC9nPgo8L2c+Cjwvc3ZnPgo=')] bg-repeat"></div>
      </div>

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
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
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

          {/* Tech visualization */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-lg blur-xl"></div>
            <div className="relative bg-slate-700/50 rounded-lg p-8 border border-slate-600">
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-md flex items-center justify-center border border-slate-500 hover:border-red-400 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-red-500/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
