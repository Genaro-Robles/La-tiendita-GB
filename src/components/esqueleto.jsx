"use client"
import { CartProvider } from "@/context/cart";
export default function Esqueleto({ children }) {
    return <CartProvider>{children}</CartProvider>;
}
