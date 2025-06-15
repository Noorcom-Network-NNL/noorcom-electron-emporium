
import React, { useState } from "react";
import { User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Shop", path: "/shop" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [category, setCategory] = useState("All Categories");
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (dest: string) => {
    if (dest === "/") return location.pathname === "/";
    return location.pathname.startsWith(dest);
  };

  return (
    <header>
      {/* Top white row: Logo, subtitle, contact & icons */}
      <div className="bg-white w-full px-4 py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and subtitle */}
          <div className="flex flex-col md:flex-row md:items-end">
            <div
              className="cursor-pointer flex items-center select-none"
              onClick={() => navigate("/")}
            >
              <span className="text-3xl font-extrabold text-black tracking-tight" style={{ letterSpacing: 1 }}>
                NOOR
              </span>
              <span className="text-3xl font-extrabold text-red-600 tracking-tight ml-1" style={{ letterSpacing: 1 }}>
                COM
              </span>
            </div>
            <span className="text-xs md:text-sm text-slate-500 md:ml-2 mt-0.5 md:mt-0 tracking-widest font-medium uppercase whitespace-nowrap">
              QUALITY PRODUCTS &amp; SERVICES
            </span>
          </div>
          {/* Contact and icons (hidden on small screens, show in mobile menu) */}
          <div className="hidden md:flex items-center gap-5 text-sm">
            <span className="flex items-center gap-1 text-slate-600">
              <span className="mr-0.5">
                <svg className="inline w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.819 1.768l7.651 6.16c.665.536 1.612.536 2.277 0l7.651-6.16a2.25 2.25 0 00.819-1.768V6.75"></path></svg>
              </span>
              0722 723 362
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <span className="mr-0.5">
                <svg className="inline w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5h-15A2.25 2.25 0 012.25 17.25V6.75"></path><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.469 7.052a2.25 2.25 0 002.563 0L21.75 6.75"></path></svg>
              </span>
              info@noorcom.co.ke
            </span>
            <User className="w-5 h-5 cursor-pointer hover:text-red-400" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-red-400" />
          </div>
        </div>
      </div>
      {/* Navigation bar */}
      <div className="bg-[#1a2334] w-full px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2">
          {/* Navigation links */}
          <nav className="flex-1 flex justify-center gap-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`text-white font-medium transition-colors ${
                  isActive(item.path) ? "text-red-400 underline underline-offset-8" : "hover:text-red-400"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          {/* Icons and Hamburger on mobile */}
          <div className="flex md:hidden items-center gap-2">
            <User className="w-5 h-5 cursor-pointer text-white hover:text-red-400" />
            <ShoppingCart className="w-5 h-5 cursor-pointer text-white hover:text-red-400" />
          </div>
        </div>
      </div>
      {/* Search bar under nav */}
      <div className="bg-[#25304a] w-full px-4 py-3 border-b border-[#233]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-2">
          <Input
            type="text"
            placeholder="Search for products..."
            className="flex-1 bg-white text-black border-none rounded-l-md"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-4 py-2 bg-gray-100 text-black border-none min-w-[140px]"
          >
            <option>All Categories</option>
            <option>Computing</option>
            <option>Phones & Tablets</option>
            <option>Networking Equipment</option>
            <option>Office Equipment</option>
            <option>Smart Accessories</option>
          </select>
          <Button className="bg-red-600 hover:bg-red-700 rounded-l-none" size="sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" /></svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
