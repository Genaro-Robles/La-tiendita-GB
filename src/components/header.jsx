"use client";
import Image from "next/image";
import logo from "@/images/logo-pccomponentes.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/app/hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";

function CartItem({ product, removeFromCart }) {
    return (
        <div className="flex px-4 w-full justify-center py-6 border-b">
            <Image
                src={`/images/products/${product.image}`}
                width={80}
                height={80}
                alt="Imagen producto"
            />

            <div className="flex flex-col justify-center pl-5">
                <p className="text-sm hover:text-orange-500 cursor-pointer">
                    {product.name}
                </p>
                <p className="text-gray-600 text-sm font-bold">
                    S/. {product.precioUnitario}
                </p>
                <p className="text-gray-600 text-sm">
                    Cantidad: {product.quantity}
                </p>
            </div>
            <button
                title="Eliminar producto"
                className="ml-3 w-6 h-6 text-red-700 hover:text-red-400 text-sm justify-center items-center flex"
                onClick={() => removeFromCart(product)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
}

export default function Header() {
    const headers = {
        "Content-Type": "application/json",
    };

    async function createVenta({ clearCart }) {
        let subtotal = 0;
        let usuario = 1;
        let igv = 0;
        let total = 0;
        let fechaPedido = new Date().toISOString().split("T")[0];
        let fechaEntrega = new Date().toISOString().split("T")[0];

        carrito.forEach((product) => {
            total += product.precioUnitario * product.quantity;
        });

        igv = total * 0.18;
        subtotal = total - igv;

        try {
            await Swal.fire({
                title: "¿Deseas proseguir con la compra?",
                text: "No prodrás revertir la acción más adelante",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, seguir!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .post(
                            "http://localhost:8080/sales",
                            {
                                usuario: usuario,
                                fechaPedido,
                                fechaEntrega,
                                subtotal: subtotal,
                                igv: igv,
                                total: total,
                            },
                            { headers }
                        )
                        .then(function (response) {
                            Swal.fire({
                                title: "Compra exitosa!",
                                text: "Haz realizado tu compra con exito!!",
                                icon: "success",
                            });
                        });
                        clearCart();
                } else {
                    Swal.fire({
                        title: "Compra cancelada!",
                        text: "Se canceló el proceso de compra.",
                        icon: "info",
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const { removeFromCart, clearCart, carrito } = useCart();
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const pathname = usePathname();
    return pathname === "/login" ||
        pathname === "/register" ||
        pathname.includes("/admin") ? null : (
        <header className="sticky top-0 bg-white border-b border-gray-300">
            <nav className="flex justify-between items-center p-4">
                <div className="flex">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Logo de PC Componentes"
                            width={140}
                            height={45}
                            className="ml-4"
                        />
                    </Link>
                </div>

                <nav className="">
                    <ul className="flex space-x-4">
                        <li className="flex">
                            <Link
                                href="/login"
                                className="hover:bg-gray-100 flex space-x-2 py-3 px-2 rounded-md transition-all ease-in-out duration-500"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM20 20h-16v-1c0-3.5 3.3-6 8-6s8 2.5 8 6v1zm-13.8-2h11.7c-.6-1.8-2.8-3-5.8-3s-5.3 1.2-5.9 3z"></path>
                                </svg>
                                <span>Mi cuenta</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                className="hover:bg-gray-100 flex space-x-3 py-3 px-2 rounded-md transition-all ease-in-out duration-500"
                                onClick={() => setMostrarCarrito(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    enableBackground="new 0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M2 2v2h3.2l2.8 12.2c.1.5.5.8 1 .8h10c.5 0 .9-.3 1-.8l2-8c.1-.3 0-.6-.2-.9-.2-.2-.5-.3-.8-.3h-.4l1.3-2.6c.2-.5.1-1-.3-1.3l-3-2c-.3-.1-.6-.1-.9-.1-.3.1-.5.3-.6.5l-2.1 4.3v-1.8c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v3h-1.1l-.9-4.2c-.1-.5-.5-.8-1-.8h-4zm11 3v2h-2v-2h2zm5.4 2h-1.8l1.8-3.5 1.3.9-1.3 2.6zm-10 2h11.3l-1.5 6h-8.4l-1.4-6z"></path>
                                    <circle cx="18" cy="20" r="2"></circle>
                                    <circle cx="10" cy="20" r="2"></circle>
                                </svg>
                                <span>Mi carrito</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <nav
                    className={`bg-white fixed right-0 top-0 h-full w-1/4 shadow-xl transition-all duration-200 flex flex-col ${
                        mostrarCarrito ? "" : "translate-x-80"
                    }`}
                >
                    <button
                        className="w-10 h-12 bg-gray-100 hover:bg-gray-200"
                        onClick={() => setMostrarCarrito(false)}
                    >
                        x
                    </button>
                    <h1 className="text-2xl text-center">Mi Carrito</h1>
                    {carrito.map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                    <div className="flex flex-col items-center">
                        <button
                            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 w-3/4 my-3"
                            onClick={() => createVenta({clearCart})}
                        >
                            Realizar compra
                        </button>
                        <button
                            onClick={() => clearCart()}
                            className="bg-black text-white py-2 rounded-md hover:bg-black/75 w-3/4 my-3"
                        >
                            Vaciar carrito
                        </button>
                    </div>
                </nav>
            </nav>
        </header>
    );
}
