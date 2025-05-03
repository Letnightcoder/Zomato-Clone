import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../../data/restaurantsData';
import { motion } from 'framer-motion';

const RestaurantsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Best restaurants in Mumbai
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={`/restaurant/${restaurant.id}`} className="block group">
                <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {restaurant.promoted && (
                      <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                        Promoted
                      </div>
                    )}
                    
                    {restaurant.discount && (
                      <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white py-1 px-3 text-sm">
                        {restaurant.discount}
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800 group-hover:text-red-500 transition-colors line-clamp-1">
                        {restaurant.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-xs">
                        <span>{restaurant.rating}</span>
                        <span>★</span>
                      </div>
                    </div>
                    
                    <div className="text-gray-600 text-sm">{restaurant.cuisine}</div>
                    <div className="text-gray-600 text-sm">{restaurant.priceForTwo}</div>
                    <div className="text-gray-500 text-xs mt-2">
                      {restaurant.deliveryTime} mins • {restaurant.deliveryTime} mins
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;