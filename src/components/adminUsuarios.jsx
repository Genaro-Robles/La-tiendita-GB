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
import { get, useForm } from "react-hook-form";
import UpdateUsuarios from "@/components/updateUsuarios";

export default function AdminUsuarios() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            lastname: "",
            direccion: "",
            phone: "",
            rol: 1,
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        createUsuarios(data);
        close();
    });

    const headers = {
        "Content-Type": "application/json",
    };

    async function getUsuarios() {
        const response = await axios.get("http://localhost:8080/user");
        return response.data;
    }

    async function getRoles() {
        const response = await axios.get("http://localhost:8080/role");
        return response.data;
    }

    async function createUsuarios(data) {
        try {
            await axios.post("http://localhost:8080/user", data),
                {
                    headers,
                };
        } catch (error) {
            console.log("error " + error);
        } finally {
            getUsuarios().then((data) => {
                setData(data);
            });
        }
    }

    async function deleteUsuarios(id) {
        try {
            await axios.delete("http://localhost:8080/user/" + id, {
                headers,
            });
        } catch (error) {
            console.log("error " + error);
        } finally {
            getUsuarios().then((data) => {
                setData(data);
            });
        }
    }

    async function renewUsuarios(id) {
        try {
            await axios.patch("http://localhost:8080/user/" + id, {
                headers,
            });
        } catch (error) {
            console.log("error " + error);
        } finally {
            getUsuarios().then((data) => {
                setData(data);
            });
        }
    }

    const [data, setData] = useState([]);
    const [roles, setRoles] = useState([]);
    let [isOpen, setIsOpen] = useState(false);

    async function open() {
        setIsOpen(true);
        setRoles(await getRoles());
    }

    function close() {
        setIsOpen(false);
    }

    useEffect(() => {
        getUsuarios().then((data) => {
            setData(data);
        });
    }, []);

    return (
        <>
            <button
                className="bg-orange-200 px-3 py-3 mb-5 rounded-md flex items-center hover:bg-orange-400 transition-all ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white w-1/5 justify-center"
                onClick={open}
            >
                <span className="text-xl font-semibold">Crear Usuarios</span>
                <span className="text-3xl font-semibold pl-4">+</span>
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
                                        Crear Usuarios
                                    </DialogTitle>
                                    <form onSubmit={onSubmit}>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Nombre</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="nameCreate"
                                                placeholder="Ingresa los nombres"
                                                {...register("name")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Apellidos</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="lastnameCreate"
                                                placeholder="Ingresa los apellidos"
                                                {...register("lastname")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Dni</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="dniCreate"
                                                placeholder="Ingresa el dni"
                                                {...register("dni")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Correo</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="correoCreate"
                                                placeholder="Ingresa el correo"
                                                {...register("correo")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Dirección</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="direccionCreate"
                                                placeholder="Ingresa la direccion"
                                                {...register("direccion")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Telefono</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="phoneCreate"
                                                placeholder="Ingresa el telefono"
                                                {...register("phone")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Contraseña</label>
                                            <input
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                type="text"
                                                id="passwordCreate"
                                                placeholder="Ingresa el telefono"
                                                {...register("password")}
                                            />
                                        </div>
                                        <div className="flex flex-col py-3">
                                            <label htmlFor="">Roles</label>
                                            <select
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-400"
                                                id="rolCreate"
                                                defaultValue={1}
                                                {...register("rol")}
                                            >
                                                {roles.map((rol) => (
                                                    <option
                                                        key={rol.id}
                                                        value={rol.id}
                                                    >
                                                        {rol.name}
                                                    </option>
                                                ))}
                                            </select>
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
                        <th className="px-2">Apellido</th>
                        <th className="px-2">DNI</th>
                        <th className="px-2">Correo</th>
                        <th className="px-2">Direccion</th>
                        <th className="px-2">Telefono</th>
                        <th className="px-2"></th>
                        <th className="px-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((usuario, index) => (
                        <tr
                            key={index}
                            className={`${
                                usuario.status ? "bg-orange-200" : "bg-gray-400"
                            }`}
                        >
                            <td className="px-5">{usuario.id}</td>
                            <td className="px-2">{usuario.name}</td>
                            <td className="px-2">{usuario.lastname}</td>
                            <td className="px-2">{usuario.dni}</td>
                            <td className="px-2">{usuario.correo}</td>
                            <td className="px-2">{usuario.direccion}</td>
                            <td className="px-2">{usuario.phone}</td>
                            <td className="px-2">
                                <UpdateUsuarios
                                    id={usuario.id}
                                    setData={setData}
                                    getUsuarios={getUsuarios}
                                />
                            </td>
                            <td className="px-2">
                                {usuario.status ? (
                                    <button
                                        className="bg-red-500 hover:bg-red-800 px-2 py-2 text-white rounded-lg"
                                        onClick={() =>
                                            deleteUsuarios(usuario.id)
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
                                            renewUsuarios(usuario.id)
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
