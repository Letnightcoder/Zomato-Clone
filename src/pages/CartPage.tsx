import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ShoppingBag } from 'lucide-react';
import { RootState } from '../app/store';
import CartItem from '../components/cart/CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  const [couponCode, setCouponCode] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  
  const deliveryFee = items.length > 0 ? 40 : 0;
  const taxes = items.length > 0 ? Math.round(totalAmount * 0.05) : 0;
  const grandTotal = totalAmount + deliveryFee + taxes;
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  const handleCheckout = () => {
    alert('Order placed successfully!');
    dispatch(clearCart());
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <ShoppingBag size={80} className="text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link 
            to="/"
            className="bg-red-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-red-600 transition-colors"
          >
            Browse Restaurants
          </Link>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="pt-16 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <Link 
          to="/"
          className="flex items-center text-gray-700 mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to Home</span>
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">Your Food Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Cart Items ({items.length})</h2>
              <p className="text-gray-500 text-sm mb-4">Review your items before checkout</p>
              
              <div className="divide-y">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <button 
                onClick={handleClearCart}
                className="text-red-500 mt-4 hover:text-red-600"
              >
                Clear Cart
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Delivery Address</h2>
              <p className="text-gray-500 mb-4">Where should we deliver your order?</p>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <span className="text-gray-500">📍</span>
                </div>
                <div>
                  <p className="font-medium">Delivery to:</p>
                </div>
              </div>
              
              <input
                type="text"
                placeholder="Enter your full address"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="w-full border rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              
              <div className="flex items-center mt-6 text-gray-500">
                <Clock size={18} className="mr-2" />
                <span>Estimated delivery time: 30-45 minutes</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Item Total</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Charges</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t border-b py-3 mb-6">
                <div className="flex justify-between font-semibold">
                  <span>Grand Total</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Apply Coupon</label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 border rounded-l-md px-4 py-2 outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button className="bg-red-100 text-red-500 px-4 py-2 rounded-r-md hover:bg-red-200 transition-colors">
                    Apply
                  </button>
                </div>
                <p className="text-gray-500 text-xs mt-2">Try ZOMATO50 or WELCOME20</p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckout}
                className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600 transition-colors"
              >
                Proceed to Checkout
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;