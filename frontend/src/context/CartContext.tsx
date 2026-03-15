import React, { createContext, useState, useContext, ReactNode } from 'react';

// Типы данных
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  selectedSize: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (item: CartItem) => void;
  updateQuantity: (item: CartItem, change: number) => void;
  total: number;
}

// Создаем контекст
const CartContext = createContext<CartContextType | undefined>(undefined);

// Провайдер
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      // Проверяем, есть ли уже такой товар с таким же размером
      const existing = prev.find(item => 
        item.id === product.id && item.selectedSize === product.selectedSize
      );
      
      if (existing) {
        // Если есть - увеличиваем количество
        return prev.map(item =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // Если нет - добавляем новый
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCart(prev => prev.filter(i => 
      !(i.id === item.id && i.selectedSize === item.selectedSize)
    ));
  };

  const updateQuantity = (item: CartItem, change: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === item.id && i.selectedSize === item.selectedSize) {
        const newQuantity = i.quantity + change;
        return newQuantity > 0 ? { ...i, quantity: newQuantity } : i;
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  // Общая стоимость
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      total 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования корзины
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
