import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from "@react-pdf/renderer";
import axios from "axios";
import { useEffect, useState } from "react";

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

const date = Date.now();
const fecha_actual = new Date(date).toLocaleDateString("es-PE");
const hora_actual = new Date(date).toLocaleTimeString("es-PE");

async function getReporte() {
    const response = await axios.get("http://localhost:8080/product/report");
    return response.data;
}

export default function ReporteProductos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getReporte().then((data) => {
            setProducts(data.products);
        });
    }, []);
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Reporte de Productos</Text>
                <Text style={styles.date}>
                    Fecha y hora: {fecha_actual} : {hora_actual}
                </Text>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableColHeader}>ID</Text>
                        <Text style={styles.tableColHeaderWide}>Producto</Text>
                        <Text style={styles.tableColHeader}>Categoría</Text>
                        <Text style={styles.tableColHeader}>Stock</Text>
                        <Text style={styles.tableColHeader}>Precio S/.</Text>
                    </View>
                    {products.map((product, index) => (
                        <View style={styles.tableRow} key={index}>
                            <Text style={styles.tableCol}>
                                {product.product.id}
                            </Text>
                            <Text style={styles.tableColWide}>
                                {product.product.name}
                            </Text>
                            <Text style={styles.tableCol}>
                                {product.category.name}
                            </Text>
                            <Text style={styles.tableCol}>
                                {product.product.stock}
                            </Text>
                            <Text style={styles.tableCol}>
                                S/. {product.product.precioUnitario}
                            </Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    );
}