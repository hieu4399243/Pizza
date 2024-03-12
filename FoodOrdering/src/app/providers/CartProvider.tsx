import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void;
}


const CartContext = createContext<CartType>({
    items: [],
    addItem: () => {}
});



const CartProvider = ({children} : PropsWithChildren) =>{
    const [items, setItems] = useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem['size']) =>{
        const newItem = {
            id: '1',
            product_id: product.id,
            product,
            size,
            quantity: 2
        }

        setItems([newItem, ...items]);
    }
    console.log(items);

    return (
        <CartContext.Provider value={{items ,  addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
