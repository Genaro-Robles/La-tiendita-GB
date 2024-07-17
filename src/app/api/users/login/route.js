import { NextResponse } from "next/server";
import jwt, { verify } from "jsonwebtoken";
import { serialize } from "cookie";
import { cookies } from "next/headers";

export async function POST(req) {
    const { correo, direccion, dni, id, name, lastname, phone, rol } =
        await req.json();
    const token = jwt.sign(
        {
            correo: correo,
            direccion: direccion,
            dni: dni,
            id: id,
            name: name,
            lastname: lastname,
            phone: phone,
            rol: rol == 1 ? "admin" : "user",
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        "secretkey"
    );

    const headers = {
        "Set-Cookie": serialize("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24,
            path: "/",
        }),
    };

    return NextResponse.json("Login exitoso", { status: 200, headers });
}

export async function GET(req) {
    const token = cookies().get("token");
    if (token) {
        try {
            const user = verify(token.value, "secretkey");
            return NextResponse.json(user, { status: 200 });
        } catch (e) {
            return NextResponse.json("Token inválido", { status: 401 });
        }
    }
    return NextResponse.json("nada", { status: 200 });
}

export async function DELETE() {
    const token = cookies().get("token");
    if (!token) {
        return NextResponse.json("No hay token", { status: 401 });
    }

    try {
        verify(token.value, "secretkey");
        const headers = {
            "Set-Cookie": serialize("token", null, {
                httpOnly: true,
                secure: false,
                sameSite: "strict",
                maxAge: 0,
                path: "/",
            }),
        };
        return NextResponse.json("Logout exitoso", { status: 200, headers });
    } catch (e) {
        return NextResponse.json("Token inválido", { status: 401 });
    }
}
