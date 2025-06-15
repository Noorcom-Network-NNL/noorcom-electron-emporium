
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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
            <div
              className="flex flex-col cursor-pointer select-none"
              onClick={() => navigate("/")}
            >
              <span className="flex items-end gap-0.5">
                <span className="text-2xl md:text-3xl font-extrabold text-black dark:text-white tracking-tight leading-none" style={{ letterSpacing: 1 }}>NOOR</span>
                <span className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-tight leading-none" style={{ letterSpacing: 1 }}>COM</span>
              </span>
              <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 tracking-wide mt-1" style={{letterSpacing:"0.1em"}}>
                QUALITY PRODUCTS &amp; SERVICES
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                className="text-red-400 hover:text-red-300 transition-colors"
                onClick={() => navigate("/")}
              >
                Home
              </button>
              <button
                className="hover:text-red-400 transition-colors"
                onClick={() => navigate("/about")}
              >
                About Us
              </button>
              <button
                className="hover:text-red-400 transition-colors"
                onClick={() => navigate("#shop")}
              >
                Shop
              </button>
              <button
                className="hover:text-red-400 transition-colors"
                onClick={() => navigate("#contact")}
              >
                Contact
              </button>
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
                <button
                  className="py-2 text-red-400 hover:text-red-300 transition-colors text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/");
                  }}
                >
                  Home
                </button>
                <button
                  className="py-2 hover:text-red-400 transition-colors text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/about");
                  }}
                >
                  About Us
                </button>
                <button
                  className="py-2 hover:text-red-400 transition-colors text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("#shop");
                  }}
                >
                  Shop
                </button>
                <button
                  className="py-2 hover:text-red-400 transition-colors text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("#contact");
                  }}
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

