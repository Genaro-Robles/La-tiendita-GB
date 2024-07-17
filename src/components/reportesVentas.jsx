"use client";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import axios from "axios";

const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
    date: {
        fontSize: 12,
        textAlign: "right",
        marginBottom: 10,
    },
    table: {
        display: "table",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        marginBottom: 20,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableColHeader: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        backgroundColor: "#f0f0f0",
        padding: 5,
        textAlign: "center",
        fontSize: 12,
        fontWeight: "bold",
    },
    tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        padding: 5,
        textAlign: "center",
        fontSize: 10,
    },
    tableColWide: {
        width: "40%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        padding: 5,
        textAlign: "center",
        fontSize: 10,
    },
    tableColUltraWide: {
        width: "80%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        padding: 5,
        textAlign: "center",
        fontSize: 10,
    },
    tableColHeaderWide: {
        width: "40%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#bfbfbf",
        backgroundColor: "#f0f0f0",
        padding: 5,
        textAlign: "center",
        fontSize: 12,
    },
});

const date = Date.now();
const fecha_actual = new Date(date).toLocaleDateString("es-PE");
const hora_actual = new Date(date).toLocaleTimeString("es-PE");

async function getReporte() {
    const response = await axios.get("http://localhost:8080/sales/report");
    return response.data;
}

export default function ReporteVentas() {
    const [ventas, setVentas] = useState([]);

    useEffect(() => {
        getReporte().then((data) => {
            setVentas(data.sales);
        });
    }, []);

    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Reporte de Ventas</Text>
                <Text style={styles.date}>
                    Fecha y hora: {fecha_actual} : {hora_actual}
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>ID</Text>
                        <Text style={styles.tableColHeaderWide}>Usuario</Text>
                        <Text style={styles.tableColHeader}>
                            Fecha de pedido
                        </Text>
                        <Text style={styles.tableColHeader}>
                            Fecha de entrega
                        </Text>
                        <Text style={styles.tableColHeader}>Subtotal</Text>
                        <Text style={styles.tableColHeader}>igv</Text>
                        <Text style={styles.tableColHeader}>Total</Text>
                    </View>
                    {ventas.map((venta, index) => (
                        <View key={index}>
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCol}>
                                    {venta.sale.id}
                                </Text>
                                <Text style={styles.tableColWide}>
                                    {venta.user.name +
                                        " " +
                                        venta.user.lastname}
                                </Text>
                                <Text style={styles.tableCol}>
                                    {venta.sale.fechaPedido.slice(0, 10)}
                                </Text>
                                <Text style={styles.tableCol}>
                                    {venta.sale.fechaEntrega.slice(0, 10)}
                                </Text>
                                <Text style={styles.tableCol}>
                                    S/. {venta.sale.subtotal}
                                </Text>
                                <Text style={styles.tableCol}>
                                    S/. {venta.sale.igv}
                                </Text>
                                <Text style={styles.tableCol}>
                                    S/. {venta.sale.total}
                                </Text>
                            </View>
                            {venta.details_sale.map((detalle, indexD) => (
                                <View style={styles.tableRow} key={indexD}>
                                    <Text style={styles.tableColUltraWide}>
                                        {"Detalle de venta #" + (indexD + 1)}
                                    </Text>
                                    <Text style={styles.tableColWide}>
                                        {venta.products[indexD].name}
                                    </Text>
                                    <Text style={styles.tableCol}>
                                        {venta.products[indexD].precioUnitario}
                                    </Text>
                                    <Text style={styles.tableCol}>
                                        {detalle.cantidad}
                                    </Text>
                                    <Text style={styles.tableCol}>
                                        {detalle.importe}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}
