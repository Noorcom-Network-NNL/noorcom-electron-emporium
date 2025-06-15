
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Noorcom */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Noorcom</h3>
            <p className="text-gray-300 text-sm mb-4">
              Noorcom Electronics is a leading provider of quality electronics and tech products in Kenya, 
              offering a wide range of computing, mobile, networking and office equipment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📍</span>
                Nairobi, Kenya
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">📞</span>
                0722 723 362
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">✉️</span>
                info@noorcom.co.ke
              </li>
              <li className="flex items-center text-gray-300">
                <span className="mr-2">🕒</span>
                Mon-Fri: 8:00 AM - 6:00 PM
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">VISA</div>
              <div className="bg-white text-black px-2 py-1 rounded text-xs font-bold">MC</div>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">PayPal</div>
              <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">M-PESA</div>
            </div>
            <p className="text-sm text-gray-300 mb-2">We accept the following payment methods:</p>
            <p className="text-sm font-bold text-red-400">M-PESA Paybill: 806876</p>
            <p className="text-xs text-gray-400 mt-2">We also accept bank transfers and cash on delivery.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Noorcom Electronics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
