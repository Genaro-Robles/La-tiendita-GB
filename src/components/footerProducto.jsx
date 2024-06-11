import Icon from "@/images/icon-pccomponentes.svg";
import Image from "next/image";

export default function FooterProducto() {
    return (
        <div>
            <span className="text-xs flex">
                <Image src={Icon} width={16} height={16} alt={"icono PcComponentes"}/>
                <span className="pl-1">
                    Vendido y enviado por{" "}
                    <span className="font-bold">PcComponentes</span>
                </span>
            </span>
            <span className="text-xs text-green-600 font-bold">
                Envio gratis
            </span>
        </div>
    );
}
