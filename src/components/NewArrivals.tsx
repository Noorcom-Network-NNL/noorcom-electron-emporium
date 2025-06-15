
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const NewArrivals = () => {
  const newProducts = [
    {
      id: '5',
      name: 'Apple Watch Series 9',
      category: 'Smart Accessories',
      price: 55000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop',
      isNew: true,
    },
    {
      id: '6',
      name: 'Samsung Galaxy Tab S9',
      category: 'Phones & Tablets',
      price: 65000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop',
      isNew: true,
    },
    {
      id: '7',
      name: 'MacBook Air M2',
      category: 'Computing',
      price: 125000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop',
      isNew: true,
    },
    {
      id: '8',
      name: 'Sony WH-1000XM5 Headphones',
      category: 'Smart Accessories',
      price: 32000,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      isNew: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">New Arrivals</h2>
          <Button 
            variant="ghost" 
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            View All →
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
