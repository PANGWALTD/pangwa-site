import { NextResponse } from "next/server";
import { auth } from "@/db/gets";
export async function POST(req: Request) {
    try {
        const formData = await req.json();
        const admin = await auth();
        if (!admin) {
            return NextResponse.json({ status: 404, error: "Admin not found" });
        }
        if (admin[0].username === formData.username && admin[0].password === formData.password) {
            return NextResponse.json({ status: 200, data: "Login successful" });
        }
        return NextResponse.json({ status: 401, error: "Invalid credentials" });
    } catch (e) {
        console.error("Something went wrong", e);
        return NextResponse.json(
            {
                error: e instanceof Error ? e.message : "Something went wrong",
            },
            {
                status: 500,
            }
        );
    }
}