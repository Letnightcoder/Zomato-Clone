import { CartState } from '../features/cart/cartSlice';

export const loadCartFromStorage = (): CartState => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return { items: [], totalAmount: 0, totalItems: 0 };
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    console.error('Could not load cart from localStorage', err);
    return { items: [], totalAmount: 0, totalItems: 0 };
  }
};

export const saveCartToStorage = (cart: CartState): void => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    console.error('Could not save cart to localStorage', err);
  }
};