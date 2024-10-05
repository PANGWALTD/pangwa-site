import { NextResponse } from "next/server";
import { updateStatus } from "@/db/puts";
import { z } from 'zod';
const schema = z.object({
    id: z.string(),

});
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parsed = schema.safeParse(body);
        if (!parsed.success) {
            return NextResponse.json(
                {
                    error: parsed.error,
                },
                {
                    status: 400,
                }
            );
        }
        const data = parsed.data;
        await updateStatus(data.id);
        return NextResponse.json({ status: "success", data: "POST request" });
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