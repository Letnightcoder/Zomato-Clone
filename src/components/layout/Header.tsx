import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MapPin, Search, ShoppingBag, User } from 'lucide-react';
import { RootState } from '../../app/store';
import LocationSelector from '../ui/LocationSelector';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false);
  const location = useLocation();
  const cartItems = useSelector((state: RootState) => state.cart.totalItems);
  
  // Update header background based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Determine if we're on the restaurant page
  const isRestaurantPage = location.pathname.includes('/restaurant/');
  
  // Header background styles
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    (isScrolled || !isHomePage) 
      ? 'bg-white shadow-sm' 
      : 'bg-transparent'
  }`;

  // For logo and link colors
  const textClasses = `${
    (isScrolled || !isHomePage) 
      ? 'text-gray-900' 
      : 'text-white'
  }`;
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className={`text-2xl font-bold ${textClasses}`}>
            zomato
          </Link>
          
          {!isRestaurantPage && (
            <div 
              className={`flex items-center gap-2 cursor-pointer ${textClasses}`}
              onClick={() => setIsLocationSelectorOpen(true)}
            >
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Mumbai</span>
              <span className="text-xs">▼</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className={`font-medium transition-colors ${textClasses} hover:text-red-500`}
          >
            Home
          </Link>
          <Link 
            to="/search" 
            className={`font-medium transition-colors ${textClasses} hover:text-red-500`}
          >
            Restaurants
          </Link>
          <Link 
            to="/pro" 
            className={`font-medium transition-colors ${textClasses} hover:text-red-500`}
          >
            Pro
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/search" className={textClasses}>
              <Search className="w-5 h-5" />
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingBag className={`w-5 h-5 ${textClasses}`} />
              {cartItems > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium">
                  {cartItems}
                </div>
              )}
            </Link>
            
            <div className={`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ${textClasses}`}>
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      
      {isLocationSelectorOpen && (
        <LocationSelector onClose={() => setIsLocationSelectorOpen(false)} />
      )}
    </header>
  );
};

export default Header;