"use client";
import {
    Document,
    Text,
    Page,
    StyleSheet,
    View,
    Image,
    Line,
    Font,
} from "@react-pdf/renderer";

import { useState, useEffect } from "react";
import axios from "axios";

Font.register({
    family: "Oswald",
    src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
    page: {
        padding: 10,
        fontFamily: "Oswald",
    },
    name: {
        fontSize: 15,
        textAlign: "center",
        marginBottom: 5,
    },
    sectionCenter: {
        textAlign: "center",
        marginBottom: 10,
    },
    imageCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
    },
    sectionLeft: {
        textAlign: "left",
        marginBottom: 10,
    },
    sectionRight: {
        textAlign: "right",
        marginBottom: 10,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        textAlign: "left",
        justifyContent: "flex-start",
    },
    row_right: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    text: {
        fontSize: 9,
    },
    text14: {
        fontSize: 14,
        fontWeight: "heavy",
    },
    bordesY: {
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        paddingTop: "5px",
        paddingBottom: "5px",
    },
    textBold: {
        fontSize: 8,
        fontWeight: "ultrabold",
    },
    tableHeader: {
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
    },
    tableRow: {
        borderBottom: "1px solid black",
    },
    cantCell: {
        width: "30px",
    },
    descripcionCell: {
        width: "100px",
    },
    precioUnitarioCell: {
        width: "50px",
    },
    totalCell: {
        width: "50px",
    },
    image: {
        width: 150,
        height: 50,
    },
    qr: {
        width: 100,
        height: 100,
    },
});

async function getBoletaId(id) {
    const response = await axios.get("http://localhost:8080/boleta/" + id);
    return response.data;
}

function numberToWords(num) {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    num = Math.floor(num);

    if (num === 0) {
        return "cero";
    }

    if (num === 100) {
        return "cien";
    }

    let palabras = "";
    const miles = Math.floor(num / 1000);
    const restoMiles = num % 1000;
    const cientos = Math.floor(restoMiles / 100);
    const resto = restoMiles % 100;
    const decena = Math.floor(resto / 10);
    const unidad = resto % 10;

    if (miles > 0) {
        if (miles === 1) {
            palabras += "mil ";
        } else {
            palabras += `${numberToWords(miles)} mil `;
        }
    }

    if (cientos > 0) {
        palabras += centenas[cientos] + " ";
    }

    if (decena === 1 && unidad > 0) {
        palabras += especiales[unidad];
    } else {
        if (decena > 0) {
            palabras += decenas[decena];
        }

        if (unidad > 0) {
            if (decena > 0) {
                palabras += " y ";
            }
            palabras += unidades[unidad];
        }
    }
    return palabras.trim();
}

export default function PDF({ idprod }) {
    const [boleta, setBoleta] = useState({});
    const [productos, setProductos] = useState([]);
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        getBoletaId(idprod).then((data) => {
            setBoleta(data.sales);
            setProductos(data.details_sales);
            setUsuario(data.user);
        });
    }, []);

    return (
        <Document>
            <Page size={[226.77, 841.89]} style={styles.page}>
                <View style={styles.imageCenter}>
                    <Image
                        src="../../images/logo-pccomponentes.jpg"
                        style={styles.image}
                    />
                </View>
                <Text style={styles.name}>PC COMPONENTES E.I.R.L.</Text>
                <View style={styles.sectionCenter}>
                    <Text style={styles.text}>RUC: 10401006732</Text>
                    <Text style={styles.text}>LIMA, LIMA - LIMA</Text>
                    <Text style={styles.text}>
                        Email: ventas@pccomponentes.com
                    </Text>
                </View>
                <Line />
                <View style={[styles.sectionCenter, styles.bordesY]}>
                    <Text style={styles.text14}>
                        BOLETA DE VENTA ELECTRÓNICA
                    </Text>
                    <Text style={styles.text14}>B001-00000{boleta.id}</Text>
                </View>
                <Line />

                <View style={styles.sectionLeft}>
                    <Text style={styles.text}>
                        F. Pedido: {(boleta.fechaPedido + "").slice(0, 10)}
                    </Text>
                    <Text style={styles.text}>
                        F. Entrega: {(boleta.fechaEntrega + "").slice(0, 10)}
                    </Text>
                </View>

                <View style={styles.sectionLeft}>
                    <Text style={styles.text}>
                        Cliente: {usuario.name + " " + usuario.lastname}
                    </Text>
                    <Text style={styles.text}>DNI: {usuario.dni}</Text>
                    <Text style={styles.text}>
                        Dirección: {usuario.direccion}
                    </Text>
                </View>

                <View style={styles.sectionLeft}>
                    <View style={[styles.row, styles.tableHeader]}>
                        <Text style={[styles.text, styles.cantCell]}>
                            CANT.
                        </Text>
                        <Text style={[styles.text, styles.descripcionCell]}>
                            DESCRIPCIÓN
                        </Text>
                        <Text style={[styles.text, styles.precioUnitarioCell]}>
                            P.UNIT
                        </Text>
                        <Text style={[styles.text, styles.totalCell]}>
                            TOTAL
                        </Text>
                    </View>
                    {productos.map((producto, index) => (
                        <View style={[styles.row, styles.tableRow]}>
                            <Text style={[styles.text, styles.cantCell]}>
                                {producto.sales_details.cantidad}
                            </Text>
                            <Text style={[styles.text, styles.descripcionCell]}>
                                {producto.product.name}
                            </Text>
                            <Text style={[styles.text, styles.precioUnitarioCell]}>
                                S/. {producto.product.precioUnitario}
                            </Text>
                            <Text style={[styles.text, styles.totalCell]}>
                                S/. {producto.sales_details.importe}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.sectionRight}>
                    <View style={styles.row_right}>
                        <Text style={styles.textBold}>OP. GRAVADAS:</Text>
                        <Text style={styles.textBold}>
                            S/ {boleta.subtotal}
                        </Text>
                    </View>
                    <View style={styles.row_right}>
                        <Text style={styles.textBold}>IGV:</Text>
                        <Text style={styles.textBold}>S/ {boleta.igv}</Text>
                    </View>
                    <View style={styles.row_right}>
                        <Text style={styles.textBold}>TOTAL A PAGAR:</Text>
                        <Text style={styles.textBold}>S/ {boleta.total}</Text>
                    </View>
                    <Text style={styles.textBold}>
                        Son: {numberToWords(Number(boleta.total))} con{" "}
                        {(boleta.total + "").split(".")[1]}/100 Soles
                    </Text>
                </View>
                <View style={styles.sectionCenter}>
                    <View style={[styles.imageCenter, { marginBottom: "0px" }]}>
                        <Image src="../../images/qrcode.png" style={styles.qr} />
                    </View>
                    <Text style={styles.textBold}>
                        Código Hash: IuLQM5Br9NratNKsSyfXiQcWf6w=
                    </Text>
                </View>

                <View style={styles.sectionLeft}>
                    <Text style={styles.text}>CONDICIÓN DE PAGO: Contado</Text>
                    <Text style={styles.text}>PAGOS:</Text>
                    <Text style={styles.text}>• Yape - S/ {boleta.total}</Text>
                </View>

                <View style={styles.sectionLeft}>
                    <Text style={styles.text}>Vendedor:</Text>
                    <Text style={styles.text}>Administrador</Text>
                </View>
                <View style={styles.sectionCenter}>
                    <Text style={styles.text}>
                        Para consultar el comprobante ingresar a
                    </Text>
                    <Text style={styles.text}>
                        https://github.com/Genaro-Robles
                    </Text>
                </View>
            </Page>
        </Document>
    );
}
