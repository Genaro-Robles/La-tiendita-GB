"use client";
import AdminProducto from "@/components/adminProducto";
import AdminVentas from "@/components/adminVentas";
import AdminUsuarios from "@/components/adminUsuarios";
import AdminCategorias from "@/components/adminCategorias";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "react-hook-form";
import AdminCompras from "@/components/adminCompras";
import AdminProveedores from "@/components/adminProveedores";

export default function AdminPage() {
    const [showAdminProducto, setShowAdminProducto] = useState(false);
    const [showAdminVentas, setShowAdminVentas] = useState(false);
    const [showAdminUsuarios, setShowAdminUsuarios] = useState(false);
    const [showAdminCategorias, setShowAdminCategorias] = useState(false);
    const [showAdminCompras, setShowAdminCompras] = useState(false);
    const [showAdminProveedores, setShowAdminProveedores] = useState(false);

    const router = useRouter();

    const handleShowAdminProducto = () => {
        setShowAdminProducto(true);
        setShowAdminVentas(false);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(false);
        setShowAdminCompras(false);
        setShowAdminProveedores(false);
    };

    const handleShowAdminVentas = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(true);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(false);
        setShowAdminCompras(false);
        setShowAdminProveedores(false);
    };

    const handleShowAdminUsuarios = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(false);
        setShowAdminUsuarios(true);
        setShowAdminCategorias(false);
        setShowAdminCompras(false);
        setShowAdminProveedores(false);
    };

    const handleShowAdminCategorias = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(false);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(true);
        setShowAdminCompras(false);
        setShowAdminProveedores(false);
    };

    const handleShowAdminCompras = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(false);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(false);
        setShowAdminCompras(true);
        setShowAdminProveedores(false);
    };

    const handleShowAdminProveedores = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(false);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(false);
        setShowAdminCompras(false);
        setShowAdminProveedores(true);
    };

    return (
        <main className="min-h-screen p-6 flex flex-col justify-items-center">
            <h1 className="text-4xl text-center p-2">Admin Page</h1>
            <button
                className="w-1/6 justify-center font-semibold mb-10 bg-orange-200 px-3 py-3 rounded-md flex items-center hover:bg-orange-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                onClick={() => router.back()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-5"
                >
                    <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                </svg>
                <span className="pl-3">Regresar al inicio</span>
            </button>
            <div className="flex w-full space-x-5 pb-20">
                <div className="bg-red-600 h-36 w-1/4">Ventas del mes</div>
                <div className="bg-green-600 h-36 w-1/4">Ventas totales</div>
                <div className="bg-blue-600 h-36 w-1/4">
                    Producto mas vendido
                </div>
                <div className="bg-pink-600 h-36 w-1/4">
                    Cliente mas recurrente
                </div>
            </div>
            <div className="flex w-full space-x-5 pb-10 justify-center">
                <button
                    className="bg-gray-200 px-3 py-3 rounded-md flex items-center hover:bg-gray-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                    onClick={handleShowAdminProducto}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-10 h-10 pr-3"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Productos
                </button>
                <button
                    className="bg-gray-200 px-3 py-3 rounded-md flex items-center hover:bg-gray-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                    onClick={handleShowAdminUsuarios}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-10 h-10 pr-3"
                    >
                        <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    </svg>
                    Usuarios
                </button>
                <button
                    className="bg-gray-200 px-3 py-3 rounded-md flex items-center hover:bg-gray-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                    onClick={handleShowAdminCategorias}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-10 h-10 pr-3"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.5 2A2.5 2.5 0 0 0 2 4.5v2.879a2.5 2.5 0 0 0 .732 1.767l4.5 4.5a2.5 2.5 0 0 0 3.536 0l2.878-2.878a2.5 2.5 0 0 0 0-3.536l-4.5-4.5A2.5 2.5 0 0 0 7.38 2H4.5ZM5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Categorías
                </button>
                <button
                    className="bg-gray-200 px-3 py-3 rounded-md flex items-center hover:bg-gray-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                    onClick={handleShowAdminVentas}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 pr-3"
                    >
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                        <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Ventas
                </button>
                <button
                    className="bg-gray-200 px-3 py-3 rounded-md flex items-center hover:bg-gray-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                    onClick={handleShowAdminCompras}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 pr-3"
                    >
                        <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                        <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                        <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                    </svg>
                    Compras
                </button>
                <button
                    className="bg-gray-200 px-3 py-3 rounded-md flex items-center hover:bg-gray-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
                    onClick={handleShowAdminProveedores}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 pr-3"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                            clipRule="evenodd"
                        />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                    </svg>
                    Proveedores
                </button>
            </div>
            {showAdminProducto && <AdminProducto />}
            {showAdminVentas && <AdminVentas />}
            {showAdminUsuarios && <AdminUsuarios />}
            {showAdminCategorias && <AdminCategorias />}
            {showAdminCompras && <AdminCompras />}
            {showAdminProveedores && <AdminProveedores />}
        </main>
    );
}
