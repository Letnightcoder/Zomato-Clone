import React from 'react';
import { useDispatch } from 'react-redux';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { updateQuantity, removeFromCart } from '../../features/cart/cartSlice';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    restaurantName: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  
  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };
  
  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };
  
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };
  
  return (
    <div className="flex py-4 border-b border-gray-100">
      <div className="w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-1">
        <h3 className="font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">from {item.restaurantName}</p>
        <p className="font-medium text-gray-800 mt-1">₹{item.price}</p>
        
        <div className="flex items-center mt-3 justify-between">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button 
              onClick={decreaseQuantity}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              <Minus className="w-4 h-4" />
            </button>
            
            <span className="px-2 py-1 min-w-[32px] text-center">
              {item.quantity}
            </span>
            
            <button 
              onClick={increaseQuantity}
              className="px-2 py-1 text-gray-600 hover:bg-gray-100"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          <button 
            onClick={handleRemove}
            className="text-gray-500 hover:text-red-500"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;