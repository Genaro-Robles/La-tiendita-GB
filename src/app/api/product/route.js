import {writeFile} from 'fs/promises';

export async function POST(request){
    
    try {
        const data = await request.formData();
        const file = data.get("file");

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        writeFile("public/images/products/" + file.name, buffer);
        return new Response(JSON.stringify({ message: "Archivo subido", file: file.name}))
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error: "+error }));
    }
}

export async function GET() {
    return new Response(JSON.stringify({ message: "Hola" }));
}