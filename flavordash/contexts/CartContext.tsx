import { createContext, ReactNode, useContext, useState } from "react";

export type FoodItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  rating: string;
  image: string;
};

type CartContextType = {
  cartItems: FoodItem[];
  addToCart: (item: FoodItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}