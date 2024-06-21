"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useCart } from "@/app/hooks/useCart";

export default function Producto() {
    const params = useParams();
    const { addTocart, carrito } = useCart();
    const [cantidad, setCantidad] = useState(1);
    const [data, setData] = useState({quantity:1});

    const getData = async (id) => {
        const response = await axios.get("http://localhost:8080/product/" + id);
        return response.data;
    };

    useEffect(() => {
        setData((prevData) => ({ ...prevData, quantity: cantidad }));
    }, [cantidad]);

    useEffect(() => {
        getData(params.id).then((info) => {
            info.quantity = 1;
            setData(info);
        });
    }, []);

    return (
        <div className="bg-white flex w-full px-10 py-4 mt-10">
            <div className="w-1/2 justify-center items-center flex">
                <Image
                    src={"/images/products/" + data.image}
                    alt={"Detalle de " + data.name}
                    width={500}
                    height={500}
                />
            </div>
            <div className="w-1/2 flex flex-col">
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p className="py-2 text-gray-500">{data.description}</p>
                <p className="text-xl font-bold text-orange-500 py-2">
                    S/. {data.precioUnitario}
                </p>
                <div>
                    <label htmlFor="cantidad">Cantidad</label>
                    <div className="flex pb-5">
                        <button
                            className="bg-gray-500 text-gray-100 hover:bg-gray-400 flex justify-center items-center w-10 h-10 text-xl"
                            onClick={() => {
                                if (cantidad > 1) setCantidad(cantidad - 1);
                            }}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            id="cantidad"
                            name="cantidad"
                            className="border-gray-500 border w-10 h-10 text-center"
                            min={1}
                            value={cantidad}
                            readOnly
                            onChange={(e) => {
                                setCantidad(e.target.value);
                            }}
                            inputMode="numeric"
                        />
                        <button
                            className="bg-gray-500 text-gray-100 hover:bg-gray-400 flex justify-center items-center w-10 h-10 text-xl"
                            onClick={() => setCantidad(cantidad + 1)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <button
                    id="btn_agregar"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/3"
                    onClick={() => addTocart(data)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}
