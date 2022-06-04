import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const cart = [
        { name: 'first', price: 2000 },
        { name: 'second', price: 3000 }
    ];
    const [total, setTotal] = useState(0);

    const addToCart = (item) => {
        cart.push(item);
        setTotal(total + item.price);
    };
    return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const defaultItem = {
    addToItem: () => {},
    element: []
};

export default CartContext;
