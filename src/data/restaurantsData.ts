export const restaurants = [
  {
    id: 1,
    name: 'The Bombay Canteen',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    cuisine: 'Indian, Continental',
    rating: 4.5,
    deliveryTime: '35',
    priceForTwo: '₹1,500 for two',
    discount: '50% OFF up to ₹100',
    promoted: true
  },
  {
    id: 2,
    name: 'Smoke House Deli',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
    cuisine: 'Continental, Italian',
    rating: 4.2,
    deliveryTime: '25',
    priceForTwo: '₹1,000 for two',
    discount: '20% OFF'
  },
  {
    id: 3,
    name: 'Burma Burma',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    cuisine: 'Burmese, Asian',
    rating: 4.7,
    deliveryTime: '40',
    priceForTwo: '₹1,200 for two'
  },
  {
    id: 4,
    name: 'Soda Bottle Opener Wala',
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    cuisine: 'Parsi, Iranian',
    rating: 4.1,
    deliveryTime: '30',
    priceForTwo: '₹800 for two',
    discount: 'FREE Dessert',
    promoted: true
  },
  {
    id: 5,
    name: 'The Table',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
    cuisine: 'European, Global',
    rating: 4.8,
    deliveryTime: '45',
    priceForTwo: '₹2,000 for two'
  },
  {
    id: 6,
    name: 'Bastian',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    cuisine: 'Seafood, Continental',
    rating: 4.6,
    deliveryTime: '50',
    priceForTwo: '₹2,500 for two',
    discount: '10% OFF on HDFC Cards'
  },
  {
    id: 7,
    name: 'Toit Brewpub',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    cuisine: 'Pizza, Burgers, Craft Beer',
    rating: 4.4,
    deliveryTime: '35',
    priceForTwo: '₹1,400 for two'
  },
  {
    id: 8,
    name: 'Social',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    cuisine: 'Continental, American, Asian',
    rating: 4.3,
    deliveryTime: '30',
    priceForTwo: '₹1,100 for two',
    discount: 'Flat ₹150 OFF',
    promoted: true
  }
];

export const menuItems = [
  // Restaurant 1 - The Bombay Canteen
  {
    id: 101,
    name: 'Butter Chicken',
    description: 'Tender chicken cooked in a rich buttery tomato gravy.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Main Course',
    isVeg: false,
    restaurantId: 1,
    rating: 4.6,
    bestseller: true,
    recommended: true
  },
  {
    id: 102,
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes, grilled to perfection.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=917&q=80',
    category: 'Starters',
    isVeg: true,
    restaurantId: 1,
    rating: 4.3
  },
  {
    id: 103,
    name: 'Dal Makhani',
    description: 'Black lentils simmered overnight with butter and cream.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Main Course',
    isVeg: true,
    restaurantId: 1,
    rating: 4.5,
    recommended: true
  },
  {
    id: 104,
    name: 'Garlic Naan',
    description: 'Leavened bread topped with garlic and butter.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1617692855027-33b13dd3a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Breads',
    isVeg: true,
    restaurantId: 1,
    rating: 4.2
  },
  {
    id: 105,
    name: 'Gulab Jamun',
    description: 'Milk solids dumplings soaked in sugar syrup.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1598614291906-76e7535de6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Desserts',
    isVeg: true,
    restaurantId: 1,
    rating: 4.7,
    bestseller: true
  },
  
  // Restaurant 2 - Smoke House Deli
  {
    id: 201,
    name: 'Classic Caesar Salad',
    description: 'Romaine lettuce with Caesar dressing, croutons and parmesan.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Salads',
    isVeg: false,
    restaurantId: 2,
    rating: 4.1
  },
  {
    id: 202,
    name: 'Mushroom Risotto',
    description: 'Arborio rice cooked with mushrooms and parmesan.',
    price: 385,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Main Course',
    isVeg: true,
    restaurantId: 2,
    rating: 4.5,
    bestseller: true
  },
  {
    id: 203,
    name: 'Spaghetti Carbonara',
    description: 'Spaghetti with egg, cheese, pancetta and black pepper.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Pasta',
    isVeg: false,
    restaurantId: 2,
    rating: 4.7,
    recommended: true
  },
  {
    id: 204,
    name: 'Tiramisu',
    description: 'Coffee-flavoured Italian dessert made of ladyfingers, mascarpone cheese, and cocoa.',
    price: 275,
    image: 'https://images.unsplash.com/photo-1571877899565-095a5f9dade2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    category: 'Desserts',
    isVeg: true,
    restaurantId: 2,
    rating: 4.8,
    bestseller: true
  }
];

export const categories = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Delivery' },
  { id: 3, name: 'Dine Out' },
  { id: 4, name: 'Takeaway' },
  { id: 5, name: 'Indian' },
  { id: 6, name: 'Italian' },
  { id: 7, name: 'Chinese' },
  { id: 8, name: 'Continental' },
  { id: 9, name: 'Fast Food' },
  { id: 10, name: 'Desserts' }
];

export const cuisines = [
  { id: 1, name: 'North Indian' },
  { id: 2, name: 'South Indian' },
  { id: 3, name: 'Chinese' },
  { id: 4, name: 'Italian' },
  { id: 5, name: 'Continental' },
  { id: 6, name: 'Mexican' },
  { id: 7, name: 'Thai' },
  { id: 8, name: 'Japanese' },
  { id: 9, name: 'Fast Food' },
  { id: 10, name: 'Desserts' }
];

export const collections = [
  {
    id: 1,
    name: 'Newly Opened Restaurants',
    description: 'Explore the latest additions to the culinary scene',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    places: 20
  },
  {
    id: 2,
    name: 'Trending This Week',
    description: 'The most popular spots right now',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    places: 30
  },
  {
    id: 3,
    name: 'Best of Mumbai',
    description: 'The city\'s finest dining destinations',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    places: 45
  }
];