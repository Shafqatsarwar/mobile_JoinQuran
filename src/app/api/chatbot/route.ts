import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { input }: { input: string } = body;

        if (typeof input !== "string" || !input.trim()) {
            return NextResponse.json({ error: "Input must be a non-empty string" }, { status: 400 });
        }
        if (input.length > 500) {
            return NextResponse.json({ error: "Input exceeds maximum length of 500 characters" }, { status: 400 });
        }

        const fallback = "Assalamualykum! Thank you for your message. We will get back to you soon. If your query is urgent, you can also contact our support team directly via email or WhatsApp.";
        return NextResponse.json({ output_text: fallback });
    } catch (error) {
        console.error("Chatbot error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
