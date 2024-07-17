"use client"
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
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

async function getReporte() {
    const response = await axios.get("http://localhost:8080/provider");
    return response.data;
}

const date = Date.now();
const fecha_actual = new Date(date).toLocaleDateString("es-PE");
const hora_actual = new Date(date).toLocaleTimeString("es-PE");



export default function ReporteProovedores() {
    const [proveedores, setProveedores] = useState([]);

    useEffect(() => {
        getReporte().then((data) => {
            setProveedores(data);
        });
    }, []);

    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Reporte de Proveedores</Text>
                <Text style={styles.date}>
                    Fecha y hora: {fecha_actual} : {hora_actual}
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>ID</Text>
                        <Text style={styles.tableColHeaderWide}>Proovedor</Text>
                        <Text style={styles.tableColHeaderWide}>Dirección</Text>
                        <Text style={styles.tableColHeader}>RUC</Text>
                        <Text style={styles.tableColHeader}>Telefono</Text>
                    </View>
                    {proveedores.map((proovedor, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCol}>{proovedor.id}</Text>
                            <Text style={styles.tableColWide}>
                                {proovedor.name}
                            </Text>
                            <Text style={styles.tableColWide}>
                                {proovedor.address}
                            </Text>
                            <Text style={styles.tableCol}>{proovedor.ruc}</Text>
                            <Text style={styles.tableCol}>
                                {proovedor.phone}
                            </Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}