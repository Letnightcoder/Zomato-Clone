import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';
import { RootState } from '../app/store';
import FilterSection from '../components/search/FilterSection';
import { restaurants } from '../data/restaurantsData';
import Header from '../components/layout/Header';

const SearchPage: React.FC = () => {
  const filters = useSelector((state: RootState) => state.filter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  // Apply filters (this would be more sophisticated in a real app)
  const filteredRestaurants = restaurants.filter(restaurant => {
    // Filter by price range (using a simple extraction of numbers from the price text)
    const price = parseInt(restaurant.priceForTwo.match(/\d+/)![0]);
    if (price < filters.priceRange.min || price > filters.priceRange.max) {
      return false;
    }
    
    // Filter by rating
    if (filters.rating > 0 && restaurant.rating < filters.rating) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            {filteredRestaurants.length} Restaurants found
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="md:w-1/4">
            <FilterSection />
          </div>

          {/* Restaurant Cards */}
          <div className="md:w-3/4">
            <div className="mb-6 flex items-center space-x-4 overflow-x-auto pb-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full whitespace-nowrap">
                All
              </button>
              <button className="bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap">
                Delivery
              </button>
              <button className="bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap">
                Dine Out
              </button>
              <button className="bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap">
                Nightlife
              </button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredRestaurants.map((restaurant) => (
                <motion.div
                  key={restaurant.id}
                  variants={itemVariants}
                  className="cursor-pointer"
                >
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-white rounded-lg overflow-hidden shadow-sm"
                    >
                      <div className="relative h-56">
                        {restaurant.promoted && (
                          <div className="absolute top-4 left-0 bg-gray-800 text-white text-xs px-2 py-1 z-10">
                            Promoted
                          </div>
                        )}
                        {restaurant.discount && (
                          <div className="absolute bottom-4 left-0 bg-red-500 text-white text-xs px-2 py-1 z-10">
                            {restaurant.discount}
                          </div>
                        )}
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-semibold">
                            {restaurant.name}
                          </h3>
                          <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                            <span className="text-green-700 font-semibold text-sm">
                              {restaurant.rating}
                            </span>
                            <Star size={12} className="text-green-700 ml-1" />
                          </div>
                        </div>

                        <div className="flex justify-between text-gray-500 text-sm mb-2">
                          <span>{restaurant.cuisine}</span>
                          <span>{restaurant.priceForTwo}</span>
                        </div>

                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          <span>{restaurant.deliveryTime} mins</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;