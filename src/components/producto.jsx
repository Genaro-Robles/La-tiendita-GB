import Image from "next/image";
import FooterProducto from "@/components/footerProducto";
import Link from "next/link";


export default function Producto({ data }) {
    
    return (
        <div className="pb-5 w-[250px] h-[350px]">
            <Link
                href={"/producto/" + data.id}
                className="h-full hover:bg-gray-100 flex flex-col items-center align-top px-3 w-64 mb-5 transition-all ease-in-out duration-500"
            >
                <div className="w-[240px] h-[170px] items-center flex justify-center">
                    <Image
                        src={`/images/products/${data.image}`}
                        width={200}
                        height={400}
                        alt={"Imagen Producto"}
                    />
                </div>
                <div className="text-left w-full">
                    <div className="w-full">
                        <h2 className="text-sm pb-2">{data.name}</h2>
                        <h3 className="font-bold pb-2">
                            S/. {data.precioUnitario}
                        </h3>
                    </div>
                    <FooterProducto />
                </div>
            </Link>
        </div>
    );
}
