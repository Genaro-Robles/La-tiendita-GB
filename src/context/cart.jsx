import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const addTocart = producto => {
        console.log(producto)
        const productInCart = carrito.findIndex(item => item.id === producto.id);

        if (productInCart >= 0) {
            const newCart = structuredClone(carrito);
            newCart[productInCart].quantity = producto.quantity;
            return setCarrito(newCart);
        }

        setCarrito(prevState => ([...prevState, { ...producto}]));
    };

    const removeFromCart = producto => {
        setCarrito(prevState => prevState.filter(item => item.id != producto.id))
    }

    const clearCart = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider value={{ carrito, addTocart, clearCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
