import React, { createContext, useState } from 'react';
import { produce } from 'immer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(produce(cart, draft => {
            const existingProduct = draft.find(p => p.id === product.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                draft.push({
                    ...product,
                    name: product.title,
                    quantity: 1,
                    url: product.imgSrc || ""
                });
            }
        }));
        console.log(cart);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const updateItemQuantity = (id, quantity) => {
        setCart(cart.map(product => product.id === id ? { ...product, quantity } : product));
        console.log(cart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateItemQuantity }}>
            {children}
        </CartContext.Provider>
    );
};