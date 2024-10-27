import React, { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "modules/shoppingCart/view/components/ShoppingCart/ShoppingCart";
import { useLocalStorage } from "modules/shoppingCart/hooks/UseLocalStorage";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface ShoppingCartContextValue {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext<ShoppingCartContextValue | undefined>(
  undefined
);

export function useShoppingCart(): ShoppingCartContextValue {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity: number, item: CartItem) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number): number => {
    return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number): void => {
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find((item: CartItem) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item: CartItem) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const decreaseCartQuantity = (id: number): void => {
    setCartItems((currItems: CartItem[]) => {
      const item = currItems.find((item: CartItem) => item.id === id);
      if (item && item.quantity === 1) {
        return currItems.filter((item: CartItem) => item.id !== id);
      } else {
        return currItems.map((item: CartItem) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const removeFromCart = (id: number): void => {
    setCartItems((currItems: CartItem[]) =>
      currItems.filter((item: CartItem) => item.id !== id)
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};
