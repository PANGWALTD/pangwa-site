import { NextResponse } from "next/server";
import { addMessage } from "@/db/puts";
import { getMessages } from "@/db/gets";
import { sendTelegramNotification } from "@/helpers/upload";
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
            const arrayBuffer = await file.arrayBuffer();
            const fileBase64 = await arrayBufferToBase64(arrayBuffer);
            const result = await addMessage(fullName, email, businessName, inquiryType, message, fileBase64);
            return NextResponse.json({ status: 200, data: result });
        }
        const result = await addMessage(fullName, email, businessName, inquiryType, message);
        console.log("about to call telegram");
        await sendTelegramNotification(`New message from ${fullName} (${email})\nBusiness Name: ${businessName}\nInquiry Type: ${inquiryType}\nMessage: ${message}`);
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
async function arrayBufferToBase64(buffer: ArrayBuffer): Promise<string> {
    return Buffer.from(buffer).toString('base64');
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
