import { NextResponse } from "next/server";
import { addMessage } from "@/db/puts";
import { uploadFile } from "@/helpers/upload";
import { getMessages } from "@/db/gets";
export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        console.log("FormData", formData);
        // Extract fields from formData
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const businessName = formData.get("businessName") as string;
        const inquiryType = formData.get("inquiryType") as string;
        const message = formData.get("message") as string;

        // Extract file if exists
        const file = formData.get("file") as File | null;
        if (file) {
            // Upload file to cloud storage (e.g., AWS S3, etc.)
            const fileUrl = await uploadFile(file);
            if (!fileUrl) {
                return NextResponse.json({ status: 400, error: "Error uploading file" });
            }
            const result = await addMessage(fullName, email, businessName, inquiryType, message, fileUrl);
            return NextResponse.json({ status: 200, data: result });
        }
        const result = await addMessage(fullName, email, businessName, inquiryType, message);
        return NextResponse.json({
            status: 200,
            data: result,
        });

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
export async function GET() {
    try {
        const messages = await getMessages();
        return NextResponse.json({ status: "success", data: messages });
    }
    catch (e) {
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
