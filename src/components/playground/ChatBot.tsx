"use client";

import { useChat } from "ai/react";
import { Send, Bot, User, Trash2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ChatBot() {
    const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const clearChat = () => {
        setMessages([]);
    }

    return (
        <Card className="flex flex-col h-[600px] w-full max-w-2xl mx-auto overflow-hidden border-zinc-800 bg-black/40 backdrop-blur-xl">
            {/* Header */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <Bot className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-zinc-100">Ricardo&apos;s AI Agent</h3>
                        <p className="text-xs text-zinc-400">Powered by Gemini Pro</p>
                    </div>
                </div>
                {messages.length > 0 && (
                    <button
                        onClick={clearChat}
                        className="text-zinc-500 hover:text-red-400 transition-colors"
                        title="Clear Chat"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                {messages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50"
                    >
                        <Bot className="w-12 h-12 mb-4 text-zinc-600" />
                        <p className="text-zinc-400 mb-2">Ask me anything about Ricardo&apos;s experience!</p>
                        <div className="flex flex-wrap justify-center gap-2 max-w-sm">
                            {[
                                "What is his tech stack?",
                                "Has he worked with AWS?",
                                "Tell me about his time at Arionkoder"
                            ].map((q) => (
                                <button
                                    key={q}
                                    onClick={() => handleInputChange({ target: { value: q } } as any)}
                                    className="text-xs border border-white/10 rounded-full px-3 py-1 hover:bg-white/5 hover:border-indigo-500/30 transition-all"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                <AnimatePresence>
                    {messages.map((m) => (
                        <motion.div
                            key={m.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className={cn(
                                "flex w-full mb-4",
                                m.role === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            <div className={cn(
                                "flex max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                m.role === "user"
                                    ? "bg-indigo-600 text-white rounded-br-none"
                                    : "bg-zinc-800/80 text-zinc-200 rounded-bl-none border border-white/5"
                            )}>
                                {m.content}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isLoading && (
                    <div className="flex justify-start w-full">
                        <div className="flex items-center gap-1 bg-zinc-800/50 rounded-2xl px-4 py-3 rounded-bl-none">
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-white/5">
                <div className="relative flex items-center">
                    <input
                        className="flex-1 bg-zinc-900/50 border border-white/10 rounded-full px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent placeholder:text-zinc-600"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type a question..."
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="absolute right-2 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </Card>
    );
}
