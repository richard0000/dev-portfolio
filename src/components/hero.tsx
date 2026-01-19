"use client";

import { RESUME_DATA } from "@/data/resume";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Simple Avatar component locally defined if not using a library yet
// or we can just use img for now for simplicity in the first pass
function LocalAvatar({ src, alt, initials }: { src: string; alt: string; initials: string }) {
    return (
        <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-white/10 bg-muted flex items-center justify-center text-3xl font-bold text-muted-foreground">
            {src ? (
                <img src={src} alt={alt} className="object-cover h-full w-full" />
            ) : (
                <span>{initials}</span>
            )}
        </div>
    )
}

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
                        className="flex gap-4 pt-4"
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
                        <a
                            href={`mailto:${RESUME_DATA.contact.email}`}
                            className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Contact Me</span>
                        </a>
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
                        initials={RESUME_DATA.initials}
                    />
                </motion.div>
            </div>
        </Section>
    );
}
