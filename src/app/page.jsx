"use client";
import Producto from "@/components/producto";
import axios from "axios";
import { useEffect, useState } from "react";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";


export default function Home() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    

    const productoByCategory = async (id) => {
        const response = await axios.get(
            `http://localhost:8080/product/category/${id}`
        );
        setProductos(response.data);
    };

    const Data = async () => {
        const response = await axios.get(
            "http://localhost:8080/product/active"
        );
        setProductos(response.data);
    };

    const Categorias = async () => {
        const response = await axios.get(
            "http://localhost:8080/category/active"
        );
        setCategorias(response.data);
    };

    useEffect(() => {
        Data();
        Categorias();
    }, []);

    return (
        <div className="w-full flex flex-col">
            <div className="text-right mt-3 w-full">
                <Menu>
                    <MenuButton className="flex items-center space-x-2 py-3 px-4 hover:bg-gray-100 rounded-md ml-7 align-middle w-1/5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="">Todas las Categorías</span>
                    </MenuButton>
                    <Transition
                        enter="transition ease-out duration-75"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <MenuItems
                            anchor="bottom end"
                            className="w-52 origin-top-right rounded-xl border backdrop-blur-sm bg-black/35 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
                        >
                            <MenuItem>
                                <button
                                    className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
                                    onClick={() => Data()}
                                >
                                    Todos los productos
                                </button>
                            </MenuItem>
                            {categorias.map((categoria, index) => (
                                <MenuItem key={index}>
                                    <button
                                        value={categoria.id}
                                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
                                        onClick={() =>
                                            productoByCategory(categoria.id)
                                        }
                                    >
                                        {categoria.name}
                                    </button>
                                </MenuItem>
                            ))}
                        </MenuItems>
                    </Transition>
                </Menu>
            </div>

            <main className="min-h-full p-6 grid grid-cols-4 justify-items-center">
                {productos.map((producto, index) => (
                    <Producto key={index} data={producto} />
                ))}
            </main>
        </div>
    );
}
