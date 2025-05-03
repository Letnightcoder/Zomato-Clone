import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { RootState } from '../../app/store';
import { 
  setCuisines, 
  setPriceRange, 
  setCategories,
  setVegetarian,
  resetFilters
} from '../../features/filter/filterSlice';
import { cuisines, categories } from '../../data/restaurantsData';

const FilterSection: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);
  
  const [expanded, setExpanded] = useState({
    categories: true,
    cuisines: true,
    priceRange: true
  });
  
  const toggleSection = (section: 'categories' | 'cuisines' | 'priceRange') => {
    setExpanded(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  const handleCuisineChange = (id: number) => {
    const newCuisines = filter.cuisines.includes(id)
      ? filter.cuisines.filter(cuisineId => cuisineId !== id)
      : [...filter.cuisines, id];
    
    dispatch(setCuisines(newCuisines));
  };
  
  const handleCategoryChange = (id: number) => {
    const newCategories = filter.categories.includes(id)
      ? filter.categories.filter(categoryId => categoryId !== id)
      : [...filter.categories, id];
    
    dispatch(setCategories(newCategories));
  };
  
  const handlePriceRangeChange = (min: number, max: number) => {
    dispatch(setPriceRange({ min, max }));
  };
  
  const handleVegetarianChange = () => {
    dispatch(setVegetarian(!filter.vegetarian));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
        
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 5).map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                filter.categories.includes(category.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
          
          <button 
            className="text-sm text-red-500 font-medium"
            onClick={() => toggleSection('categories')}
          >
            {expanded.categories ? (
              <span className="flex items-center">
                Show less <ChevronUp className="w-4 h-4 ml-1" />
              </span>
            ) : (
              <span className="flex items-center">
                Show more <ChevronDown className="w-4 h-4 ml-1" />
              </span>
            )}
          </button>
        </div>
        
        {expanded.categories && (
          <div className="mt-3 flex flex-wrap gap-2">
            {categories.slice(5).map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  filter.categories.includes(category.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Cuisines</h3>
          <button 
            className="text-sm text-gray-500"
            onClick={() => toggleSection('cuisines')}
          >
            {expanded.cuisines ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {expanded.cuisines && (
          <div className="space-y-2">
            {cuisines.map(cuisine => (
              <div key={cuisine.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`cuisine-${cuisine.id}`}
                  checked={filter.cuisines.includes(cuisine.id)}
                  onChange={() => handleCuisineChange(cuisine.id)}
                  className="w-4 h-4 text-red-500 rounded border-gray-300 focus:ring-red-500"
                />
                <label 
                  htmlFor={`cuisine-${cuisine.id}`}
                  className="ml-2 text-sm text-gray-700"
                >
                  {cuisine.name}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Price Range</h3>
          <button 
            className="text-sm text-gray-500"
            onClick={() => toggleSection('priceRange')}
          >
            {expanded.priceRange ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
        
        {expanded.priceRange && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">₹{filter.priceRange.min}</span>
              <span className="text-sm text-gray-600">₹{filter.priceRange.max}</span>
            </div>
            
            <input
              type="range"
              min="0"
              max="2500"
              step="100"
              value={filter.priceRange.max}
              onChange={(e) => handlePriceRangeChange(0, parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            
            <div className="flex justify-between mt-4">
              {[500, 1000, 1500, 2000, 2500].map(price => (
                <button
                  key={price}
                  onClick={() => handlePriceRangeChange(0, price)}
                  className={`px-2 py-1 text-xs rounded ${
                    filter.priceRange.max === price
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  ₹{price}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="vegetarian"
            checked={filter.vegetarian}
            onChange={handleVegetarianChange}
            className="w-4 h-4 text-red-500 rounded border-gray-300 focus:ring-red-500"
          />
          <label 
            htmlFor="vegetarian"
            className="ml-2 text-sm text-gray-700"
          >
            Pure Vegetarian
          </label>
        </div>
      </div>
      
      <button
        onClick={() => dispatch(resetFilters())}
        className="w-full py-2 text-red-500 border border-red-500 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSection;