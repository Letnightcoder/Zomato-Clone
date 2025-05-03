import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80')" 
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
          Discover great food
        </h1>
        <p className="text-xl text-white/90 mb-8 animate-fadeInUp">
          From the best restaurants, cafes, and bars in your city
        </p>
        
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-lg p-1 animate-fadeInUp animation-delay-300">
          <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg sm:border-r border-gray-200 w-full sm:w-auto">
            <span className="text-red-500">📍</span>
            <span className="text-gray-800">Mumbai</span>
          </div>
          
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine or a dish" 
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;