import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        if (!apiKey) {
            console.error("GOOGLE_API_KEY is not defined in environment variables");
            return NextResponse.json(
                { error: "GOOGLE_API_KEY is not defined" },
                { status: 500 }
            );
        }

        console.log("API Key found, initializing Gemini...");
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: "You are a helpful, friendly, and knowledgeable AI assistant for JoinQuran, an online Quran learning platform: https://www.joinquran.com/. Your goal is to assist users with questions about courses, fees, teachers, and how to get started. Be concise, polite, and use Islamic greetings (Assalamualykum) where appropriate. If a user submits a message or asks for support, confirm that 'we will get back to you soon' and kindly suggest they can also contact support via email or WhatsApp if urgent."
        });

        const body = await req.json();
        const { input }: { input: string } = body;

        if (typeof input !== "string" || !input.trim()) {
            return NextResponse.json({ error: "Input must be a non-empty string" }, { status: 400 });
        }
        if (input.length > 500) {
            return NextResponse.json({ error: "Input exceeds maximum length of 500 characters" }, { status: 400 });
        }

        console.log("Sending request to Gemini with input:", input);
        const result = await model.generateContent(input);
        const response = await result.response;
        const text = response.text();
        console.log("Received response from Gemini:", text);

        return NextResponse.json({ output_text: text });
    } catch (error: unknown) {
        console.error("=== CHATBOT ERROR ===");
        console.error("Error type:", typeof error);
        console.error("Error details:", error);
        if (error instanceof Error) {
            console.error("Error message:", error.message);
            console.error("Error stack:", error.stack);
        }
        console.error("===================");

        const fallbackMessage = "Assalamualykum! Thank you for your message. We will get back to you soon. If your query is urgent, you can also contact our support team directly via email or WhatsApp.";
        return NextResponse.json({ output_text: fallbackMessage });
    }
}
