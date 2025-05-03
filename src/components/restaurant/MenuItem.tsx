import React from 'react';
import { useDispatch } from 'react-redux';
import { Plus } from 'lucide-react';
import { addToCart } from '../../features/cart/cartSlice';
import { motion } from 'framer-motion';

interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  restaurantId: number;
  restaurantName: string;
  rating: number;
  bestseller?: boolean;
  recommended?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  image,
  isVeg,
  restaurantId,
  restaurantName,
  rating,
  bestseller,
  recommended
}) => {
  const dispatch = useDispatch();
  
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      price,
      image,
      restaurantId,
      restaurantName
    }));
  };
  
  return (
    <motion.div 
      className="flex justify-between border-b border-gray-100 py-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 mb-1">
          {isVeg ? (
            <span className="w-4 h-4 border border-green-600 flex items-center justify-center">
              <span className="block w-2 h-2 bg-green-600 rounded-full"></span>
            </span>
          ) : (
            <span className="w-4 h-4 border border-red-600 flex items-center justify-center">
              <span className="block w-2 h-2 bg-red-600 rounded-full"></span>
            </span>
          )}
          <h3 className="font-medium text-gray-800">{name}</h3>
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium">₹{price}</span>
          
          {rating && (
            <div className="flex items-center gap-0.5 text-xs">
              <span className="text-green-600">{rating}</span>
              <span className="text-green-600">★</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {bestseller && (
            <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-0.5 rounded border border-yellow-200">
              Bestseller
            </span>
          )}
          
          {recommended && (
            <span className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded border border-blue-200">
              Recommended
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600 pr-4">{description}</p>
      </div>
      
      <div className="relative min-w-[118px] h-24">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
        
        <button 
          onClick={handleAddToCart}
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-red-500 border border-gray-300 rounded-md px-3 py-1 text-sm font-medium flex items-center gap-1 hover:shadow-md transition-shadow"
        >
          ADD <Plus className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default MenuItem;