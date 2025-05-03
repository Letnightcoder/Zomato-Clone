import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Phone, Share, Bookmark } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MenuItem from '../components/restaurant/MenuItem';
import { restaurants, menuItems } from '../data/restaurantsData';

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>('Order Online');
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  // Find the restaurant by id
  const restaurant = restaurants.find(r => r.id === Number(id));
  
  // Group menu items by category
  const menuItemsByCategory = menuItems
    .filter(item => item.restaurantId === Number(id))
    .reduce<Record<string, typeof menuItems>>((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  
  // Update document title
  useEffect(() => {
    if (restaurant) {
      document.title = `${restaurant.name} - Order Food Online | Zomato`;
    }
  }, [restaurant]);
  
  // If restaurant not found
  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Restaurant not found</h2>
            <p className="text-gray-600 mb-4">The restaurant you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="inline-block bg-red-500 text-white px-4 py-2 rounded-lg">
              Go back to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Restaurant Cover */}
        <div className="relative h-[280px] w-full mt-16">
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Restaurant Info */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{restaurant.name}</h1>
                <p className="text-gray-600 mb-1">{restaurant.cuisine}</p>
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center">
                    <span className="flex items-center gap-1 bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                      <span>{restaurant.rating}</span>
                      <Star className="w-3 h-3 fill-current" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span>•</span>
                    <span>{restaurant.deliveryTime} mins</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span>•</span>
                    <span>{restaurant.priceForTwo}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-6">
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    <Share className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    <Bookmark className="w-4 h-4" /> Save
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 w-full md:w-auto md:min-w-[280px]">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">Mumbai, Maharashtra</p>
                    <p className="text-sm text-gray-600">South Mumbai, Near Gateway</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">+91 9876543210</p>
                    <p className="text-sm text-gray-600">Call for reservations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <div className="bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3">About The {restaurant.name}</h2>
            <div className="text-gray-600">
              <p className={showFullDescription ? 'mb-4' : 'line-clamp-2 mb-4'}>
                Welcome to The {restaurant.name}, a culinary destination that brings the vibrant flavors of {restaurant.cuisine.split(',')[0]} to your plate. Our menu features a wide selection of dishes prepared with the freshest ingredients and traditional cooking techniques. Our chefs have carefully crafted each recipe to create authentic flavors that transport you to the streets of {restaurant.cuisine.includes('Indian') ? 'Mumbai' : 'Italy'}. Our relaxed ambiance and attentive service make this the perfect spot for a casual lunch, romantic dinner, or celebration with friends and family.
              </p>
              
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-red-500 text-sm font-medium"
              >
                {showFullDescription ? 'Read less' : 'Read more'}
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="bg-white border-t border-b border-gray-100 sticky top-16 z-10">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto scrollbar-hide">
              {['Order Online', 'Reviews', 'Photos', 'Menu'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab
                      ? 'text-red-500 border-b-2 border-red-500'
                      : 'text-gray-700 hover:text-red-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Menu Categories */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm sticky top-32">
                <h3 className="text-lg font-bold text-gray-800 p-4 border-b border-gray-100">Menu Categories</h3>
                <div className="py-2">
                  {Object.keys(menuItemsByCategory).map((category) => (
                    <a 
                      key={category}
                      href={`#${category.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="block px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              {Object.entries(menuItemsByCategory).map(([category, items]) => (
                <div 
                  key={category}
                  id={category.toLowerCase().replace(/\s+/g, '-')}
                  className="mb-8"
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {category} <span className="text-sm font-normal text-gray-500">({items.length})</span>
                  </h2>
                  
                  <div className="bg-white rounded-lg shadow-sm">
                    {items.map((item) => (
                      <MenuItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        category={item.category}
                        isVeg={item.isVeg}
                        restaurantId={item.restaurantId}
                        restaurantName={restaurant.name}
                        rating={item.rating}
                        bestseller={item.bestseller}
                        recommended={item.recommended}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantPage;