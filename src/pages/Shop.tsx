
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/ProductCard";
import { Star } from "lucide-react";

// Demo products matching screenshot structure
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Apple Watch Series 9",
    category: "Smart Accessories",
    description: "GPS + Cellular, 45mm, Midnight Aluminum",
    price: 55000,
    originalPrice: 60000,
    discount: 8,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop",
    stock: 7,
  },
  {
    id: "p2",
    name: "Dell Latitude 5520 Laptop",
    category: "Computing",
    description: "Intel Core i5, 8GB RAM, 256GB SSD",
    price: 75000,
    originalPrice: 85000,
    discount: 12,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    stock: 10,
  },
  {
    id: "p3",
    name: "HP LaserJet Pro M404n",
    category: "Office Equipment",
    description: "Monochrome Laser Printer, Fast Printing",
    price: 28000,
    originalPrice: 32000,
    discount: 13,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop",
    stock: 12,
  },
  {
    id: "p4",
    name: "iPhone 15 Pro Max",
    category: "Phones & Tablets",
    description: "256GB, Space Black",
    price: 180000,
    originalPrice: 190000,
    discount: 5,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    stock: 4,
  },
  {
    id: "p5",
    name: "MacBook Air M2",
    category: "Computing",
    description: "13.6-inch, 8GB, 256GB SSD",
    price: 125000,
    originalPrice: 135000,
    discount: 7,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    stock: 6,
  },
  {
    id: "p6",
    name: "Samsung Galaxy Tab S9",
    category: "Phones & Tablets",
    description: "12.4-inch, Wi-Fi, 256GB",
    price: 65000,
    originalPrice: 70000,
    discount: 7,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    stock: 6,
  },
  {
    id: "p7",
    name: "Sony WH-1000XM5 Headphones",
    category: "Smart Accessories",
    description: "Wireless Noise Canceling, 30hr Battery",
    price: 32000,
    originalPrice: 38000,
    discount: 16,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    stock: 15,
  },
  {
    id: "p8",
    name: "TP-Link Archer AX6000 Router",
    category: "Networking Equipment",
    description: "Wi-Fi 6 Router, Dual Band, Gigabit Ports",
    price: 35000,
    originalPrice: 40000,
    discount: 13,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1606904825846-647eb07fe75b?w=400&h=300&fit=crop",
    stock: 8,
  },
];

const CATEGORIES = [
  "All Categories",
  "Computing",
  "Phones & Tablets",
  "Networking Equipment",
  "Office Equipment",
  "Smart Accessories",
];

const SORTS = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "price-asc", label: "Price (Low-High)" },
  { value: "price-desc", label: "Price (High-Low)" },
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("name-asc");

  let filtered = DUMMY_PRODUCTS.filter((p) => {
    let match = p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.description?.toLowerCase().includes(search.toLowerCase()));
    let cat = category === "All Categories" || p.category === category;
    return match && cat;
  });

  if (sort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Shop Electronics</h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Discover our wide range of quality electronics and tech products
          </p>
        </div>
        {/* Layout: Sidebar + Products */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-80 bg-white rounded-xl shadow p-6 mb-4 md:mb-0">
            <h2 className="font-bold text-lg mb-6">Filters</h2>
            <div className="mb-4">
              <label className="font-medium text-sm mb-2 block text-gray-700">Search Products</label>
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search by name or description..."
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="font-medium text-sm mb-2 block text-gray-700">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <label className="font-medium text-sm mb-2 block text-gray-700">Sort By</label>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  {SORTS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-gray-500 mt-6">
              Showing {filtered.length} of {DUMMY_PRODUCTS.length} products
            </div>
          </aside>
          {/* Product Cards */}
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow group transition hover:shadow-xl hover:scale-[1.02] relative border border-gray-100"
              >
                {/* Discount badge */}
                {product.discount && (
                  <span className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded z-10">
                    {product.discount}% OFF
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                <div className="p-4 pb-3 flex flex-col space-y-2">
                  {/* Category */}
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{product.category}</span>
                  {/* Name */}
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-700 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  {/* Description */}
                  <p className="text-xs text-gray-500">{product.description}</p>
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mt-1 mb-1">
                    <span className="flex gap-0.5">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <Star
                          key={idx}
                          className={`h-4 w-4 ${idx < Math.round(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </span>
                    <span className="text-xs text-gray-600 ml-1">({product.rating.toFixed(1)})</span>
                  </div>
                  {/* Pricing */}
                  <div className="flex items-center gap-2 text-base font-bold mt-1">
                    <span className="text-gray-800">KES {product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 font-normal line-through">KES {product.originalPrice.toLocaleString()}</span>
                  </div>
                  {/* Stock badge */}
                  <div>
                    <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold mt-1">
                      {product.stock} in stock
                    </span>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border font-semibold"
                    >
                      View Details
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop;

