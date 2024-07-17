import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
    Fragment,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import UpdateProducto from "@/components/updateProducto";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "@/components/reportesProductos";
import Link from "next/link";

export default function AdminProducto() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            image: "",
            category: "1",
            stock: "",
            precioUnitario: "",
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        const formData = new FormData();
        formData.set("file", file);

        const res = await fetch("/api/product", {
            method: "POST",
            body: formData,
        });
        const info = await res.json();
        createProductos(data);
        close();
    });

    const headers = {
        "Content-Type": "application/json",
    };

    async function getProductos() {
        const response = await axios.get("http://localhost:8080/product");
        return response.data;
    }

    async function getCategorias() {
        const response = await axios.get("http://localhost:8080/category");
        return response.data;
    }

    async function createProductos(data) {
        try {
            await axios.post("http://localhost:8080/product", data),
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

    async function deleteProductos(id) {
        try {
            await axios.delete("http://localhost:8080/product/" + id, {
                headers,
            });
        } catch (error) {
            console.log("error " + error);
        } finally {
            getProductos().then((data) => {
                setData(data);
            });
        }
    }

    async function renewProductos(id) {
        try {
            await axios.patch("http://localhost:8080/product/" + id, {
                headers,
            });
        } catch (error) {
            console.log("error " + error);
        } finally {
            getProductos().then((data) => {
                setData(data);
            });
        }
    }

    async function exportProducts(){
        try{
            const response = await axios.get("http://localhost:8080/product/export",{
                responseType: 'blob'
            });
            const blob = new Blob([response.data], { type: 'application/vnd.ms-excel' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'productos.xls');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }catch(error){
            console.error("Error al exportar los productos: "+error);
            throw error;
        }
    }

    const [data, setData] = useState([]);
    const [categorias, setCategorias] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);

    async function open() {
        setIsOpen(true);
        setCategorias(await getCategorias());
    }

    function close() {
        setIsOpen(false);
    }

    useEffect(() => {
        getProductos().then((data) => {
            setData(data);
        });
    }, []);

    

    return (
        <>
            <div className="flex justify-start space-x-5">
                <button
                    className="bg-orange-200 px-3 py-3 mb-5 rounded-md flex items-center hover:bg-orange-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white w-1/5 justify-center"
                    onClick={open}
                >
                    <span className="text-xl font-semibold">
                        Crear Productos
                    </span>
                    <span className="text-3xl font-semibold pl-4">+</span>
                </button>
                <PDFDownloadLink
                    document={<PDF />}
                    fileName="ReporteProductos.pdf"
                    className="bg-red-200 px-3 py-3 mb-5 rounded-md flex items-center hover:bg-red-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white w-1/5 justify-center"
                >
                    {({ loading, url, error, blob }) =>
                        loading ? (
                            <button className="flex items-center">
                                <span className="text-xl font-semibold">
                                    Cargando...
                                </span>
                                <div className="flex flex-row gap-2">
                                    <div className="w-1 h-1 rounded-full bg-gray-700 animate-bounce"></div>
                                    <div className="w-1 h-1 rounded-full bg-gray-700 animate-bounce [animation-delay:-.3s]"></div>
                                    <div className="w-1 h-1 rounded-full bg-gray-700 animate-bounce [animation-delay:-.5s]"></div>
                                </div>
                            </button>
                        ) : (
                            <button className="flex items-center">
                                <span className="text-xl font-semibold">
                                    Reporte PDF
                                </span>
                                <span className="text-3xl font-semibold pl-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                        />
                                    </svg>
                                </span>
                            </button>
                        )
                    }
                </PDFDownloadLink>
                <Link
                    className="bg-green-200 px-3 py-3 mb-5 rounded-md flex items-center hover:bg-green-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white w-1/5 justify-center"
<<<<<<< HEAD
                    href="http://localhost:8080/product/export"
=======
                    onClick={() => exportProducts()}
>>>>>>> 8009a9ee67a8c94612ec02791629dbfb650d45e1
                >
                    <span className="text-xl font-semibold">Reporte Excel</span>
                    <span className="text-3xl font-semibold pl-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                        </svg>
                    </span>
                </Link>
            </div>
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
                                        Crear Producto
                                    </DialogTitle>
                                    <form onSubmit={onSubmit}>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Nombre</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="nameCreate"
                                                placeholder="Ingresa el producto"
                                                {...register("name")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Imagen</label>
                                            <input
                                                type="file"
                                                onChange={(e) => {
                                                    setFile(e.target.files[0]);
                                                    setValue(
                                                        "image",
                                                        e.target.files[0].name
                                                    );
                                                }}
                                            />
                                            <input
                                                type="text"
                                                {...register("image")}
                                                id="image"
                                                name="image"
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Categoria</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                id="categoryCreate"
                                                defaultValue={1}
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
                                                id="stockCreate"
                                                placeholder="Ingresa el stock"
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
                                                id="precioUnitarioCreate"
                                                placeholder="Ingresa el precio unitario"
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
                                                Crear
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <table className="table-fixed">
                <thead className="text-left bg-orange-400 text-gray-700">
                    <tr>
                        <th className="px-5">Id</th>
                        <th className="px-2">Nombre</th>
                        <th className="px-2">Imagen</th>
                        <th className="px-2">Categoria</th>
                        <th className="px-2">Stock</th>
                        <th className="px-2">Precio Unitario</th>
                        <th className="px-2"></th>
                        <th className="px-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((producto, index) => (
                        <tr
                            key={index}
                            className={`${
                                producto.status
                                    ? "bg-orange-200"
                                    : "bg-gray-400"
                            }`}
                        >
                            <td className="px-5">{producto.id}</td>
                            <td className="px-2">{producto.name}</td>
                            <td className="px-2">
                                <Image
                                    src={`/images/products/${producto.image}`}
                                    width={100}
                                    height={100}
                                    alt="Imagen"
                                />
                            </td>
                            <td className="px-2">{producto.category}</td>
                            <td className="px-2">{producto.stock}</td>
                            <td className="px-2">
                                S/. {producto.precioUnitario}
                            </td>
                            <td className="px-2">
                                <UpdateProducto
                                    id={producto.id}
                                    setData={setData}
                                    getProductos={getProductos}
                                />
                            </td>
                            <td className="px-2">
                                {producto.status ? (
                                    <button
                                        className="bg-red-500 hover:bg-red-800 px-2 py-2 text-white rounded-lg"
                                        onClick={() =>
                                            deleteProductos(producto.id)
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                ) : (
                                    <button
                                        className="bg-pink-500 hover:bg-pink-800 px-2 py-2 text-white rounded-lg"
                                        onClick={() =>
                                            renewProductos(producto.id)
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
