"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCart } from "@/app/hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";


export default function ProcesarVenta() {
    const [subtotal, setSubtotal] = useState(0);
    const [igv, setIgv] = useState(0);
    const [total, setTotal] = useState(0);
    const { removeFromCart, clearCart, carrito, setCarrito, user } = useCart();
    const headers = {
        "Content-Type": "application/json",
    };

    async function createVenta() {
        let usuario = user.id;
        let fechaPedido = new Date().toISOString().split("T")[0];
        let fechaEntrega = new Date().toISOString().split("T")[0];

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
                            let detalles = carrito.map((producto) => ({
                                sale: response.data,
                                product: producto.id,
                                cantidad: producto.quantity,
                                importe:
                                    Number(producto.precioUnitario) *
                                    Number(producto.quantity),
                            }));
                            axios.post(
                                "http://localhost:8080/sales_details",
                                detalles,
                                { headers }
                            );
                            Swal.fire({
                                title: "Compra exitosa!",
                                confirmButtonText: `
                                    <a class='btn-descargar' href='/boleta/${response.data}'>Descargar Boleta</a>
                                `,
                                cancelButtonText: `
                                    <a class='btn-cancelar' href='javascript:void(0)'>Cerrar</a>
                                `,
                                cancelButtonColor: "#7066e0",
                                confirmButtonColor: "#ef4444",
                                buttonsStyling: false,
                                showConfirmButton: true,
                                showCancelButton: true,
                                text: "Haz realizado tu compra con exito!!",
                                icon: "success",
                            });
                            clearCart();
                        });
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

    const handleCantidadChange = (index, quantity) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito[index].quantity = Number(quantity);
        setCarrito(nuevoCarrito);
    };

    const calcularTotales = (carrito) => {
        let totalito = carrito.reduce(
            (acc, producto) =>
                acc + producto.precioUnitario * producto.quantity,
            0
        );
        let igvcito = totalito * 0.18;
        let subtotalito = totalito - igvcito;
        return { subtotalito, igvcito, totalito };
    };

    useEffect(() => {
        console.log(carrito);
    }, []);

    useEffect(() => {
        const { subtotalito, igvcito, totalito } = calcularTotales(carrito);
        setSubtotal(subtotalito);
        setIgv(igvcito);
        setTotal(totalito);
    }, [carrito]);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-center py-3 w-full">
                <h1 className="text-xl font-bold">Procesar Venta</h1>
            </div>
            <div className="flex flex-col w-5/6">
                <div className="w-full flex flex-row justify-center py-2">
                    <label htmlFor="client" className="text-lg font-bold w-1/6">
                        Cliente:
                    </label>
                    <input
                        type="text"
                        id="client"
                        className="border-2 border-gray-200 bg-gray-200 rounded-md ml-2 px-3 text-sm w-1/2 py-2"
                        defaultValue={user.name + " " + user.lastname}
                        readOnly={user == "nada"}
                    />
                </div>
                <div className="w-full flex flex-row justify-center py-2">
                    <label htmlFor="correo" className="text-lg font-bold w-1/6">
                        Correo:
                    </label>
                    <input
                        type="text"
                        id="correo"
                        className="border-2 border-gray-200 bg-gray-200 rounded-md ml-2 w-1/2 px-3 text-sm py-2"
                        defaultValue={user.correo}
                        readOnly={user == "nada"}
                    />
                </div>
                <div className="w-full flex flex-row justify-center py-2">
                    <label
                        htmlFor="tipo_entrega"
                        className="text-lg font-bold w-1/6"
                    >
                        Tipo de entrega:
                    </label>
                    <select
                        type="text"
                        id="tipo_entrega"
                        className="border-2 border-gray-200 bg-gray-200 rounded-md ml-2 w-1/2 px-3 py-2 text-sm"
                    >
                        <option value="1">Entrega a domicilio</option>
                        <option value="2">Recoger en tienda</option>
                    </select>
                </div>
                <div className="w-full flex flex-row justify-center py-2">
                    <label
                        htmlFor="fecha_entrega"
                        className="text-lg font-bold w-1/6"
                    >
                        Fecha de entrega:
                    </label>
                    <input
                        type="date"
                        id="fecha_entrega"
                        className="border-2 border-gray-200 bg-gray-200 rounded-md ml-2 w-1/2 px-3 text-sm py-2"
                        readOnly={user == "nada"}
                    />
                </div>
                <table className="w-full border-2 border-gray-200 rounded-md mt-5 mb-10">
                    <thead className="bg-gray-200 border-b-2 border-black text-start">
                        <tr>
                            <th className="font-semibold w-28">Imagen</th>
                            <th className="font-semibold text-start px-2">
                                Nombre
                            </th>
                            <th className="font-semibold text-start px-2">
                                Precio
                            </th>
                            <th className="font-semibold text-start px-2">
                                Cantidad
                            </th>
                            <th className="font-semibold text-start px-2">
                                Subtotal + igv
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((producto, index) => (
                            <tr key={index}>
                                <td className="flex justify-center py-2">
                                    <Image
                                        src={`/images/products/${producto.image}`}
                                        width={100}
                                        height={100}
                                        alt={"Imagen Producto"}
                                    />
                                </td>
                                <td className="px-2 py-2 w-96">
                                    {producto.name}
                                </td>
                                <td>S/. {producto.precioUnitario}</td>
                                <td>
                                    <input
                                        type="number"
                                        id="cantidad"
                                        name="cantidad"
                                        className="border-gray-500 border w-10 h-10 text-center"
                                        min={1}
                                        value={producto.quantity}
                                        onChange={(e) =>
                                            handleCantidadChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        inputMode="numeric"
                                    />
                                </td>
                                <td name="subtotales">
                                    S/.{" "}
                                    {(
                                        producto.quantity *
                                        producto.precioUnitario
                                    ).toFixed(2)}
                                </td>
                                <td>
                                    <button
                                        className=" px-2 py-2 rounded-lg bg-red-500 text-white hover:bg-red-400"
                                        title="Eliminar producto"
                                        onClick={() => removeFromCart(producto)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="text-right border-y">
                            <td colSpan={6} className="py-2 pr-5 text-sm">
                                SUBTOTAL (S/.): {subtotal.toFixed(2)}
                            </td>
                        </tr>
                        <tr className="text-right border-y">
                            <td colSpan={6} className="py-2 pr-5 text-sm">
                                IGV (S/.): {igv.toFixed(2)}
                            </td>
                        </tr>
                        <tr className="text-right border-y">
                            <td colSpan={6} className="py-2 pr-5 text-sm">
                                TOTAL (S/.): {total.toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-full flex justify-between pb-10">
                    <Link
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-center"
                        href={"/"}
                    >
                        Seguir Comprando
                    </Link>
                    {user != "nada" &&
                    <button
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => createVenta()}
                    >
                        Realizar Compra
                    </button>
                    }
                </div>
            </div>
        </div>
    );
}
