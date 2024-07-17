"use client"
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "@/components/boletaTicket";
import { useParams } from 'next/navigation'

export default function Boleta() {
      const params = useParams()

    return (
        <PDFViewer width="100%" height="1000px">
            <PDF idprod={params.id} />
        </PDFViewer>
    );
}
