
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white">
      {/* Top bar */}
      <div className="bg-slate-900 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <span>📞 0722 723 362</span>
            <span>✉️ info@noorcom.co.ke</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-red-400">
              <User className="h-4 w-4 mr-1" />
              Account
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:text-red-400">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                NOOR<span className="text-red-500">COM</span>
              </h1>
              <p className="text-xs text-gray-300 ml-2 hidden md:block">QUALITY PRODUCTS & SERVICES</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-red-400 hover:text-red-300 transition-colors">Home</a>
              <a href="#" className="hover:text-red-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-red-400 transition-colors">Shop</a>
              <a href="#" className="hover:text-red-400 transition-colors">Contact</a>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Search bar */}
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex-1 flex">
              <Input
                type="text"
                placeholder="Search for products..."
                className="flex-1 bg-white text-black border-none rounded-l-md"
              />
              <select className="px-4 py-2 bg-gray-100 text-black border-none">
                <option>All Categories</option>
                <option>Computing</option>
                <option>Phones & Tablets</option>
                <option>Networking Equipment</option>
                <option>Office Equipment</option>
                <option>Smart Accessories</option>
              </select>
              <Button className="bg-red-600 hover:bg-red-700 rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t border-gray-600">
              <div className="flex flex-col space-y-2">
                <a href="#" className="py-2 text-red-400 hover:text-red-300 transition-colors">Home</a>
                <a href="#" className="py-2 hover:text-red-400 transition-colors">About Us</a>
                <a href="#" className="py-2 hover:text-red-400 transition-colors">Shop</a>
                <a href="#" className="py-2 hover:text-red-400 transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
