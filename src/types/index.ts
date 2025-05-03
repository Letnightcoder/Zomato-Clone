export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceForTwo: string;
  discount?: string;
  promoted?: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  restaurantId: number;
  rating: number;
  bestseller?: boolean;
  recommended?: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface Cuisine {
  id: number;
  name: string;
}

export interface Collection {
  id: number;
  name: string;
  places: number;
  image: string;
}

export interface Experience {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface FilterState {
  categories: number[];
  cuisines: number[];
  priceRange: [number, number];
  rating: number;
  deliveryTime: number;
}