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
  removeFromCart: (index: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, i) => i !== index)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
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