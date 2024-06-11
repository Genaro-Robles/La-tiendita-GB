import EnvioFoto from "@/images/64px_truck_delivery.webp";
import RefreshLogo from "@/images/64px_hold.webp";
import DevolucionFoto from "@/images/64px_refresh.webp";
import Image from "next/image";

export default function AvisoFooter() {
    return (
        <div className="grid grid-cols-3 w-full bg-gray-100 min-h-44 border-b border-gray-300 font-sans px-8">
            <div className="flex w-full items-center justify-end">
                <p className="flex w-4/5 justify-end pr-6 items-center">
                    <Image
                        src={EnvioFoto}
                        width={64}
                        height={64}
                        alt={"Imagen de envio"}
                    />
                    <span className="ml-6 text-sm">
                        <b className="font-bold">Envíos gratuitos</b> en pedidos
                        superiores a S/.50
                    </span>
                </p>
            </div>
            <div className="flex w-full items-center justify-center">
                <p className="flex w-full justify-center border-x-2 border-gray-300 items-center">
                    <Image
                        src={RefreshLogo}
                        width={64}
                        height={64}
                        alt={"Imagen de Refresh"}
                    />
                    <span className="text-sm ml-6">Recibe tu pedido en 24h.</span>
                </p>
            </div>
            <div className="flex w-full items-center justify-start">
                <p className="flex w-4/5 justify-start items-center pl-8">
                    <Image
                        src={DevolucionFoto}
                        width={64}
                        height={64}
                        alt={"Imagen devolucion"}
                    />
                    <span className="text-sm ml-6">
                        <b className="font-bold">Devoluciones gratuitas</b> y garantía de sustitución 24!
                    </span>
                </p>
            </div>
        </div>
    );
}
