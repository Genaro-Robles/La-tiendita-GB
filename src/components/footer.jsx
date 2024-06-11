"use client";
import AvisoFooter from "@/components/avisoFooter";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import PcComponentesIcono from "@/images/icon-pccomponentes.svg";
import InstagramIcon from "@/images/instagram-logo.svg";
import TwitterIcon from "@/images/X.svg";
import FacebookIcon from "@/images/facebook.svg";
import TelegramIcon from "@/images/telegram.svg";
import YoutubeIcon from "@/images/youtube.svg";
import TikTokIcon from "@/images/tiktok.svg";
import TwitchIcon from "@/images/twitch.svg";
import YapeyPlin from "@/images/yape_plin.png";
import VisaMastercard from "@/images/visa_mastercard.png";
import AndroidIcon from "@/images/android.svg";
import AppleIcon from "@/images/apple.svg";
import QrCode from "@/images/qrcode.png";

export default function Footer() {
    function nada() {
        alert("En construcción");
    }

    const pathname = usePathname();
    return pathname === "/login" ||
        pathname === "/register" ||
        pathname.includes("/admin") ? null : (
        <footer className="flex flex-col justify-between items-center text-gray-700">
            <AvisoFooter />
            <div className="flex justify-start justify-items-start w-full">
                <nav className="grid grid-cols-5 w-full items-start text-center py-12 pl-10">
                    <div className="text-start text-sm">
                        <h2 className="font-bold py-3 pl-3">Por qué comprar</h2>
                        <ul className="flex flex-col items-start justify-start text-start w-full">
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Cómo comprar
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Formas de pago
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Gastos de envío
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Cupones descuento
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Preguntas frecuentes
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Opiniones de clientes
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Tarjetas regalo
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-start text-sm">
                        <h2 className="font-bold py-3 pl-3">Quiénes somos</h2>
                        <ul className="flex flex-col items-start justify-start text-start w-full">
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Quiénes somos
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Compromisos
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Nuestras tiendas
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Nuestras Marcas
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Condiciones de compra
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Afiliados
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Aviso legal
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-start text-sm">
                        <h2 className="font-bold py-3 pl-3">Contactar</h2>
                        <ul className="flex flex-col items-start justify-start text-start w-full">
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Centro de soporte
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Contacto
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Canal ético
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Devoluciones y Garantías
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Wiki PcComponentes
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Opina y Gana
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Publicidad
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Trabaja con nosotros
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Política de cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-start text-sm">
                        <h2 className="font-bold py-3 pl-3">Otros</h2>
                        <ul className="flex flex-col items-start justify-start text-start w-full">
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Replay
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Black Friday
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Cyber Monday
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    PcDays
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Marketplace
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Servicio logístico Fullfillment
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Servicio de reaparaciones
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Concursos
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Cita asistenca técnica
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Responsabilidad Social
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    Programa de embajadores
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="text-start text-sm">
                        <h2 className="font-bold py-3 pl-3">Comunidad</h2>
                        <ul className="flex flex-col items-start justify-start text-start w-full">
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={PcComponentesIcono}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Blog
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={InstagramIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Instagram
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={TwitterIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Twitter
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={FacebookIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Facebook
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={TelegramIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Telegram
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={YoutubeIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Youtube
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={TikTokIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    TikTok
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={TwitchIcon}
                                        width={16}
                                        height={16}
                                        alt="icono PcComponentes"
                                        className="mr-2"
                                    />
                                    Twitch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className=" py-12 w-80 pl-1 mr-10">
                    <div className="text-start text-sm">
                        <h2 className="font-bold py-3 pl-3">
                            PcComponentes en
                        </h2>
                        <select className="w-full px-3 py-3 rounded-md border shadow-md">
                            <option value="pe">Perú</option>
                            <option value="es">España</option>
                            <option value="ar">Argentina</option>
                        </select>
                        <div className="w-full flex flex-col items-center py-5">
                            <Image
                                src={YapeyPlin}
                                alt="Yape y Plin"
                                width={150}
                                height={100}
                            />
                            <Image
                                src={VisaMastercard}
                                alt="Visa y Mastercard"
                                width={150}
                                height={100}
                            />
                        </div>
                        <h2 className="font-bold py-3 pl-3">
                            Descarga nuestra app
                        </h2>
                        <ul className="flex flex-col items-start justify-start text-start w-full">
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={AndroidIcon}
                                        width={20}
                                        height={20}
                                        alt="icono Android"
                                        className="mr-2"
                                    />
                                    Descargar app Google Play
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link
                                    href="#"
                                    className="hover:bg-gray-100 flex items-center h-10 w-full px-3"
                                    onClick={() => nada()}
                                >
                                    <Image
                                        src={AppleIcon}
                                        width={20}
                                        height={20}
                                        alt="icono Apple"
                                        className="mr-2"
                                    />
                                    Descarga app en App Store
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Image
                        src={QrCode}
                        width={150}
                        height={150}
                        alt="icono Apple"
                        className="mr-2"
                    />
                </div>
            </div>
            <div className="py-8 px-10 flex justify-center text-sm border-t w-full font-sans">
                <p>
                    Copyright© {new Date(Date.now()).getFullYear()} Derechos
                    Reservados Bill T. y Genaro R.
                </p>
            </div>
        </footer>
    );
}
