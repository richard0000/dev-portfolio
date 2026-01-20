import ChatBot from "@/components/playground/ChatBot"; // Assuming creating components/playground dir
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Section } from "@/components/ui/section";

export default function PlaygroundPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-zinc-100 relative overflow-hidden font-sans selection:bg-indigo-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-20">
                <Link
                    href="/"
                    className="inline-flex items-center text-zinc-500 hover:text-indigo-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Portfolio
                </Link>

                <Section className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x">
                        AI Playground
                    </h1>
                    <p className="text-zinc-400 max-w-lg mx-auto leading-relaxed">
                        Experimenting with the Vercel AI SDK and Google&apos;s Gemini Pro model.
                        Ask this bot anything about my resume, experience, or skills.
                    </p>
                </Section>

                <Section delay={0.2}>
                    <ChatBot />
                </Section>
            </div>
        </main>
    );
}
