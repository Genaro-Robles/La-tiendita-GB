"use client"
import AdminProducto from "@/components/adminProducto";
import AdminVentas from "@/components/adminVentas";
import AdminUsuarios from "@/components/adminUsuarios";
import AdminCategorias from "@/components/adminCategorias";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
    const [showAdminProducto, setShowAdminProducto] = useState(false);
    const [showAdminVentas, setShowAdminVentas] = useState(false);
    const [showAdminUsuarios, setShowAdminUsuarios] = useState(false);
    const [showAdminCategorias, setShowAdminCategorias] = useState(false);
    const router = useRouter();

    const handleShowAdminProducto = () => {
        setShowAdminProducto(true);
        setShowAdminVentas(false);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(false);
    }

    const handleShowAdminVentas = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(true);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(false);
    }

    const handleShowAdminUsuarios = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(false);
        setShowAdminUsuarios(true);
        setShowAdminCategorias(false);
    }

    const handleShowAdminCategorias = () => {
        setShowAdminProducto(false);
        setShowAdminVentas(false);
        setShowAdminUsuarios(false);
        setShowAdminCategorias(true);
    }

    return (
        <main className="min-h-screen p-6 flex flex-col justify-items-center">
            <h1 className="text-4xl text-center p-2">Admin Page</h1>
            <button className="w-1/6 justify-center font-semibold mb-10 bg-orange-200 px-3 py-3 rounded-md flex items-center hover:bg-orange-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white"
            onClick={() => router.back()}>
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
            </div>
            {showAdminProducto && <AdminProducto />}
            {showAdminVentas && <AdminVentas />}
            {showAdminUsuarios && <AdminUsuarios />}
            {showAdminCategorias && <AdminCategorias />}
        </main>
    );
}
