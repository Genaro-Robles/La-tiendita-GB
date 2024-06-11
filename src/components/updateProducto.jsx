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

export default function UpdateProducto({ id, getProductos, setData }) {
    async function getProductosId(id) {
        const response = await axios.get("http://localhost:8080/product/" + id);
        return response.data;
    }

    async function getCategorias() {
        const response = await axios.get("http://localhost:8080/category");
        return response.data;
    }

    async function updateProductos(data, id) {
        try {
            await axios.put("http://localhost:8080/product/" + id, data),
                {
                    headers,
                };
        } catch (error) {
            console.log("error " + error);
        } finally {
            getProductos().then((data) => {
                setData(data);
            });
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let [isOpen, setIsOpen] = useState(false);
    const [producto, setProducto] = useState({});
    const [categorias, setCategorias] = useState([]);

    async function open() {
        setIsOpen(true);
        console.log(producto);
        setCategorias(await getCategorias());
    }

    function close() {
        setIsOpen(false);
    }

    const onSubmit = handleSubmit((data) => {
        updateProductos(data, id);
        close();
        console.log(data);
    });

    const headers = {
        "Content-Type": "application/json",
    };

    useEffect(() => {
        getProductosId(id).then((data) => {
            setProducto(data);
        });
    }, []);

    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-800 px-2 py-2 text-white rounded-lg"
                onClick={open}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
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
                                        Editar Producto
                                    </DialogTitle>
                                    <form onSubmit={onSubmit}>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Nombre</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="name"
                                                placeholder="Ingresa el producto"
                                                defaultValue={producto.name}
                                                {...register("name")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Imagen</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="image"
                                                placeholder="Ingresa la imagen"
                                                defaultValue={producto.image}
                                                {...register("image")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="category">Categoria</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                name="category"
                                                id="category"
                                                form="category"
                                                value={producto.category}
                                                onInput={(e) =>
                                                    setProducto({
                                                        ...producto,
                                                        category: e.target.value,
                                                    })
                                                }
                                                {...register("category")}
                                            >
                                                {categorias.map((categoria) => (
                                                    <option
                                                        key={categoria.id}
                                                        value={categoria.id}
                                                    >
                                                        {categoria.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Stock</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="stock"
                                                placeholder="Ingresa el stock"
                                                defaultValue={producto.stock}
                                                {...register("stock")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">
                                                Precio Unitario
                                            </label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="precioUnitario"
                                                placeholder="Ingresa el precio unitario"
                                                defaultValue={
                                                    producto.precioUnitario
                                                }
                                                {...register("precioUnitario")}
                                            />
                                        </div>

                                        <div className="mt-4 flex justify-between">
                                            <input
                                                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white text-white cursor-pointer"
                                                onClick={close}
                                                value={"Cancelar"}
                                                type="button"
                                            />
                                            <button
                                                className="inline-flex items-center gap-2 rounded-md bg-blue-700 py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-blue/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white text-white"
                                                type="submit"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
