import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  cuisines: number[];
  priceRange: {
    min: number;
    max: number;
  };
  categories: number[];
  sortBy: string;
  deliveryTime?: number;
  vegetarian: boolean;
  searchQuery: string;
}

const initialState: FilterState = {
  cuisines: [],
  priceRange: {
    min: 0,
    max: 2500,
  },
  categories: [],
  sortBy: 'relevance',
  vegetarian: false,
  searchQuery: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCuisines: (state, action: PayloadAction<number[]>) => {
      state.cuisines = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload;
    },
    setCategories: (state, action: PayloadAction<number[]>) => {
      state.categories = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setVegetarian: (state, action: PayloadAction<boolean>) => {
      state.vegetarian = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.cuisines = [];
      state.categories = [];
      state.priceRange = {
        min: 0,
        max: 2500,
      };
      state.sortBy = 'relevance';
      state.vegetarian = false;
    },
  },
});

export const {
  setCuisines,
  setPriceRange,
  setCategories,
  setSortBy,
  setVegetarian,
  setSearchQuery,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;