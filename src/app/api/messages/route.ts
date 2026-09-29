import { NextResponse } from "next/server";
import { addMessage } from "@/db/puts";
import { getMessages } from "@/db/gets";
import { sendTelegramNotification } from "@/helpers/upload";
export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        // Extract fields from formData
        const fullName = formData.get("fullName") as string;
        const email = formData.get("email") as string;
        const businessName = formData.get("businessName") as string;
        const inquiryType = formData.get("inquiryType") as string;
        const message = formData.get("message") as string;

        const result = await addMessage(fullName, email, businessName, inquiryType, message);
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
