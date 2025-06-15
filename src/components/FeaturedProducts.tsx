
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Dell Latitude 5520 Laptop',
      category: 'Computing',
      price: 75000,
      originalPrice: 85000,
      discount: 12,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      isOnSale: true,
    },
    {
      id: '2',
      name: 'iPhone 15 Pro Max',
      category: 'Phones & Tablets',
      price: 180000,
      originalPrice: 190000,
      discount: 5,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1592286151670-57df1eb68c00?w=400&h=300&fit=crop',
      isOnSale: true,
    },
    {
      id: '3',
      name: 'TP-Link Archer AX6000 Router',
      category: 'Networking Equipment',
      price: 35000,
      originalPrice: 40000,
      discount: 13,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07fe75b?w=400&h=300&fit=crop',
      isOnSale: true,
    },
    {
      id: '4',
      name: 'HP LaserJet Pro M404n',
      category: 'Office Equipment',
      price: 28000,
      originalPrice: 32000,
      discount: 13,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=300&fit=crop',
      isOnSale: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
          <Button 
            variant="ghost" 
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            View All →
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
