"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo-pccomponentes.svg";
import EnvioFoto from "@/images/64px_truck_delivery.webp";
import Ribbon from "@/images/ribbon.svg";
import Google from "@/images/google.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import {useRouter} from "next/navigation";

export default function Register() {
    const [ocultarPass, setOcultarPass] = useState(false);
    const [ocultarPass2, setOcultarPass2] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function ocultar() {
        setOcultarPass(!ocultarPass);
    }
    function ocultar2() {
        setOcultarPass2(!ocultarPass2);
    }

    const headers = {
        "Content-Type": "application/json",
    };

    async function createData(data) {
        try {
            await Swal.fire({
                title: "¿Estás seguro de registrarte con esos datos?",
                text: "No prodrás revertir la acción más adelante",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, crealá!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    axios
                        .post("http://localhost:8080/user", data, { headers })
                        .then(function (response) {
                            Swal.fire({
                                title: "Creado!",
                                text: "Te haz registrado correctamente.",
                                icon: "success",
                            });
                        });
                    router.back();
                } else {
                    Swal.fire({
                        title: "Registro cancelado!",
                        text: "Se canceló el registro.",
                        icon: "info",
                    });
                }
            });
        } catch (error) { console.log(error);}
    }

    const onSubmit = handleSubmit((data) => {
        console.log(data);
        createData(data);
    });

    return (
        <main className="flex flex-col justify-center px-20">
            <Link className="pt-16 pb-12 px-4" href={"/"}>
                <Image
                    src={Logo}
                    alt="Logo de PC Componentes"
                    width={140}
                    height={45}
                    className="mx-auto"
                />
            </Link>
            <div className="flex w-full">
                <section className="w-1/2 pt-16 pr-16 pl-24 pb-8 ">
                    <div className="flex items-center justify-center pb-10">
                        <Image
                            src={EnvioFoto}
                            width={64}
                            height={64}
                            alt={"Imagen de envio"}
                        />
                        <div className="pl-4">
                            <h2 className="font-bold pb-3">
                                Gestiona tus pedidos
                            </h2>
                            <p className="text-wrap text-sm">
                                Ten el control de todos tus pedidos y recibe
                                notificaciones con el seguimiento
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src={Ribbon}
                            width={64}
                            height={64}
                            alt={"Imagen de envio"}
                        />

                        <div className="pl-4">
                            <h2 className="font-bold pb-3">
                                Lista de deseos personalizada
                            </h2>
                            <p className="text-wrap text-sm">
                                Guarda tus productos favoritos en las listas de
                                deseos personalizadas
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-1/2 pt-16 pr-16 pb-8 pl-16 border-l border-gray-300 ">
                    <div className="flex flex-col w-9/12">
                        <h1 className="text-3xl font-bold pb-5">
                            Crear cuenta
                        </h1>
                        <button
                            onClick={() => alert("Iniciar con google")}
                            className="flex items-center border border-gray-300 justify-between px-3 py-2 text-sm my-3"
                        >
                            <Image src={Google} width={18} height={18} />
                            <span className="w-full">Acceder con Google</span>
                        </button>
                        <div className="flex items-center justify-center w-full relative my-3">
                            <div className="w-full border-t absolute border-gray-400"></div>
                            <span className="bg-white z-10 px-3 font-bold text-sm">
                                O bien
                            </span>
                        </div>
                        <form onSubmit={onSubmit} className="w-full">
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="border border-gray-300 p-2 my-3 w-full"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "El nombre es requerido",
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Apellidos"
                                    className="border border-gray-300 p-2 my-3 w-full"
                                    {...register("lastname", {
                                        required: {
                                            value: true,
                                            message:
                                                "Los apellidos son requeridos",
                                        },
                                    })}
                                />
                                {errors.lastname && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.lastname.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="border border-gray-300 p-2 my-3 w-full"
                                    {...register("correo", {
                                        required: {
                                            value: true,
                                            message: "El correo es requerido",
                                        },
                                    })}
                                />
                                {errors.correo && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.correo.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex relative items-center">
                                <input
                                    type={`${
                                        ocultarPass ? "password" : "text"
                                    }`}
                                    placeholder="Contraseña"
                                    className="border border-gray-300 p-2 pr-16 my-3 w-full"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message:
                                                "La contraseña es requerida",
                                        },
                                    })}
                                />
                                {errors.password && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.password.message}
                                    </span>
                                )}
                                <button
                                    type="button"
                                    className="absolute right-0 my-3 px-4 hover:bg-slate-300 h-10 border-l p-2 appearance-none"
                                    onClick={ocultar}
                                >
                                    {ocultarPass ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <div className="w-full">
                                <input
                                    type="dni"
                                    placeholder="Dni"
                                    className="border border-gray-300 p-2 my-3 w-full"
                                    {...register("dni", {
                                        required: {
                                            value: true,
                                            message: "El DNI es requerido",
                                        },
                                    })}
                                />
                                {errors.dni && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.dni.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="direccion"
                                    placeholder="Direccion"
                                    className="border border-gray-300 p-2 my-3 w-full"
                                    {...register("direccion", {
                                        required: {
                                            value: true,
                                            message:
                                                "La direccion es requerida",
                                        },
                                    })}
                                />
                                {errors.direccion && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.direccion.message}
                                    </span>
                                )}
                            </div>
                            <div className="w-full">
                                <input
                                    type="phone"
                                    placeholder="Telefono"
                                    className="border border-gray-300 p-2 my-3 w-full"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "El telefono es requerido",
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <span className="block text-red-600 text-sm">
                                        {errors.phone.message}
                                    </span>
                                )}
                            </div>
                            {/* <div className="flex relative items-center">
                                <input
                                    type={`${
                                        ocultarPass2 ? "password" : "text"
                                    }`}
                                    placeholder="Repetir Contraseña"
                                    className="border border-gray-300 p-2 pr-16 my-3 w-full"
                                />
                                <button
                                    type="button"
                                    className="absolute right-0 my-3 px-4 hover:bg-slate-300 h-10 border-l p-2 appearance-none"
                                    onClick={ocultar2}
                                >
                                    {ocultarPass2 ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="       0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div> */}

                            <button
                                type="submit"
                                className="bg-orange-500 text-white p-3 my-3 w-full hover:bg-orange-800 transition ease-in-out duration-200 rounded-md"
                            >
                                Crear cuenta
                            </button>
                        </form>
                        <div className="flex items-center justify-center w-full relative my-5">
                            <div className="w-full border-t absolute border-gray-400"></div>
                            <span className="bg-white z-10 px-3 font-bold text-sm">
                                Ya tengo una cuenta
                            </span>
                        </div>
                        <Link
                            href={"/login"}
                            className="text-center bg-white hover:bg-gray-200 p-3 my-3 w-full border transition ease-in-out duration-200 rounded-md"
                        >
                            Iniciar session
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
