import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { randomUUID } from "expo-crypto";
import products from "@assets/data/products";

type CartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number
};

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    const existItems = items.find((item) => item.product === product && item.size === size);
    if(existItems){
        updateQuantity(existItems, 1);
        return;
    }

    const newItem = {
      id: randomUUID(),
      product_id: product.id,
      product,
      size,
      quantity: 1,
    };

    setItems([newItem, ...items]);
  };


  const updateQuantity = (itemId, amount: -1 | 1) => {
    const updateItems = items.map((item) => 
      item.id != itemId ? item : { ...item, quantity: item.quantity + amount }
    );
    const filter = updateItems.filter((item) => item.quantity > 0);
    setItems(filter);
  };

  const total = items.reduce((sum, item) => sum+=item.product.price * item.quantity, 0);
  console.log(items);
  return (
    <CartContext.Provider value={{ items, addItem, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
