"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { ArrowDown, Mail, Calendar, FileDown } from "lucide-react";
import { motion } from "framer-motion";

import { LocalAvatar } from "@/components/ui/LocalAvatar";
import Link from "next/link";

export function Hero() {
    return (
        <Section className="min-h-[80vh] flex flex-col justify-center">
            <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4">
                            {RESUME_DATA.name}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty">
                            {RESUME_DATA.summary}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4 pt-4"
                    >
                        {RESUME_DATA.contact.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 text-foreground"
                            >
                                <social.icon className="w-5 h-5" />
                                <span className="sr-only">{social.name}</span>
                            </a>
                        ))}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={`mailto:${RESUME_DATA.contact.email}`}
                                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                <span>Contact Me</span>
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-foreground border border-white/10 hover:border-white/20 transition-all font-medium flex items-center gap-2"
                            >
                                <FileDown className="w-5 h-5 text-zinc-400" />
                                <span>Download Resume</span>
                            </a>
                            <a
                                href="https://calendly.com/ricardo-gamarra/15min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all font-medium flex items-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                <span>Schedule a Meeting</span>
                            </a>
                            <Link
                                href="/playground"
                                className="px-6 py-3 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20 transition-all font-medium flex items-center gap-2 group"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                <span>Try AI Agent</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <LocalAvatar
                        src={RESUME_DATA.avatarUrl}
                        alt={RESUME_DATA.name}
                        className="h-24 w-24 md:h-32 md:w-32 border-4 shadow-2xl shadow-indigo-500/20"
                    />
                </motion.div>
            </div>
        </Section>
    );
}
