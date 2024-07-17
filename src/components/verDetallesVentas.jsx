"use client";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    Transition,
} from "@headlessui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function VerDetallesVentas({ id }) {
    const [detalleVentas, setDetalleVentas] = useState([]);
    let [isOpen, setIsOpen] = useState(false);

    async function getDetalleVentas(sale) {
        const response = await axios.get(
            "http://localhost:8080/sales_details/" + sale
        );
        return response.data;
    }

    async function getDetalleVentasProducto(sale) {
        const response = await axios.get(
            "http://localhost:8080/product/" + sale
        );
        return response.data.name;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function open() {
        setIsOpen(true);
        await getDetalleVentas(id).then(async (data) => {
            await data.map((detalle) => {
                detalle.producto = getDetalleVentasProducto(detalle.product);
            });
            setDetalleVentas(data);
        });
    }

    async function close() {
        setIsOpen(false);
        setDetalleVentas([]);
    }

    const headers = {
        "Content-Type": "application/json",
    };

    return (
        <>
            <button
                className="bg-yellow-500 hover:bg-yellow-800 px-2 py-2 text-white rounded-lg"
                title="Ver Detalles"
                onClick={open}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                        clipRule="evenodd"
                    />
                    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                </svg>
            </button>
            <Transition appear show={isOpen}>
                <Dialog
                    as="div"
                    className="relative z-10 focus:outline-none"
                    onClose={open}
                >
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl">
                                    <DialogTitle
                                        as="h3"
                                        className="font-medium text-xl text-center"
                                    >
                                        Detalle de venta
                                    </DialogTitle>
                                    <table className="w-full mt-4">
                                        <thead>
                                            <tr className="text-center border">
                                                <th className="text-left">
                                                    Producto
                                                </th>
                                                <th>Cantidad</th>
                                                <th>Importe</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {detalleVentas.map((detalle) => (
                                                <tr
                                                    key={detalle.id}
                                                    className="text-center"
                                                >
                                                    <td className="text-left">
                                                        {detalle.producto}
                                                    </td>
                                                    <td>{detalle.cantidad}</td>
                                                    <td>{detalle.importe}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="justify-center flex">
                                        <button
                                            className="bg-gray-700 text-white px-3 py-2 rounded-lg hover:bg-gray-500"
                                            onClick={close}
                                        >
                                            Cerrar
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
