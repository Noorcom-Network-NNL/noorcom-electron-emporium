
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  image: string;
  isOnSale?: boolean;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  originalPrice,
  discount,
  rating,
  image,
  isOnSale,
  isNew,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {isOnSale && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
            SALE
          </span>
        )}
        {isNew && (
          <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
            NEW
          </span>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-2">
            {renderStars(rating)}
          </div>
          <span className="text-xs text-gray-500">({rating}.0)</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-800">
              KES {price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                KES {originalPrice.toLocaleString()}
              </span>
            )}
            {discount && (
              <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 hover:border-red-600 hover:text-red-600"
          >
            View
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-slate-800 hover:bg-slate-900 text-white"
          >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
