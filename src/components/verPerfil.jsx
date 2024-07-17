"use client";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    Transition,
} from "@headlessui/react";
import { useState } from "react";

export default function VerDetallesVentas({ info }) {
    let [isOpen, setIsOpen] = useState(false);

    async function open() {
        setIsOpen(true);
    }

    async function close() {
        setIsOpen(false);
    }

    return (
        <>
            <button
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/20"
                title="Ver Perfil"
                onClick={open}
            >
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
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                </svg>
                Mi Perfil
            </button>
            <Transition appear show={isOpen}>
                <Dialog
                    as="div"
                    className="relative z-10 focus:outline-none"
                    onClose={open}
                >
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/35 backdrop-blur-lg">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel transition className="w-full max-w-xl rounded-xl bg-black/35 p-6 shadow-xl text-white">
                                    <DialogTitle
                                        as="h3"
                                        className="font-medium text-xl text-center"
                                    >
                                        Perfil
                                    </DialogTitle>
                                    <div className="w-full p-5">
                                        <div className="flex">
                                            <div className="w-1/2 mr-3">
                                                <p className="font-semibold">
                                                    Nombre:
                                                </p>
                                                <p className="px-2 py-2 rounded-lg bg-gray-600 text-white">
                                                    {info.name}
                                                </p>
                                            </div>
                                            <div className="w-1/2 ml-3 ">
                                                <p className="font-semibold">
                                                    Apellidos:
                                                </p>
                                                <p className="bg-gray-600 px-2 py-2 rounded-lg text-white">
                                                    {info.lastname}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mt-3">
                                            <div className="w-1/2 mr-3">
                                                <p className="font-semibold">
                                                    Correo:
                                                </p>
                                                <p className="px-2 py-2 rounded-lg bg-gray-600 text-white">
                                                    {info.correo}
                                                </p>
                                            </div>
                                            <div className="w-1/2 ml-3">
                                                <p className="font-semibold">
                                                    Teléfono:
                                                </p>
                                                <p className="px-2 py-2 rounded-lg bg-gray-600 text-white">
                                                    {info.phone}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex mt-3">
                                            <div className="w-1/2 mr-3">
                                                <p className="font-semibold">
                                                    DNI:
                                                </p>
                                                <p className="px-2 py-2 rounded-lg bg-gray-600 text-white">
                                                    {info.dni}
                                                </p>
                                            </div>
                                            <div className="w-1/2 ml-3">
                                                <p className="font-semibold">
                                                    Dirección:
                                                </p>
                                                <p className="px-2 py-2 rounded-lg bg-gray-600 text-white">
                                                    {info.direccion}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
