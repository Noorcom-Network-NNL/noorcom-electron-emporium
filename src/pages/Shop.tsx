
import React from "react";
import ProductCard from "@/components/ProductCard";

const DUMMY_PRODUCTS = [
  {
    id: "s1",
    name: "HP EliteBook 830 G8",
    category: "Computing",
    price: 92000,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    isNew: true,
  },
  {
    id: "s2",
    name: "Android 13 Smartphone",
    category: "Phones & Tablets",
    price: 28000,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    isNew: true,
  },
  {
    id: "s3",
    name: "Canon Pixma MG2540S",
    category: "Office Equipment",
    price: 8500,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=300&fit=crop",
  },
  {
    id: "s4",
    name: "TP-Link Archer C6",
    category: "Networking Equipment",
    price: 5500,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07fe75b?w=400&h=300&fit=crop",
  },
  {
    id: "s5",
    name: "Xiaomi Smart Band 8",
    category: "Smart Accessories",
    price: 4800,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
    isNew: true,
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Shop All Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DUMMY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
