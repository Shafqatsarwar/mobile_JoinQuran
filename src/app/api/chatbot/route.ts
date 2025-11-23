import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const MODEL = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `
You are a concise, polite AI assistant for JoinQuran.

Always start with:
**اَلسَّلَامُ عَلَيْكُم\n**

RULES:
• Be short, clear, and helpful
• Keep replies under 3-4 sentences
• **Fees (Monthly):**
  - Starts from **£20 (GBP)** or **$25 (USD)** for 2 days/week
  - Up to **£35 (GBP)** or **$50 (USD)** for 6 days/week
• **Duration (Daily-Class):**
  - Starts from **25 minutes** to **30 minutes** per person
• **Links:** Always provide clear, clickable links:
  - [View Fees](https://first-join-quran.vercel.app/fees)
  - [Contact Us](https://first-join-quran.vercel.app/contact us)
  - [Main Website](https://www.joinquran.com/)
• **General Information:** Always provide clear, short answers:
  - Web Search for universal information
  - Provide clear, concise answers about General knowledge

If unsure, send user to Contact Us.

End with:
"Send us your query in the [Contact Us](https://first-join-quran.vercel.app/contact) section — we will get back to you soon, in shā’ Allāh."
`;

function getSuggestions(input: string): string[] {
    const text = input.toLowerCase();

    if (text.includes("fee") || text.includes("price") || text.includes("cost")) {
        return [
            "View monthly fee plans",
            "Are there family discounts?"
        ];
    }


    if (text.includes("contact") || text.includes("support")) {
        return [
            "Open Contact page",
            "WhatsApp support?",
            "Email support"
        ];
    }

    return [
        "View Fee Plans",
        "Contact Support",
        "Free Trial"
    ];
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.GOOGLE_API_KEY;
        console.log("Chatbot API hit. API Key present:", !!apiKey);

        if (!apiKey) {
            console.error("GOOGLE_API_KEY is missing");
            return NextResponse.json(
                { error: "GOOGLE_API_KEY is not defined" },
                { status: 500 }
            );
        }

        const { input } = await req.json();
        console.log("Received input:", input);

        if (!input || typeof input !== "string") {
            return NextResponse.json(
                { error: "Valid 'input' is required" },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
            model: MODEL,
            systemInstruction: SYSTEM_INSTRUCTION
        });

        const result = await model.generateContent(input);
        const text = result.response.text();

        // Generate smart suggestion chips
        const suggestions = getSuggestions(input);

        return NextResponse.json({
            model_used: MODEL,
            output_text: text,
            suggestions
        });

    } catch (error: unknown) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}
