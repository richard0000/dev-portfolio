import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { RESUME_DATA } from '@/data/resume';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return new Response("Missing GOOGLE_API_KEY", { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const { messages } = await req.json();

    const prompt = `
      You are an AI assistant representing Ricardo Gamarra on his portfolio website.
      Your goal is to answer questions about Ricardo's experience, skills, and background based ONLY on the provided context.
      
      Context (Ricardo's Resume):
      ${JSON.stringify(RESUME_DATA, null, 2)}
      
      Guidelines:
      - Be professional, friendly, and concise.
      - If asked about something not in the resume, politely say you don't have that information.
      - Do not invent experiences.
      
      Conversation History:
      ${messages.map((m: any) => `${m.role}: ${m.content}`).join('\n')}
      
      Assistant:
    `;

    const geminiStream = await genAI
      .getGenerativeModel({ model: 'gemini-flash-latest' })
      .generateContentStream({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

    const stream = GoogleGenerativeAIStream(geminiStream);
    return new StreamingTextResponse(stream);

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return new Response(`Error: ${error.message} \nStack: ${error.stack}`, { status: 500 });
  }
}
